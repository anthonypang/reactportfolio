import React from "react";

const Project = (props) => {
  return (
    <div className="project">
      <div className="projectInfo">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img
            src={require("../../../images/" + props.image + ".png")}
            alt={props.image}
          />
        </a>
        <p>{props.name}</p>
        <p>
          {props.technologies.map((data, key) => {
            return (
              <button key={key} className="shadow">
                {data}
              </button>
            );
          })}
        </p>
      </div>
      <div className="projectDescription">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
        maxime facere ex voluptate aliquam rerum repudiandae tempora quia
        deserunt placeat quisquam sit dolorem debitis fugit tempore labore vero
        voluptatibus ad.
      </div>
    </div>
  );
};

export default Project;
