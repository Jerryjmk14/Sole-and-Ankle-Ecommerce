import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import GlobalStyles from "./components/GlobalStyles";

export default function App() {
  return (
    <div>
      <NavBar />
      <Main />

      <GlobalStyles />
    </div>
  );
}
