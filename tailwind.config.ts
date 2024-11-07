import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                firacode: ['var(--font-firacode)']
            },
            colors: {
                primary: '#78CEDD',
                gray: '#ABB2BF',
                background: "#282C33",
            },
        },
    },
    plugins: [],
} satisfies Config;
