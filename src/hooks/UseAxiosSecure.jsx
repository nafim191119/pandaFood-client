import axios from "axios";
import { useNavigate } from "react-router";
import UseAuth from "./UseAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-gray-nu.vercel.app",
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { LogOut } = UseAuth();
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      // console.log(config);
      const token = localStorage.getItem("jwt-access-token");
      const jwtToken = `Bearer ${token}`;
      if (token) {
        config.headers.authorization = jwtToken;
      }
      return config;
    });

    // Add a response interceptor
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log(error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await LogOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, LogOut]);
  return [axiosSecure];
};

export default UseAxiosSecure;
