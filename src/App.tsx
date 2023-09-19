import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RentSeat from "./Components/RentSeat";
import SearchSeat from "./Components/SearchSeat";
import RentMySeat from "./Components/RentMySeat";
import TabMenu from "./Components/TabMenu";
import Navbar from "./Components/Navbar";

import { AppDataProvider } from "./context/AppDataContext";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <AppDataProvider>
      <BrowserRouter>
        <Navbar />
        <TabMenu />
        <Routes>
          <Route path="/" element={<SearchSeat />} />
          <Route path="/searchseat" element={<SearchSeat />} />
          <Route path="/rentseat/:id" element={<RentSeat />} />
          <Route path="/rentmyseat" element={<RentMySeat />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppDataProvider>
  );
};

export default App;
