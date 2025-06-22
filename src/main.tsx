import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Oneko from "./oneko";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Home from "@routes/Home";
import Photos from "@routes/Photos";
import Now from "@routes/Now";
import Contact from "@routes/Contact";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Oneko />
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Navbar />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="pics" element={<Photos />} />
          <Route path="nownownow" element={<Now />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <div className="scanlines"></div>
  </StrictMode>
);
