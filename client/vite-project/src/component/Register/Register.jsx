import "../Register/Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../Redux/apiRequest";
import { useDispatch } from "react-redux";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hadleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    registerUser(newUser, dispatch, navigate);
  };
  return (
    <div id="logreg-forms">
      <form onClick={hadleRegister} className="form-signin">
        <div className="social-login">
          <button className="btn google-btn social-btn" type="button">
            <span>
              <i className="fab fa-google-plus-g" /> Sign up with Google+
            </span>{" "}
          </button>
          <button className="btn facebook-btn social-btn" type="button">
            <span>
              <i className="fab fa-facebook-f" /> Sign up with Facebook
            </span>{" "}
          </button>
        </div>
        <p style={{ textAlign: "center" }}>OR</p>
        <input
          type="text"
          id="user-name"
          className="form-control"
          placeholder="Full name"
          required=""
         onChange={(e)=>setUsername(e.target.value)}
        />
        <input
          type="email"
          id="user-email"
          className="form-control"
          placeholder="Email address"
          required=""
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          id="user-pass"
          className="form-control"
          placeholder="Password"
          required=""
          onChange={(e)=>setPassword(e.target.value)}
        />
      
        <button className="btn btn-primary btn-block" type="submit">
          <i className="fas fa-user-plus" /> Sign Up
        </button>
        <a href="#" id="cancel_signup">
          <i className="fas fa-angle-left" /> Back
        </a>
      </form>
    </div>
  );
}

export default Register;
