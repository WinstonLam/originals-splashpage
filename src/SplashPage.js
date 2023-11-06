import React, { useState } from "react";
import "./SplashPage.css";
import logo from "./images/Originals logo white.png";

const SplashPage = () => {
  const vacationStartDate = new Date("November 05, 2023");
  const vacationEndDate = new Date("December 09, 2023");
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = vacationEndDate - currentDate;

  // Convert the difference to days
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

  const hostedHealthybox =
    "https://uploads-ssl.webflow.com/5fdd088e571ea0142dedc7eb/5fe0819e048e9350985260d3_Healthy%20Box%5B5513%5D.png";

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
              We're taking a little break and will be on vacation from
              <br />
              <b>
                <span className="highlight">
                  {vacationStartDate.toDateString()} until{" "}
                  {vacationEndDate.toDateString()}
                </span>
                <br />
              </b>
              We are sorry for this inconvinience and thank you for your
              understanding! 🙏 <br />
              But don't worry, we've got exciting deals ready once we are back
              😋
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
            <button
              className="explore-button"
              onClick={() => window.open(require("./deals.pdf"), "_blank")}
            >
              Check out Deals
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashPage;
