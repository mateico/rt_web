import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { Suspense } from 'react';
import PaquetesTableSkeleton from "@/app/ui/paquetesTableSkeleton";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div className="w-full">
            <div className="flex items-center justify-between gap-2">
                <Search placeholder="Buscar destino..."/>
            </div>
            {<Suspense key={query + currentPage} fallback={<PaquetesTableSkeleton/>}>
                <Table query={query}/>
            </Suspense>}
        </div>
    );
}