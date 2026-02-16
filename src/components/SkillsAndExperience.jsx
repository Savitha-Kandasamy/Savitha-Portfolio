import React, { useState } from "react"; // Added useState
import { experiences, skills } from "../constants";
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence for smooth transitions
import { BsLink45Deg } from "react-icons/bs";
import { FaCode, FaCubes, FaTools } from "react-icons/fa";

// 1. Refined Skill Icon (Unchanged)
export const SkillIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center group cursor-default">
    <div className="relative p-4 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 group-hover:border-teal-400/50 transition-all duration-500 shadow-xl group-hover:shadow-teal-900/20">
      <div className="absolute inset-0 bg-teal-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity" />
      <span className="text-white text-[32px] relative z-10 group-hover:scale-110 block transition-transform duration-300">
        {React.createElement(icon)}
      </span>
    </div>
    <p className="font-poppins text-dimWhite text-[13px] mt-4 font-medium tracking-wide group-hover:text-teal-200 transition-colors text-center">
      {name}
    </p>
  </div>
);

// 2. Updated SkillContent (Simplified to work inside Tabs)
const SkillContent = ({ items }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 mt-10"
  >
    {items.map((item) => (
      <SkillIcon key={item.id} {...item} />
    ))}
  </motion.div>
);

// 3. Experience Card (Unchanged)
const ExperienceCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-8 md:gap-20 mb-24 last:mb-12 group"
    >
      <div className="md:w-[220px] flex-shrink-0">
        <div className="md:sticky md:top-24">
          <div className="relative inline-block mb-6">
             <div className="absolute -inset-2 bg-teal-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
             <img
                src={props.logo}
                alt={props.organisation}
                className="relative w-20 h-20 rounded-2xl object-contain bg-[#0a0a0a] p-3 border border-white/10 group-hover:border-teal-400/50 transition-all duration-500"
              />
          </div>
          <h4 className="font-poppins font-bold text-[24px] text-white leading-tight mb-2">
            {props.organisation}
          </h4>
          <p className="text-teal-200/70 text-sm font-bold tracking-widest uppercase">India</p>
        </div>
      </div>

      <div className="flex-1 border-l-2 border-teal-400/30 pl-10 relative">
        {props.positions.map((position, index) => (
          <div key={index} className={`${index !== props.positions.length - 1 ? "mb-16" : "mb-0"} relative`}>
            <div className="absolute w-4 h-4 bg-[#00040f] rounded-full -left-[49px] top-1.5 border-2 border-white/30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 border-white/30 rounded-full animate-pulse" />
            </div>
            
             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-teal-50 group-transition">
                {position.title}
              </h3>
              <span className="text-[12px] font-mono font-bold text-white bg-teal-400/10 px-4 py-2 rounded-lg border border-teal-400/20 self-start uppercase tracking-wider">
                {position.duration}
              </span>
            </div>

            {position.content.map((info, idx) => (
              <p key={idx} className="font-poppins text-dimWhite text-[17px] leading-[1.8] max-w-[800px] mb-6 last:mb-0 opacity-90 group-hover:opacity-100 transition-opacity">
                {info.text}
                {info.link && (
                  <a href={info.link} target="_blank" rel="noreferrer" className="ml-2 inline-flex text-teal-400 hover:scale-125 transition-transform">
                    <BsLink45Deg size="1.4rem" />
                  </a>
                )}
              </p>
            ))}

            {position.techStack && (
              <div className="flex flex-wrap gap-3 mt-10">
                {position.techStack.map((tech) => (
                  <div key={tech.id} className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-teal-400/10 hover:border-teal-400/30 transition-all duration-300">
                    {React.createElement(tech.icon, { className: "w-4 h-4 text-teal-200/80" })}
                    <span className="text-dimWhite text-[12px] font-bold tracking-wide uppercase">{tech.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ title }) => (
  <div className="mb-10">
    <h2 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
      {title}
    </h2>
    <div className="h-1.5 w-24 bg-teal-200 mt-2 hidden md:block rounded-full" />
  </div>
);

const skillIcons = {
  "Programming Languages": FaCode,
  "Frameworks/Libraries": FaCubes,
  "Tools": FaTools,
};

const SkillsAndExperience = () => {
  const [activeTab, setActiveTab] = useState(skills[0].title);

  return (
   <>
        {/* Experience Section */}
        <section id="experience" className="pt-24 pb-12">
          <SectionHeader title="Experience" />
          <div className="flex flex-col mt-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </section>

         {/* Skills Section */}
      <section id="skills" className="pt-12 pb-32">
        <SectionHeader title="Technical Skills" />

        {/* Centered Tab Navigation */}
        <div className="relative mb-8">
          {/* Full width bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />
          
         {/* Centered Tabs */}
          <div className="flex justify-center">
            <div className="flex gap-2 md:gap-4 bg-white/5 rounded-full p-1.5 border border-white/10">
              {skills.map((skill) => {
                const Icon = skillIcons[skill.title];
                return (
                  <button
                    key={skill.title}
                    onClick={() => setActiveTab(skill.title)}
                    className={`relative flex items-center gap-2 px-4 md:px-6 py-2.5 text-[13px] md:text-[15px] font-poppins font-medium rounded-full transition-all duration-300 ${
                      activeTab === skill.title
                        ? "bg-white/10 text-white border border-white/20"
                        : "text-dimWhite hover:text-white"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span className="hidden sm:inline">{skill.title}</span>
                    <span className="sm:hidden">
                      {skill.title === "Programming Languages" && "Languages"}
                      {skill.title === "Frameworks/Libraries" && "Frameworks"}
                      {skill.title === "Tools" && "Tools"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {skills.map((skill) =>
              activeTab === skill.title ? (
                <SkillContent key={skill.title} items={skill.items} />
              ) : null
            )}
          </AnimatePresence>
        </div>
      </section>
     </>
  );
};

export default SkillsAndExperience;