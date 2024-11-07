import Image from "next/image";
import TestImage from '@/assets/profile.jpg';
import {Button} from "@/components/Button";

interface ProjectCardProps {
    image: any;
    tools: string;
    title: string;
    description: string;
}

export function ProjectCard({image, tools, title, description}: ProjectCardProps) {
    return (
        <div className='w-72 border border-gray text-gray'>
            <Image
                src={TestImage}
                alt={'Imagem do projeto'}
                className='aspect-video'
            />

            <div className='w-full h-[1px] bg-gray'/>
            <p className='p-2'>{tools}</p>

            <div className='w-full h-[1px] bg-gray'/>
            <div className='p-4 pb-4'>
                <h4 className='text-white text-xl mb-2'>{title}</h4>
                <p className='text-sm mb-4'>{description}</p>

                <div className='flex flex-row gap-2'>
                    <Button title={'Acessar'} href={'https://github.com/VictorEmanuell'}/>
                    <Button title={'GitHub'} href={'https://github.com/VictorEmanuell'} type='secondary'/>
                </div>
            </div>
        </div>
    );
}