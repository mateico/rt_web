import Image from 'next/image';
import RFLogo from '@/app/ui/rf-logo';

export default function Foot() {
    return (
        <footer className="bg-secondary-30 shadow-inner text-sm text-gray-600 hidden md:block">
            <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-2">
                {/* Left side: agency logo and copyright */}
                <div className="flex items-center gap-3">
                    <RFLogo className="h-10 w-auto" />
                    <span>© 2025 Rufina Travel. All rights reserved.</span>
                </div>

                {/* Middle links */}
                <div className="flex gap-4">
                    <a href="#" className="hover:text-primary-700 transition-colors">Contacto</a>
                </div>


                {/* Right side: developer credit */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>by</span>
                    <Image
                        src="/mateo_logo_3.webp"
                        alt="Mateo Builds Software"
                        width={146}
                        height={56}
                        className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity ml-2"
                    />
                </div>
            </div>
        </footer>
    );
}


/*
import RFLogo from '@/app/ui/rf-logo';

export default function Foot() {
    return (
        <footer className="bg-secondary-30 shadow-inner text-sm text-gray-600 hidden md:block">
            <div className="mx-auto max-w-screen-xl flex-col md:flex-row items-center px-6 py-4">
                <div className="mb-2 md:mb-0 flex items-center justify-between">
                    <RFLogo className="h-8 w-auto"/>
                    <span>© 2025 Rufina Travel. All rights reserved.</span>
                </div>
                <div className="flex gap-4">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </footer>
    );
}*/
