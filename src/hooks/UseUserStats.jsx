import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";
const UseUserStats = () => {
  const { user, loading } = UseAuth();
  const { displayName: name, photoURL: photo } = user;
  const [axiosSecure] = UseAxiosSecure();
  const { data: userStats = [], isLoading: isUserStatsLoading } = useQuery({
    queryKey: [user?.email, "user-stats"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-stats?email=${user?.email}`);
      // console.log(res);
      return res?.data;
    },
  });
  return { userStats, isUserStatsLoading, name, photo };
};

export default UseUserStats;
