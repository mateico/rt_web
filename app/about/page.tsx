export default function Page() {
    return (
        <main className="min-h-screen bg-white px-6 py-16 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                    Discover the World with Us
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    We are a team of explorers, planners, and dream-makers helping travelers like you create unforgettable journeys.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">Tailored Experiences</h2>
                    <p className="text-gray-600 text-sm">
                        We design every trip to match your preferences and travel goals — from solo adventures to family vacations.
                    </p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">Trusted Partners</h2>
                    <p className="text-gray-600 text-sm">
                        We work with handpicked local guides, hotels, and tour providers to ensure every moment is smooth and safe.
                    </p>
                </div>
                <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
                    <h2 className="text-xl font-semibold text-blue-500 mb-2">Global Destinations</h2>
                    <p className="text-gray-600 text-sm">
                        Whether you're dreaming of the beaches of Bali or the streets of Paris, we’ll get you there with style.
                    </p>
                </div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto text-center">
                <p className="text-gray-700 text-base md:text-lg">
                    Our mission is simple: to make travel easy, memorable, and tailored to you. We’re here to turn your travel dreams into reality.
                </p>
            </div>
        </main>
    );
}

