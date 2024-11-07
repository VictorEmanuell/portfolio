import {Banner} from "@/components/Banner";
import {Projects} from "@/components/Projects";
import {Skills} from "@/components/Skills";
import {About} from "@/components/About";
import {Courses} from "@/components/Courses";
import { ContactAndMedia} from "@/components/ContactAndMedia";

export default function Home() {
    return (
        <div className="w-full font-firacode">
            <Banner/>
            <Projects/>
            <Skills/>
            <About/>
            <Courses/>
            <ContactAndMedia/>
        </div>
    );
}
