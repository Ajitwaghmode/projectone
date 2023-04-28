import React from "react";
import vg from "../assets/2.webp";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> AIW  Technology</h1>
          <p>Solution to all your problems</p>

          <p>   by - Ajit Waghmode</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          On this platform, I offer my services as a freelancer in web development and data science.
           With my skills and expertise in programming and computer science, I can help you develop web applications, 
           analyze data, and implement machine learning algorithms.My GitHub and LinkedIn profiles showcase my past projects 
           and achievements, demonstrating my ability to provide high-quality services to my clients.</p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          I am a final year Computer Science B.Tech student with a keen interest in web development and data science. Throughout my academic journey, I have consistently shown dedication and commitment to my studies, achieving a 7.75 SGPA.
          My passion for web development and data science stems from my desire to make a positive impact in the world by developing innovative and impactful technologies. I believe that by pursuing job opportunities in these domains, 
          I can contribute to the development of applications and solutions that can improve people's lives.
          My GitHub and LinkedIn profiles showcase my skills and expertise in programming and computer science. I have worked on various projects that demonstrate my ability to develop web applications, analyze data, and implement machine learning algorithms.

          I am constantly seeking new challenges and opportunities to learn and grow, and I believe that a career in web development and data science will provide me with the perfect platform to do so.I am excited to embark on this new chapter of my life and 
          contribute my skills and knowledge to a team that shares my passion for developing impactful technologies.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
