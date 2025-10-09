import {fetchFilteredInvoices} from '@/app/lib/data';
import TravelCard from '@/app/ui/paquetes/TravelCard';

const paquetes = [
    {
        title: 'Buenos Aires',
        subtitle: 'VÍA COLONIA',
        price: 164,
        image: '/buenos-aires.jpg',
        country: 'ARGENTINA',
        tag: 'TRAVEL FEST',
    },
    {
        title: 'Río de Janeiro',
        subtitle: 'VÍA PORTO ALEGRE',
        price: 289,
        image: '/rio.jpg',
        country: 'BRASIL',
        tag: 'VERANO',
    },
    {
        title: 'Santiago',
        subtitle: 'VÍA MONTEVIDEO',
        price: 210,
        image: '/santiago.jpg',
        country: 'CHILE',
        tag: 'DESCUENTO',
    },
    {
        title: 'Lima',
        subtitle: 'VÍA PANAMERICANA',
        price: 350,
        image: '/lima.jpg',
        country: 'PERÚ',
        tag: 'TOUR ANDES',
    },
];

export default async function InvoicesTable(
    {
        query,
        currentPage,
    }: {
        query: string;
        currentPage: number;
    }) {
    const invoices = await fetchFilteredInvoices(query, currentPage);

    return (
        <main className="p-6">
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
