import { useForm } from "react-hook-form";
import { BiPhone, BiSolidBuildingHouse } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import SharedTitle from "../../../Shared/SharedTitle/SharedTitle";
import UseAuth from "../../../../hooks/UseAuth";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const UserContact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = UseAxiosSecure();
  const { user } = UseAuth();

  const onSubmit = (formData) => {
    console.log(formData);
    const contactMssg = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    axiosSecure.post("/contact", contactMssg).then((data) => {
      console.log(data?.data);
      if (data?.data?.acknowledged) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message sent!",
          showConfirmButton: false,
          timer: 900,
        });
      }
    });
  };

  return (
    <>
      <SharedTitle
        subHeading={"Want to contact!"}
        heading={"Contact Us"}
      ></SharedTitle>
      <div className="mx-auto flex px-8 gap-3 my-10 flex-col md:flex-row">
        <div className="contact-div w-full md:w-1/3 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl my-4 text-center font-bold mb-4">
            Contact Us
          </h2>

          <div className="items-center my-5 text-slate-500 font-semibold flex gap-4">
            <BiSolidBuildingHouse className="text-xl"></BiSolidBuildingHouse>
            <p>
              545 Mavis Island <br />
              Chicago, IL 99191
            </p>
          </div>
          <div className="items-center my-5 text-slate-500 font-semibold flex gap-4">
            <BiPhone className="text-xl"></BiPhone>
            <p>+1 (555) 234-5678</p>
          </div>
          <div className="items-center my-5 text-slate-500 font-semibold flex gap-4">
            <AiOutlineMail className="text-xl"></AiOutlineMail>
            <p>example@example.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md w-full mt-10 md:mt-0 md:w-2/3 mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name*
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email*
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              Message*
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              {...register("message", { required: true })}
            />
          </div>

          <input
            className="btn btn-outline"
            value="Send Message"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default UserContact;
