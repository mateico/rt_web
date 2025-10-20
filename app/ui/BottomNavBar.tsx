'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    HomeIcon as HomeOutline,
    BriefcaseIcon as BriefcaseOutline,
    CurrencyDollarIcon as DollarOutline,
    UserGroupIcon as UserOutline,
} from '@heroicons/react/24/outline';
import {
    HomeIcon as HomeSolid,
    BriefcaseIcon as BriefcaseSolid,
    CurrencyDollarIcon as DollarSolid,
    UserGroupIcon as UserSolid,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import clsx from 'clsx';
import ColorfullBar from '@/app/ui/colorfullBar';

const LogoSlot = () => (
    <div className="flex justify-center items-center">
        <Image
            src="/rt_logo_tr.webp"
            alt="Rufina Travel"
            width={48}
            height={28}
        />
    </div>
);

const navItems = [
    { name: 'Inicio', href: '/start', outline: HomeOutline, solid: HomeSolid },
    { name: 'Paquetes', href: '/paquetes', outline: BriefcaseOutline, solid: BriefcaseSolid },
    { name: 'Logo', href: '', icon: LogoSlot },
    { name: 'Cotizaciones', href: '/cotizacion', outline: DollarOutline, solid: DollarSolid },
    { name: 'Nosotros', href: '/about', outline: UserOutline, solid: UserSolid },
];

export default function BottomNavBar() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            {/* Color bar on top */}
            <ColorfullBar />

            {/* Bottom nav bar */}
            <nav className="flex justify-between items-center bg-secondary-30 border-t border-gray-200 px-2 py-2">
                {navItems.map((item) => {
                    //const Icon = item.icon;

                    if (item.name === 'Logo') {
                        const Icon = item.icon as React.ElementType;
                        return (
                            <div key="logo" className="flex flex-1 justify-center items-center">
                                <Icon />
                            </div>
                        );
                    }

                    const Icon = (pathname === item.href ? item.solid : item.outline) as React.ElementType;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={clsx(
                                'flex flex-col items-center justify-center flex-1 px-1 py-1 rounded-md text-xs transition duration-200',
                                {
                                    'text-primary-800 font-bold text-sm': pathname === item.href, // bolder, larger
                                    'text-primary-600 font-medium': pathname !== item.href,
                                }
                            )}
                        >
                            <Icon
                                className={clsx(
                                    'mb-1 transition-transform duration-200',
                                    pathname === item.href ? 'w-7 h-7 scale-110' : 'w-6 h-6'
                                )}
                            />
                            <span>{item.name}</span>
                        </Link>

                    );
                })}
            </nav>
        </div>
    );
}
