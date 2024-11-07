import Link from "next/link";

export function Footer() {
    return (
        <div className='w-full flex flex-col justify-center items-center font-firacode text-white'>
            <div className='w-full h-[1px] bg-gray'/>

            <div className='max-w-[1100px] w-full flex flex-col justify-center items-center gap-12 p-8'>
                <Link
                    href='https://github.com/VictorEmanuell'
                    target='_blank'
                    className='font-light text-white text-xl hover:tracking-widest transition-all'
                >
                    Victor Emanuel
                </Link>

                <p className='text-gray text-[12px] font-light'>Aracaju/SE, 2024</p>
            </div>
        </div>
    );
}