import { useEffect, useState } from "react";
import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import FoodCard from "./../../../Component/FoodCard/FoodCard";
const HomeChefRecommends = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((dt) => dt.category === "popular");
        setItems(popular);
      });
  }, []);
  // console.log(items);
  return (
    <div className="w-3/4 mx-auto">
      <SharedTitle
        subHeading={"Should Try"}
        heading={"Chef Recommends"}
      ></SharedTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items?.map((item) => (
          <FoodCard item={item} key={item._id}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default HomeChefRecommends;
