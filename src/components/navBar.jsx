import React from "react";
import { useState, useEffect } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import DownloadIcon from "@mui/icons-material/Download";
import qrCode from "./../assets/qrCode.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkMode from "./darkMode";
import info from "./../info.json";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { basics } = info;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isOpen, setIsOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };
  const handleMenu = () => {
    setIsOpen(false)
  }
  const handleSocials = () => {
    socialsOpen ? setSocialsOpen(false) : setSocialsOpen(true);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <div className="nav">
      {
        isMobile ? 
        (
        <>
          <div className="nav-logo">
            <Link to={"/"} onClick={handleMenu}>
              <span className="logo-text">{basics.name}</span>
            </Link>
          </div>
          <div className="burguer-menu">
            <div className="burger-button" onClick={() => setIsOpen(true)}>
              <MenuIcon className="burger-icon" />
            </div>
            <div
              className="burger-content-container"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <div className="burger-content">
                <button
                  className="close-button"
                  onClick={handleMenu}
                >
                  <CloseIcon />
                </button>
                <div className="nav-handlers-burguer">
                  <div className="nav-links-burguer">
                    <ul>
                      <li>
                      <Link to={"/about"} onClick={handleMenu}>
                        <span>Sobre mí</span>
                      </Link>
                      </li>
                      <li>
                      <a href={`mailto:${basics.email}`}>
                        <span>Contacto</span>
                      </a>
                      </li>
                    </ul>
                  </div>

                  <div className="socials-burguer">
                    <div className="socials-icons">
                      <div className="icon">
                        <GitHubIcon />
                      </div>
                      <div className="icon">
                        <LinkedInIcon />
                      </div>
                      <div className="icon">
                        <i className="fa-brands brand-behance fa-square-behance"></i>
                      </div>
                      <div className="darkmode-burguer icon">
                        <DarkMode />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-logo">
            <Link to={"/"} onClick={handleMenu}>
              <span className="logo-text">{basics.name}</span>
            </Link>
          </div>
          <div className="nav-handlers">
            <div className="nav-links">
              <ul>
              
                      <li className="nav-item">
                  <Link to={"/about"}>
                    <span>Sobre mí</span>
                  </Link>
                </li>
                <li className="nav-item">
                <a href={`mailto:${basics.email}?subject="Tengamos una charla"&body="Acabo de ver tu portfolio y me gustaría comentarte un proyecto en el que podrías estar interesado"`}>
                        <span>Contacto</span>
                </a>
                </li>
              </ul>
            </div>
            {
              !socialsOpen 
            ? (
            <div className="socials">
                <LanguageIcon onClick={handleSocials} />
            </div>
              ) : (
            <div className="socials-hidden">
                  <div className="icon-hidden">
                    <CloseIcon onClick={handleSocials}/>
                  </div>
                  <div className="icon-hidden">
                    <a
                      href="https://github.com/Magodelva25"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                  <div className="icon-hidden">
                    <a
                      href="https://www.linkedin.com/in/mangodev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="icon-hidden">
                    <a
                      href="https://www.behance.net/mangodev_1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands brand-behance fa-square-behance"></i>
                    </a>
                  </div>
                </div>
              )
            }
            <div className="darkmode">
              <DarkMode />
            </div>
            <div className="download">
              <a href="/Manuel-Gonzalez_cv_2025.pdf" download="Manuel-Gonzalez_cv_2025">
                <DownloadIcon />
              </a>
            </div>
            <div className="qr-code">
            <a href={`mailto:${basics.email}?subject="Tengamos una charla"&body="Acabo de ver tu portfolio y me gustaría comentarte un proyecto en el que podrías estar interesado"`}>
              <img
                src={qrCode}
                alt="qr-code"
                style={{ width: "50px", height: "50px", paddingTop:"4px" }}
              
              />
            </a>

            </div>
            </div>
        </>
            
      )}
      </div>
    </> 
  );
};

export default NavBar;
