const SharedTitle = ({ subHeading, heading, color }) => {
  const bgColor = color ? color : "black";
  return (
    <div className="mt-10 items-center flex justify-center">
      <div className="text-center">
        <p className="text-yellow-500 ">---{subHeading}---</p>
        <div className="divider w-full"></div>
        <h3 className={`text-2xl uppercase text-${bgColor}`}>{heading}</h3>
        <div className="divider w-full"></div>
      </div>
    </div>
  );
};

export default SharedTitle;
