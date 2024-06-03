import React from "react";
import Aside from "./Aside";
import Shoes from "./Shoes";
import styled from "styled-components";

export default function Main() {
  return (
    <MainWrapper>
      <Aside />
      <Shoes />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  /* background-color: red; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
