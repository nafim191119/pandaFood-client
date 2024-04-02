import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseMenu = () => {
  const {
    data: menu = [],
    isLoading: isMenuLoading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const response = await axios.get(
        "https://bistro-boss-server-gray-nu.vercel.app/menu"
      );
      return response.data;
    },
  });
  return [menu, isMenuLoading, refetch];
};

export default UseMenu;
