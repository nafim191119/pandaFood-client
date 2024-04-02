import { Link } from "react-router-dom";
import SharedCover from "../../Shared/SharedCover/SharedCover";
import FoodItems from "./../../../Component/FoodItems/FoodItems";
import SharedButton from "./../../Shared/SharedButton/SharedButton";

const MenuCategories = ({ heading, items, image }) => {
  const toOrder = heading === "offered" ? "salad" : heading;
  return (
    <div className="my-12">
      {image && <SharedCover heading={heading} image={image}></SharedCover>}
      <div className="w-3/4 mx-auto">
        <FoodItems items={items}></FoodItems>
        <Link to={`/order/${toOrder}`}>
          <SharedButton text={"Order Your favorite food"}></SharedButton>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategories;
