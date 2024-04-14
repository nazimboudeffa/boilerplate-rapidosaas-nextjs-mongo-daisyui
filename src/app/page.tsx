"use client"
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

import { useSession } from "next-auth/react";

function Home() {

  const { data: session } = useSession();

  return (
    <>
    <Header session= { session } />
    <main className="min-h-screen flex flex-col justify-between">
      <Hero />
      <Problem />
      <Features />
    </main>
    <Footer />
    </>
  );
}

export default Home;