import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Savita oil Technologies Ltd.",
    period: "July 2023 - August 2023",
    position: "Computer Specilist",
  },
  {
    company: "David's Studio",
    period: "August 2024 - Present",
    position: "3D Environment Artist",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-orange-600 font-bold mb-12">
        Experience
      </h1>
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          // eslint-disable-next-line react/jsx-key
          <Reveal>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-white-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-slate-700/10 w-96"
            >
              <h2 className="text-gray-100 text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-gray-300 text-lg">{experience.position}</p>
              <p className="text-gray-300 text-sm">{experience.period}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
