import React from "react";
// import { TbBrandGithub } from "react-icons/tb";
import { RxGithubLogo } from "react-icons/rx";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/disha2301" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
           items-center justify-center hover:text-textGreen cursor-pointer 
           hover:-translate-y-2 transition-all duration-300"
          >
            <RxGithubLogo />
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/disha-yadav-bb5478221/"
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
           items-center justify-center hover:text-textGreen cursor-pointer 
           hover:-translate-y-2 transition-all duration-300"
          >
            <SiLinkedin />
          </span>
        </a>

        <a
          href="https://www.instagram.com/dishaaa._.23/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
           items-center justify-center hover:text-textGreen cursor-pointer 
           hover:-translate-y-2 transition-all duration-300"
          >
            <SiInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
