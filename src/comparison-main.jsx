import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ComparisonPage from "./pages/ComparisonPage";

createRoot(document.getElementById("root")).render(<StrictMode><ComparisonPage /></StrictMode>);
