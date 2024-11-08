interface CourseCardProps {
    name: string;
    institution: string;
    startDate: string;
    endDate: string;
}

export function CourseCard({name, institution, startDate, endDate}: CourseCardProps) {
    return (
        <div
            className='w-full p-4 flex sm:flex-col md:flex-row justify-between sm:items-end md:items-center border border-gray text-gray'>
            <h5 className='font-light text-gray'>
                <span className={'font-medium text-white'}>{name} -</span> {institution}
            </h5>

            <p className='sm:mt-4 md:mt-0'>{startDate} | <span className='text-primary'>{endDate}</span></p>
        </div>
    );
}