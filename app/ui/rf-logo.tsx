import clsx from 'clsx';

export default function RFLogo({ className }: { className?: string }) {
    return (
        <>
            {/* Small logo: visible until large screens */}
            <img
                src="/rt_logo_tr.webp"
                alt="Rufina Travel"
                className={clsx('block lg:hidden', className)}
            />

            {/* Large logo: visible from large screens up */}
            <img
                src="/rufina_title_logo_tr.webp"
                alt="Rufina Travel"
                className={clsx('hidden lg:block', className)}
            />
        </>
    );
}