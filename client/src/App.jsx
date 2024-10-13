import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LoginForm from "./component/Login/Login";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Register from "./component/Register/Register";

function App() {
  return (
    <Router>
      <LoginForm/>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
