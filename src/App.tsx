/** @format */

import { useEffect, useState } from "react";
import { fetchCartoons } from "./api/cartoons";
import type { Cartoon } from "./api/cartoons";
import CartoonsGrid from "./components/CartoonsGrid";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [cartoons, setCartoons] = useState<Cartoon[]>([]);
  const [filtered, setFiltered] = useState<Cartoon[]>([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Cartoon | null>(null);

  const perPage = 8;

  useEffect(() => {
    fetchCartoons()
      .then((data) => {
        setCartoons(data);
        setFiltered(data);
      })
      .catch(() => setError("Failed to load cartoons."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let data = cartoons;

    // search filter
    if (search) {
      data = data.filter((c) =>
        c.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // genre filter (supports multiple genres per cartoon)
    if (genre !== "All") {
      data = data.filter((c) =>
        (Array.isArray(c.genre) ? c.genre.join(",") : c.genre)
          .split(",")
          .map((g) => g.trim())
          .includes(genre)
      );
    }
    setFiltered(data);
    setPage(1); // reset to page 1 on filter change
  }, [search, genre, cartoons]);

  if (loading)
    return (
      <p className="p-4 text-center mt-5">Please wait, loading cartoons...</p>
    );
  if (error) return <p className="p-4 text-red-500 text-center">{error}</p>;

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  // collect unique genres
  const genres = [
    "All",
    ...new Set(
      cartoons.flatMap((c) =>
        (Array.isArray(c.genre) ? c.genre.join(",") : c.genre)
          .split(",")
          .map((g) => g.trim())
      )
    ),
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Cartoons Hub</h1>

      {/* Search + Genre Filter */}
      <div className="flex gap-4 items-center">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          {genres.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* Grid */}
      <CartoonsGrid cartoons={paginated} onSelect={setSelected} />

      {/* Pagination */}
      <div className="flex justify-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-3 py-1">
          {page} / {totalPages || 1}
        </span>
        <button
          disabled={page === totalPages || totalPages === 0}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl max-w-lg p-6 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-2xl font-bold mt-4">{selected.title}</h2>
            <p className="text-gray-600 italic">{selected.genre}</p>
            {/* <p className="mt-2">{selected.description ||""}</p> */}
          </div>
        </div>
      )}
    </div>
  );
}
