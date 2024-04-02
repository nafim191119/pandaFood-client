import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseCart = () => {
  const { user, loading } = UseAuth();
  const [axiosSecure] = UseAxiosSecure();
  const {
    data: cart = [],
    refetch,
    isLoading: isCartLoading,
  } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/carts?email=${user?.email}`);
      return response?.data;
    },
  });
  return [cart, refetch, isCartLoading];
};

export default UseCart;
