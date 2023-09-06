import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/user/usersApiSlice";
import { setCredentials } from "../slices/user/authSlice";
import { toast } from "react-toastify";
import { Loader } from "../components/loader/Loader";

import logo from "../assets/logo.png";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <div className="flex items-center justify-center mb-4">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-semibold">Welcome </h1>
        </div>
        <form className="mt-10" onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring focus:ring-lightPrimary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring ffocus:ring-lightPrimary"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-primeBlue text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          {isLoading && (
            <div className="flex justify-center mt-4">
              <Loader />
            </div>
          )}
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primeBlue hover:underline">
            Create new account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
