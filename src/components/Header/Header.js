import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiHackerrank } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import { FaImagePortrait } from "react-icons/fa6";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Container>
      <Div1>
        <Link href="/#header">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <FaImagePortrait size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="/#header">
            <NavLink>Home</NavLink>
          </Link>
        </li>

        <li>
          <Link href="/#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        {!isMobile && (
          <li>
            <Link href="/#tech">
              <NavLink>Technologies</NavLink>
            </Link>
          </li>
        )}
        {/* {!isMobile && ( */}
        <li>
          <Link href="/#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        {/*)}*/}
        {/* <li>
          <Link href="/services">
            <NavLink>Services</NavLink>
          </Link>
        </li> */}
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/dixitudit/" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/uditndixit"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.hackerrank.com/profile/dixitudit26"
          target="_blank"
        >
          <SiHackerrank size="2.5rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
