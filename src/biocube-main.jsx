import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BioCubePage from "./pages/BioCubePage";

createRoot(document.getElementById("root")).render(
  <StrictMode><BioCubePage /></StrictMode>,
);
