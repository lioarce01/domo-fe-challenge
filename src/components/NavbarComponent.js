import React, { useState } from "react";
import { IoMdArrowDown } from "react-icons/io";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav
      className="navbar navbar-expand-xl"
      style={{
        backgroundColor: "#fff",
        width: "100%",
        position: "fixed",
        top: "0",
        zIndex: "10",
        // paddingBottom: "20px",
      }}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="#home"
          onClick={() => handleClick("home")}
          style={{
            borderRight: "2px solid #cedae6",
            paddingRight: "20px",
            color: "#042d45",
          }}
        >
          Businezz X
        </a>
        <button
          className="navbar-toggler"
          onClick={() => setIsCollapsed(!isCollapsed)}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* menu colapsable*/}
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          style={{
            marginTop: "10px",
            marginBottom: "10px",
          }}
          id="navbarNav"
        >
          <ul
            className="navbar-nav me-auto"
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "#042d45",
            }}
          >
            {["home", "about", "pages", "packages", "contact", "cart"].map(
              (link) => (
                <li
                  className="nav-item"
                  key={link}
                  style={{
                    padding: "10px",
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <a
                    className={`nav-link ${
                      activeLink === link ? "active" : ""
                    }`}
                    href={`#${link}`}
                    onClick={() => handleClick(link)}
                    style={{ position: "relative", color: "#042d45" }}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                    {link === "pages" && (
                      <IoMdArrowDown
                        style={{ fontSize: "15px", marginLeft: "5px" }}
                      />
                    )}
                    {link === "cart" && "[0]"}
                    <span
                      className={`border-bottom border-primary transition-all duration-200 ${
                        activeLink === link ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        position: "absolute",
                        bottom: "-5px",
                        left: "0",
                        right: "0",
                        height: "2px",
                        backgroundColor: "#026cb7",
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    />
                  </a>
                </li>
              )
            )}
          </ul>
          <div>
            <button
              className="hoverablenavbtn"
              style={{
                borderRadius: "30px",
                paddingInline: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Free Consultation{" "}
              <HiMiniArrowLongRight style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
