import clsx from 'clsx';

export default function RFLogo({ className }: { className?: string }) {
  return <>

      {/* Mobile logo */}
      <img
          src="/rt_logo_tr.webp"
          alt="Rufina Travel"
          className={clsx('block md:hidden', className)} />

      {/* Desktop logo */}
      <img
          src="/rufina_title_logo_tr.webp"
          alt="Rufina Travel"
          className={clsx('hidden md:block', className)} />
  </>;
}
