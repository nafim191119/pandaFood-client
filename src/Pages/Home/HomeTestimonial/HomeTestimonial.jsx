import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
import HomeTestimonialSlide from "./HomeTestimonialSlide";
import Loading from "./../../../Component/Loader/Loading";
import UseReviews from "../../../hooks/UseReviews";
const HomeTestimonial = () => {
  const [reviews, loading] = UseReviews();
  // console.log("reviews", reviews, "loading", loading);
  return (
    <div className="w-3/4 mx-auto my-20">
      <SharedTitle
        subHeading={"What Our Client Says"}
        heading="Testimonial"
      ></SharedTitle>

      {loading ? (
        <Loading></Loading>
      ) : (
        <HomeTestimonialSlide reviews={reviews}></HomeTestimonialSlide>
      )}
    </div>
  );
};

export default HomeTestimonial;
