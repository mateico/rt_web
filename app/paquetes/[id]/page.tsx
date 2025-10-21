import {fetchPaqueteById} from '@/app/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from "@/public/Button";

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;

    const [paquete] = await Promise.all([
        fetchPaqueteById(id),
    ]);

    if(!paquete) {
        notFound();
    }

    const { title, subtitle, price, image, country, tag } = paquete;

    return (
        <main className="max-w-4xl mx-auto space-y-6  px-6">
            {/* Image */}
            <div className="relative w-full h-64">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            {/* Info */}
            <div className="space-y-2">
                <span className="text-sm text-gray-500">{country}</span>
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-gray-600">{subtitle}</p>
                <span className="inline-block bg-secondary-400 text-secondary-dark rounded-full px-3 py-1 text-sm">{tag}</span>
                <p className="text-xl font-semibold pt-2">Precio desde USD {price}</p>
            </div>

            {/* Random Detail */}
            <div className="text-gray-700 leading-relaxed">
                <p>
                    Este paquete turístico incluye alojamiento de alta calidad, experiencias guiadas, y actividades seleccionadas para disfrutar al máximo del destino. Podrás conocer lugares emblemáticos, disfrutar de la gastronomía local y descansar con total tranquilidad.
                </p>
                <p className="mt-2">
                    Si deseas personalizar tu experiencia o agregar servicios adicionales, no dudes en comunicarte con nuestro equipo.
                </p>
            </div>

            {/* Contact Button */}
            <div>
                <Link
                    href={`/about`}
                >
                    <Button variant="primary">
                        Solicitar información
                    </Button>

                </Link>
            </div>
        </main>
    );
}