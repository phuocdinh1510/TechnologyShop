import HomePage from "./component/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regsiter" element={<Register />} />
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
