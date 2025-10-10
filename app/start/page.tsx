'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="min-h-screen bg-primary text-white">
            {/* Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center justify-between px-6 py-20 md:px-20 bg-gradient-to-r from-primary to-primary-dark">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Descubrí tu próximo destino
                    </h1>
                    <p className="mt-4 text-lg text-secondary-light">
                        Viajes únicos, precios especiales y la atención que te merecés.
                    </p>
                    <Link
                        href="/paquetes"
                        className="mt-6 inline-block rounded-lg bg-secondary px-6 py-3 text-primary font-semibold shadow-md hover:bg-secondary-dark transition"
                    >
                        Ver Paquetes
                    </Link>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <Image
                        src="/hero-image.png"
                        alt="Viaje soñado"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                </div>
            </section>

            {/* Destinations Preview */}
            <section className="px-6 py-16 md:px-20 bg-white text-gray-800">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                    Destinos Populares
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Punta Cana', image: '/punta-cana.jpg' },
                        { title: 'Cancún', image: '/cancun.jpg' },
                        { title: 'Riviera Maya', image: '/riviera.jpg' },
                    ].map((dest) => (
                        <div key={dest.title} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                            <Image
                                src={dest.image}
                                alt={dest.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 bg-secondary text-primary text-center font-semibold text-lg">
                                {dest.title}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-secondary py-16 px-6 md:px-20 text-primary text-center">
                <h3 className="text-3xl font-bold">¿Tenés dudas o querés reservar?</h3>
                <p className="mt-2 text-lg">Contactanos y organizamos tu viaje ideal ✈️</p>
                <Link
                    href="/contacto"
                    className="mt-6 inline-block rounded-md bg-primary text-white px-5 py-3 font-medium hover:bg-primary-dark transition"
                >
                    Contactar ahora
                </Link>
            </section>
        </main>
    );
}
