import React from "react";
import BgAnimation from "../BackgrooundAnimation/BackgroundAnimation";
import NewBgAnimation from "../BGani2/NewBackGroundAnimation";
import styled from "styled-components";
import SlideInProfileImage from "../ProfileImg/SlideInProfileImage";

const AnimationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledBgAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CombinedAnimations = () => {
  return (
    <AnimationWrapper>
      <StyledBgAnimation>
        <BgAnimation />
      </StyledBgAnimation>
      <StyledBgAnimation>
        <NewBgAnimation />
      </StyledBgAnimation>
    </AnimationWrapper>
  );
};

export default CombinedAnimations;
