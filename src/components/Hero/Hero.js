import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Typewriter from "typewriter-effect";
import DownloadButton from "./DownloadButton"; // Assuming the styled component is in the same directory

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Udit.pdf"; // Add the correct path to your resume file
    link.download = "Udit_Resume.pdf"; // Rename the file for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <span style={{ whiteSpace: "nowrap" }}>
            Hi! I'm{" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Udit Narayan Dixit ")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .deleteChars(1)
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </span>
        </SectionTitle>
        <br />
        <SectionText>
          Having expertise in JavaScript, React.js, Node.js, Express.js,
          MongoDB, Python, Java, C++, Data Structures and Algorithms, JWT,
          Docker, PostgreSQL, MySQL, Next.js, and much more.
        </SectionText>
        <DownloadButton onClick={handleDownload}>Download CV</DownloadButton>
      </LeftSection>
    </Section>
  );
};

export default Hero;
