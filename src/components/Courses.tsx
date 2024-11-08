import {CourseCard} from "@/components/CourseCard";

import CV from '@/cv.json';

export function Courses() {
    return (
        <div className='w-full sm:mt-20 md:mt-40 flex flex-col justify-between items-start gap-6'>
            <div id='courses' className='w-full flex flex-row text-white items-center gap-4 relative mb-5'>
                <h3 className='text-2xl'>
                    <span className='text-primary'>#</span>formação
                </h3>

                <div className='w-40 h-0.5 bg-primary sm:hidden md:flex'/>
            </div>

            {
                CV.courses.map(course => {
                    return (
                        <CourseCard
                            key={course.name}
                            name={course.name}
                            institution={course.institution}
                            startDate={course.startDate}
                            endDate={course.endDate}
                        />
                    )
                })
            }
        </div>
    );
}