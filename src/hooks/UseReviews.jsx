import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseReviews = () => {
  const { data: reviews = [], isLoading: loading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get(
        "https://bistro-boss-server-gray-nu.vercel.app/reviews"
      );
      // console.log(res.data);
      return res.data;
    },
  });
  return [reviews, loading];
};

export default UseReviews;
