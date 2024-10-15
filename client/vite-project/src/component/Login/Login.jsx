
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/apiRequest";

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
    <div>
      <div className="container d-flex flex-column align-items-center min-vh-100">
        <div className="row w-100 justify-content-center mt-5">
          <div className="col-12 col-md-6 col-lg-4">
            <h1 className="text-center m-5 custom-text ">Tài khoản</h1>
            <div className="d-flex gap-3 justify-content-center mb-5 mt-5">
              <h3 className="dn">Đăng nhập</h3>
              <h3 className="dk inline-none">
                <Link to="/register">Đăng ký</Link>
              </h3>
            </div>
            <div className="f">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="usernameOrEmail" className="mb-3">
                    Đăng nhập tài khoản của bạn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên tài khoản"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group form-check mt-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Ghi nhớ
                  </label>
                </div>
                <button type="submit" className="btn btn-warning w-100 mt-3">
                  Đăng nhập
                </button>
                <div className="text-center mt-3">
                  <a href="/forgot-password">Quên mật khẩu?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
