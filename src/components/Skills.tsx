import {SkillCard} from "@/components/SkillCard";

export function Skills() {
    return (
        <div className='w-full sm:mt-28 md:mt-40 flex flex-col justify-between items-start gap-12'>
            <div id='skills' className='w-full flex flex-row text-white items-center gap-4 relative'>
                <h3 className='text-2xl'>
                    <span className='text-primary'>#</span>habilidades
                </h3>

                <div className='w-60 h-0.5 bg-primary sm:hidden md:flex'/>
            </div>

            <div className='w-full flex flex-row flex-wrap justify-center items-center gap-6'>
                <SkillCard title={'Languages'} data={'TypeScript HTML CSS ReactJS NextJS'}/>
                <SkillCard title={'Languages'} data={'TypeScript HTML CSS ReactJS NextJS'}/>
                <SkillCard title={'Languages'} data={'TypeScript HTML CSS ReactJS NextJS'}/>
                <SkillCard title={'Languages'} data={'TypeScript HTML CSS ReactJS NextJS'}/>
                <SkillCard title={'Languages'} data={'TypeScript HTML CSS ReactJS NextJS'}/>
                <SkillCard title={'Languages'} data={'TypeScript HTML CSS ReactJS NextJS'}/>
                <SkillCard title={'Languages'} data={'TypeScript HTML CSS ReactJS NextJS'}/>
            </div>
        </div>
    );
}