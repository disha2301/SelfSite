import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const WorkD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Academic Intern{" "}
        <span className="text-textGreen tracking-wide">
          @J.P. Morgan Chase & Co.
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2024 - Dec 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Supported J.P. Morgan's Mid-Cap Investment Banking and the US Front
          Office for the North America region, providing strategic financial
          insights following agile methedology and enabling impactful client
          outcomes with hands-on experience and understanding of software
          development lifecycle (SDLC).
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated on data-driven insights using Python, MySQL and LLM suite
          to support client decision-making, delivered technical presentations
          to clients and internal teams, and identified trends, patterns, and
          opportunities for improvement, showcasing strong communication and
          solution-oriented skills.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Independently managed financial insights through DCF, LBO modeling,
          and support for M&A and activism deals, driving strategic decisions
          with scrum development methodolgies.
        </li>

        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Supported the US Front Office across all sectors, actively
          contributing to high-profile activism and sell-side deals in banking,
          transport & logistics, technology, healthcare and food & beverage,
          playing a key role in securing client mandates.
        </li>
      </ul>
    </motion.div>
  );
};

export default WorkD;
