import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  // Custom scrollbar
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #0a5c74 #022d3b; /* Firefox */

  &::-webkit-scrollbar {
    width: 12px; /* Width of the entire scrollbar */
    height: 8px; /* Height of the scrollbar for horizontal scrolling */
  }

  &::-webkit-scrollbar-track {
    background: #022d3b; /* Background of the scrollbar track */
    border-radius: 10px; /* Rounded corners for the track */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0a5c74; /* Color of the scrollbar thumb */
    border-radius: 10px; /* Rounded corners for the thumb */
    border: 2px solid #022d3b; /* Border around the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #0b829c; /* Darker shade on hover */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;

export default GlobalStyles;
