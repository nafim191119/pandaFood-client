import { Helmet } from "react-helmet";
import SharedTitle from "../../../Shared/SharedTitle/SharedTitle";
import UsePayment from "./../../../../hooks/UsePayment";
const UserPayment = () => {
  const [payments, isPaymentLoading] = UsePayment();

  return (
    <div className="bg-base-200 flex flex-col w-full mx-auto items-center rounded-md h-full">
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <SharedTitle
        subHeading={"At a glance!"}
        heading={"Payment History"}
      ></SharedTitle>
      {!isPaymentLoading && (
        <section className="flex mx-3 md:mx-0 flex-col bg-base-100 rounded-md md:p-10 mb-10">
          <div className="text-2xl mt-10 mb-3 font-semibold">
            <h3>Total Payment : {payments?.length}</h3>
          </div>
          <div>
            <table className="table my-5 p-3 lg:p-0">
              {/* head */}
              <thead className="bg-[#d39e4f] rounded-md">
                <tr className="text-lg uppercase py-2">
                  <th>Email</th>
                  <th>Items</th>
                  <th>Total Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {payments?.map((data, index) => (
                  <tr key={index}>
                    <td>{data.email}</td>
                    <td>
                      {data.itemNames.map((item, index) => (
                        <small className="text-gray-400 text-xs" key={index}>
                          {item}
                          <br />
                        </small>
                      ))}
                    </td>
                    <td className="text-right">$ {data.price}</td>
                    <td>{Date(data.date).split("GMT")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};

export default UserPayment;
