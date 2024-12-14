export async function fetchPapers(country, year, page = 1, pageSize = 10) {
    const response = await fetch(
      `http://127.0.0.1:8000/papers?country=${encodeURIComponent(country)}&year=${year}&page=${page}&page_size=${pageSize}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch papers');
    }
    return response.json();
  }
  
  export async function downloadPapers(country, year, format = 'csv') {
    const response = await fetch(
      `http://127.0.0.1:8000/papers/download?country=${encodeURIComponent(country)}&year=${year}&format=${format}`
    );
    if (!response.ok) {
      throw new Error('Failed to download papers');
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `papers_${country}_${year}.${format}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }