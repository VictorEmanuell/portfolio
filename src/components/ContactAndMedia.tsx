import Image from "next/image";
import Link from "next/link";

import WhatsAppIcon from '@/assets/icon-whatsapp.png';
import EmailIcon from '@/assets/icon-email.png';
import LinkedinIcon from '@/assets/icon-linkedin.png';
import GitHubIcon from '@/assets/icon-github.png';
import DiscordIcon from '@/assets/icon-discord.png';

export function ContactAndMedia() {
    return (
        <div className='w-full sm:mt-28 md:mt-40 mb-20 flex flex-col justify-center items-start gap-4'>
            <div id='contact-and-media' className='w-full flex flex-row text-white items-center gap-4 relative'>
                <h3 className='text-2xl'>
                    <span className='text-primary'>#</span>contato-e-redes
                </h3>

                <div className='w-64 h-0.5 bg-primary sm:hidden md:flex'/>
            </div>

            <div className='border border-gray p-4 pb-6 sm:w-full md:w-96 mt-6'>
                <Link
                    href={'https://wa.me/5579988130992'}
                    target='_blank'
                    className='w-full flex flex-row items-center border-b border-gray hover:border-b-4 hover:border-primary transition-all py-2 gap-4 text-white'
                >
                    <div>
                        <Image src={WhatsAppIcon} alt={'Icone ddo WhatsApp'} width={20}/>
                    </div>

                    <p><span>(79) 9 8813-0992</span></p>
                </Link>

                <Link
                    href={'mailto:contato@victoremanuel.dev.br?subject=Contato&body=Escreva+seu+texto!'}
                    target='_blank'
                    className='w-full flex flex-row items-center border-b border-gray hover:border-b-4 hover:border-primary transition-all py-2 gap-4 text-white'
                >
                    <div>
                        <Image src={EmailIcon} alt={'Icone de email'} width={20}/>
                    </div>

                    <p>contato@victoremanuel.dev.br</p>
                </Link>
            </div>

            <div className='border border-gray p-4 pb-6 sm:w-full md:w-96'>
                <Link
                    href={'https://www.linkedin.com/in/victoremanuell'}
                    target='_blank'
                    className='w-full flex flex-row items-center border-b border-gray hover:border-b-4 hover:border-primary transition-all py-2 gap-4 text-white'
                >
                    <div>
                        <Image src={LinkedinIcon} alt={'Icone do Linkedin'} width={20}/>
                    </div>

                    <p>LinkedIn</p>
                </Link>

                <Link
                    href={'https://github.com/VictorEmanuell'}
                    target='_blank'
                    className='w-full flex flex-row items-center border-b border-gray hover:border-b-4 hover:border-primary transition-all py-2 gap-4 text-white'
                >
                    <div>
                        <Image src={GitHubIcon} alt={'Icone do GitHub'} width={20}/>
                    </div>

                    <p>GitHub</p>
                </Link>

                <Link
                    href={'https://discord.com/users/370716310147039234'}
                    target='_blank'
                    className='w-full flex flex-row items-center border-b border-gray hover:border-b-4 hover:border-primary transition-all py-2 gap-4 text-white'
                >
                    <div>
                        <Image src={DiscordIcon} alt={'Icone do Discord'} width={20}/>
                    </div>

                    <p>Discord</p>
                </Link>
            </div>
        </div>
    );
}