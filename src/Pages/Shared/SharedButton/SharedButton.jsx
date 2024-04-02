const SharedButton = ({ text, color, clickHandler }) => {
  const bgColor = color ? color : "black";

  return (
    // <div className="text-center my-4">
    <button
      onClick={clickHandler}
      className={`btn btn-outline text-center my-4 text-${bgColor} border-0 border-b-2 border-b-${bgColor} focus:border-b-orange-500 focus:text-orange-500`}
    >
      {text || "Click"}
    </button>
    // </div>
  );
};

export default SharedButton;
