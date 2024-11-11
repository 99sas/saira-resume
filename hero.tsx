import Image from "next/image";
import "../style/hero.css"; // Adjust this path if necessary

function Hero() {
    return (
        <div className="header-container">
            <div className="header-boxes-con">
                {/* Left */}
                <div className="hero-image">
                    <Image 
                        src="/banner-bg.png" // Ensure this image is in the public folder
                        alt="Portfolio" 
                        width={200} 
                        height={200} 
                        className="header-image"
                    />
                </div>
                {/* Right */}
                <div className="hero-right-div">
                    <h1>Saira Nadeem</h1>  
                    <p>I&apos;m a frontend developer.</p>
                    
                    <p>
                        Passionate front-end developer with expertise in creating responsive, visually appealing, and interactive
                        user interfaces. Focused on functionality, user experience, and performance optimization. Experienced in 
                        animations and dynamic content for enhanced design.
                    </p>
                    <button className="hero-but">HIRE ME</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
