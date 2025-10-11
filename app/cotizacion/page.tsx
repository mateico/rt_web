import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import SolicitarCotizacionForm from '@/app/ui/cotizacion/cotizacion-form';


export default async function Page() {
    const customers = await fetchCustomers();

    return (

    <main className="max-w-3xl mx-auto py-10 px-4">
        <SolicitarCotizacionForm />
    </main>
    );
}