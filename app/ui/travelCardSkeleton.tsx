export default function TravelCardSkeleton() {
    return (
        <div className="rounded-lg overflow-hidden shadow-md bg-white animate-pulse">
            {/* Image section */}
            <div className="h-48 bg-gray-300 w-full" />

            {/* Text section */}
            <div className="p-4 space-y-3">
                <div className="flex justify-between text-xs text-gray-500">
                    <div className="h-4 w-16 bg-gray-300 rounded" />
                    <div className="h-4 w-12 bg-gray-300 rounded-full" />
                </div>
                <div className="h-5 w-3/4 bg-gray-300 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 rounded" />

                <div className="flex justify-between items-end pt-2">
                    <div className="space-y-1">
                        <div className="h-3 w-10 bg-gray-200 rounded" />
                        <div className="h-5 w-20 bg-gray-300 rounded" />
                    </div>
                    <div className="h-5 w-14 bg-gray-300 rounded-full" />
                </div>
            </div>
        </div>
    );
}
