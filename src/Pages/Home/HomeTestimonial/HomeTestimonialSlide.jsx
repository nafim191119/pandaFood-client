import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

const HomeTestimonialSlide = ({ reviews }) => {
  return (
    <div className="mt-10">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="items-center flex flex-col w-3/4 mx-auto gap-4">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review?.details}</p>
              <h3 className="text-yellow-600 text-xl font-semibold">
                {review?.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeTestimonialSlide;
