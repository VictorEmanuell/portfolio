import type {Metadata} from "next";
import {Fira_Code} from 'next/font/google';
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const firaCode = Fira_Code({
    variable: '--font-firacode',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: "Victor Emanuel",
    description: "Desenvolvedor de Software",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body
            className={`${firaCode.variable} antialiasing flex flex-col justify-between items-center bg-background cursor-default`}
        >
        <Header/>
        <div className='max-w-[1100px] w-full px-6'>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
