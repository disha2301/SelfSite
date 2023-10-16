import { useState } from "react";
import SectionTitle from "./SectionTitle";
import WorkA from "./works/WorkA";
import WorkB from "./works/WorkB";
import WorkD from "./works/WorkD";
import WorkC from "./works/WorkC";

const Experience = () => {
  const [workA, setWorkA] = useState(true);
  const [workB, setWorkB] = useState(false);
  const [workC, setWorkC] = useState(false);
  const [workD, setWorkD] = useState(false);

  const handleA = () => {
    setWorkA(true);
    setWorkB(false);
    setWorkC(false);
    setWorkD(false);
  };

  const handleB = () => {
    setWorkA(false);
    setWorkB(true);
    setWorkC(false);
    setWorkD(false);
  };

  const handleC = () => {
    setWorkA(false);
    setWorkB(false);
    setWorkC(true);
    setWorkD(false);
  };
  const handleD = () => {
    setWorkA(false);
    setWorkB(false);
    setWorkC(false);
    setWorkD(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleD}
            className={`${
              workD
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#295298] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            GDSC
          </li>
          <li
            onClick={handleC}
            className={`${
              workC
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#295298] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            TEDx
          </li>
          <li
            onClick={handleB}
            className={`${
              workB
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#295298] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            IEEE
          </li>
          <li
            onClick={handleA}
            className={`${
              workA
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#295298] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            ADS
          </li>
        </ul>
        {workD && <WorkD />}
        {workC && <WorkC />}
        {workB && <WorkB />}
        {workA && <WorkA />}
      </div>
    </section>
  );
};

export default Experience;
