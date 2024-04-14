"use client"
import Link from "next/link"
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { signOut } from "next-auth/react";
import type { Session } from 'next-auth';

function Header ({ session } : Readonly<{ session: Session | null }>) {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className="bg-neutral">

        <div className="mx-auto border-b px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex h-16 items-center justify-between max-w-screen-xl">
            <div className="md:flex md:items-center md:gap-12">
                <a className="block text-primary" href="/">
                <span className="sr-only">Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
                </a>
            </div>

            <div className="hidden md:block">
                <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                    <Link className="underline"
                        href="/about"
                    >
                        About
                    </Link>
                    </li>
                    <li>
                    <Link className="underline"
                        href="/explore"
                    >
                        Explore
                    </Link>
                    </li>
                    <li>
                    <Link className="underline"
                        href="/pricing"
                    >
                        Pricing
                    </Link>
                    </li>
                </ul>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                {session ? (
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="text-sm font-medium underline">
                            Dashboard
                        </Link>
                        <button onClick={()=>signOut()} className="btn btn-primary rounded-full px-5 py-2.5 text-sm font-medium mr-1">
                            Logout
                        </button>
                    </div>
                    ) : (
                <div className="sm:flex sm:gap-4">
                <Link href="/api/auth/signin" className="btn btn-primary rounded-full px-5 py-2.5 text-sm font-medium mr-1">
                    Login
                </Link>
                </div>
                )}

                <div className="block md:hidden">
                <button type="button" className="p-2 lg:hidden" onClick={()=>setOpen(!open)}>
                    { open ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>                  
                    :
                    <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>                 
                    }
                </button>
                </div>    
            </div>
            </div>
        </div>
        <MobileMenu open={open} />
        </header>
    )
}

export default Header