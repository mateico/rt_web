import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'
import SideNav from "@/app/ui/dashboard/sidenav";
import TopNavBar from "@/app/ui/TopNavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <TopNavBar />
      {children}</body>
    </html>
  );
}
