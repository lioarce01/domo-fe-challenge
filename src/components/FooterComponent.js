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
      <div
        className="container"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "10px",
        }}
      >
        <div>
          <p style={{ fontWeight: "normal" }}>
            El sitio web fue creado con react + react bootstrap, utilizando
            componentes, clases de bootstrap, css e inline-css. Se recreo tal
            cual con algunos agregados + responsive design en la mayoria de los
            dispositivos.
          </p>
        </div>
        <div>
          <h5 style={{ margin: "10px 0" }}>Connect with me</h5>
          <a
            href="https://www.linkedin.com/in/lionel-arce/"
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
            href="https://github.com/lioarce01/domo-fe-challenge"
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
