import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { projectImage } from "@/public/assets";
import connectopia from "@/public/assets/images/connectopia.png";
import netflix from "@/public/assets/images/netflix.jpg";
import jarvis from "@/public/assets/images/jarvis.png";
import hyperforge from "@/public/assets/images/hyperforge.png";

import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Project = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="What Projects she owns?" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className=" flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/disha2301"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={connectopia}
                  alt="project1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Project</h3>
              <p className="bg-[#180b63e6] text-sm md:text-base p-2 md:p-6 xl:-ml-16 rounded-md">
                Social media website design using React, HTML, and CSS. React
                social media app using React Hooks, Context API, Dark Mode,
                Responsive design.{" "}
                <span className="text-textGreen">
                  To connect people at real-time{" "}
                </span>
                with full integration of backend and frontend.
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
            md:gap-5 justify-between text-textDark"
              >
                <li>Nextjs</li>
                <li>Next-auth</li>
                <li>Tailwind</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/disha2301"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/disha2301"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className=" flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/disha2301"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={netflix}
                  alt="project1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Project</h3>
              <p className="bg-[#180b63e6] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">
                {" "}
                Own version of Netflix made with the help of stacks like
                ReactJs,JavaScript and fetching the movie content and video from
                the TMDB API.{" "}
                <span className="text-textGreen">Renders real-time data </span>
                thereby fetching content from the Application Programming
                Interface.
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
            md:gap-5 justify-between text-textDark"
              >
                <li>Reactjs</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>API</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/disha2301"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/disha2301"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className=" flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/disha2301"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={hyperforge}
                  alt="project1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Project</h3>
              <p className="bg-[#180b63e6] text-sm md:text-base p-2 md:p-6 xl:-ml-16 rounded-md">
                Registration Portal for the event at IEEE SRM SB.Contributed as
                a Front-end Developer on the website built using React JS and
                Tailwind.
                {/* <span className="text-textGreen">
                  asperiores aliquam ut nisi illo ratione
                </span>
                illum saepe, nesciunt perferendis? */}
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
            md:gap-5 justify-between text-textDark"
              >
                <li>Reactjs</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/disha2301"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/disha2301"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className=" flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/disha2301"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={jarvis}
                  alt="project1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Project</h3>
              <p className="bg-[#180b63e6] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">
                Integrating Alexa Skills with Chat GPT,Under German mentorship,
                mastering Alexa Development console and voice command
                comprehension{" "}
                <span className="text-textGreen">
                  understanding working of intents and voice based response
                  delivery
                </span>
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
            md:gap-5 justify-between text-textDark"
              >
                <li>Alexa Development Console</li>
                <li>TypeScript</li>
                <li>Python</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/disha2301"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/disha2301"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
