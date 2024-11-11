import "../style/education.css";

function Education() {
    return (
        <main className="edu-main">
            <div className="edu-text">
                <h1>Education</h1>
                <p>
                    Saira Nadeem is currently in her 3rd year of study, focusing on enhancing her skills in front-end development.
                    She is gaining hands-on experience with technologies like React, TypeScript, and CSS. Passionate about learning
                    and improving, Saira is eager to apply her knowledge to real-world projects.
                </p>
            </div>
            <div className="box-con-edu">
                {/* University of Karachi */}
                <div className="edu-box">
                    <h2>University of Karachi</h2>
                    <span>3rd Year Student</span>
                </div>
                {/* Governor's Initiative */}
                <div className="edu-box">
        
                </div>
                {/* Web Development Certificate */}
                <div className="edu-box">
                    <h2>Web Development Training</h2>
                    <span>Certificate of Completion</span>
                </div>
            </div>
        </main>
    );
}

export default Education;
