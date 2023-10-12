import React, { useState } from "react";
import "./SplashPage.css";
import logo from "./images/Originals logo white.png";
import Healthybox from "./images/Healthy Box.png";

const SplashPage = () => {
  const vacationStartDate = new Date("November 05, 2023");
  const vacationEndDate = new Date("December 09, 2023");
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = vacationEndDate - currentDate;

  // Convert the difference to days
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${Healthybox})` }}
    >
      {/* Hidden image for loading event */}
      <img
        src={Healthybox}
        alt="background"
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
              But don't worry, we've left our menu open just for you to explore
              and plan your next delicious meal with us! 😋
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
            <a
              href="http://www.originalsfood.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="explore-button"
            >
              Explore our Menu
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashPage;
