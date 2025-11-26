import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../css/pages/Home.css";
import { Link } from "react-router-dom";
import resumePDF from "../assets/media/ry-suriyathep-resume.pdf";

import CommentSection from "../components/CommentSection.jsx";
import {
  MapPin,
  GraduationCap,
  Laptop,
  Award,
  Github,
  Mail,
  FileDown,
} from "lucide-react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#hero-tag", {
      y: 20,
      opacity: 0,
      duration: 0.7,
    });
    gsap.from("#hero-name", {
      opacity: 0,
      duration: 1.5,
    });
    gsap.from("#hero-links", {
      y: -20,
      opacity: 0,
      duration: 0.7,
    });
    // gsap.from(".about-me-section", {
    //   scrollTrigger: {
    //     // markers: true,
    //     trigger: ".about-me-section",
    //     toggleActions: "play none none none",

    //     start: "20px 80%",
    //   },
    //   y: 100,
    //   opacity: 0,
    //   duration: 0.9,
    // });
    // gsap.from(".comment-section", {
    //   scrollTrigger: {
    //     trigger: ".comment-section",
    //     toggleActions: "play none none none",
    //   },
    //   opacity: 0,
    //   duration: 1.7,
    // });
  }, []);
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="hero-links" id="hero-links">
            <a
              className="link"
              href={resumePDF}
              target="_blank"
              download="ry-suriyathep-resume.pdf"
            >
              Resume
            </a>
            <p>|</p>
            <a
              className="link"
              href="https://www.youtube.com/@ryvsu"
              target="_blank"
            >
              Youtube
            </a>
            <p>|</p>
            <a
              className="link"
              href="https://www.linkedin.com/in/rysuri"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>

          <h3 className="hero-name" id="hero-name">
            RY P. SURIYATHEP
          </h3>

          <h4 className="hero-tag" id="hero-tag">
            Web Developer at UNLV
          </h4>
        </div>

        <div className="about-me-section">
          <div className="about-left">
            <h5>ABOUT ME</h5>
            <h1>
              Hi, I'm <span className="highlight">Ry Suriyathep</span>
            </h1>
            <ul className="about-info">
              <li>
                <MapPin className="info-icon" /> Based in Las Vegas, Nevada
              </li>
              <li>
                <GraduationCap className="info-icon" /> 2nd Year CS Student at
                UNLV
              </li>
              <li>
                <Laptop className="info-icon" /> Frontend Developer
              </li>
              <li>
                <Award className="info-icon" /> AWS Cloud Certified
              </li>
            </ul>
            <p>
              I’m a web developer with over <strong>five years</strong> of
              experience building responsive, user-focused applications. I work
              with modern front-end frameworks like React and AWS. <br></br>{" "}
              <br></br> My projects range from client websites and e-commerce
              integrations to personal applications that showcase clean design
              and reliable performance.
            </p>
          </div>

          <div className="about-right">
            <h3>Skills and Technologies</h3>
            <div className="skills-grid">
              <span>React</span>
              <span>Python</span>
              <span>C++</span>
              <span>Figma</span>
              <span>JavaScript</span>
              <span>AWS</span>
              <span>MongoDB</span>
              <span>Shopify</span>
              <span>Vue.js</span>
              <span>Git</span>
              <span>Lua</span>
            </div>

            <h3>Certifications</h3>
            <div className="cert-list">
              <div className="cert-item">
                <img
                  src="https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                  alt="AWS Certified Cloud Practitioner Badge"
                  className="cert-badge"
                />
                <div>
                  <strong>AWS Certified Cloud Practitioner</strong>
                  <p>Issued January 2025</p>
                </div>
              </div>
              {/* 
              <div className="cert-item">
                <img
                  src="https://images.credly.com/size/340x340/images/a81e53e7-3649-4366-917d-9611bb74c10c/CompTIA_A_2B.png"
                  alt="CompTIA A+ Certification Badge"
                  className="cert-badge"
                />
                <div>
                  <strong>CompTIA A+ Certification</strong>
                  <p>Issued Aug 2023</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <CommentSection className="comment-section" />
        {/* 
        <div className="end-directory">
          <h1>Oh wait there is more!</h1>
          <div className="end-links">
            <a className="end-link" href="/contact">
              Contact me
            </a>
            <p>|</p>
            <a className="end-link" href="/portfolio">
              View porfolio
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
