import { Stack } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { COLORS } from "../constants/data";

export default function Search() {
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <SearchIcon />
        <SearchBar type="search" placeholder="Search" />
      </Stack>
    </div>
  );
}

const SearchBar = styled.input`
  border: none;
  background: ${COLORS.gray[300]};
  outline: none;
  color: ${COLORS.white};
  font-size: 16px;
  &:hover {
    border-bottom: 1px solid white;
  }
`;
