"use client"
import Header from "@/components/Header"
import { fontHeading } from "@/lib/fonts"
import Image from 'next/image'
import { useSession } from "next-auth/react";

function About() {

    const { data: session } = useSession();
    
    return (
        <>
        <Header session = { session } />
            <main className="mt-10 flex flex-col items-center gap-5 text-center">
                <h1
                    className={`text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl ${fontHeading.variable}`}
                >
                    About the project
                </h1>
                <p className="max-w-[500px] text-lg text-muted-foreground sm:text-xl">
                Welcome to our innovative online business platform, we offer an all-in-one web app to do online business.
                </p>

                <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our vision</h2>
                        <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                        At allbiiiz, we envision a world where geographical boundaries no longer limit business growth. Our platform is a conduit for turning dreams into online enterprises, connecting passionate individuals with a global audience.
                        </p>
                        </div>
                    </div>
                    <Image
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        height="310"
                        src="/clark-tibbs-oqStl2L5oxI-unsplash.jpg"
                        width="550"
                    />
                    </div>
                </div>
                </section>
            </main>
        </>
    )
}

export default About