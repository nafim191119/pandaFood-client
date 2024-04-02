import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const UsePayment = () => {
  const { user, loading } = UseAuth();
  const [axiosSecure] = UseAxiosSecure();
  const { data: payments = [], isLoading: isPaymentLoading } = useQuery({
    queryKey: ["payment", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user?.email}`);
      // console.log("payment info", res);
      return res?.data;
    },
  });
  return [payments, isPaymentLoading];
};

export default UsePayment;
