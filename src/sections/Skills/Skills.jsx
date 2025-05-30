import React from "react";
import { skillItems } from "../../data/data";
import Skill from "./components/Skill";

const Skills = () => {
  return (
    <div id="skills" className="container">
      <h1 className="heading shadow" data-aos="fade-up">
        Skills
      </h1>
      <div className="skills" data-aos="fade-up">
        {skillItems.map((data) => {
          return <Skill image={data.image} skill={data.skill} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
