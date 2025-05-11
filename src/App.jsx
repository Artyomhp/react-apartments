import { React } from "react";
import { Route, Routes } from "react-router";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Catalog } from "./pages/Catalog";
import { AboutCompany } from "./pages/AboutCompany";
import { Contacts } from "./pages/Contacts";
import { FullApartment } from "./pages/FullApartment";
import { Mortgage } from "./pages/Mortgage";

import "./scss/index.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/apartment/:id" element={<FullApartment />} />
          <Route path="/mortgage" element={<Mortgage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
