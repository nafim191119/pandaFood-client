import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";
const UseAdminStats = () => {
  const { user, loading } = UseAuth();
  const [axiosSecure] = UseAxiosSecure();
  const { displayName: name } = user;
  const { data: AdminStats = {}, isLoading: isAdminStatsLoading } = useQuery({
    queryKey: ["admin-stats", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stats?email=${user?.email}`);
      return res.data;
    },
  });
  return [AdminStats, isAdminStatsLoading, name];
};

export default UseAdminStats;
