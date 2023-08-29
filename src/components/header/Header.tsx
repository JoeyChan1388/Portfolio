import "./Header.css";
import resume from "../../assets/pdfs/Joey_Chan_Resume.pdf";

const Header = () => {
  return (
    <>
      <div className="header__container">
        <div className="header__logo">
          <h1>Joey Chan</h1>
        </div>
        <div className="header__nav">
          <ul>
            <li onClick={()=> {
              window.scrollTo({top: 1150, behavior: 'smooth'});
            }}>About Me</li>
            <li onClick={()=> {
              window.scrollTo({top: 2650, behavior: 'smooth'});
            }}>Skills</li>
            <li onClick={()=> {
              window.scrollTo({top: 3550, behavior: 'smooth'});
            }}>Projects</li>
            <li onClick={()=> {
              window.scrollTo({top: 5500, behavior: 'smooth'});
            }}>Contact</li>
          </ul>
        </div>
        <div className="header__button">
            <a href={resume} download><button>My Resume</button></a> 
        </div>
      </div>
    </>
  );
};

export default Header;
