import Link from "next/link";

const routes = [
    {title: 'home', path: '/home'},
    {title: 'projetos', path: '/projects'},
    {title: 'sobre-mim', path: '/about'},
    {title: 'formação', path: '/school'},
    {title: 'contato', path: '/contact'},
]

export function Header() {
    return (
        <header className='fixed flex flex-row max-w-[1100px] px-6 w-full bg-background z-50 py-8 justify-between items-center font-firacode'>
            <Link
                href='https://github.com/VictorEmanuell'
                target='_blank'
                className='font-light text-white text-xl hover:tracking-widest transition-all'
            >
                Victor Emanuel
            </Link>

            <div className='flex flex-row justify-between items-center gap-6'>
                {routes.map(route => {
                    return (
                        <Link key={route.title} href={route.path}>
                            <p className='font-medium text-gray hover:underline'>
                                <span className='text-primary'>#</span>
                                {route.title}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </header>
    );
}