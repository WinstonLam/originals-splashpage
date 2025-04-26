import React, { useState } from "react";
import "./SplashPage.css";
import logo from "./images/logo.png";
import closed from "./images/closed.png"

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
          <div className="closed">
            <img src={closed} alt="closed logo" />
          </div>

          <div className="description">
            <h2>
              Hey there, Welcome to{" "}
              <span className="highlight">Originals 本来 !</span>
            </h2>
            <p>
              After 5 wonderful years,         <br />Originals
              will be closing its chapter. We are truly
              honored and have <br /> greatly enjoyed serving
              you as our loyal guests!<br />

              Our last day of opening in store will be:
              <br />

              <br />
              <span className="highlight">
                <b>
                  Friday, 25-04-2025<br />
                </b>
              </span>
              <br />

              We want to thank you for your understanding

              and hope <br /> to be of service to you one

              last time before we go.🙏
            </p>
            {/* <p>
              Can’t wait to see you soon and share our original, wok creations
              with you{" "}
              <b>
                <span className="highlight">
                  in {daysLeft} {daysLeft === 1 ? "day" : "days"} !
                </span>
              </b>
              🗓️
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashPage;
