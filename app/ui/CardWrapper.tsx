export default function CardWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="block w-full rounded-lg overflow-hidden shadow-md bg-white">
            {children}
        </div>
    );
}