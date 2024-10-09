import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
        position: "relative",
        bottom: "0",
        width: "100%",
      }}
    >
      <div className="container">
        <div>
          <h5 style={{ margin: "10px 0" }}>Connect with me</h5>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 15px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00A0DC")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 15px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#333")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
