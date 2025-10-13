'use client';

import RFLogo from '@/app/ui/rf-logo';
import ColorfullBar from '@/app/ui/colorfullBar';
import NavLinks from '@/app/ui/nav-links'; // this is the one you already have

export default function TopNavBar() {
    return (
        <header className="bg-secondary-30 shadow-md sticky top-0 z-50">
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between px-6 py-3 md:py-4">


                    <div className="flex items-center gap-4 mr-4">
                        <RFLogo className="h-8 w-auto flex-shrink-0" />
                    </div>


                    <nav className="flex gap-1 md:gap-4" role="navigation" aria-label="Main navigation">
                        <NavLinks />
                    </nav>



                </div>
                <ColorfullBar />
            </div>
        </header>
    );
}