import React from "react";
import { aboutImg, interiorImg, nikeCloneImg, travelImg } from "../assets";
import { Button } from "./";

const MyWork = () => {
  return (
    <section id="mywork" className="p-4 lg:p-20 flex flex-col">
      <div className="w-full flex flex-col">
        <h1 className="text-[52px] font-semibold uppercase mb-2 text-white">
          My Work
        </h1>
        <p className="font-poppins font-normal text-white text-[18px] mb-4">
          My pratice work
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col justify-between items-center bggra">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-white">Nike Clone</h2>
          <img src={nikeCloneImg} alt="test"  className="rounded-md mb-2 object-contain"/>
          <div className="flex flex-row justify-center items-center gap-2">
            <a href="https://github.com/toffly/NikeClone" target="_blank">
              <Button
                bgColor="bg-gray-100"
                bgHover="hover:bg-gray-500"
                label="Github"
                dropShadow="shadow-lg shadow-cyan-500/50 transition"
              />
            </a>
            <Button
              bgColor="bg-green-500"
              bgHover="hover:bg-green-700"
              label="Demo"
              dropShadow="shadow-lg shadow-cyan-500/50 transition"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-white">Interior Website</h2>
          <img src={interiorImg} alt="test"  className="rounded-md mb-2 object-contain"/>
          <div className="flex flex-row justify-center items-center gap-2">
            <a
              href="https://github.com/toffly/interior-tailwind"
              target="_blank"
            >
              <Button
                bgColor="bg-gray-100"
                bgHover="hover:bg-gray-500"
                label="Github"
                dropShadow="shadow-lg shadow-cyan-500/50 transition"
              />
            </a>
            <Button
              bgColor="bg-green-500"
              bgHover="hover:bg-green-700"
              label="Demo"
              dropShadow="shadow-lg shadow-cyan-500/50 transition"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-white">Travel Website</h2>
          <img src={travelImg} alt="test" className="rounded-md mb-2 object-contain"/>
          <div className="flex flex-row justify-center items-center gap-2">
            <a
              href="https://github.com/toffly/travel-website-react-nextjs14"
              target="_blank"
            >
              <Button
                bgColor="bg-gray-100"
                bgHover="hover:bg-gray-500"
                label="Github"
                dropShadow="shadow-lg shadow-cyan-500/50 transition"
              />
            </a>
            <Button
              bgColor="bg-green-500"
              bgHover="hover:bg-green-700"
              label="Demo"
              dropShadow="shadow-lg shadow-cyan-500/50 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
