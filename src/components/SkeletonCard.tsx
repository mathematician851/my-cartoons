/** @format */

export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300" />
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
      </div>
    </div>
  );
}
