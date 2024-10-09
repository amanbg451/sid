import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "C#" },
      { name: "c++" },
      { name: "Blender" },
      { name: "React" },
      { name: "Unity" },
      { name: "Construct 3" },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      
        <h2 className="text-3xl font-bold mb-4 text-center text-orange-600">
          Skills
        </h2>
        <p className="text-center mb-8">I have various Skills.</p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-white-900 p-6 rounded-lg bg-slate-900/20 shadow-lg w-full md:w-1/2"
            >
              {/* <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3> */}
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    {/* <span className="text-2xl">{tech.icon}</span> */}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Skills;
