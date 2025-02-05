import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import BookingPage from "./pages/booking";
import HotelPages from "./pages/hotel";
import HotelDetail from "./pages/hotel/detail";
import MainPage from "./pages/main";
import PaymentPages from "./pages/payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes yang menggunakan Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/hotel" element={<HotelPages />} />
          <Route path="/hotel/detail/:id" element={<HotelDetail />} />
        </Route>

        {/* Routes tanpa Layout */}
        <Route path="/accommodation/booking/:id" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
