import React from "react";
import styled from "styled-components";

export default function TopNav() {
  return (
    <DarkNav>
      <h3>Free Shipping</h3>
      <UserAction>
        <h3>Search</h3>
        <h3>Help</h3>
      </UserAction>
    </DarkNav>
  );
}

const DarkNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
  margin: 0;
  padding: 0 30px;
`;

const UserAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
  margin: 0;
`;
