'use client';

import {useEffect, useState} from "react";
import {usePathname} from 'next/navigation'
import Link from "next/link";
import Image from "next/image";

import Logo from '@/assets/logo.svg';

const ROUTES = [
    {title: 'projetos', elementId: 'projects'},
    {title: 'habilidades', elementId: 'skills'},
    {title: 'sobre-mim', elementId: 'about'},
    {title: 'formação', elementId: 'courses'},
    {title: 'contato', elementId: 'contact-and-media'},
]

type RoutesType = Array<{
    title: string;
    position: number;
}>

export function Header() {
    const pathname = usePathname();
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

            <div
                className={`${pathname === '/projects' ? 'hidden' : 'sm:hidden md:flex'} flex-row justify-between items-center gap-6`}
            >
                {
                    routes.map(route => {
                        return (
                            <button
                                key={route.title}
                                onClick={() => window.scrollTo({top: route.position ?? 0, behavior: 'smooth'})}
                            >
                                <p className='font-medium text-gray hover:underline hover:text-green-400'>
                                    <span className='text-primary'>#</span>
                                    {route.title}
                                </p>
                            </button>
                        );
                    })
                }
            </div>
        </header>
    );
}