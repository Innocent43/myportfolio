import React from "react";

function About() {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>

      <section className="about-intro">
        <h3>My Story</h3>
        <p>
          I'm Innocent, a focused web developer based in Awka, Nigeria. My
          passion for technology drives me to build clean, functional, and
          user-friendly digital experiences. I love turning lines of code into
          live, visual projects that solve real problems.
        </p>
      </section>

      <section className="about-skills">
        <h3>Core Toolkit</h3>
        <p>
          I work with the core foundations of modern web development. My current
          stack includes HTML5, CSS3, JavaScript (ES6+), and React. I build
          responsive interfaces that look great on both mobile screens and
          desktops.
        </p>
      </section>

      <section className="about-goals">
        <h3>My Journey & Goals</h3>
        <p>
          Right now, I am dedicated to sharpening my frontend skills by building
          practical, real-world web applications. My goal is to transition into
          a professional software engineering career where I can add value,
          collaborate with teams, and keep learning new tools.
        </p>
      </section>
    </div>
  );
}

export default About;
