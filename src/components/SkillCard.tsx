interface SkillCardProps {
    title: string;
    data: string;
}

export function SkillCard({title, data}: SkillCardProps) {
    return (
        <div className='sm:w-80 md:w-56 border border-gray text-gray'>
            <h4 className='text-white text-lg p-2'>{title}</h4>
            <div className='w-full h-[1px] bg-gray'/>
            <p className='text-sm p-4'>{data}</p>
        </div>
    );
}