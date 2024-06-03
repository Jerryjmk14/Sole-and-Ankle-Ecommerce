import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { navLink1 } from "../constants/data/";

export default function MainNav() {
  return (
    <Container>
      <Logo />
      <LinkWrapper>
        {navLink1.map((link) => {
          return (
            <li key={link.id}>
              <Link href={link.href}>{link.navName}</Link>
            </li>
          );
        })}
      </LinkWrapper>
    </Container>
  );
}

const Container = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  gap: 15%;
  margin: 20px 40px;
  min-width: 200px;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  list-style-type: none;
  font-size: 1.25rem;
  min-width: 100%;

  li {
    min-width: fit-content;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  width: 20px;
  &:hover {
    text-decoration: revert;
  }
`;
