'use client';

import RFLogo from '@/app/ui/rf-logo';
import NavLinks from '@/app/ui/nav-links'; // this is the one you already have

export default function TopNavBar() {
    return (
        <header className="flex items-center justify-between bg-secondary-30 px-6 py-4 shadow-md">
            <div className="flex items-center gap-4">
                <RFLogo className="h-10 w-auto" />
            </div>
            <nav className="flex gap-4">
                <NavLinks />
            </nav>
        </header>
    );
}