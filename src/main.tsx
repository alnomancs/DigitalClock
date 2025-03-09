import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DigitalClockGPT from "./DigitalClockGPT.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <DigitalClockGPT />
  </StrictMode>
);
