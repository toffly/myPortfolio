import React from "react";

import { aboutImg } from "../assets";
import { FeatureCard } from "./";
import { skillList } from "../constants";

const AboutMe = () => {
  return (
    <section id="about" className="boxWidth paddingX paddingY flex flex-col">
      <div className="flex max-sm:flex-col-reverse flex-row justify-between items-center ">
        <div className="flex flex-1">
          <img
            src={aboutImg}
            alt="placeholder"
            className="object-contain"
            width={400}
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="font-poppins font-semibold xs:text-[42px] text-[32px] text-white xs:leading-[74px] leading-[66px] w-full">
            About Me
          </h3>
          <p className="font-poppins font-normal text-white text-[18px] leading-[27px]">
            Dedicated and highly motivated Computer Science graduate seeking an
            entry-level Front-End Developer position to apply my strong
            foundation in web development, problem-solving skills, and passion
            for creating user-friendly and visually appealing websites. Eager to
            contribute to a dynamic team and continue to grow as a front-end
            developer.
          </p>
        </div>
      </div>
        <h3 className="font-poppins font-semibold xs:text-[42px] text-[32px] text-white xs:leading-[74px] leading-[66px] w-full;">
          My Skills
        </h3>
      <div className="flex md:flex-row px-10 md:gap-[50px] flex-col w-full justify-evenly">
        {skillList.map((skill, index) => (
          <FeatureCard key={skill.id} title={skill.title} content={skill.content} icon={skill.icon}/>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
