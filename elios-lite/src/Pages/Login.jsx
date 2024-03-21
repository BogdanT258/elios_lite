import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firedb, app } from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";
import {useSelector, useDispatch} from 'react-redux';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector(state=>state.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      navigate('/');
    }
  }, [navigate]);

  const login = async () => {
    dispatch({type:'showLoading'});
    try {
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      const userDataSnapshot = await getDoc(doc(firedb, "users", user.uid));
  
      // Check if the document exists
      if (userDataSnapshot.exists()) {
        // Access the data from the snapshot
        const userData = userDataSnapshot.data();
        localStorage.setItem("userData", JSON.stringify(userData));
        toast.success('Login succesfull');
        dispatch({type:'hideLoading'});
        navigate('/');

        console.log("User Data:", userData);
      } else {
        console.log("User data not found");
      }
    } catch (error) {
      toast.error('Login Failed')
      dispatch({type:'hideLoading'});
      console.log(error);
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-primary to-secondary">
      {loading && <Loader/>}
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">
              Sign in below to access your account
            </p>
          </div>
          <div className="mt-5">
            <form action="">
              <div className="relative mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <div className="my-6">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    login();
                  }}
                  className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Login
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                Don&#x27;t have an account yet?
                <Link
                  to="/register"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none pl-2"
                >
                  Sign up
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


export default Login;
