// app/ui/CardWrapper.tsx
export default function CardWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="
        relative rounded-lg overflow-hidden bg-white shadow-md
        transition-all duration-300 ease-out will-change-transform
        group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-2xl
        group-hover:z-10
      "
        >
            {children}
        </div>
    );
}
