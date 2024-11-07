import Link from "next/link";
import {ProjectCard} from "@/components/ProjectCard";

export function Projects() {
    return (
        <div className='w-full mt-40 flex flex-col justify-between items-start gap-12'>
            <div className='w-full flex flex-row text-white items-center gap-4 relative'>
                <h3 className='text-2xl'>
                    <span className='text-primary'>#</span>projetos
                </h3>

                <div className='w-96 h-0.5 bg-primary'/>

                <Link
                    href={'/projects'}
                    className='absolute right-0 hover:text-primary hover:underline'
                >
                    Ver todos {'~~>'}
                </Link>
            </div>

            <div className='w-full flex flex-row gap-4 overflow-hidden mask-opacity-edge'>
                <ProjectCard
                    image={''}
                    tools='HTML CSS JS'
                    title='Projeto'
                    description='Um projeto desenvolvido para ser um projeto projetante da projetação projetada.'
                />
                <ProjectCard
                    image={''}
                    tools='HTML CSS JS'
                    title='Projeto'
                    description='Um projeto desenvolvido para ser um projeto projetante da projetação projetada.'
                />
                <ProjectCard
                    image={''}
                    tools='HTML CSS JS'
                    title='Projeto'
                    description='Um projeto desenvolvido para ser um projeto projetante da projetação projetada.'
                />
                <ProjectCard
                    image={''}
                    tools='HTML CSS JS'
                    title='Projeto'
                    description='Um projeto desenvolvido para ser um projeto projetante da projetação projetada.'
                />
            </div>
        </div>
    );
}