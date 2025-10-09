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
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
                <span className="absolute top-2 left-2 rounded-full bg-white bg-opacity-80 p-2">
          <img src="/icon-suitcase.svg" alt="icon" className="h-6 w-6" />
        </span>
            </div>

            {/* Text section */}
            <div className="p-4 space-y-1">
                <div className="flex justify-between text-xs text-gray-500">
                    <span>PAQUETE</span>
                    <span className="bg-blue-200 text-blue-700 rounded-full px-2 py-0.5">{country}</span>
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-500">{subtitle}</p>
                <div className="flex justify-between items-end pt-2">
                    <div className="text-sm">
                        <p className="text-gray-500">desde</p>
                        <p className="font-bold text-lg">USD {price}</p>
                    </div>
                    <span className="bg-red-200 text-red-700 rounded-full px-2 py-0.5 text-xs">{tag}</span>
                </div>
            </div>
        </div>
    );
}
