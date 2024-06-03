import React from "react";
import styled from "styled-components";
import { asideData, asideHeading } from "../constants/data";
import { Stack } from "@mui/material";

export default function Aside() {
  return (
    <AsideWrapper>
      <Title direction="row" spacing={2}>
        {asideHeading.map((heading) => (
          <h3 key={heading.id}>{heading.name}</h3>
        ))}
      </Title>
      <Categories>
        {asideData.map(({ id, asideText, href }) => {
          return (
            <List key={id}>
              <Link href={href}>{asideText}</Link>
            </List>
          );
        })}
      </Categories>
    </AsideWrapper>
  );
}

const AsideWrapper = styled.div`
  margin-top: 4rem;
  width: 20%;
`;

const Title = styled(Stack)`
  text-align: center;

  margin-left: 39px;
  h3 {
    &::after {
      content: "/";
    }
  }
`;

const Categories = styled.ul`
  list-style-type: none;
  font-size: 18px;
  font-family: sans-serif;
`;

const List = styled.li`
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  width: 20px;

  &:hover {
    text-decoration: revert;
  }
`;
