'use client';

export default function SolicitarCotizacionForm() {
    return (
        <form className="rounded-lg bg-white shadow-md p-6 space-y-4">
            <h2 className="text-xl font-semibold">Solicitar una cotización</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Nombre y apellido"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="tel"
                    placeholder="Teléfono"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="text"
                    placeholder="Destino/s"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="date"
                    placeholder="Fecha de salida"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="date"
                    placeholder="Fecha de regreso"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Departamento</option>
                    <option value="montevideo">Montevideo</option>
                    <option value="canelones">Canelones</option>
                    <option value="maldonado">Maldonado</option>
                </select>
                <div className="flex items-center gap-2">
                    <label className="text-sm">Fechas flexibles</label>
                    <input type="checkbox" className="toggle toggle-primary" />
                </div>
                <input
                    type="number"
                    placeholder="Adultos"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="number"
                    placeholder="Menores"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            <div>
                <label className="block mb-1 text-sm font-medium">Observaciones</label>
                <textarea
                    rows={4}
                    placeholder="Información adicional"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
                >
                    Enviar cotización
                </button>
            </div>
        </form>
    );
}
