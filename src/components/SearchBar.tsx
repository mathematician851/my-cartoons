/** @format */

export default function SearchBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (s: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search cartoons..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="p-2 border rounded-lg w-full md:w-1/2"
    />
  );
}
