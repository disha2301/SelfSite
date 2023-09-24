import React, { useState } from "react";
import Archivecard from "./Archivecard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other NoteWorthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          View the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <Archivecard
          title="GDSC Solution Challenge"
          des="Deployed our own Solution Challenge Portal for the Students to register for the solution Challenge.
        deployed our own Solution Challenge Portal for the Students to register for the solution Challenge.
          built using Next 13, TypeScript and Tailwind CSS.
          "
          listItem={["ReactJs", "Tailwind Css", "NextJS"]}
          link="https://github.com/disha2301"
        />
        <Archivecard
          title="EVENTS PORTAL"
          des="Events Portal for Alexa Developers SRM
          Contributed to the Front-end as well Back-end of events portal.
          Built using Next JS, TypeScript, Tailwind, Express JS and Supabase.
          "
          listItem={["ExpressJs", "Supabase", "NextJS"]}
          link="https://github.com/disha2301"
        />
        <Archivecard
          title="TEXT UTILS"
          des="My own text utilizer
          Developed a custom text manipulation tool with themed features using React JS, React-Router, and Scripts.
          "
          listItem={["ReactJs", "React-Router", "JavaScript"]}
          link="https://github.com/disha2301"
        />

        {showMore && (
          <>
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Archivecard
                  title="BACKUP API FOR TECH-NEXT-GEN"
                  des="Using Mongodb and postman for testing
                  Developed an on-the-spot candidate registration backup API for use during live events.
                  Retrieving the stored data for subsequent actions.
                  "
                  listItem={["ReactJs", "MongoDb", "Postman"]}
                  link="https://github.com/disha2301"
                />
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Archivecard
                  title="FRAM GURU"
                  des="A Hmart India Hackathone Project to provide feasible agricultural real-time solution to the farmers by providing a platform to scan, upload and get instant solutions from scientists and research analysts."
                  listItem={["S3 bucket", "Kotlin", "MongoDb"]}
                  link="https://github.com/disha2301"
                />
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Archivecard
                  title="CLOUD SHELF"
                  des="A website to uploa,fetch, display and count the number of image uploaded on the web using Amazone Web Services and S3 bucket for storage."
                  listItem={["AWS", "S3 bucket", "ReactJs"]}
                  link="https://github.com/disha2301"
                />
              </motion.div>
            </div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg:hoverColor duration-300"
          >
            Show less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg:hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
