import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Who's Disha?" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            vero nihil aut consequuntur, eligendi, totam ipsum fugiat odit animi
            expedita ullam tenetur{" "}
            <span className="text-textGreen">
              eum adipisci aliquam nam? Non excepturi
            </span>{" "}
            blanditiis culpa fugit numquam in, veritatis, temporibus nisi
            recusandae omnis autem quia.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
            eum.
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwind CSS
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex p1-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src="/assets/images/profileImage.jpg"
                width={2000}
                height={2000}
                alt="profile"
              />
              <div
                className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20
              rounded-md top-0 left-0 group-hover:bg-transparent duration-300"
              ></div>
            </div>
          </div>
          <div
            className="hidden lgl:inline-flex w-[350px] h-80 border-2 border-textGreen
              rounded-md group-hover:-translate-x-2 group-hover:translate-y-2
              transition-transform duration-300"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
