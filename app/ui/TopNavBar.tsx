'use client';

import RFLogo from '@/app/ui/rf-logo';
import ColorfullBar from '@/app/ui/colorfullBar';
import NavLinks from '@/app/ui/nav-links';
import SocialLinks from "@/app/ui/SocialLinks"; // this is the one you already have

export default function TopNavBar() {
    return (
        <header className="bg-secondary-30 shadow-md sticky top-0 z-50 hidden md:block">
            <div className="w-full">
                <div className="mx-auto max-w-screen-xl">
                    <div className="flex items-center justify-between py-3 md:py-4">

                        <div className="flex items-center gap-4 mr-4 ml-6">
                            <RFLogo className="h-8 w-auto flex-shrink-0"/>
                        </div>
                        <SocialLinks/>
                        <nav className="flex gap-1 md:gap-4 mr-6" role="navigation" aria-label="Main navigation">
                            <NavLinks/>
                        </nav>

                    </div>
                </div>
                <ColorfullBar/>
            </div>
        </header>
    );
}