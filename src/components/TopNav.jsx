import React from "react";
import styled from "styled-components";
import { Stack } from "@mui/material";
import DeviceUnknownIcon from "@mui/icons-material/DeviceUnknown";
import { COLORS } from "../constants/data";
import Search from "./Search";

export default function TopNav() {
  return (
    <DarkNav>
      <h3>Free Shipping on domestic order over $75!</h3>
      <UserAction>
        <Stack direction="row" spacing={1}>
          <Search />
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
  background-color: ${COLORS.gray[700]};
  color: white;
  margin: 0;
  padding: 0 30px;
  height: 35px;
`;

const UserAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  min-width: 20%;
  margin: 0;
`;
