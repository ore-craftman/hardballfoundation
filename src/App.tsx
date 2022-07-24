import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import Beneficiary from "./Pages/Beneficairy/Index";
import Confirmation from "./Pages/Beneficairy/Confirmation";
export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/beneficiary" element={<Beneficiary />} />
        <Route path="/beneficiary/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
