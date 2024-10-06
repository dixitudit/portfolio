import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the animation
const loadtwo = keyframes`
  50% {
    transform: rotate(-30deg);
  }
`;

// Styled components
const Loader = styled.div`
  height: 310px;
  width: 250px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlowingCube = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const ColorCube = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  z-index: 1;
  filter: blur(2px);
  background: linear-gradient(135deg, #1afbf0, #da00ff);
  animation: ${loadtwo} 2.5s ease-in-out infinite;
`;

const ImgContainer = styled.div`
  height: 330px;
  width: 270px;
  border-radius: 30px;
  ${'' /* border: 10px solid #fff; */}
  position: relative;
  padding-bottom: 40px;
  ${"" /* margin-top: 20%; */}
  z-index: 1000;
`;

const StyledImage = styled.img`
  height: 310px;
  width: 250px;
  position: absolute;
  z-index: 30000;
  border-radius: 30px;
  top: 0px;
`;

const SlideInProfileImage = () => {
  return (
    <ImgContainer>
      <Loader>
        <GlowingCube />
        <ColorCube />
      </Loader>
      <StyledImage src="images/demo.png" />
    </ImgContainer>
  );
};

export default SlideInProfileImage;
