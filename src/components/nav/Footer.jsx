import React from "react";
import styled from "./Footer.module.css";
import { HashLink as Link } from "react-router-hash-link";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styled.footer__container}>
      <Container className={styled.footer}>


          <ul className={styled.footer__contact}>
            <div className={styled["footer__contact--info"]}>
              <h3>EMAIL</h3>
              <li>
                <p>TIME</p>
                <p>tis.mediaexperts@gmail.com</p>
              </li>


            </div>

            <div className={styled["footer__contact--info"]}>
              <h3>PHONE</h3>
              <li>
                <p>MANAN ARORA</p>
                <p>+91 99103 73557</p>
              </li>

              <li>
                <p>DIVYA LAMBDA</p>
                <p>+91 88266 11978</p>
              </li>
            </div>
          </ul>
      </Container>

      <ul className={styled.footer__logo}>
       
      </ul>
    </footer>
  );
};

export default Footer;
