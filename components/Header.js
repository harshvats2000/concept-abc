import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/#about",
    label: "About",
  },
  {
    to: "/#vision",
    label: "Vision",
  },
  {
    to: "/programs",
    label: "Programs",
  },
  {
    to: "/gallery",
    label: "Gallery",
  },
  {
    to: "/updates",
    label: "Updates",
  },
  {
    to: "/patrons",
    label: "Patrons",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];

const Header = () => {
  React.useEffect(() => {
    const el = document.getElementById("header-nav");
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 768) {
        el.style.display = "flex";
      } else {
        el.style.display = "none";
      }
    });
  }, []);

  const toggleMenu = () => {
    const el = document.getElementById("header-nav");
    if (el.style.display === "flex") {
      el.style.display = "none";
    } else {
      el.style.display = "flex";
    }
  };

  const toggleMenuMobile = () => {
    if (window.innerWidth < 768) {
      toggleMenu();
    }
  };

  return (
    <Wrapper>
      <Container>
        <Logo>
          <Image src={logo} alt="logo" />
        </Logo>

        <MenuIcon onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </MenuIcon>

        <Nav id="header-nav">
          {links.map((link) => (
            <li key={link.label} onClick={toggleMenuMobile}>
              <Link href={link.to}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  box-shadow: 0 4px 8px 0 rgb(0, 0, 0, 0.12);
  position: relative;
`;

const Container = styled.div`
  padding: 0 10px;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 650px;
  align-items: center;
  > li {
    list-style: none;
    > a {
      color: #616161;
      display: grid;
      place-items: center;
      height: 80px;
      text-decoration: none;
      &:hover {
        color: red;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    width: 100vw;
    top: 60px;
    z-index: 10;
    background: white;
    left: 0;
    padding: 15px 0;
    box-shadow: 0 7px 8px 0 rgb(0, 0, 0, 0.12);
    > li {
      > a {
        padding: 5px;
        display: block;
        font-size: 20px;
        height: 60px;
      }
    }
  }
`;

const MenuIcon = styled.div`
  width: 40px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    height: 3px;
    border-radius: 10px;
    width: 100%;
    background-color: black;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Logo = styled.div`
  position: relative;
  width: 150px;

  @media (max-width: 768px) {
    margin: 6px 0;
    width: 120px;
  }
`;
