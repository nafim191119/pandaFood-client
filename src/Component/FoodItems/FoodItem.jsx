const FoodItem = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex gap-7 text-black">
      <img
        className=" w-[118px] h-[104px] rounded-tr-full rounded-b-full"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-lg">{name} --------</h3>
        <p className="text-gray-700">{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default FoodItem;
