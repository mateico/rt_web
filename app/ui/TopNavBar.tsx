'use client';

import RFLogo from '@/app/ui/rf-logo';
import ColorfullBar from '@/app/ui/colorfullBar';
import NavLinks from '@/app/ui/nav-links'; // this is the one you already have

export default function TopNavBar() {
    return (
        <header className="flex   bg-secondary-30 shadow-md">

            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-4">
                        <RFLogo className="h-10 w-auto" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLinks />
                    </nav>
                </div>
                <ColorfullBar />
            </div>


            {/*<ColorfullBar />*/}


        </header>
    );
}