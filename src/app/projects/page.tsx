import Link from "next/link";

import {ProjectCard} from "@/components/ProjectCard";

import CV from '@/cv.json';

export default function Projects() {
    return (
        <div className='w-full font-firacode sm:mt-28 md:mt-40 mb-16 flex flex-col justify-between items-center gap-12'>
            <div id='projects' className='w-full flex flex-row text-white items-center gap-4 relative'>
                <h3 className='text-3xl'>
                    <span className='text-primary font-medium'>/</span>projetos
                </h3>

                <Link
                    href={'/'}
                    className='absolute right-0 hover:text-primary hover:underline'
                >
                    <p className='sm:hidden md:flex'>{'<~~ Voltar para home'}</p>
                    <p className='sm:flex md:hidden'>{'<~~ Voltar'}</p>
                </Link>
            </div>

            <div
                className='w-full sm:flex sm:flex-col md:grid md:grid-cols-3 justify-center items-center gap-6 overflow-hidden md:mask-opacity-edge'
            >
                {
                    CV.projects.map(project => {
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
                    })
                }
            </div>
        </div>
    );
}