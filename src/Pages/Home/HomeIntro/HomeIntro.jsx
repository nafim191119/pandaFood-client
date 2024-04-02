import img from "../../../assets/home/featured.jpg";

const HomeIntro = () => {
  return (
    <div
      className="hero w-3/4 mx-auto mt-12 bg-fixed "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-white m-8 py-5 px-8 text-black">
          <h1 className="mb-5 text-4xl font-bold">Bistro Boss</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
