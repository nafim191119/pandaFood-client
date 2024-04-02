import { useParams } from "react-router-dom";
import UseMenu from "../../../../hooks/UseMenu";
import ItemAddUpdate from "../../../../Component/ItemAddUpdate/ItemAddUpdate";
import SharedTitle from "../../../Shared/SharedTitle/SharedTitle";
import { Helmet } from "react-helmet";

const AdminUpdateItem = () => {
  const { id } = useParams();
  console.log(id);
  const [menu, isMenuLoading] = UseMenu();
  const item = !isMenuLoading && menu.find((item) => item._id === id);
  console.log(item);
  return (
    <div className="bg-base-200 flex flex-col w-full mx-auto items-center rounded-md h-full">
      <Helmet>
        <title>Bistro Boss | Update Item</title>
      </Helmet>
      <SharedTitle
        subHeading={"Want to Modify!"}
        heading={"Update now!"}
      ></SharedTitle>
      {!isMenuLoading && (
        <ItemAddUpdate isUpdate={true} defaultItem={item}></ItemAddUpdate>
      )}
    </div>
  );
};

export default AdminUpdateItem;
