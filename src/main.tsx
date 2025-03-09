import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DigitalClockDS from "./DigitalClockDS.tsx";
import DigitalClockGPT from "./DigitalClockGPT.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <DigitalClockDS />
    <DigitalClockGPT />
  </StrictMode>
);
