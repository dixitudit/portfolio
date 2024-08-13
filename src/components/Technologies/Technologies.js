import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { SiTensorflow } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of Technologies in web development as well as
      desktop applications and Machine Learining.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>{" "}
          <ListParagraph>
            Experience with <br />
            React.js/JS/Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>{" "}
          <ListParagraph>
            Experience with <br />
            Express,PostgreSQL and SQL, Node.js, Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiTensorflow size="2rem" />
        <ListContainer>
          <ListTitle>Machine Learning and Deep Learining</ListTitle>{" "}
          <ListParagraph>
            Experience with <br />
            tools like TensorFlow, Pytorch, Scikit-learn, OpenCV, Numpy, Pandas
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
