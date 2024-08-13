import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Typist from "react-typist";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <span style={{ whiteSpace: "nowrap" }}>
          Hi! I'm <Typist show={false}>Udit Narayan Dixit</Typist>
        </span>
      </SectionTitle>
      <br />
      <SectionText>
        Having Experties in JavaScript, React.js, Node.js, Express.js, MongoDB,
        Python, Java, C++, Data Structures and Algorithms, JWT, Docker,
        Kubernetes, PostgreSql, MySql, Next.js, JSON, NPM, Insomnia, RESTful
        APIs, Debugging, GIT, GitHub, HTML, CSS, Tailwind CSS and Much more.
      </SectionText>
      <Button
        onClick={() => {
          window.open("https://www.linkedin.com/in/uditndixit/", "_blank");
        }}
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
