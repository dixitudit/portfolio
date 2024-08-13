import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    ${
      "" /* position: relative;
    transition: transform 0.5s ease-in-out; */
    }
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    ${
      "" /* position: relative;
    transition: transform 0.5s ease-in-out; */
    }
    flex-direction: column;

    margin: 0 auto;
  }
`;
