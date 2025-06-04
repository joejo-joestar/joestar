import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./routes/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Now from "./routes/Now";
import Photos from "./routes/Photos";
import Navbar from "./components/Navbar";
import Contact from "./routes/Contact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="pics" element={<Photos />} />
          <Route path="nownownow" element={<Now />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
