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
}