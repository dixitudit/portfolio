import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  height: 330px;
  width: 270px;
  border-radius: 10%;
  border: 10px solid #fff;
  overflow: hidden;
  padding-bottom: 40px;
  ${"" /* margin-top: 20%; */}
  z-index: 1000;
`;

const StyledImage = styled.img`
  height: 330px;
  width: 270px;
`;

const SlideInProfileImage = () => {
  return (
    <ImgContainer>
      <StyledImage src="images/demo.png" />
    </ImgContainer>
  );
};

export default SlideInProfileImage;
