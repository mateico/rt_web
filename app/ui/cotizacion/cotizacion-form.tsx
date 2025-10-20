'use client';

import { useState, useRef } from 'react';
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

type Errors = {
    name?: string;
    contact?: string; // email or phone group error
    email?: string;
    phone?: string;
};

export default function SolicitarCotizacionForm() {
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Errors>({});
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget as HTMLFormElement);
        const name = String(fd.get('name') || '').trim();
        const email = String(fd.get('email') || '').trim();
        const phone = String(fd.get('phone') || '').trim();

        const newErrors: Errors = {};
        if (!name) newErrors.name = 'Ingresá tu nombre.';
        if (!email && !phone) {
            newErrors.contact = 'Ingresá al menos un dato de contacto: email o teléfono.';
            // opcional: marca individuales como ayuda visual
            if (!email) newErrors.email = 'Requerido si no ingresás teléfono.';
            if (!phone) newErrors.phone = 'Requerido si no ingresás email.';
        }

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            setSubmitted(false);
            // focus en el primer campo con error
            if (!name) formRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
            else if (!email) formRef.current?.querySelector<HTMLInputElement>('input[name="email"]')?.focus();
            else formRef.current?.querySelector<HTMLInputElement>('input[name="phone"]')?.focus();
            return;
        }

        // ✅ válido: limpiar errores y “enviar”
        setErrors({});
        // simulá envío
        setTimeout(() => setSubmitted(true), 300);
    };

    if (submitted) {
        return (
            <div className="rounded-lg shadow-md bg-secondary-30 p-8 text-center">
                <CheckCircleIcon className="mx-auto mb-3 h-12 w-12 text-green-500" />
                <h3 className="text-2xl font-semibold text-green-700">¡Cotización enviada con éxito!</h3>
                <p className="text-gray-600 mt-1">Te contactaremos pronto con más información.</p>
                <button
                    type="button"
                    onClick={() => {
                        setSubmitted(false);
                        formRef.current?.reset();
                    }}
                    className="mt-6 text-sm text-primary font-semibold underline hover:text-primary-800"
                >
                    Enviar otra cotización
                </button>
            </div>
        );
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg shadow-md space-y-4 bg-secondary-30 p-6">
            <h2 className="text-xl font-semibold">Solicitar una cotización</h2>

            {/* Mensaje de error general (si falta nombre o contacto) */}
            {(errors.name || errors.contact) && (
                <div
                    className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700"
                    role="alert"
                >
                    <ExclamationCircleIcon className="h-5 w-5 flex-shrink-0" />
                    <div>
                        <p className="font-medium">No pudimos enviar el formulario.</p>
                        <p>
                            {errors.name && '• ' + errors.name}
                            {errors.name && errors.contact ? ' ' : ''}
                            {errors.contact && '• ' + errors.contact}
                        </p>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nombre */}
                <div>
                    <input
                        name="name"
                        type="text"
                        placeholder="Nombre y apellido"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'err-name' : undefined}
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 ${
                            errors.name ? 'border-red-400 focus:ring-red-300' : 'focus:ring-primary'
                        }`}
                    />
                    {errors.name && <p id="err-name" className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'err-email' : undefined}
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 ${
                            errors.email ? 'border-red-400 focus:ring-red-300' : 'focus:ring-primary'
                        }`}
                    />
                    {errors.email && <p id="err-email" className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                {/* Teléfono */}
                <div>
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Teléfono"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'err-phone' : undefined}
                        className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 ${
                            errors.phone ? 'border-red-400 focus:ring-red-300' : 'focus:ring-primary'
                        }`}
                    />
                    {errors.phone && <p id="err-phone" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                {/* Resto de campos */}
                <input
                    name="destination"
                    type="text"
                    placeholder="Destino/s"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    name="departure"
                    type="date"
                    placeholder="Fecha de salida"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    name="return"
                    type="date"
                    placeholder="Fecha de regreso"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select name="department" className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Departamento</option>
                    <option value="montevideo">Montevideo</option>
                    <option value="canelones">Canelones</option>
                    <option value="maldonado">Maldonado</option>
                </select>
                <label className="flex items-center gap-2 text-sm">
                    <input name="flexible" type="checkbox" className="h-4 w-4 text-primary" />
                    Fechas flexibles
                </label>
                <input name="adults" type="number" placeholder="Adultos" className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
                <input name="minors" type="number" placeholder="Menores" className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div>
                <label className="block mb-1 text-sm font-medium">Observaciones</label>
                <textarea
                    name="notes"
                    rows={4}
                    placeholder="Información adicional"
                    className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="bg-primary-800 text-white px-6 py-2 rounded-md hover:bg-primary-900 transition-colors"
                >
                    Enviar cotización
                </button>
            </div>
        </form>
    );
}
