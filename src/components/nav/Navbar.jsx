import React, { useEffect, useState } from "react";
import styled from "./Navbar.module.css";
import { RiMenuLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import Menu from "./Menu";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../helpers/button/Button";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hash } = useLocation();

  // toggle menu state
  const handleMenu = () => setIsOpen((state) => !state);

  //close menu when hash changes
  useEffect(() => {
    setIsOpen(false);
  }, [hash]);

  return (
    <>
      <nav className={styled.nav}>
        <div className={styled.nav__logo}>
          <p>Æon 5.0</p>
        </div>



        <ul className={styled.nav__items}>
         
        </ul>

        <div className={styled.nav__button}>
        
        </div>
      </nav>

      {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
