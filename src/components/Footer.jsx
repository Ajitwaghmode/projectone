import React from "react";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>AIW_Technology</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.youtube.com/channel/UCv84WpErNNEuK8BhxOh0sQQ" target={"blank"}>
          <AiFillYoutube /> Youtube
          </a>
          
          <a href="https://www.linkedin.com/in/ajit-waghmode-9baa4a19b/" target={"blank"}>
          <AiFillLinkedin /> Linkedin
          </a>
          
          <a href="https://github.com/Ajitwaghmode" target={"blank"}>
          <AiFillGithub/> Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
