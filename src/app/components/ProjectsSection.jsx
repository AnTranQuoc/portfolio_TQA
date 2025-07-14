"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Drowsiness Detection",
    description: "The project uses the Flask library to deloy and uses the YOLOv8 machine learning algorithm for object detection, specifically targeting the identification of human faces. The purpose of the project is to deal with driving incidents when the driver fell asleep.",
    image: "/images/projects/IMG7.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/AnTranQuoc/DrowsinessDetection_YOLOv8_Flask",
    previewUrl: "https://github.com/AnTranQuoc/DrowsinessDetection_YOLOv8_Flask",
  },
  {
    id: 2,
    title: "Car Showroom 3D with Three.JS",
    description: "Develop a professional car showroom project targeting luxury car dealerships. Utilize small-scale 3D models with numerous features for customers. The website aims to provide a comfortable experience for customers, making it easy for them to choose their favorite car.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AnTranQuoc/CarShowroom",
    previewUrl: "https://github.com/AnTranQuoc/CarShowroom",
  },
  {
    id: 8,
    title: "Bad words detection",
    description: "Developed a system to detect hate speech on social media by incorporating sentiment knowledge from both target sentences and external resources.",
    image: "/images/projects/8.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/AnTranQuoc/NLP_Badwords_Detection",
    previewUrl: "https://github.com/AnTranQuoc/NLP_Badwords_Detection",
  },
  {
    id: 3,
    title: "3D maze game with Three.JS",
    description: "A simple maze game with first-person perspective. Using Javascript, HTML combined with ThreeJS.",
    image: "/images/projects/2.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/AnTranQuoc/MazeWebGame",
    previewUrl: "https://antranquoc.github.io/MazeWebGame/",
  },
  {
    id: 9,
    title: "Stroke Prediction",
    description: "As a simple practice exercise on the classification problem, it is expected that a person has a controlled risk disease or not.",
    image: "/images/projects/9.png",
    tag: ["All", "Web", "AI"],
    gitUrl: "https://github.com/AnTranQuoc/Stroke-Prediction",
    previewUrl: "https://github.com/AnTranQuoc/Stroke-Prediction",
  },
  {
    id: 4,
    title: "Movie website built on React ⚛️ ",
    description: "A movie website was developed using the React framework. It was necessary to use fundamental concepts of HTML and CSS to build the page and style.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AnTranQuoc/Movie_Web",
    previewUrl: "https://github.com/AnTranQuoc/Movie_Web",
  },
  {
    id: 5,
    title: "Personal portfolio by Next.JS",
    description: "Developed a dynamic and visually appealing portfolio using Next.js. The unique design and smooth effects showcase technical skills and creativity in web development.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Asteroids game made with JavaScript.",
    description: "This is a 2D game made in JavaScript. The player must control a ship, trying to fend off planets rushing at it. If you fail and get hit by a planet, the game will end.",
    image: "/images/projects/5.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/AnTranQuoc/Asteroids_game",
    previewUrl: "https://antranquoc.github.io/Asteroids_game/",
  },
  {
    id: 7,
    title: "3D Iphone display Website.",
    description: "Develop a professional iPhone product promotion website project using React-Three-Fiber. Use 3D models with color changing features. Mainly using react and threeJS",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AnTranQuoc/3D_Iphone_Display",
    previewUrl: "https://github.com/AnTranQuoc/3D_Iphone_Display",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI"
          isSelected={tag === "AI"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;