import React, { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import { motion } from "framer-motion";
import { LinkPreview } from "./LinkPreview";
import { achievements } from "../constants";
import styles from "../style";

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      className="bg-primary text-white mt-5 md:mt-10 relative"
      id="achievements"
    >
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
            Achievements & Certifications
          </h1>
        </div>
      </div>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="container px-2 py-10 mx-auto mb-8">
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
              {/* Render all achievement cards in scrollable grid */}
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} index={index} {...achievement} 
                onViewCertificate={() => setSelectedCertificate(achievement.certificate)}/>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 px-4 py-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div 
            className="relative w-full h-full max-w-6xl max-h-[95vh] bg-primary rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 z-10 text-white text-4xl font-bold hover:text-teal-200 transition-colors bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setSelectedCertificate(null)}
            >
              ×
            </button>
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

const AchievementCard = (props) => {
  return (
    <motion.div
      className="flex flex-col justify-around px-6 py-4 rounded-[20px] transition-all duration-300 transform border hover:border-teal-200 hover:shadow-lg hover:shadow-teal-200/20 dark:border-gray-700 dark:hover:border-transparent"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Achievement icon/logo */}
      <img
        src={props.icon}
        alt={props.event}
        className="w-[45px] h-[45px] rounded-full mt-1 mb-1"
      />
      <div className="flex flex-col justify-end mt-4 mb-1">
        {/* Event name */}
        <p className="font-poppins font-normal text-xl text-white leading-[24px] mb-2">
          {props.event}
        </p>
        {/* Position/Award */}
        <p className="font-poppins italic font-normal text-lg text-gradient mb-3">
          {props.position}
        </p>
        {/* Achievement descriptions - only render if content exists */}
        {props.content1 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-1">
            🚀 {props.content1}
          </p>
        )}
        {props.content2 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-1">
            ⚡ {props.content2}
          </p>
        )}
        {props.content3 && (
          <p className="font-poppins font-normal text-dimWhite text-sm mb-4">
            🔥 {props.content3}
          </p>
        )}
      </div>
       {/* View Certificate Button - Bottom Left */}
      {props.certificate && (
        <button
          onClick={props.onViewCertificate}
          className="self-start px-4 py-2 mb-3 text-sm font-poppins font-medium text-white bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg hover:from-teal-500 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-teal-200/50 mt-auto"
        >
          View Certificate
        </button>
      )}
      {/* Social/Project links with hover preview - only render if link exists */}
      <div className="flex flex-row mb-2 font-poppins font-normal text-dimWhite gap-3">
        {props.article && (
          <LinkPreview url={props.article}>
            <a
              href={props.article}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all"
            >
              <TiNews size="1.5rem" className="inline" />
            </a>
          </LinkPreview>
        )}
        {props.youtube && (
          <LinkPreview
            url={props.youtube}
            className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all"
          >
            <a
              href={props.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <FaYoutube size="1.5rem" className="inline" />
            </a>
          </LinkPreview>
        )}
        {props.github && (
          <LinkPreview
            url={props.github}
            className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all"
          >
            <a
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <AiFillGithub size="1.5rem" className="inline" />
            </a>
          </LinkPreview>
        )}
        {props.project && (
          <LinkPreview
            url={props.project}
            className="inline-flex items-center hover:text-teal-200 hover:scale-110 transition-all"
          >
            <a
              href={props.project}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <BsLink45Deg size="1.5rem" className="inline" />
            </a>
          </LinkPreview>
        )}
      </div>
    </motion.div>
  );
};

export default Achievements;
