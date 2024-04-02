import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";
import axios from "axios";
import UploadImg from "../../Component/UploadImg/UploadImg";

const SignUp = () => {
  const { SignUpWithEmail, addNameAndPhoto } = UseAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state?.from?.pathname || "/";

  const HandleSignUp = async (data) => {
    const { image } = data;
    const imageFile = image[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    let imageData, ImgURL;
    if (imageFile) {
      imageData = await UploadImg(formData);
      console.log(imageData?.data?.display_url);
      ImgURL = imageData?.data?.display_url;
    }
    SignUpWithEmail(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        console.log(data.name, ImgURL);
        result.user &&
          addNameAndPhoto(data.name, ImgURL)
            .then(() => {
              const userDetails = {
                name: data.name,
                email: data.email,
              };
              console.log({ userDetails });
              axios
                .post(
                  "https://bistro-boss-server-gray-nu.vercel.app/users",
                  userDetails
                )
                .then((data) => {
                  console.log(data?.data);
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign Up Successful!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate(path);
                });
            })

            .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "email-already-in-use",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  // const SetUserToDb = async () => {
  //   if (loading) {
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "Signing.....!",
  //       showConfirmButton: false,
  //       timer: 500,
  //     });
  //   }
  //   if (!loading && user) {
  //     const userDetails = { name: user?.displayName, email: user?.email };
  //     await axiosSecure
  //       .post("/users", userDetails)
  //       .then((data) => console.log(data.data));
  //   }
  // };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero-content  flex-col justify-evenly lg:flex-row">
        <div className="text-center w-full lg:w-1/3 lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full lg:w-2/3 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(HandleSignUp)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name*</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo*</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
              {errors.photoURL && (
                <span className="text-red-600">image is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 14,
                  pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600">
                  Password must have one uppercase, one lowercase, one digit,
                  one special case with maximum 8 character
                </span>
              )}
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="input input-bordered btn btn-outline btn-neutral"
              />
            </div>
            <span className="divider"></span>
          </form>
          <p className="text-center mb-2">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="cursor-pointer text-primary">
                {" "}
                Login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
