import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SiHackerrank } from "react-icons/si";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email:</LinkTitle>
          <LinkItem href="dixitudit26@gmail.com">
            dixitudit26@gmail.com
          </LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>A glimpse into my creative universe</Slogan>
          </CompanyContainer>
          <SocialContainer>
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
          </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
