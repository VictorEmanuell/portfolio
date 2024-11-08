'use client';

import Link from "next/link";
import Image from "next/image";

import Logo from '@/assets/logo.svg';
import {useEffect, useState} from "react";

type RoutesType = Array<{
    title: string;
    position: number;
}>

const ROUTES = [
    {title: 'projetos', elementId: 'projects'},
    {title: 'habilidades', elementId: 'skills'},
    {title: 'sobre-mim', elementId: 'about'},
    {title: 'formação', elementId: 'courses'},
    {title: 'contato', elementId: 'contact-and-media'},
]

export function Header() {
    const [routes, setRoutes] = useState<RoutesType>([]);

    useEffect(() => {
        setRoutes(
            ROUTES.map((route) => {
                return {
                    title: route.title,
                    position: (document.getElementById(route.elementId)?.offsetTop ?? 0) - 100,
                };
            }),
        );
    }, []);

    return (
        <header
            className='fixed flex flex-row max-w-[1100px] px-6 w-full bg-background z-50 py-8 justify-between items-center font-firacode'>
            <Link
                href='https://github.com/VictorEmanuell'
                target='_blank'
                className='font-light text-white text-xl flex flex-row gap-2 items-center hover:tracking-widest transition-all'
            >
                <Image src={Logo} alt='Logotipo' width={40}/>
                Victor Emanuel
            </Link>

            <div className='flex flex-row justify-between items-center gap-6 sm:hidden md:flex'>
                {routes.map(route => {
                    return (
                        <button key={route.title}
                                onClick={() => window.scrollTo({top: route.position ?? 0, behavior: 'smooth'})}>
                            <p className='font-medium text-gray hover:underline hover:text-green-400'>
                                <span className='text-primary'>#</span>
                                {route.title}
                            </p>
                        </button>
                    );
                })}
            </div>
        </header>
    );
}