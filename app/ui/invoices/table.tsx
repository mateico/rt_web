import {fetchFilteredPaquetes} from '@/app/lib/data';
import TravelCard from '@/app/ui/paquetes/TravelCard';

export default async function InvoicesTable(
    {
        query
    }: {
        query: string;
    }) {
    const paquetes = await fetchFilteredPaquetes(query);

    return (
        <main className="pt-6">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paquetes.map((p, index) => (
                    <TravelCard
                        key={index}
                        title={p.title}
                        subtitle={p.subtitle}
                        price={p.price}
                        image={p.image}
                        country={p.country}
                        tag={p.tag}
                    />
                ))}
            </div>
        </main>
    );
}
