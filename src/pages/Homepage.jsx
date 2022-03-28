import React from "react";
import styled from "styled-components";
import MenuAppBar from "../components/Navbar";
import home from "../images/main-bg.jpg";

function Homepage() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(8, 9, 10, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${home}) no-repeat center center / cover;
  height: 100vh;
  width: 100%;
`;

export default Homepage;
