import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { firedb, app } from "../firebaseConfig";
import {useSelector, useDispatch} from 'react-redux';
import Loader from "../Components/Loader";
import { toast } from "react-toastify";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async () => {
    dispatch({ type: 'showLoading' });
    try {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        dispatch({ type: 'hideLoading' });
        setPassword("");
        setConfirmPassword("");
        return;
      }

      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      const userData = {
        email: user.email,
        profilePicUrl: "",
        bio: "",
      };
      setDoc(doc(firedb, "users", user.uid), userData);
      toast.success('Registering succesfull');
      dispatch({ type: 'hideLoading' });
      navigate('/login');
    } catch (error) {
      toast.error('Failed Registration');
      if (error.code === "auth/email-already-in-use") {
        dispatch({ type: 'hideLoading' });
        setErrorMessage(
          "Email is already in use. Please use a different email.",
        );
      } else {
        dispatch({ type: 'hideLoading' });
        setErrorMessage("An error occurred. Please try again later.");
      }
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-primary to-secondary">
      {loading && <Loader />}
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign up</h1>
            <p className="mt-2 text-gray-500">
              Sign up below to register your account
            </p>
          </div>
          <div className="mt-5">
            <form action="">
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Password
                </label>
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="confirmPassword"
                  className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Confirm Password
                </label>
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}{" "}
              {/* Display error message */}
              <div className="my-6">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    register();
                  }}
                  className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Register
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                Have an account?
                <Link
                  to="/login"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none pl-2"
                >
                  Sign in
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
