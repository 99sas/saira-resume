import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";

function Services() {
    return (
        <main className="main">
            <div className="ser-container">
                {/* Top div */}
                <div className="top-div-ser">
                    <h2 className="title-ser">My Services</h2>
                    <p className="des-ser">
                        Saira Nadeem offers front-end development services, creating responsive and engaging web interfaces 
                        using React, TypeScript, and CSS. She specializes in building dynamic components and seamless user 
                        experiences, with added expertise in animations and UI/UX 
                        optimization. Her services also include troubleshooting, performance 
                        enhancements, and custom design integration to meet client-specific needs.
                    </p>
                    {/* Image from the public folder */}

                </div>

                {/* Bottom div */}
                <div className="boxes-con">
                    <div className="box">
                        <FaLaptopCode className="ser-icon" />
                        <h3>Web Development</h3>
                        <span>Blog, E-commerce</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Services;
