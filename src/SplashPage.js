import React, { useState } from "react";
import "./SplashPage.css";
import logo from "./images/logo-christmas.png";
import Snowfall from "react-snowfall";

const SplashPage = () => {
  const vacationStartDate = new Date("December 7, 2024");
  const vacationEndDate = new Date("December 31, 2024");
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = vacationEndDate - currentDate;

  // Convert the difference to days
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

  const hostedHealthybox =
    "https://uploads-ssl.webflow.com/5fdd088e571ea0142dedc7eb/658890cb80101def93b3dd17_christmas%20background.webp";

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${hostedHealthybox})` }}
    >
      <Snowfall />
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
            <a
              href="http://www.originalsfood.nl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="Originals logo" />
            </a>
          </div>

          <div className="description">
            <h2>
              Hey there, Welcome to{" "}
              <span className="highlight">Originals 本来 !</span>
            </h2>
            <p>
              Happy Holidays! 🎄🎁
              <br />
              During this year's holiday season, we are closed on:
              <br />
              <span className="highlight">
                <b>
                  Saturday December 7th <br />
                </b>
              </span>
              until <br />
              <span className="highlight">
                <b>
                  Tuesday December 31th <br />
                </b>
              </span>
              We are sorry for this inconvinience and thank you for your
              understanding! 🙏 <br />
            </p>
            <p>
              Can’t wait to see you soon and share our original, wok creations
              with you{" "}
              <b>
                <span className="highlight">
                  in {daysLeft} {daysLeft === 1 ? "day" : "days"} !
                </span>
              </b>
              🗓️
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashPage;
