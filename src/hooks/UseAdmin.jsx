import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
  const [axiosSecure] = UseAxiosSecure();
  const { user, loading } = UseAuth();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: [user?.email, "admin"],
    enabled: !loading,
    queryFn: async () => {
      const data = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log(data.data);
      return data?.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
