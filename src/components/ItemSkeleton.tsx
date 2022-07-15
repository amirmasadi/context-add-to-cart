export default function ItemSkeleton() {
  return (
    <div className="border border-slate-300 rounded-md p-4 w-full">
      <div className="animate-pulse flex flex-col space-x-4">
        <div className="rounded-lg bg-slate-700 h-64 w-full"></div>
        <div className="flex-1 py-5 space-y-3">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
