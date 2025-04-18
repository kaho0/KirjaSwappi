"use client";

import { useState, useEffect } from "react";
import BookDetails from "../components/pages/BookDetails";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import ErrorMessage from "../components/ui/ErrorMessage";
import { fetchBookData } from "../utils/api";

export default function Home() {
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [swapType, setSwapType] = useState("SwapByBooks");

  useEffect(() => {
    const getBookData = async () => {
      try {
        setLoading(true);
        const data = await fetchBookData(swapType);
        console.log(data);
        setBookData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching book data:", err);
        setError("Failed to load book data. Please try again later.");
        setLoading(false);
      }
    };

    getBookData();
  }, [swapType]);

  return (
    <main className="min-h-screen bg-gray-50">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div className="flex items-center justify-center min-h-screen">
          <ErrorMessage message={error} />
        </div>
      ) : (
        bookData && <BookDetails book={bookData} />
      )}
    </main>
  );
}
