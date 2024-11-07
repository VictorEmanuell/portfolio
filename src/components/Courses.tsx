import {CourseCard} from "@/components/CourseCard";

export function Courses() {
    return (
        <div className='w-full sm:mt-28 md:mt-40 flex flex-col justify-between items-start gap-6'>
            <div id='courses' className='w-full flex flex-row text-white items-center gap-4 relative mb-5'>
                <h3 className='text-2xl'>
                    <span className='text-primary'>#</span>formação
                </h3>

                <div className='w-40 h-0.5 bg-primary sm:hidden md:flex'/>
            </div>

            <CourseCard
                course='Doutorado em Engenharia de Computação'
                institution='Universidade Federal de Sergipe'
                startDate='jan/2024'
                endDate='jan/2029'
            />
            <CourseCard
                course='Mestrado em Engenharia de Computação'
                institution='Universidade Federal de Sergipe'
                startDate='jan/2024'
                endDate='jan/2029'
            />
            <CourseCard
                course='Engenharia de Computação'
                institution='Universidade Federal de Sergipe'
                startDate='jan/2024'
                endDate='jan/2029'
            />
        </div>
    );
}