'use client';

import Image from 'next/image';
import logoSvg from '@/public/itsxodus logo 2024.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="bg-gray-100 p-4 border-b border-slate-200">
            <div className="flex flex-col items-center">
                <Link href="/">
                    <Image 
                        src={logoSvg} 
                        alt="XoDus Logo" 
                        width={128} 
                        height={128} 
                        className="transition-transform hover:opacity-75 transform hover:scale-110 duration-150 ease-in-out cursor-pointer"
                    />
                </Link>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4">
                {links.map((link) => (
                    <Link 
                    key={link.name} 
                    href={link.href} 
                    className={clsx(
                        'px-2 py-1 bg-gray-300 rounded hover:bg-gray-500 hover:text-white transition-colors',
                        {
                            'bg-gray-500 text-white': pathname === link.href,
                        }
                    )}>
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
