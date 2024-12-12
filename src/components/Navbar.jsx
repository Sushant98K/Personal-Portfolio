import logo from "../assets/sushantkatelogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
      <div className="flex items-center flex-shrink-0">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a
          href="https://www.linkedin.com/in/sushant98k/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sushant98K"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://x.com/ig_ToyBreaker?s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.instagram.com/ig_toybreaker?igsh=MTJqc2VmdnYzNDVzOA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareInstagram />
        </a>
      </div>
    </nav>
  );
};

export default navbar;
