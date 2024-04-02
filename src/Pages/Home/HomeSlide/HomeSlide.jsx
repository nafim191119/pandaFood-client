import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SharedTitle from "./../../Shared/SharedTitle/SharedTitle";

const HomeSlide = () => {
  const fontClasses = "text-2xl text-white uppercase -mt-14 text-center";
  return (
    <div className="w-3/4 mx-auto">
      <SharedTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"order online"}
      ></SharedTitle>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={() => console.log("ok")}
      >
        <SwiperSlide>
          <img src={img1} alt="img1" />
          <h3 className={fontClasses}>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img2" />
          <p className={fontClasses}>Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img3" />
          <p className={fontClasses}>soup</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img4" />
          <p className={fontClasses}>cake</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img5" />
          <p className={fontClasses}>salad</p>
        </SwiperSlide>
        <br />
      </Swiper>
    </div>
  );
};

export default HomeSlide;
