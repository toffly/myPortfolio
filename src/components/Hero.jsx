import { Button } from "./";

import { profileImg, arrowRight } from "../assets";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex md:flex-row flex-col justify-between items-center"
    >
      <div className="flex-1 flex-col justify-center xl:px-0 sm:px-16 px-6">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Peerapat <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Mapitak</span>{" "}
        </h1>
        <p className="paragraph max-w-[470px] mt-5 mb-4">
          Dedicated and highly motivated Computer Science graduate,Eager to
          contribute to a dynamic team and continue to grow as a front-end
          developer.
        </p>
        <div className="flex flex-1 sm:flex-row flex-col justify-start items-center gap-2">
          <Button
            label="Download CV"
            iconURL={arrowRight}
            dropShadow="shadow-lg shadow-cyan-500/50"
          />
          <a href="https://github.com/toffly" target="_blank">
            <FaGithub
              className="text-[28px] text-white ml-4 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="flex-1 flex flexCenter md:my-0 my-10 relative">
        <img
          src={profileImg}
          alt="profileImage"
          width={500}
          className="relative z-[5] rounded-full object-contain shadow-neon"
        />
      </div>
    </section>
  );
};

export default Hero;
