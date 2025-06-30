import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Oneko from "./oneko";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Home from "@routes/Home";
import Photos from "@routes/Photos";
import Now from "@routes/Now";
import Contact from "@routes/Contact";
import MissingPage from "@routes/Missingno";
// Secrets :3
import Password from "@routes/Password";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Oneko />
    <Analytics />
    <SpeedInsights />
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
        <Route path="pasword" element={<Password />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
    <div className="scanlines"></div>
  </StrictMode>
);
