import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'
import SideNav from "@/app/ui/dashboard/sidenav";
import TopNavBar from "@/app/ui/TopNavBar";
import Foot from "@/app/ui/Foot"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} flex min-h-screen flex-col`}>
        <TopNavBar/>
        <main className="flex-grow p-6">{children}</main>
        <Foot/>
        </body>
        </html>
    );
}
