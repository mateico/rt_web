'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="min-h-screen bg-secondary-50  text-white">
            {/* Hero Section */}
            <section className="relative rounded-lg bg-primary-700 flex flex-col md:flex-row items-center justify-between px-6 py-20 md:px-20 bg-gradient-to-r from-primary to-primary-dark">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Descubrí tu próximo destino
                    </h1>
                    <p className="mt-4 text-lg text-secondary-light">
                        Viajes únicos, precios especiales y nosotros contigo en cada paso.
                    </p>
                    <Link
                        href="/paquetes"
                        className="mt-6 inline-block rounded-lg bg-secondary-500  px-6 py-3 text-primary font-semibold shadow-md hover:bg-secondary-500 -800  transition"
                    >
                        Ver Paquetes
                    </Link>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 md:ml-8">
                    <Image
                        src="/hero-image.webp"
                        alt="Viaje soñado"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                </div>
            </section>

            {/* Destinations Preview */}
            <section className="py-16 bg-secondary-50 text-gray-800">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                    Destinos Populares
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: 'Punta Cana', image: '/punta-cana.jpg' },
                        { title: 'Cancún', image: '/cancun.jpg' },
                        { title: 'Riviera Maya', image: '/riviera.jpg' },
                        { title: 'Riviera 222', image: '/cancun.jpg' },
                    ].map((dest) => (
                        <div key={dest.title} className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
                            <Image
                                src={dest.image}
                                alt={dest.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 bg-secondary-500  text-primary text-center font-semibold text-lg">
                                {dest.title}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-secondary-500 rounded-lg py-16 px-6 md:px-20 text-primary text-center">
                <h3 className="text-3xl font-bold">¿Tenés dudas o querés reservar?</h3>
                <p className="mt-2 text-lg">Contactanos y organizamos tu viaje ideal ✈️</p>
                <Link
                    href="/about"
                    className="mt-6 inline-block rounded-md bg-primary-800  text-white px-5 py-3 font-medium hover:bg-primary-900  transition"
                >
                    Contactar ahora
                </Link>
            </section>
        </main>
    );
}
