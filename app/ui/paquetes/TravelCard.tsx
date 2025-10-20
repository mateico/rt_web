import Image from 'next/image';
import Link from 'next/link';
import CardWrapper from '@/app/ui/CardWrapper';

type TravelCardProps = {
    id: string;
    title: string;
    subtitle: string;
    price: number;
    image: string;
    country: string;
    tag: string;
};

export default function TravelCard({
                                       id, title, subtitle, price, image, country, tag,
                                   }: TravelCardProps) {
    return (
        <Link
            href={`/paquetes/${id}`}
            className="group block w-full"   // 👈 importante: group
        >
            <CardWrapper>
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={480}
                        className="
              h-48 w-full object-cover rounded-t-lg
              transition-transform duration-300 ease-out
              group-hover:scale-110   /* 👈 zoom de la imagen */
            "
                    />
                    {/* (Opcional) brillo sutil en hover */}
                    <div
                        className="
              pointer-events-none absolute inset-0 opacity-0
              transition-opacity duration-300
              group-hover:opacity-10 bg-white
            "
                    />
                </div>

                {/* Texto */}
                <div className="p-4 space-y-1">
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>PAQUETE</span>
                        <span className="bg-primary-500 text-neutral-100 rounded-full px-2 py-0.5">
              {country}
            </span>
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-500">{subtitle}</p>
                    <div className="flex justify-between items-end pt-2">
                        <div className="text-sm">
                            <p className="text-gray-500">desde</p>
                            <p className="font-bold text-lg">USD {price}</p>
                        </div>
                        <span className="bg-secondary-400 text-secondary-dark rounded-full px-2 py-0.5 text-xs">
              {tag}
            </span>
                    </div>
                </div>
            </CardWrapper>
        </Link>
    );
}
