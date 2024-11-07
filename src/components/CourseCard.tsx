interface CourseCardProps {
    course: string;
    institution: string;
    startDate: string;
    endDate: string;
}

export function CourseCard({course, institution, startDate, endDate}: CourseCardProps) {
    return (
        <div className='w-full p-4 flex flex-row justify-between items-center border border-gray text-gray'>
            <h5 className='font-light text-gray'>
                <span className={'font-medium text-white'}>{course} -</span> {institution}
            </h5>

            <p>{startDate} | <span className='text-primary'>{endDate}</span></p>
        </div>
    );
}