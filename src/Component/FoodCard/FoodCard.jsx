import SharedButton from "../../Pages/Shared/SharedButton/SharedButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import UseCart from "../../hooks/UseCart";
import UseAuth from "../../hooks/UseAuth";
// import UseAxiosSecure from "../../hooks/UseAxiosSecure";


const FoodCard = ({ item }) => {
  // const [axiosSecure] = UseAxiosSecure();
  const { name, recipe, image, _id, price } = item;
  const { user } = UseAuth();
  const [, refetch] = UseCart();
  const navigate = useNavigate();


  const handleAddCart = () => {
    if (!user) navigate("/login");
  };
  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <figure>
        <img src={image} alt="Food" />
      </figure>
      <div className="card-body items-center bg-base-100">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-end">
          <p>
            <Link to={`/order/cardInfo/${_id}`}>
              <SharedButton
                clickHandler={handleAddCart}
                className="w-full h-full"
                text={"Details"}
              />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
