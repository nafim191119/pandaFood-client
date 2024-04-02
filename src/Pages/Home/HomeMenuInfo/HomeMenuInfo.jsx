import SharedButton from "../../Shared/SharedButton/SharedButton";
import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import img from "./../../../assets/home/featured.jpg";

const HomeMenuInfo = () => {
  return (
    <div
      className="bg-cover mt-20 bg-fixed"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black py-14 bg-opacity-50 ">
        <SharedTitle
          subHeading={"Check It Out"}
          heading={"From our Menu"}
          color={"white"}
        ></SharedTitle>
        <div className="hero-content w-3/4 mx-auto flex-col lg:flex-row text-white">
          <img src={img} className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-semibold uppercase">
              Where can I get some?
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <SharedButton text={"Read Menu"} color={"white"}></SharedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenuInfo;
