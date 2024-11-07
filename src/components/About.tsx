export function About() {
    return (
        <div className='w-full sm:mt-28 md:mt-40 flex flex-col justify-between items-start gap-12'>
            <div className='w-full flex flex-row text-white items-center gap-4 relative'>
                <h3 className='text-2xl'>
                    <span className='text-primary'>#</span>sobre-mim
                </h3>

                <div className='w-80 h-0.5 bg-primary sm:hidden md:flex'/>
            </div>

            <p className='sm:w-full md:w-[65%] text-gray text-justify'>
                Hello, i’m Victor!
                <br/>
                <br/>
                I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                scratch and raise them into modern user-friendly web experiences.
                <br/>
                <br/>
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                been helping various clients to establish their presence online. I always strive to learn about the
                newest technologies and frameworks.
            </p>
        </div>
    );
}