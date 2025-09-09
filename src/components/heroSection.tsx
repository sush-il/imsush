import "../App.css";
import { emailIcon, githubIcon, linkedinIcon } from "../assets/svgIcons";

const HeroSection = () => {
  return (
    <div className='w-full h-full p-3 flex flex-col align-middle justify-center'>
      <section>
        <p className='text-teal-400 pb-3'>Hello, World! I'm </p>
        <h1 className=' text-6xl text-left font-black tracking-wide transition-all duration-1000 ease-in-out lg:text-7xl'>
          {" "}
          SUSHIL BHANDARI{" "}
        </h1>
        <h1 className='text-3xl font-bold text-left text-gray-400 lg:text-5xl'>
          {" "}
          I <span className='text-change'></span>{" "}
        </h1>
      </section>

      <section className='ease-in-out flex flex-row pt-3'>
        <a href='https://github.com/sush-il' target='_blank'>
          {githubIcon}
        </a>
        <a href='https://www.linkedin.com/in/sush-il/' target='_blank'>
          {linkedinIcon}
        </a>
        <a href='mailto:zoroat3@gmail.com' target='_blank'>
          {emailIcon}
        </a>
      </section>

      <section className='pt-5 w-full lg:w-1/2'>
        <p className='transition-all duration-1000'>
          I’m a CS student and a software engineer specializing in building
          exceptional digital experiences. Currently, I’m focused on improving
          my current skillsets and technical knowledge across the CS field.
        </p>
      </section>
    </div>
  );
};

export default HeroSection;
