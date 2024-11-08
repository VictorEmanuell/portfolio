import Image from "next/image";

import {Button} from "@/components/Button";

import ProfileImage from '@/assets/profile.jpg';

export function Banner() {
    return (
        <div className='w-full flex sm:flex-col md:flex-row justify-between items-start sm:mt-28 md:mt-40'>
            <div className='sm:max-w-[100%] md:max-w-[55%] flex flex-col gap-6 items-start'>
                <p className='font-medium text-4xl text-white leading-[50px] tracking-wider'>
                    <span className='text-primary'>Victor</span> Emanuel
                    <br/>
                    Desenvolvedor <span className='text-primary'>FullStack</span>
                    <span className='text-yellow-200 font-light ping'>|</span>
                </p>

                <p className='font-normal text-xl text-gray'>
                    Desenvolvedor fullstack especializado em React e NodeJS.
                </p>

                <Button title='Contato' href='https://wa.me/5579988130992'/>
            </div>

            <div
                className='sm:hidden md:flex border-2 border-primary rounded-full overflow-hidden md:hover:-translate-x-16 transition self-center sm:mt-20 md:mt-0'
            >
                <Image src={ProfileImage} alt={'Imagem de perfil'} width={300}/>
            </div>
        </div>
    );
}
