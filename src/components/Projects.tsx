import Link from "next/link";

import {ProjectCard} from "@/components/ProjectCard";

import CV from '@/cv.json';

export function Projects() {
    return (
        <div className='w-full sm:mt-28 md:mt-40 flex flex-col justify-between items-start gap-12'>
            <div id='projects' className='w-full flex flex-row text-white items-center gap-4 relative'>
                <h3 className='text-2xl'>
                    <span className='text-primary'>#</span>projetos
                </h3>

                <div className='w-96 h-0.5 bg-primary sm:hidden md:flex'/>

                <Link
                    href={'/'}
                    className='absolute right-0 hover:text-primary hover:underline'
                >
                    Ver todos {'~~>'}
                </Link>
            </div>

            <div
                className='w-full flex sm:flex-col md:flex-row sm:items-center md:items-start gap-4 overflow-hidden md:mask-opacity-edge'
            >
                {CV.projects.slice(0, 3).map(project => {
                    return (
                        <ProjectCard
                            key={project.title}
                            image={project.image}
                            tools={project.tools}
                            title={project.title}
                            description={project.description}
                            web={project.web}
                            repository={project.repository}
                        />
                    )
                })}
            </div>
        </div>
    );
}