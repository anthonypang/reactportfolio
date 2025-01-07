import React from "react";

const Project = (props) => {
  const handleClick = () => {
    window.open(props.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project">
      <div className="projectInfo">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img
            src={require("../../../images/" + props.image + ".png")}
            alt={props.image}
          />
        </a>
      </div>
      <div className="projectDescription">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <button className="viewButton shadow" onClick={handleClick}>
          View
        </button>
      </div>
    </div>
  );
};

export default Project;
