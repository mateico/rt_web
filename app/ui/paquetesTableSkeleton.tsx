import TravelCardSkeleton from "@/app/ui/travelCardSkeleton"

export default function PaquetesTableSkeleton() {
    return (
        <main className="pt-6  w-full">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <TravelCardSkeleton/>
                <TravelCardSkeleton/>
                <TravelCardSkeleton/>
                <TravelCardSkeleton/>
                <TravelCardSkeleton/>
                <TravelCardSkeleton/>
                <TravelCardSkeleton/>
                <TravelCardSkeleton/>
                <TravelCardSkeleton/>
                <TravelCardSkeleton/>
                <TravelCardSkeleton/>
            </div>
        </main>
    );
}