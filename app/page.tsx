import TopNavBar from '@/app/ui/TopNavBar'; // adjust path as needed

import {ArrowRightIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import {lusitana} from '@/app/ui/fonts'
import Image from 'next/image';


export default function Page() {
    return (
        <>
            <TopNavBar />
            <main className="flex min-h-screen flex-col p-6">
                <h1 className="text-2xl font-bold">Welcome to Rufina Travel</h1>
            </main>
        </>
    );
}
