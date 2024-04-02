import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseContacts = () => {
  const [axiosSecure] = UseAxiosSecure();
  const {
    data: contacts = [],
    isLoading: isContactLoading,
    refetch: contactRefetch,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contact");
      return res?.data;
    },
  });
  return [contacts, isContactLoading, contactRefetch];
};

export default UseContacts;
