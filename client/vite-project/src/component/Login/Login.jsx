import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/apiRequest";
import "../Login/Login.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };
  return (
    <>
      <div id="logreg-forms">
        <form onClick={handleLogin} className="form-signin">
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            {" "}
            Sign in
          </h1>
          <div className="social-login">
            <button className="btn facebook-btn social-btn" type="button">
              <span>
                Sign in with Facebook
              </span>{" "}
            </button>
            <button className="btn google-btn social-btn" type="button">
              <span>
                 Sign in with Google+
              </span>{" "}
            </button>
          </div>
          <p style={{ textAlign: "center" }}> OR</p>
          <input
            type="text"
            id="inputEmail"
            className="form-control"
            placeholder="Username"
            required=""
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="btn btn-success btn-block" type="submit">
            <i className="fas fa-sign-in-alt" /> Sign in
          </button>
          <a href="#" id="forgot_pswd">
            Forgot password?
          </a>
          <hr />
          {/* <p>Don't have an account!</p>  */}
          <button
            className="btn btn-primary btn-block"
            type="button"
            id="btn-signup"
          >
            <i className="fas fa-user-plus" /> Sign up New Account
          </button>
        </form>
        <form action="/reset/password/" className="form-reset">
          <input
            type="email"
            id="resetEmail"
            className="form-control"
            placeholder="Email address"
            required=""
          />
          <button className="btn btn-primary btn-block" type="submit">
            Reset Password
          </button>
          <a href="#" id="cancel_reset">
            <i className="fas fa-angle-left" /> Back
          </a>
        </form>
       
        <br />
      </div>
    </>
  );
}

export default Login;
