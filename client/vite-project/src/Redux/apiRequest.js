import axios from "axios";
import { registerFaild, registerStart, registerSuccess } from "./authSlice";

export const loginUser = async (User, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("http://localhost:8000/api/login", User);
    dispatch(registerSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(registerFaild(err));
  }
};
export const registerUser = async (User, dispatch, navigate) => {
    dispatch(registerStart());
    try {
      const res = await axios.post("http://localhost:8000/api/register", User);
      dispatch(registerSuccess(res.data));
      navigate("/login");
    } catch (err) {
      dispatch(registerFaild(err));
    }
  };
