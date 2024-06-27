import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        At Bulgass Soft Works, we are a dedicated team of software developers passionate about creating innovative solutions tailored to meet our clients' needs. With a focus on excellence and cutting-edge technology, we strive to deliver high-quality software products that drive business growth and efficiency.

Our Values
Expertise: Each member of our team brings extensive knowledge and experience in their respective fields, whether it's frontend development, backend architecture, mobile app development, or UX/UI design.
Customization: We understand that every project is unique. That's why we emphasize personalized solutions that align with our clients' specific requirements and goals.
Innovation: Keeping abreast of the latest technological advancements, we integrate innovative solutions that ensure our clients stay ahead in their industries.
Quality: We are committed to delivering software solutions of the highest quality, ensuring reliability, scalability, and security.
Collaboration: We believe in the power of teamwork and collaboration, fostering an environment where creativity and ideas flourish.
Our Services
Web Application Development
Mobile Application Development (iOS and Android)
Enterprise Software Solutions
UX/UI Design and Prototyping
Software Maintenance and Support
Our Team
John Smith - Project Manager, with over a decade of experience in leading successful IT projects.
Emily Johnson - Senior Frontend Developer, specializing in modern JavaScript frameworks and responsive web design.
Michael Brown - Lead Backend Developer, expert in database management and server-side logic.
Jessica Lee - UX/UI Designer, crafting intuitive and visually appealing user interfaces.
David Wilson - Mobile App Developer, proficient in developing cross-platform applications for diverse client needs.
Our Achievements
Successful delivery of projects across various industries, including finance, healthcare, education, and e-commerce.
Positive client feedback and long-term partnerships built on trust and reliability.
Adoption of Agile and DevOps methodologies to streamline development processes and enhance project outcomes.
Whether you're a startup looking to build your first MVP or an established enterprise seeking to innovate, BSW is ready to collaborate and deliver exceptional software solutions tailored to your business objectives.


      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
