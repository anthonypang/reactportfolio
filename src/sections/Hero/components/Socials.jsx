import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoDocumentTextSharp } from "react-icons/io5";

const socials = [
  {
    name: "Github",
    link: "https://github.com/anthonypang",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/antpang/",
    icon: <FaLinkedin />,
  },
  {
    name: "Email",
    link: "mailto:anthonypang99@gmail.com",
    icon: <GrMail />,
  },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1mTQufF8VB2vHctgqH7-idaA-OK8xRaWG/view?usp=sharing",
    icon: <IoDocumentTextSharp />,
  },
];

const Socials = () => {
  return (
    <ul className="socials">
      {socials.map((data, key) => (
        <li key={key}>
          <a
            className="shadow"
            href={data.link}
            target="_blank"
            rel="noreferrer"
          >
            {data.icon}
            <p>{data.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
