import Image from "next/image";
import "../style/hero.css"; 
import"../style/about.css";
// Make sure this path is correct
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";  // Corrected import
import { BsGithub } from "react-icons/bs";

function About() {
    return (
        <div className="header-container">
            <div className="header-boxes-con">
                {/* Left */}
                <div className="hero-image">
                    <Image 
                        src="/banner-bg.png" // Ensure the image path is correct in the public folder
                        alt="Portfolio" 
                        width={200} 
                        height={200} 
                        className="header-image"
                    />
                    <div className="social-icon">
                        <FaYoutube className="s-icon1"/>
                        <FaLinkedin className="s-icon2"/>
                        <BsGithub className="s-icon3"/>
                    </div>
                </div>
                {/* Right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About Us</h1>
                    <p>
                        Building dynamic web apps with responsive designs to enhance user experience. Focused on creating seamless and interactive interfaces using the latest frontend technologies.
                        Passionate front-end developer with expertise in creating responsive, visually appealing, and interactive user interfaces. Focused on functionality, user experience, and performance optimization. Experienced in animations and dynamic content for enhanced design.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
