import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import MainPage from "./pages/main";
import HotelPages from "./pages/hotel";
import HotelDetail from "./pages/hotel/detail";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hotel" element={<HotelPages />} />
          <Route path="/hotel/detail/:id" element={<HotelDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
