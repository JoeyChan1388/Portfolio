import "./App.css";

import { useEffect } from "react";

import Header from "./components/header/Header";
import Project from "./components/project/project";

//@ts-expect-error
import AOS from "aos";
import "aos/dist/aos.css";

import renderUI from "./assets/images/render-ui.png";
import niceWeather from "./assets/images/nice-weather.png";
import discordClone from "./assets/images/discord-clone.png";
import hotRides from "./assets/images/hot-rides.png";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="portfolio__container">
        <Header />
        <div className="portfolio__hero">
          <div className="portfolio__hero__text">
            <h1 data-aos="fade-up">Joey Chan</h1>
            <h2 data-aos="fade-up" className="accent">
              Web Developer
            </h2>
          </div>
        </div>
        <div className="portfolio__about">
          <h2 id='aboutme' data-aos="fade-up">About Me</h2>
          <div className="portfolio__about__text">
            <h3 className="accent" data-aos="fade-up">
              Introduction
            </h3>
            <p data-aos="fade-up">
              Hello There! I'm Joey Chan, a passionate and dedicated
              professional in the field of computer programming and analysis.
              With a solid foundation from the Durham College Computer
              Programmer and Analysis Program, I've honed my skills and
              knowledge to thrive in web development industry.
            </p>
          </div>
          <div className="portfolio__about__text">
            <h3 className="accent" data-aos="fade-up">
              My Academic Journey
            </h3>
            <p data-aos="fade-up">
              My interest in web development came from my love of programming
              video games back in secondary school. Beginning in grade 10, I
              enrolled in computer science since I always had an interest in
              computers and knew my way around an operating system. It was there
              where I started coding some real projects for the first time using
              C# and I was instantly hooked. <br /> <br />
              Initially after I graduated, I was going to go straight into
              working, however a friend told me about the program they enrolled
              in; Computer Programming and Analysis, and the rest is history!{" "}
              <br /> <br /> Throughout the program I learned a variety of
              programming languages, honed my communication and teamwork skills,
              as well as worked on a few large group projects.
            </p>
          </div>
          <div className="portfolio__about__text">
            <h3 className="accent" data-aos="fade-up">
              My Professional Journey
            </h3>
            <p data-aos="fade-up">
              <span style={{ fontWeight: 400 }}>Internship</span> <br />
              In the graduating year of my college program, I landed in
              internship with Render Developments, where I worked with the
              senior developer along with the co-founders to update the styling
              of their 360 degree panoramic tours. During this internship it was
              where I developed a passion for designing user interfaces using
              programs like Figma as well as coding them.
              <br /> <br />
              <span style={{ fontWeight: 400 }}>Part-Time</span> <br />
              The fall after I graduated, Render Developments brought me on as a
              part-time employee where I had a much larger role, I developed
              entirely new tours to their clients’ specifications as well as
              developed a full-stack editor application where clients could make
              their own tours from scratch without writing a single line of
              code.
            </p>
          </div>
        </div>
        <div  className="portfolio__skills">
          <h2 id="skills" data-aos="fade-up">Skills</h2>
          <h3 data-aos="fade-up">
            These are some of the skills I am familiar with.
          </h3>
          <div className="portfolio__skills__list">
            <h3 data-aos="fade-up">Front End</h3>
            <div className="portfolio__skills__list__items">
              <div
                data-aos="fade-left"
                data-aos-delay="100"
                className="skill__item"
              >
                HTML
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="skill__item"
              >
                CSS
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="skill__item"
              >
                JavaScript
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="400"
                className="skill__item"
              >
                TypeScript
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                className="skill__item"
              >
                React
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                className="skill__item"
              >
                Vue
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="700"
                className="skill__item"
              >
                Angular
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="800"
                className="skill__item"
              >
                Asynchronous Programming
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="900"
                className="skill__item"
              >
                APIs
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="1000"
                className="skill__item"
              >
                Web VR
              </div>
            </div>
          </div>
          <div className="portfolio__skills__list">
            <h3 data-aos="fade-up">Back End</h3>
            <div className="portfolio__skills__list__items" data-aos="fade-up">
              <div
                data-aos="fade-left"
                data-aos-delay="100"
                className="skill__item"
              >
                Node.js
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="skill__item"
              >
                Express
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="skill__item"
              >
                PHP
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="skill__item"
              >
                Java
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="skill__item"
              >
                .NET
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="400"
                className="skill__item"
              >
                MongoDB
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                className="skill__item"
              >
                MySQL
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                className="skill__item"
              >
                Postgres
              </div>
            </div>
          </div>
          <div className="portfolio__skills__list">
            <h3 data-aos="fade-up">Other Skills</h3>
            <div className="portfolio__skills__list__items" data-aos="fade-up">
              <div
                data-aos="fade-left"
                data-aos-delay="100"
                className="skill__item"
              >
                Git
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="skill__item"
              >
                Github
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                className="skill__item"
              >
                Figma
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="400"
                className="skill__item"
              >
                Wordpress
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="500"
                className="skill__item"
              >
                Agile
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="600"
                className="skill__item"
              >
                SCRUM
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="700"
                className="skill__item"
              >
                SDLC
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="800"
                className="skill__item"
              >
                MS Office
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="900"
                className="skill__item"
              >
                Google Cloud Platform
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="1000"
                className="skill__item"
              >
                PlayCanvas
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__projects">
          <h2 id="projects" data-aos="fade-up">Projects</h2>
          <h3 data-aos="fade-up">
            These are some of the projects I've worked on.
          </h3>
          <div className="portfolio__projects__list">
            <Project
              img={renderUI}
              name="Render Developments Tour Editor"
              description="The Render Developments team required an interface so clients could make their own customizable 360 degree panoramic tours without coding their own website. This website allows them to do just that with an intuitive user interface, they can upload images and icons and customize every part of their tours. Created using React TS and Laravel on the backend."
              url={undefined}
            />
            <Project
              img={niceWeather}
              name="Nice Weather"
              description="A weather app which makes calls to a weather API depending on the location the user inputs. Has a randomized animated background depending on the weather conditions. Created using React and alot of CSS."
              url={"https://github.com/JoeyChan1388/nice-weather"}
            />
            <Project
              img={discordClone}
              name="Discord Clone UI"
              description="A clone of the Discord UI where you can post to and create new servers! Uses Firebase for authentication and storage, created using React and Firebase"
              url={"https://github.com/JoeyChan1388/discord-clone"}
            />
            <Project
              img={hotRides}
              name="Hot Rides Auto Expo Website and Database System"
              description="A React app and database system which users can use to create and keep track of their own car exposition events. Keeps track of thing such as registrations, donations and sponsorships. Appropriate privileges are given to users depending on their role. Created using React, Node.js and MySQL. Created with a team of 3 for my college final, site taken down but will answer questions if you are curious about it!"
              url={"https://github.com/JoeyChan1388/Hot-Rides-Auto-Expo-DB"}
            />
          </div>
        </div>
        <div className="portfolio__contact">
          <h2 id="contact" data-aos="fade-up">Want to contact me?</h2>
          <h3 data-aos="fade-up">
            {" "}
            Here are some ways you can reach out to me!{" "}
          </h3>
          <div className="portfolio__contact__list">
            <div data-aos="fade-up" className="portfolio__contact__list__item">
              <h3>
                <span className="accent">
                  <i className="fa-solid fa-envelope"></i> Email
                </span>
              </h3>
              <p>
                Email me at Joey_Chan1388@Outlook.com, <br /> this is the best
                way to reach me!
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="portfolio__contact__list__item"
            >
              <h3>
                <span className="accent">
                  <i className="fa-brands fa-linkedin"></i> LinkedIn
                </span>
              </h3>
              <p>
                Find my LinkedIn Account at
                https://www.linkedin.com/in/joeychancpa/
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="portfolio__contact__list__item"
            >
              <h3>
                <span className="accent">
                  <i className="fa-brands fa-github"></i> Github
                </span>
              </h3>
              <p>
                Take a look at my GitHub account to see some code ive written
                https://github.com/JoeyChan1388
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="decorations__container">
        <div className="decorations__circle" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" style={{top: '600px', right: '-250px'}}></div>
        <div className="decorations__circle circle__red" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" style={{top: '1500px', left: '-250px'}}></div>
        <div className="decorations__circle circle__red" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000"  style={{top: '2500px', right: '-250px'}}></div>
        <div className="decorations__circle" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000"  style={{top: '3400px', left: '-250px'}}></div>
        <div className="decorations__circle circle__red" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" style={{top: '4500px', right: '-250px'}}></div>
        <div className="decorations__circle" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" style={{top: '5500px', left: '-250px'}}></div>
      </div>
    </>
  );
}

export default App;
