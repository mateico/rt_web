import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Page() {
    return (
        <main className="min-h-screen bg-secondary-50 px-6 py-16 md:px-12 lg:px-24">
            {/* Encabezado */}
            <section className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                    Conocé Rufina Travel
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Somos una agencia de viajes comprometida con hacer de cada destino una experiencia inolvidable. Planificamos, personalizamos y te acompañamos en cada paso.
                </p>
            </section>

            {/* Características */}
            <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                    {
                        title: 'Experiencias a medida',
                        desc: 'Creamos itinerarios personalizados según tus intereses, presupuesto y sueños de viaje.',
                    },
                    {
                        title: 'Equipo apasionado',
                        desc: 'Nuestro equipo está compuesto por expertos viajeros que entienden lo que necesitás.',
                    },
                    {
                        title: 'Atención 24/7',
                        desc: 'Estamos disponibles antes, durante y después de tu viaje. Vos disfrutá, nosotros nos encargamos.',
                    },
                ].map(({ title, desc }) => (
                    <div key={title} className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-6 text-center">
                        <h2 className="text-xl font-semibold text-primary mb-3">{title}</h2>
                        <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                ))}
            </section>

            {/* Bloque de contacto moderno */}
            <section className="mt-24 max-w-6xl mx-auto rounded-3xl bg-primary-800  text-white px-8 py-12 shadow-xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Texto de contacto */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para viajar?</h2>
                        <p className="text-white/90 mb-6 text-lg">
                            Escribinos o llamanos para planear tu próxima aventura. Nuestro equipo te responde enseguida.
                        </p>

                        <div className="space-y-4 text-white/90 text-sm md:text-base">
                            <p className="flex items-center gap-2">
                                <PhoneIcon className="w-5 h-5" />
                                +598 99 123 456
                            </p>
                            <p className="flex items-center gap-2">
                                <EnvelopeIcon className="w-5 h-5" />
                                contacto@rufinatravel.com
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPinIcon className="w-5 h-5" />
                                Av. Libertador 1234, Montevideo
                            </p>
                        </div>
                    </div>

                    {/* Call-to-action */}
                    <div className="text-center md:text-right">
                        <Link
                            href="/paquetes"
                            className="inline-block rounded-lg bg-secondary-500  text-primary font-semibold px-6 py-3 text-lg shadow hover:bg-secondary-500 -800  transition"
                        >
                            Ver Paquetes
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
