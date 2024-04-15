import { NextAuthOptions } from "next-auth";
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import MongoClientPromise from '@/lib/mongodb'

export const authOptions: NextAuthOptions = {
    providers: [
      EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
      }),
    ],
    adapter: MongoDBAdapter(MongoClientPromise),
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: '/auth/sign-in',
      verifyRequest: '/auth/verify-request',
    },
  };