import HomePage from "./component/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regsiter" element={<Register />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
