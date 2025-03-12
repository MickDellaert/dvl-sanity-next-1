export default function SeriesSkeleton() {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-20 md:grid-cols-2">
      <div className="aspect-square w-4/5 animate-pulse bg-gray-200 md:w-full"></div>
      <div className="aspect-square w-4/5 animate-pulse bg-gray-200 md:w-full"></div>
      <div className="hidden aspect-square w-full animate-pulse bg-gray-200 md:block"></div>
      <div className="hidden aspect-square w-full animate-pulse bg-gray-200 md:block"></div>
    </div>
  );
}
