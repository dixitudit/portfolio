import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  height: 330px;
  width: 270px;
  border-radius: 10%;
  overflow: hidden;
  padding-bottom: 40px;
  z-index: 1000;
`;

const SlideInProfileImage = () => {
  return (
    <ImgContainer>
      <object type="image/svg+xml" data="images/demo.svg"></object>
    </ImgContainer>
  );
};

export default SlideInProfileImage;
