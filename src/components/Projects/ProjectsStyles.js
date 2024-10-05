import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

//TODO try to remove grid make it flex and centered
export const GridContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  item-align: center;
  justify-content: center;
  place-items: center;
  column-gap: 5rem;
  row-gap: 5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  padding: 3rem;
  text-align: center;
  margin: 2rem;
  width: 400px;
  opacity: 0.95;
  background: #1e1e1e; /* Initial background color */
  transition: all 0.4s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: 2px solid transparent; /* Gradient border placeholder */
  background-origin: border-box;
  background-clip: padding-box, border-box;

  /* Adding a gradient border using pseudo-element */
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #13b37f, #11a3c8, #f7ba2b);
    z-index: -1;
    filter: blur(2px);
    border-radius: 10px;
  }

  &:hover {
    color: #fff;
    opacity: 1;
    box-shadow: 10px 10px 20px rgba(80, 78, 78, 0.5);
    transform: scale(1.05); /* Slight scaling on hover */
    background: linear-gradient(
      135deg,
      #13b37f,
      #11a3c8
    ); /* Background color change */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-size: 1.6rem;
  line-height: 1.5;
  text-align: justify;
  background-color: rgba(
    255,
    255,
    255,
    0.05
  ); /* Light background for readability */
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
