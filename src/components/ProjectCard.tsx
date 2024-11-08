import Image from "next/image";

import {Button} from "@/components/Button";

interface ProjectCardProps {
    image: string;
    tools: Array<string>;
    title: string;
    description: string;
    web?: string;
    repository?: string;
}

export function ProjectCard({image, tools, title, description, web, repository}: ProjectCardProps) {
    return (
        <div className='w-72 h-full border border-gray text-gray'>
            <Image
                src={image}
                alt={'Imagem do projeto'}
                width={1920}
                height={1080}
                className='aspect-video'
            />

            <div className='w-full h-[1px] bg-gray'/>
            <p className='p-2'>{tools.map(tool => tool + ' ')}</p>

            <div className='w-full h-[1px] bg-gray'/>
            <div className='p-4 pb-4'>
                <h4 className='text-white text-xl mb-2'>{title}</h4>
                <p className='text-sm mb-4'>{description}</p>

                <div className='flex flex-row gap-2'>
                    {
                        web && <Button title='Acessar' href={web}/>
                    }

                    {
                        repository && <Button title='GitHub' href={repository} type='secondary'/>
                    }
                </div>
            </div>
        </div>
    );
}