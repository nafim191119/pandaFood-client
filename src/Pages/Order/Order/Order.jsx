import { Helmet } from "react-helmet";
import SharedCover from "../../Shared/SharedCover/SharedCover";
import OrderImg from "./../../../assets/shop/banner2.jpg";
import UseMenu from "../../../hooks/UseMenu";
import Loading from "../../../Component/Loader/Loading";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
//  TODO: add pagination in this page
const Order = () => {
  const allIndex = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { item } = useParams();
  const index = allIndex.indexOf(item);
  const [menu, isMenuLoading] = UseMenu();
  const drinks = menu.filter((data) => data.category === "drinks");
  const dessert = menu.filter((data) => data.category === "dessert");
  const pizza = menu.filter((data) => data.category === "pizza");
  const salad = menu.filter((data) => data.category === "salad");
  const soup = menu.filter((data) => data.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <SharedCover
        heading={"Our Order"}
        subHeading={"Would You Like to Try a Dish?"}
        image={OrderImg}
      ></SharedCover>
      {isMenuLoading ? (
        <Loading></Loading>
      ) : (
        <div className="my-12">
          <Tabs defaultIndex={index}>
            <div className="w-fit mx-auto">
              <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soup</Tab>
                <Tab>Desserts</Tab>
                <Tab>Drinks</Tab>
              </TabList>
            </div>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 w-3/4 mx-auto">
                {salad?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 w-3/4 mx-auto">
                {pizza?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 w-3/4 mx-auto">
                {soup?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 w-3/4 mx-auto">
                {dessert?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 w-3/4 mx-auto">
                {drinks?.map((item) => (
                  <FoodCard key={item?._id} item={item}></FoodCard>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Order;
