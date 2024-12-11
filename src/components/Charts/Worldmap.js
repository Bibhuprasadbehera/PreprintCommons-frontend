import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const ChoroplethMap = () => {
  const mapRef = useRef(null);
  const tooltipRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Country name mappings for data normalization
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
    'Tanzania, United Republic of': 'Tanzania'
  };

  const normalizeCountryName = (name) => {
    if (!name) return '';
    return countryNameMapping[name] || name;
  };

  useEffect(() => {
    const createMap = async () => {
      try {
        const width = 960;
        const marginTop = 50;
        const height = width / 2 + marginTop;

        // Clear previous content
        d3.select(mapRef.current).selectAll('*').remove();

        // Fetch map and data
        const [world, responseData] = await Promise.all([
          d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'),
          d3.json('http://127.0.0.1:8000/country-data')
        ]);

        if (!world || !responseData?.data) {
          throw new Error('Failed to load required data');
        }

        const countries = topojson.feature(world, world.objects.countries);
        const countryData = responseData.data.map(d => ({
          ...d,
          country: normalizeCountryName(d.country)
        }));

        // Create SVG
        const svg = d3.select(mapRef.current)
          .append('svg')
          .attr('viewBox', [0, 0, width, height])
          .attr('style', 'max-width: 100%; height: auto;');

        // Set up projection
        const projection = d3.geoEqualEarth()
          .fitExtent([[2, marginTop + 2], [width - 2, height - 2]], { type: 'Sphere' });
        const path = d3.geoPath(projection);

        // Create base map elements
        svg.append('defs').append('path')
          .attr('id', 'outline')
          .attr('d', path({ type: 'Sphere' }));

        svg.append('use')
          .attr('href', '#outline')
          .attr('fill', '#f8f9fa');

        svg.append('use')
          .attr('href', '#outline')
          .attr('fill', 'none')
          .attr('stroke', '#dee2e6');

        // Create color scale
        const color = d3.scaleSequential()
          .interpolator(d3.interpolateYlGnBu);

        const addLegend = (maxValue) => {
          svg.selectAll('.legend-group').remove();

          const legendWidth = 260;
          const legendHeight = 12;
          const legendGroup = svg.append('g')
            .attr('class', 'legend-group')
            .attr('transform', `translate(${width - legendWidth - 20}, 20)`);

          const legendScale = d3.scaleLinear()
            .domain([0, maxValue])
            .range([0, legendWidth]);

          const legendAxis = d3.axisBottom(legendScale)
            .ticks(5)
            .tickFormat(d3.format(',.0f'));

          const gradient = legendGroup.append('defs')
            .append('linearGradient')
            .attr('id', 'legend-gradient')
            .attr('x1', '0%')
            .attr('x2', '100%')
            .attr('y1', '0%')
            .attr('y2', '0%');

          const colors = d3.quantize(d3.interpolateYlGnBu, 10);
          colors.forEach((color, i) => {
            gradient.append('stop')
              .attr('offset', `${(i / (colors.length - 1)) * 100}%`)
              .attr('stop-color', color);
          });

          legendGroup.append('rect')
            .attr('width', legendWidth)
            .attr('height', legendHeight)
            .style('fill', 'url(#legend-gradient)');

          legendGroup.append('g')
            .attr('transform', `translate(0, ${legendHeight})`)
            .call(legendAxis);

          legendGroup.append('text')
            .attr('x', legendWidth / 2)
            .attr('y', -6)
            .attr('text-anchor', 'middle')
            .style('font-size', '12px')
            .text('Number of Preprints');
        };

        const updateMap = (year) => {
          const filteredData = year === 'all'
            ? countryData
            : countryData.filter(d => d.year === +year);

          const countryTotals = new Map();
          filteredData.forEach(d => {
            const current = countryTotals.get(d.country) || 0;
            countryTotals.set(d.country, current + d.count);
          });

          const maxCount = Math.max(...countryTotals.values(), 1);
          color.domain([0, maxCount]);

          addLegend(maxCount);

          svg.selectAll('.country')
            .data(countries.features)
            .join('path')
            .attr('class', 'country')
            .attr('fill', d => color(countryTotals.get(normalizeCountryName(d.properties.name)) || 0))
            .attr('d', path)
            .attr('stroke', 'white')
            .attr('stroke-width', 0.5)
            .on('mouseover', (event, d) => {
              const count = countryTotals.get(normalizeCountryName(d.properties.name)) || 0;
              d3.select(tooltipRef.current)
                .style('opacity', 1)
                .html(`
                  <strong>${d.properties.name}</strong><br>
                  Preprints: ${count.toLocaleString()}
                `)
                .style('left', `${event.pageX + 10}px`)
                .style('top', `${event.pageY + 10}px`);
            })
            .on('mousemove', (event) => {
              d3.select(tooltipRef.current)
                .style('left', `${event.pageX + 10}px`)
                .style('top', `${event.pageY + 10}px`);
            })
            .on('mouseout', () => {
              d3.select(tooltipRef.current).style('opacity', 0);
            });
        };

        // Get unique years for the filter
        const years = Array.from(new Set(countryData.map(d => d.year))).filter(Boolean);
        years.sort((a, b) => a - b);

        setSelectedYear('all');
        updateMap('all');
        setLoading(false);

      } catch (err) {
        console.error('Error creating map:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    createMap();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Global Preprint Distribution Map
      </h1>
      
      <div className="mb-4 text-center">
        <label htmlFor="year-filter" className="mr-2">
          Select Year:
        </label>
        <select
          id="year-filter"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm"
        >
          <option value="all">All Years</option>
          {/* Years will be populated dynamically */}
        </select>
      </div>

      {loading && (
        <div className="text-center py-8 text-gray-600">
          Loading map data...
        </div>
      )}

      {error && (
        <div className="text-center py-8 text-red-600">
          <p>Error loading map data. Please try again later.</p>
          <p>Details: {error}</p>
        </div>
      )}

      <div ref={mapRef} className="flex justify-center" />
      
      <div
        ref={tooltipRef}
        className="absolute bg-white px-3 py-2 border border-gray-200 rounded pointer-events-none opacity-0 shadow-sm text-sm"
        style={{ zIndex: 1000 }}
      />
    </div>
  );
};

export default ChoroplethMap;