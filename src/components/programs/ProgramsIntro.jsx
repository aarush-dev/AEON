import React from "react";
import styled from "./ProgramsIntro.module.css";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const ProgramsIntro = () => {
  const heading = (
    <>
    </>
  );

  return (
    <section className={styled.intro} id="programs">
      <Container className={styled.intro__content}>
        <article className={styled["intro__content--info"]}>
          <Heading className="medium" heading={heading} />
          

         
          
        </article>

        
      </Container>
    </section>
  );
};

export default ProgramsIntro;
