import CV from '@/cv.json';

export function About() {
    return (
        <div className='w-full sm:mt-20 md:mt-40 flex flex-col justify-between items-start gap-12'>
            <div id='about' className='w-full flex flex-row text-white items-center gap-4 relative'>
                <h3 className='text-2xl'>
                    <span className='text-primary'>#</span>sobre-mim
                </h3>

                <div className='w-80 h-0.5 bg-primary sm:hidden md:flex'/>
            </div>

            <p className='sm:w-full md:w-[65%] text-gray text-justify'>
                {CV.personal.introduction}
            </p>
        </div>
    );
}