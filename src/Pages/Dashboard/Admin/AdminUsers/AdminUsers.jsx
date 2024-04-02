import SharedTitle from "../../../Shared/SharedTitle/SharedTitle";
import { Helmet } from "react-helmet";
import UsersAndContacts from "../../../../Component/UsersAndContacts/UsersAndContacts";

const AdminUsers = () => {
  // console.log(users);
  return (
    <div className="bg-base-200 w-full flex flex-col mx-auto items-center rounded-md h-full">
      <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet>
      <SharedTitle
        subHeading={"How many?"}
        heading={"Manage All User"}
      ></SharedTitle>
      <section className="flex flex-col bg-base-100 rounded-md p-3 md:p-10 mb-10">
        <UsersAndContacts isUsers={true}></UsersAndContacts>
      </section>
    </div>
  );
};

export default AdminUsers;
