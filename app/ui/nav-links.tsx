'use client';

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    {name: 'Home', href: '/start', icon: HomeIcon},
    {name: 'Paquetes', href: '/paquetes', icon: DocumentDuplicateIcon,},
    {name: 'Cotizaciones', href: '/cotizacion', icon: UserGroupIcon},
    {name: 'Nosotros', href: '/about', icon: UserGroupIcon},
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-secondary-30 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
                            'transform transition-transform duration-200 hover:scale-110', // ✅ new
                            {
                                'bg-sky-900 text-neutral-200': pathname === link.href,
                                'hover:bg-primary-100': pathname !== link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6 max-[935px]:hidden"/>
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}