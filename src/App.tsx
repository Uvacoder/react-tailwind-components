import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
