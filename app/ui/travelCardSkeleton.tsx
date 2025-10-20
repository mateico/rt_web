import CardWrapper from '@/app/ui/CardWrapper';

export default function TravelCardSkeleton() {
    return (
        <CardWrapper>
            {/* Image section */}
            <div className="h-48 w-80 bg-gray-300 animate-pulse" />

            {/* Text section */}
            <div className="p-4 space-y-2 animate-pulse">
                <div className="flex justify-between text-xs">
                    <div className="h-3 w-16 bg-gray-200 rounded" />
                    <div className="h-4 w-14 bg-gray-200 rounded-full" />
                </div>
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-2/3 bg-gray-100 rounded" />
                <div className="flex justify-between items-end pt-2">
                    <div className="space-y-5">
                        <div className="h-3 w-10 bg-gray-100 rounded" />
                        <div className="h-5 w-24 bg-gray-200 rounded" />
                    </div>
                    <div className="h-5 w-16 bg-gray-200 rounded-full" />
                </div>
            </div>
        </CardWrapper>
    );
}
