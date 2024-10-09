import React from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import bgform from "../assets/bgform.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const ConsultantComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div
          className="col-lg-6 col-md-12 d-flex flex-column justify-content-center"
          style={{
            backgroundColor: "#042d45",
            padding: "20px",
            minHeight: "100vh",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              color: "white",
              maxWidth: "90%",
              margin: "auto",
            }}
          >
            <h5
              className="mb-3"
              style={{
                border: "3px solid #446071",
                borderRadius: "30px",
                padding: "10px 20px",
                fontSize: "18px",
                display: "inline-block",
              }}
            >
              Welcome to Businezz X
            </h5>
            <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
              Join us in growing
            </h1>
            <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
              your{" "}
              <span style={{ borderBottom: "4px solid #026cb7" }}>
                business
              </span>
              .
            </h1>
          </div>
          <div
            className="mt-4"
            style={{
              borderTop: "1px solid #5c748f",
              paddingTop: "30px",
              width: "75%",
              margin: "auto",
            }}
          >
            <h3
              className="lead text-white"
              style={{
                fontSize: "1.2rem",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Elevate your business with Businezz X, a professional Webflow
              template.
            </h3>
            <div className="text-left">
              <button
                className="mt-4 hoverablecontact"
                style={{
                  borderRadius: "30px",
                  padding: "10px 20px",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Contact us <HiMiniArrowLongRight style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 p-0" style={{ minHeight: "100vh" }}>
          <div
            style={{
              backgroundImage: `url(${bgform})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="bg-white p-5"
              style={{
                width: "100%",
                maxWidth: "500px",
              }}
            >
              <h6
                className="text-left mb-3"
                style={{
                  color: "#042d45",
                  border: "2px solid #042d45",
                  borderRadius: "30px",
                  padding: "8px 14px",
                  fontWeight: "bold",
                  display: "inline-block",
                }}
              >
                Book your free consultation
              </h6>
              <h2
                className="text-left mb-4"
                style={{ color: "#042d45", fontWeight: "bold" }}
              >
                Get a free consultation
              </h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Name"
                      style={{
                        border: "2px solid #cedae6",
                        fontWeight: "bold",
                        color: "#042d45",
                        padding: "10px",
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Email"
                      style={{
                        border: "2px solid #cedae6",
                        fontWeight: "bold",
                        color: "#042d45",
                        padding: "10px",
                      }}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control custom-input"
                    rows="4"
                    placeholder="Please type your message here..."
                    style={{
                      border: "2px solid #cedae6",
                      fontWeight: "bold",
                      color: "#042d45",
                      padding: "10px",
                    }}
                  ></textarea>
                </div>
                <button
                  className="hoverablesubmit w-100"
                  style={{
                    borderRadius: "5px",
                    padding: "12px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Get in Touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantComponent;
