'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Error caught:', error);
  }, [error]);

  return (
    <div className="p-6 bg-red-50 border border-red-200 rounded">
      <h2 className="text-red-700 font-bold">Something went wrong!</h2>
      <p className="text-red-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
