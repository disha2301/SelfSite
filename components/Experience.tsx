import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import WorkA from "./works/WorkA";
import WorkB from "./works/WorkB";
import WorkC from "./works/WorkC";
import WorkD from "./works/workD";
import WorkE from "./works/WorkE";

const Experience = () => {
  const [workWorkA, setWorkA] = useState(true);
  const [workWorkB, setWorkB] = useState(false);
  const [workWorkC, setWorkC] = useState(false);
  const [workWorkD, setWorkD] = useState(false);
  const [workWorkE, setWorkE] = useState(false);

  const handleWorkA = () => {
    setWorkA(true);
    setWorkB(false);
    setWorkC(false);
    setWorkD(false);
    setWorkE(false);
  };
  const handleWorkB = () => {
    setWorkA(false);
    setWorkB(true);
    setWorkC(false);
    setWorkD(false);
    setWorkE(false);
  };
  const handleWorkC = () => {
    setWorkA(false);
    setWorkB(false);
    setWorkC(true);
    setWorkD(false);
    setWorkE(false);
  };
  const handleWorkD = () => {
    setWorkA(false);
    setWorkB(false);
    setWorkC(false);
    setWorkD(true);
    setWorkE(false);
  };
  const handleWorkE = () => {
    setWorkA(false);
    setWorkB(false);
    setWorkC(false);
    setWorkD(false);
    setWorkE(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containersxs ml-32 py-10 lgl:py-24 px-4"
    >
      <SectionTitle
        title="What Professional Experience she has?"
        titleNo="02"
      />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleWorkA}
            className={`${
              workWorkA
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            }
            border-l-2 bg-transparent
            hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Barclays
          </li>

          <li
            onClick={handleWorkB}
            className={`${
              workWorkB
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            }
            border-l-2 bg-transparent
            hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Fidelity
          </li>

          <li
            onClick={handleWorkC}
            className={`${
              workWorkC
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            }
            border-l-2 bg-transparent
            hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Wells Fargo
          </li>

          <li
            onClick={handleWorkD}
            className={`${
              workWorkD
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            }
            border-l-2 bg-transparent
            hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            BNY
          </li>

          <li
            onClick={handleWorkE}
            className={`${
              workWorkE
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            }
            border-l-2 bg-transparent
            hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            NatWest
          </li>
        </ul>
        {workWorkA && <WorkA />}
        {workWorkB && <WorkB />}
        {workWorkC && <WorkC />}
        {workWorkD && <WorkD />}
        {workWorkE && <WorkE />}
      </div>
    </section>
  );
};

export default Experience;
