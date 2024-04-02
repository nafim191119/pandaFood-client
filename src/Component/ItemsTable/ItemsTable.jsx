import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const ItemTable = ({ items, isMenu }) => {
  const [axiosSecure] = UseAxiosSecure();
  const { itemData, refetch, isItemLoading } = items;
  const api = isMenu ? "menu" : "carts";
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        axiosSecure.delete(`/${api}/${id}`).then((data) => {
          data.data.deletedCount === 1 &&
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item deleted successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          console.log(data.data);
          refetch();
        });
      }
    });
  };
  return (
    <div>
      <table className="table my-5 p-3 lg:p-0">
        {/* head */}
        <thead className="bg-[#d39e4f] rounded-md">
          <tr className="text-lg uppercase py-2">
            <th>X</th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Price</th>
            {isMenu && <th>Action</th>}
            <th>Action</th>
          </tr>
        </thead>
        {!isItemLoading && (
          <tbody>
            {/* row 1 */}
            {itemData?.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-square rounded-md w-6 h-6 md:w-12 md:h-12">
                        <img src={item.image} alt="item" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-right">{item.price}</td>
                {isMenu && (
                  <td>
                    <Link to={`/dashboard/adminItemUpdate/${item._id}`}>
                      <AiFillEdit />
                    </Link>
                  </td>
                )}
                <td>
                  <button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    className="btn bg-red-700 text-white btn-ghost"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ItemTable;
