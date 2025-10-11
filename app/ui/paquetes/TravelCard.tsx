import Image from 'next/image';

type TravelCardProps = {
    title: string;
    subtitle: string;
    price: number;
    image: string;
    country: string;
    tag: string;
};

export default function TravelCard({
                                       title,
                                       subtitle,
                                       price,
                                       image,
                                       country,
                                       tag,
                                   }: TravelCardProps) {
    return (
        <div className="rounded-lg overflow-hidden shadow-md bg-white">
            {/* Image section */}
            <div className="h-48 relative">
                <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={480}
                    className="h-48 w-full object-cover rounded-t-lg"
                />

            </div>

            {/* Text section */}
            <div className="p-4 space-y-1">
                <div className="flex justify-between text-xs text-gray-500">
                    <span>PAQUETE</span>
                    <span className="bg-primary-400   text-primary-dark rounded-full px-2 py-0.5">{country}</span>
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{subtitle}</p>
                <div className="flex justify-between items-end pt-2">
                    <div className="text-sm">
                        <p className="text-gray-500">desde</p>
                        <p className="font-bold text-lg">USD {price}</p>
                    </div>
                    <span className="bg-secondary-500 -400  text-secondary-dark rounded-full px-2 py-0.5 text-xs">{tag}</span>
                </div>
            </div>
        </div>
    );
}
