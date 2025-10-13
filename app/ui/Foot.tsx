import RFLogo from '@/app/ui/rf-logo';

export default function Foot() {
    return (
        <footer className="flex flex-col md:flex-row items-center justify-between bg-secondary-30 px-6 py-4 text-sm text-gray-600 shadow-inner hidden md:block">
            <div className="mb-2 md:mb-0 flex items-center gap-4">
                <RFLogo className="h-8 w-auto" />
                <span>© 2025 Rufina Travel. All rights reserved.</span>
            </div>
            <div className="flex gap-4">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Contact</a>
            </div>
        </footer>
    );
}