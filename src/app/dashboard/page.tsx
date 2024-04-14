"use client"
import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import SideNavSticky from '@/components/SideNavSticky'

import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation';

function Dashboard () {

        const { data: session } = useSession();

        if (!session) {
                redirect('/');
        }


    return (
        <>
            <Header session = { session } />
            <div className="grid h-screen min-h-screen w-full overflow-hidden md:grid-cols-[auto_1fr]">
                    <SideNav />
                    <div className="flex flex-col">
                            <SideNavSticky />                
                    </div>
            </div>
        </>
    )
}

export default Dashboard