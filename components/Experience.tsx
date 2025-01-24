import { useState } from "react";
import SectionTitle from "./SectionTitle";
import WorkA from "./works/WorkA";
import WorkB from "./works/WorkB";
import WorkC from "./works/WorkC";
import WorkD from "./works/WorkD";
import WorkE from "./works/WorkE";

const Experience = () => {
  const [workA, setWorkA] = useState(false);
  const [workB, setWorkB] = useState(false);
  const [workC, setWorkC] = useState(false);
  const [workD, setWorkD] = useState(true);
  const [workE, setWorkE] = useState(false);

  const handleA = () => {
    setWorkA(true);
    setWorkB(false);
    setWorkC(false);
    setWorkD(false);
    setWorkE(false);
  };

  const handleB = () => {
    setWorkA(false);
    setWorkB(true);
    setWorkC(false);
    setWorkD(false);
    setWorkE(false);
  };

  const handleC = () => {
    setWorkA(false);
    setWorkB(false);
    setWorkC(true);
    setWorkD(false);
    setWorkE(false);
  };

  const handleD = () => {
    setWorkA(false);
    setWorkB(false);
    setWorkC(false);
    setWorkD(true);
    setWorkE(false);
  };

  const handleE = () => {
    setWorkA(false);
    setWorkB(false);
    setWorkC(false);
    setWorkD(false);
    setWorkE(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Disha's professional journey" titleNo="02" />
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
            JPMC
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
          <li
            onClick={handleE}
            className={`${
              workE
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#295298] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            GDSC
          </li>
        </ul>
        {workD && <WorkD />}
        {workC && <WorkC />}
        {workB && <WorkB />}
        {workA && <WorkA />}
        {workE && <WorkE />}
      </div>
    </section>
  );
};

export default Experience;
