import "../style/contect.css";

function Contect() {
    return (
        <main className="contect-main"> 
            <div className="form-container">
                <h1 className="con-title">Contact Us</h1>
                <form action="" className="form">
                    <input type="text" placeholder="Enter your Name" className="input" />
                    <input type="text" placeholder="Your email" className="input" />
                    <input type="text" placeholder="Your Message" className="input msg" />
                    <button type="submit" className="btn-sub">Submit</button>
                </form>
            </div>
        </main>
    );
}

export default Contect;
