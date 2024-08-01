import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import BestSellers from './Pages/BestSellers/BestSellers';
import Cart from './Pages/Cart/Cart';
import Fiction from './Pages/Fiction/Fiction';
import GiftCards from './Pages/GiftCards/GiftCards';
import Homepage from './Pages/Homepage/Homepage';
import NonFiction from './Pages/NonFiction/NonFiction';
import Footer from './Components/Footer/Footer';
import BookPage from './Pages/BookPage/BookPage';
import { CartProvider } from './Components/CartContext/CartContext'; 
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/Book_Bound/" element={<Homepage />} />
        <Route path="/Book_Bound/fiction" element={<Fiction />} />
        <Route path="/Book_Bound/nonfiction" element={<NonFiction />} />
        <Route path="/Book_Bound/giftcards" element={<GiftCards />} />
        <Route path="/Book_Bound/cart" element={<Cart />} />
        <Route path="/Book_Bound/bestsellers" element={<BestSellers />} />
        <Route path="/product/:id" element={<BookPage />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
