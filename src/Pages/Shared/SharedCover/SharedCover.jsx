const SharedCover = ({ image, heading, subHeading }) => {
  const subHead = subHeading
    ? subHeading
    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fuga necessitatibus suscipit possimus modi";
  return (
    <div
      className="hero h-[700px] bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center w-3/5 text-neutral-content">
        <div className=" bg-black w-full py-16 bg-opacity-60">
          <h1 className="mb-5 text-4xl font-semibold uppercase">{heading}</h1>
          <p className="mb-5 w-3/4 mx-auto">{subHead}</p>
        </div>
      </div>
    </div>
  );
};

export default SharedCover;
