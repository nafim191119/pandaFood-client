import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";

const Login = () => {
  const [disabled, SetDisabled] = useState(true);
  const { LogInWithEmail, GoogleSignIn } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // google sign in handler
  const handleGoogleSignIn = () => {
    GoogleSignIn().then(async (result) => {
      console.log(result);
      await CheckUser(result?.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(path);
    });
  };

  const CheckUser = async (user) => {
    const email = user?.email;
    const userDetails = {
      name: user?.displayName,
      email: user?.email,
    };
    console.log("Checking user");
    await axios
      .get(
        `https://bistro-boss-server-gray-nu.vercel.app/users/checkUser?email=${email}`
      )
      .then(async (data) => {
        console.log(data?.data);
        if (!data?.data?.user) {
          console.log("sending to server");
          await axios
            .post(
              "https://bistro-boss-server-gray-nu.vercel.app/users",
              userDetails
            )
            .then((data) => console.log(data?.data));
        }
      });
  };

  // check captcha
  const checkCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      SetDisabled(false);
    } else {
      alert("Captcha Does Not Match");
    }
  };

  const HandlerLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    LogInWithEmail(email, password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(path);
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: error,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero-content  flex-col justify-evenly lg:flex-row">
        <div className="text-center w-full lg:w-1/3 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full lg:w-2/3 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={HandlerLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
              {disabled && (
                <div className="mt-4">
                  <LoadCanvasTemplate />
                  <input
                    type="text"
                    onBlur={checkCaptcha}
                    placeholder="Type above letters"
                    className="input input-bordered"
                  />
                </div>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                //   TODO: uncomment disabled to the next line
                // disabled={disabled}
                type="submit"
                value="Login"
                className="input input-bordered btn btn-outline btn-neutral"
              />
            </div>
            <span className="divider"></span>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn mx-auto btn-circle btn-outline"
          >
            <FaGoogle />
          </button>
          <p className="text-center my-4">
            <small>
              Do not have an account?{" "}
              <Link to="/signup" className="cursor-pointer text-primary">
                {" "}
                Sign Up
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
