import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RentSeat from "./Components/RentSeat";
import SearchSeat from "./Components/SearchSeat";
import RentMySeat from "./Components/RentMySeat";
import TabMenu from "./Components/TabMenu";
import Navbar from "./Components/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <TabMenu />
      <Routes>
        <Route path="/" element={<SearchSeat />} />
        <Route path="/searchseat" element={<SearchSeat />} />
        <Route path="/rentseat/:id" element={<RentSeat />} />
        <Route path="/rentmyseat" element={<RentMySeat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
