import Link from "next/link";

interface ButtonProps {
    title: string;
    href: string;
    type?: 'default' | 'secondary';
}

export function Button({title, href, type = 'default'}: ButtonProps) {
    return (
        <Link
            href={href}
            target='_blank'
            className={`border ${type === 'secondary' ? 'border-gray' : 'border-primary'} px-6 py-2 text-white ${type === 'secondary' ? 'hover:bg-gray' : 'hover:bg-primary'} hover:text-background transition`}
        >
            {title}
        </Link>
    );
}