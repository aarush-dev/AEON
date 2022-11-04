import React from "react";
import styled from "./Hero.module.css";
import Navbar from "../nav/Navbar";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const Hero = () => {
  const heading = (
    <>
      THE <span>TIME</span> HAS<span> COME!</span>
    </>
  );  

  return (
    <section className={styled.hero} id="home">
      <Container>
        <Navbar />

        <div className={styled["hero__content--container"]}>
          <article className={styled.hero__content}>
            <Heading className="large" heading={heading} />
            <p></p>
            <p className="text">
              The Indian School is delighted to host the fifth iteration of its
biennial computer technology, creativity and gaming symposium,
AEON 5.0, on 30th November.
            </p>


          </article>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
