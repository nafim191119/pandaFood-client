import SharedTitle from "../../../Shared/SharedTitle/SharedTitle";
import ItemAddUpdate from "../../../../Component/ItemAddUpdate/ItemAddUpdate";
import { Helmet } from "react-helmet";

const AdminAddItem = () => {
  return (
    <div className="bg-base-200 flex flex-col w-full mx-auto items-center rounded-md h-full">
      <Helmet>
        <title>Bistro Boss | Add Item</title>
      </Helmet>
      <SharedTitle
        subHeading={"What's New?"}
        heading={"Add an Item"}
      ></SharedTitle>
      <ItemAddUpdate isUpdate={false}></ItemAddUpdate>
    </div>
  );
};

export default AdminAddItem;
