import SharedCover from "./../../Shared/SharedCover/SharedCover";
import UseMenu from "../../../hooks/UseMenu";
import CoverImg from "./../../../assets/menu/banner3.jpg";
import dessertImg from "./../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "./../../../assets/menu/pizza-bg.jpg";
import saladImg from "./../../../assets/menu/salad-bg.jpg";
import soupImg from "./../../../assets/menu/soup-bg.jpg";
import SharedTitle from "./../../Shared/SharedTitle/SharedTitle";
import MenuCategories from "../MenuCategories/MenuCategories";
import { Helmet } from "react-helmet";
import Loading from "../../../Component/Loader/Loading";

const Menu = () => {
  const [menu, isMenuLoading] = UseMenu();
  const offered = menu.filter((data) => data.category === "offered");
  const dessert = menu.filter((data) => data.category === "dessert");
  const pizza = menu.filter((data) => data.category === "pizza");
  const salad = menu.filter((data) => data.category === "salad");
  const soup = menu.filter((data) => data.category === "soup");

  console.log(offered);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <SharedCover
        heading={"Our menu"}
        subHeading={"Would You Like to Try a dish?"}
        image={CoverImg}
      ></SharedCover>
      <SharedTitle
        heading={"Today's Offer"}
        subHeading={"Don't Miss!"}
      ></SharedTitle>
      {isMenuLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <MenuCategories heading={"offered"} items={offered}></MenuCategories>
          <MenuCategories
            heading={"dessert"}
            items={dessert}
            image={dessertImg}
          ></MenuCategories>
          <MenuCategories
            heading={"pizza"}
            items={pizza}
            image={pizzaImg}
          ></MenuCategories>
          <MenuCategories
            heading={"soup"}
            items={soup}
            image={soupImg}
          ></MenuCategories>
          <MenuCategories
            heading={"salad"}
            items={salad}
            image={saladImg}
          ></MenuCategories>
        </>
      )}
    </div>
  );
};

export default Menu;
