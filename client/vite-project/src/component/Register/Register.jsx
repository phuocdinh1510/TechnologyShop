
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
      email: email,
      username: username,
      password: password,
    };
    registerUser(newUser, dispatch, navigate);
  };
  return (
    <div>
      <div className="container d-flex flex-column align-items-center min-vh-100">
        <div className="row w-100 justify-content-center mt-5">
          <div className="col-12 col-md-6 col-lg-4">
            <h1 className="text-center m-5 custom-text ">Tài khoản</h1>
            <div className="d-flex gap-3 justify-content-center mb-5 mt-5">
              <h3 className="dn">Đăng nhập</h3>
              <h3 className="dk">Đăng ký</h3>
            </div>
            <div className="f">
              <form className="" onSubmit={hadleRegister}>
                <div className="form-group">
                  <label htmlFor="usernameOrEmail" className="mb-3">
                    Đăng ký tài khoản
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernameOrEmail"
                    placeholder="Địa chỉ Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id=""
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
                <div className="form-group mt-3"></div>

                <button type="submit" className="btn btn-warning w-100 mt-3">
                  Đăng nhập
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
