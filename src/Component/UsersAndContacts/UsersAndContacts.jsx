import { FaTrash } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import Swal from "sweetalert2";
import UseUsers from "../../hooks/UseUsers";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseContacts from "../../hooks/UseContacts";

const UsersAndContacts = ({ isUsers }) => {
  // for user sections
  const [users, refetch] = UseUsers();
  console.log(users);
  const [axiosSecure] = UseAxiosSecure();

  const handleMakeAdmin = async (user) => {
    Swal.fire({
      title: "Are you sure to make admin?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(user._id);
        axiosSecure.patch(`/users/admin/${user?._id}`).then((data) => {
          console.log(data);
          refetch();
          data.data.modifiedCount &&
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Congratulations! ${user.name} is also an admin`,
              showConfirmButton: false,
              timer: 1500,
            });
        });
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: isUsers
        ? "Are you sure you want to delete?"
        : "Are you sure you read the message?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: isUsers ? "Delete User!" : "Delete Message!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        const api = isUsers ? `/users/admin/${id}` : `/contact/${id}`;
        axiosSecure.delete(api).then((data) => {
          console.log(data);
          isUsers ? refetch() : contactRefetch();
          data.data.deletedCount &&
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: isUsers ? "User Deleted" : "Message Deleted",
              showConfirmButton: false,
              timer: 1500,
            });
        });
      }
    });
    // for contacts section
  };
  console.log("Contact");
  const [contacts, isContactLoading, contactRefetch] = UseContacts();
  console.log(!isContactLoading && contacts);

  //   common logics
  const array = isUsers ? users : contacts;
  return (
    <div className="w-full">
      <div className="flex p-3 justify-start text-2xl mt-10 font-semibold">
        <h3>{`${isUsers ? "Total Users:" : "Total Message:"} ${
          array.length
        }`}</h3>
      </div>
      <div className="md:w-full mx-auto">
        <table className="table w-auto md:w-full max-w-fit my-5 md:p-3 lg:p-0">
          {/* head */}
          <thead className="bg-[#d39e4f] rounded-md w-fit">
            <tr className="text-lg uppercase py-2">
              <th>X</th>
              <th>Name</th>
              <th>Email</th>
              <th>{isUsers ? "Role" : "Message"}</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="max-w-full">
            {/* row 1 */}
            {array?.map((user, index) => (
              <tr className="max-w-full" key={index}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                {isUsers ? (
                  <td>
                    {user?.role === "Admin" ? (
                      <p className="text-success">Admin</p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-yellow-600 text-white btn-ghost"
                      >
                        <MdPeopleAlt></MdPeopleAlt>
                      </button>
                    )}
                  </td>
                ) : (
                  <td>
                    <small>{user?.message}</small>
                  </td>
                )}

                <td>
                  <button
                    onClick={() => {
                      handleDelete(user._id);
                    }}
                    className="btn bg-red-700 text-white btn-ghost"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersAndContacts;
