"use client"
import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import Coming from '@/components/Coming'
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
            <div className="grid h-full md:h-screen md:min-h-screen overflow-hidden md:grid-cols-[auto_1fr]">
                    <SideNav />
                    <div className="flex flex-col">
                            <Coming />               
                    </div>
            </div>
        </>
    )
}

export default Dashboard