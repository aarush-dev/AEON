import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import styled from "./AboutIntro.module.css";

const AboutIntro = () => {
  const heading = (
    <>
    </>
  );
  return (
    <section className={styled.intro} id="about">
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={heading} />
          <p className="text">
This competition is organised by
The Indian School’s tech society, The Indianites Media Experts or
T.I.M.E. We endeavour to make this competition an enjoyable learning
experience for all participants and the audience while promoting a
spirit of healthy competition.
          </p>

          <p className="text">
            We look forward to a keen contest of young technology
enthusiasts who will offer a struggle to the judges, as the latter attempt to make their choices
from amongst the very best!
          </p>

        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
