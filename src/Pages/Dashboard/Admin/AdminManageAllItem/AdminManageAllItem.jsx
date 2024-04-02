import { Helmet } from "react-helmet";
import ItemsTable from "../../../../Component/ItemsTable/ItemsTable";
import UseMenu from "../../../../hooks/UseMenu";
import SharedTitle from "../../../Shared/SharedTitle/SharedTitle";

const AdminManageAllItem = () => {
  const [menu, isMenuLoading, refetch] = UseMenu();
  const items = { itemData: menu, refetch, isItemLoading: isMenuLoading };
  return (
    <div className="bg-base-200 flex flex-col w-full mx-auto items-center rounded-md h-full">
      <Helmet>
        <title>Bistro Boss | All Item</title>
      </Helmet>
      <SharedTitle
        subHeading={"Hurry up!"}
        heading={"Manage All Items"}
      ></SharedTitle>
      <section className="flex mx-3 md:mx-0 flex-col bg-base-100 rounded-md md:p-10 mb-10">
        <ItemsTable items={items} isMenu={true}></ItemsTable>
      </section>
    </div>
  );
};

export default AdminManageAllItem;
