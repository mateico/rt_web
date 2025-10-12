//import {CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton} from "@/app/ui/skeletons";
import TravelCardSkeleton from "@/app/ui/travelCardSkeleton"

const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function MySkeleton() {
    return (
        <>
            <div
                className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <TravelCardSkeleton />
                <TravelCardSkeleton />
            </div>

        </>
    );
}