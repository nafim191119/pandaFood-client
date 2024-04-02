import { Helmet } from "react-helmet";
import SharedTitle from "../../../Shared/SharedTitle/SharedTitle";
import UsersAndContacts from "../../../../Component/UsersAndContacts/UsersAndContacts";

const AdminContacts = () => {
  return (
    <div className="bg-base-200 w-full flex flex-col mx-auto items-center rounded-md h-full">
      <Helmet>
        <title>Bistro Boss | All Contacts</title>
      </Helmet>
      <SharedTitle
        subHeading={"Any Message"}
        heading={"Check All Messages"}
      ></SharedTitle>
      <section className="flex flex-col bg-base-100 rounded-md w-screen md:w-fit md:p-10 mb-10">
        <UsersAndContacts isUsers={false}></UsersAndContacts>
      </section>
    </div>
  );
};

export default AdminContacts;
