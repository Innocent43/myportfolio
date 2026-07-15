import React from "react";
import pho3 from "../assets/pho3.mp4";
import About from "./About";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="home-ct">
        <div>
          <h1>Hi, I'm Innocent</h1>
          <p>
            I build high-performance web applications with clean code and
            intuitive user interfaces. Specializing in React ecosystems to turn
            bright ideas into digital realities.
          </p>
          <section className="specialties-section">
            <h3>What I Bring to the Table</h3>

            <h3>Responsive Web Design</h3>
            <p>
              Creating fluid layout systems that look beautiful on mobile,
              tablet, and desktop screens.
            </p>

            <h3>Component Architecture</h3>
            <p>
              Writing reusable, modular, and easily maintainable React
              components for scalable growth.
            </p>

            <h3>Performance Optimization</h3>
            <p>
              Minimizing load times and maximizing speed for lightning-fast user
              interactions.
            </p>
          </section>
        </div>

        <div className="home-Vd">
          <video autoPlay loop playsInline muted>
            <source src={pho3} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Home;
