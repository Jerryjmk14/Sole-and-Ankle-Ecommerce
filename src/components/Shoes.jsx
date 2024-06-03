import React from "react";
import styled from "styled-components";
import SHOES from "../constants/data";
import { Paper, Stack } from "@mui/material";

export default function Shoes() {
  return (
    <ShoesWrapper>
      <Title>
        <h2>Running</h2>
        <div>
          <span>Sort</span>
          <input type="select" />
        </div>
      </Title>
      <ShoesContainer>
        {SHOES.map((shoe) => {
          return (
            <Paper
              elevation={4}
              sx={{ flexBasis: "22%", p: "10px", height: "255px" }}>
              <Image src={shoe.imageSrc} alt="image" />
              <Stack direction="row" spacing={1}>
                <h3>{shoe.name}</h3>
                <h3>${shoe.price}</h3>
              </Stack>
              <p>{shoe.numOfColors} colors</p>
            </Paper>
          );
        })}
      </ShoesContainer>
    </ShoesWrapper>
  );
}

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ShoesWrapper = styled.div`
  /* background-color: green; */
  padding: 1rem;
  width: 80%;
`;

const Image = styled.img`
  width: 100%;
`;

const ShoesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;
