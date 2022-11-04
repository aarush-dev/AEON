import React from "react";
import styled from "./Benefits.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Button from "../helpers/button/Button";

const Benefits = () => {
  const heading = (
    <>
      GENERAL <span>RULES</span> AND <span>GUIDELINES</span>
    </>
  );
  return (
    <section className={styled.benefits__container}>
      <div className={styled.benefits}>
        <Container className={styled.benefits__content}>
          <article className={styled["benefits__content--intro"]}>
            <Heading className="medium" heading={heading} />
            <p className="text">
              <li>The date of the event is 30th November 2022.</li>
              <li>Only the schools that participate in a minimum of 8 events will be eligible for the Overall
Winner’s Trophy.</li>

<li>Only 1 team is allowed per event from a school.</li>
<li>The events have been divided into 3 categories- OFFLINE, HYBRID, ONLINE.</li>
<li>The schedule for the event will be available at <a>www.</a></li>
<li>For any queries or clarifications please contact us at <a>tis.mediaexperts@gmail.com</a></li>
            </p>
          </article>
        </Container>

        <figure className={styled.benefits__image}>
          <img
            src="https://raw.githubusercontent.com/aarush-dev/AEON/main/src/assets/robo.jpg"
          />
        </figure>
      </div>
    </section>
  );
};

export default Benefits;
