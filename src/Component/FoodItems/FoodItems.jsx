import FoodItem from "./FoodItem";
const FoodItems = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2  gap-x-10 my-12 gap-y-7 ">
      {items?.map((data) => (
        <FoodItem key={data?._id} item={data}></FoodItem>
      ))}
    </div>
  );
};

export default FoodItems;
