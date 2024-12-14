import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPapers, downloadPapers } from './services/api';
import { FiDownload, FiArrowLeft } from 'react-icons/fi';
import LoadingSpinner from '../components/LoadingSpinner';
import logo1 from '../images/logo1.png';
import GoToTop from '../components/GoToTop';

function PapersPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const country = searchParams.get('country');
  const year = searchParams.get('year');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ['papers', country, year, page],
    queryFn: () => fetchPapers(country, year, page, pageSize)
  });

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="Homepage">
        <header className="header">
          <div className="logo-container">
            <img src={logo1} alt="Logo1" className="logo" />
          </div>
        </header>
        <div className="text-red-500 text-center mt-10">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="Homepage">
      <header className="header">
        <div className="logo-container">
          <img src={logo1} alt="Logo1" className="logo" />
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FiArrowLeft /> Back to Map
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => downloadPapers(country, year, 'csv')}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              <FiDownload /> Download CSV
            </button>
            <button
              onClick={() => downloadPapers(country, year, 'json')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <FiDownload /> Download JSON
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">
          Preprints from {country} ({year})
        </h1>

        <div className="space-y-4">
          {data?.papers.map((paper) => (
            <div key={paper.doi} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{paper.title}</h2>
              <p className="text-gray-600">DOI: {paper.doi}</p>
              <p className="text-gray-600">Authors: {paper.authors.join(', ')}</p>
            </div>
          ))}
        </div>

        {data?.total_count > pageSize && (
          <div className="flex justify-center gap-2 mt-6 mb-6">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {page} of {Math.ceil(data.total_count / pageSize)}
            </span>
            <button
              onClick={() => setPage(p => p + 1)}
              disabled={page >= Math.ceil(data.total_count / pageSize)}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </main>
      <GoToTop />
    </div>
  );
}

export default PapersPage;