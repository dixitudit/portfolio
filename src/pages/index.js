import Acomplishments from "../components/Acomplishments/Acomplishments";
// import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import Technologies from "../components/Technologies/Technologies";
import styled from "styled-components";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
// import NewBgAnimation from "../components/BGani2/NewBackGroundAnimation";
import CombinedAnimations from "../components/CombinedAnimations/CombinedAnimations";
import SlideInProfileImage from "../components/ProfileImg/SlideInProfileImage";

const InnerContainerImg = styled.div`
  ${"" /* padding-left: 10%; */}
  width: 60%;
  height: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 0;
    margin: 0 auto;
    width: 75%;
  }
`;

const SimpleContainer = styled.div`
  display: flex;
  justify: between;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    justify: center;
    align-items: center;
  }
`;

const Home = () => {
  return (
    <Layout>
      <ScrollToTopButton />
      <SimpleContainer>
        <InnerContainerImg>
          <SlideInProfileImage />
        </InnerContainerImg>
        <Hero />
      </SimpleContainer>
      <CombinedAnimations />
      <Projects />
      <Timeline />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
