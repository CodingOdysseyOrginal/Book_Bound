import {  Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import BestSellers from "./Pages/BestSellers/BestSellers";
import Cart from "./Pages/Cart/Cart";
import Fiction from "./Pages/Fiction/Fiction";
import GiftCards from "./Pages/GiftCards/GiftCards";
import Homepage from "./Pages/Homepage/Homepage";
import NonFiction from "./Pages/NonFiction/NonFiction";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/nonfiction" element={<NonFiction />} />
        <Route path="/giftcards" element={<GiftCards />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bestsellers" element={<BestSellers />} />
      </Routes>
    </>
  );
}

export default App;
