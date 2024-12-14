import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

const PreprintMap = () => {
  const mapRef = useRef(false);

  useEffect(() => {
    if (mapRef.current) return; // Prevent duplicate initialization
    mapRef.current = true;

    async function createChoropleth() {
      const width = 1080;
      const marginTop = 50;
      const height = width / 2 + marginTop;

      const countryNameMapping = {
        'United States of America': 'USA',
        'United States': 'USA',
        'US': 'USA',
        'United Kingdom': 'UK',
        'Great Britain': 'UK',
        'Czech Republic': 'Czechia',
        'Korea, Republic of': 'South Korea',
        'Republic of Korea': 'South Korea',
        'Democratic Republic of the Congo': 'Congo',
        'Russian Federation': 'Russia',
        'Taiwan, Province of China': 'Taiwan',
        'Iran, Islamic Republic of': 'Iran',
        'Syrian Arab Republic': 'Syria',
        'Venezuela, Bolivarian Republic of': 'Venezuela',
        'Vietnam': 'Viet Nam',
        'Tanzania, United Republic of': 'Tanzania'// ... Country name mappings ...
      };

      function normalizeCountryName(name) {
        return countryNameMapping[name] || name;
      }

      try {
        const [world, responseData] = await Promise.all([
          d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json"),
          d3.json("http://127.0.0.1:8000/country-data"),
        ]);

        if (!world || !responseData?.data) {
          throw new Error("Failed to load required data");
        }

        const countries = topojson.feature(world, world.objects.countries);
        const countryData = responseData.data.map((d) => ({
          ...d,
          country: normalizeCountryName(d.country),
        }));

        const svg = d3
          .select("#map-container")
          .append("svg")
          .attr("viewBox", [0, 0, width, height])
          .attr("style", "max-width: 100%; height: auto;");

        const projection = d3
          .geoEqualEarth()
          .fitExtent(
            [
              [2, marginTop + 2],
              [width - 2, height - 2],
            ],
            { type: "Sphere" }
          );
        const path = d3.geoPath(projection);

        svg
          .append("defs")
          .append("path")
          .attr("id", "outline")
          .attr("d", path({ type: "Sphere" }));

        svg
          .append("use")
          .attr("href", "#outline")
          .attr("fill", "#4287f5");

        svg
          .append("use")
          .attr("href", "#outline")
          .attr("fill", "none")
          .attr("stroke", "#dee2e6");

        const tooltip = d3
          .select("#tooltip")
          .style("position", "absolute")
          .style("background", "rgba(0, 0, 0, 0.7)")
          .style("color", "#fff")
          .style("padding", "8px")
          .style("border-radius", "4px")
          .style("pointer-events", "none")
          .style("opacity", 0);

        const color = d3.scaleSequential().interpolator(d3.interpolateWarm);

        function addLegend(maxValue) {
          svg.selectAll(".legend-group").remove();

          const legendWidth = 260;
          const legendHeight = 30;
          const legendGroup = svg
            .append("g")
            .attr("class", "legend-group")
            .attr("transform", `translate(${width - legendWidth - 20}, 20)`);
              
            
            const graticule = d3.geoGraticule();

              svg.append("path")
                .datum(graticule)
                .attr("class", "graticule")
                .attr("d", path)
                .attr("fill", "none")
                .attr("stroke", "#ccc")
                .attr("stroke-width", 0.5);
          const legendScale = d3.scaleLinear().domain([0, maxValue]).range([0, legendWidth]);

          const legendAxis = d3.axisBottom(legendScale).ticks(5).tickFormat(d3.format(",.0f"));

          const gradient = legendGroup
            .append("defs")
            .append("linearGradient")
            .attr("id", "legend-gradient")
            .attr("x1", "0%")
            .attr("x2", "100%")
            .attr("y1", "0%")
            .attr("y2", "0%");

          const colors = d3.quantize(d3.interpolateWarm, 10);
          colors.forEach((color, i) => {
            gradient
              .append("stop")
              .attr("offset", `${(i / (colors.length - 1)) * 100}%`)
              .attr("stop-color", color);
          });

          legendGroup
            .append("rect")
            .attr("width", legendWidth)
            .attr("height", legendHeight)
            .style("fill", "url(#legend-gradient)");

          legendGroup
            .append("g")
            .attr("transform", `translate(0, ${legendHeight})`)
            .call(legendAxis);

          legendGroup
            .append("text")
            .attr("x", legendWidth / 2)
            .attr("y", -6)
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .text("Number of Preprints");
        }

        function updateMap(selectedYear = "all") {
          const filteredData =
            selectedYear === "all"
              ? countryData
              : countryData.filter((d) => d.year === +selectedYear);

          const countryTotals = new Map();
          filteredData.forEach((d) => {
            const current = countryTotals.get(d.country) || 0;
            countryTotals.set(d.country, current + d.count);
          });

          const maxCount = Math.max(...countryTotals.values(), 1);
          color.domain([0, maxCount]);

          addLegend(maxCount);

          svg
            .selectAll(".country")
            .data(countries.features)
            .join("path")
            .attr("class", "country")
            .attr("fill", (d) =>
              color(
                countryTotals.get(normalizeCountryName(d.properties.name)) || 0
              )
            )
            .attr("d", path)
            .attr("stroke", "white")
            .attr("stroke-width", 0.5)
            .on("mouseover", function (event, d) {
              const count =
                countryTotals.get(normalizeCountryName(d.properties.name)) || 0;
              tooltip
                .style("opacity", 1)
                .html(
                  `<strong>${d.properties.name}</strong><br>Preprints: ${count.toLocaleString()}`
                )
                .style("left", `${event.pageX + 10}px`)
                .style("top", `${event.pageY + 10}px`);
            })
            // Inside your updateMap function, modify the country selection to include click handling:
            .on("click", function(event, d) {
              const countryName = normalizeCountryName(d.properties.name);
              const selectedYear = d3.select("#year-filter").property("value");
              const searchParams = new URLSearchParams({
                country: countryName,
                year: selectedYear === "all" ? new Date().getFullYear() : selectedYear
              });
              window.location.href = `/papers?${searchParams.toString()}`;
            })
            .on("mousemove", function (event) {
              tooltip
                .style("left", `${event.pageX + 10}px`)
                .style("top", `${event.pageY + 10}px`);
            })
            .on("mouseout", () => tooltip.style("opacity", 0));
            

        }

        const years = Array.from(new Set(countryData.map((d) => d.year)))
          .filter(Boolean)
          .sort((a, b) => a - b);

        const yearFilter = d3.select("#year-filter");
        years.forEach((year) => {
          yearFilter
            .append("option")
            .attr("value", year)
            .text(year);
        });

        yearFilter.on("change", (event) => {
          updateMap(event.target.value);
        });

        updateMap();
      } catch (error) {
        console.error("Error creating map:", error);
        d3.select("#map-container").html(
          `<div class="error">Error loading map data. Details: ${error.message}</div>`
        );
      }
    }

    createChoropleth();
  }, []);

  return (
    <div>
      <h1>Global Preprint Distribution Map</h1>
      <div id="map-container">
        <div className="loading"></div>
        <div className="controls">
          <label htmlFor="year-filter">Select Year:</label>
          <select id="year-filter">
            <option value="all">All Years</option>
          </select>
        </div>
      </div>
      <div id="tooltip" style={{ position: "absolute", opacity: 0 }}></div>
    </div>
  );
};

export default PreprintMap;
