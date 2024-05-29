import "../App.css"
import { emailIcon, githubIcon, linkedinIcon } from "../assets/svgIcons";

const HeroSection = () => {
    return(
        <div className="w-full h-full p-3 flex flex-col align-middle justify-center">
            <section>
                <p className="text-teal-400 pb-3">Hello, World! I'm </p>
                <h1 className=" text-7xl text-left font-black tracking-wide"> SUSHIL BHANDARI </h1>
                <h1 className="text-3xl font-bold text-left text-gray-400 lg:text-5xl"> I <span className="text-change"></span> </h1>
            </section>

            <section className="flex flex-row pt-3">
                <a href="#" target="_blank">{githubIcon}</a>
                <a href="#" target="_blank">{linkedinIcon}</a>
                <a href="#" target="_blank">{emailIcon}</a>
            </section>
            
            <section className="pt-5 w-full lg:w-1/2">
            <p className=""> 
                I’m a software engineer specializing in building (and occasionally designing) 
                exceptional digital experiences. 
                Currently, I’m focused on building accessible, human-centered products at Upstatement.
            </p>
            </section>

        </div>
    )
}

export default HeroSection;