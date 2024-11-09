import React, { useState } from "react";
import "./SplashPage2.css";
import logo from "./images/logo.png";
import maintanence from "./images/maintanence.gif";

const SplashPage = () => {
  const hostedHealthybox =
    "https://uploads-ssl.webflow.com/5fdd088e571ea0142dedc7eb/658890cb80101def93b3dd17_christmas%20background.webp";

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${hostedHealthybox})` }}
    >
      {/* Hidden image for loading event */}
      <img
        src={hostedHealthybox}
        alt="background preload"
        style={{ display: "none" }}
        onLoad={() => setImageLoaded(true)}
      />

      {imageLoaded && (
        <div className="content">
          <div className="logo">
            <img src={logo} alt="Originals logo" />
          </div>
          <div className="logo-gears">
            <img src={maintanence} alt="maintanence logo" />
          </div>

          <div className="description">
            <h2>
              Hey there, Welcome to{" "}
              <span className="highlight">Originals 本来 !</span>
            </h2>
            <p>
              <br />
              We'd like to inform you that we unfortunately are closed for our
              yearly maintanence on:
              <br />
              <span className="highlight">
                <b>
                  Monday November 11th 🗓️
                  <br />
                </b>
              </span>
              We are sorry for this inconvinience and thank you for your
              understanding! 🙏 <br />
            </p>
            <p>
              We look forward to welcoming you back again on:
              <br />
              <b>
                <span className="highlight">
                  <b>
                    Wednesday November 11th 🗓️
                    <br />
                  </b>
                </span>
              </b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashPage;
