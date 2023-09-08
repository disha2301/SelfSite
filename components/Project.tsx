import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { projectImage } from "@/public/assets";
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
                  src={projectImage}
                  alt="project1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Project</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-ml-16 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                facere nobis magnam incidunt est enim eligendi nihil velit,
                commodi quibusdam,
                <span className="text-textGreen">
                  asperiores aliquam ut nisi illo ratione
                </span>
                illum saepe, nesciunt perferendis?
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
            md:gap-5 justify-between text-textDark"
              >
                <li>Nextjs</li>
                <li>TypeScript</li>
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
                  src={projectImage}
                  alt="project1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Project</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                facere nobis magnam incidunt est enim eligendi nihil velit,
                commodi quibusdam,
                <span className="text-textGreen">
                  asperiores aliquam ut nisi illo ratione
                </span>
                illum saepe, nesciunt perferendis?
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
            md:gap-5 justify-between text-textDark"
              >
                <li>Nextjs</li>
                <li>TypeScript</li>
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
                  src={projectImage}
                  alt="project1"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Project</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-ml-16 rounded-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                facere nobis magnam incidunt est enim eligendi nihil velit,
                commodi quibusdam,
                <span className="text-textGreen">
                  asperiores aliquam ut nisi illo ratione
                </span>
                illum saepe, nesciunt perferendis?
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 
            md:gap-5 justify-between text-textDark"
              >
                <li>Nextjs</li>
                <li>TypeScript</li>
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
      </div>
    </section>
  );
};

export default Project;
