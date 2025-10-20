'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="overflow-x-hidden min-h-screen bg-secondary-50  text-white">
            {/* Hero Section */}
            <section className="full-bleed relative flex items-center justify-center py-24 text-white overflow-hidden">
                {/* Background image */}
                <Image
                    src="/hero-image.webp"
                    alt="Viaje soñado"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700/100 to-primary-700/40" />

                {/* Text content */}
                <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-20 md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Descubrí tu próximo destino
                    </h1>
                    <p className="mt-4 text-lg text-secondary-light">
                        Viajes únicos, precios especiales <br/> y nosotros contigo en cada paso.
                    </p>
                    <Link
                        href="/paquetes"
                        className="mt-6 inline-block rounded-lg bg-secondary-500 text-neutral-800 px-6 py-3 text-primary font-semibold shadow-md hover:bg-secondary-600 transition"
                    >
                        Ver Paquetes
                    </Link>
                </div>
            </section>

            {/* Destinations Preview */}
            <section className="w-full max-w-screen-xl mx-auto py-16 bg-secondary-50  px-6 text-gray-800">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                    Destinos Populares
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: 'Punta Cana', image: '/punta-cana.jpg' },
                        { title: 'Cancún', image: '/cancun.jpg' },
                        { title: 'Riviera Maya', image: '/riviera.jpg' },
                        { title: 'Colombia', image: '/cancun.jpg' },
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
            <section className="full-bleed  bg-secondary-500 rounded-lg py-16 px-6 md:px-20 text-primary text-center text-primary-800">
                <h3 className="text-3xl font-bold">¿Tenés dudas o querés reservar?</h3>
                <p className="mt-2 text-lg">Contactanos y organizamos tu viaje ideal.</p>
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
