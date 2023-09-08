import "./Header.css";
import resume from "../../assets/pdfs/Joey_Chan_Resume.pdf";

const Header = () => {
  function scrollToSection(sectionName: string) {
    const section = document.querySelector("#" + sectionName);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <div className="header__container">
        <div className="header__logo">
          <h1>Joey Chan</h1>
        </div>
        <div className="header__nav">
          <ul>
            <li
              onClick={() => scrollToSection("aboutme")}
            >
              About Me
            </li>
            <li
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </li>
            <li
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="header__button">
          <a href={resume} download>
            <button>My Resume</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
