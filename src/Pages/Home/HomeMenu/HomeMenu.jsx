import { useEffect, useState } from "react";
import FoodItems from "../../../Component/FoodItems/FoodItems";
import SharedTitle from "./../../Shared/SharedTitle/SharedTitle";
import SharedButton from "./../../Shared/SharedButton/SharedButton";

const HomeMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data?.filter((data) => data?.category === "salad");
        console.log(filteredData);
        setMenu(filteredData);
      });
    // console.log(menu);
  }, []);
  return (
    <div className="w-3/4 mx-auto my-12">
      <SharedTitle
        subHeading={"check it out"}
        heading="From our menu"
      ></SharedTitle>
      <FoodItems items={menu}></FoodItems>
      <SharedButton text={"view full menu"}></SharedButton>
    </div>
  );
};

export default HomeMenu;
