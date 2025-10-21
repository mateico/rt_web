export type Cotizacion = {
    nombre: string;
    email: string;
    telefono: string;
    destinos: string;
    fecha_salida: string;
    fecha_regreso: string;
    departamento: string;
    fechas_flexibles: boolean;
    adultos: number;
    menores: number;
    observaciones: string;
};

export type PaquetesTable = {
    id: string;
    title: string;
    subtitle: string;
    price:number;
    image: string;
    country: string;
    tag: string;
}