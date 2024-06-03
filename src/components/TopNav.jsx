import React from "react";
import styled from "styled-components";
import { Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";

export default function TopNav() {
  return (
    <DarkNav>
      <h3>Free Shipping on domestic order over $75!</h3>
      <UserAction>
        <Stack direction="row" spacing={1}>
          <SearchIcon />
          <SearchBar type="search" placeholder="Search" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <h3>Help</h3>
          <DeviceUnknownIcon />
        </Stack>
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
  justify-content: space-around;
  gap: 10px;
  min-width: 20%;
  margin: 0;
`;

const SearchBar = styled.input`
  border: none;
  background: black;
  outline: none;
  color: white;
  font-size: 16px;
  &:hover {
    border-bottom: 1px solid white;
  }
`;
