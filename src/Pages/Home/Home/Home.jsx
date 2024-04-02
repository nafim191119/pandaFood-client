import { Helmet } from "react-helmet";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeChefRecommends from "../HomeChefRecommends/HomeChefRecommends";
import HomeContact from "../HomeContact/HomeContact";
import HomeIntro from "../HomeIntro/HomeIntro";
import HomeMenu from "../HomeMenu/HomeMenu";
import HomeMenuInfo from "../HomeMenuInfo/HomeMenuInfo";
import HomeSlide from "../HomeSlide/HomeSlide";
import HomeTestimonial from "../HomeTestimonial/HomeTestimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Better Please | Home</title>
      </Helmet>
      <HomeBanner></HomeBanner>
      <HomeSlide></HomeSlide>
      <HomeIntro></HomeIntro>
      <HomeMenu></HomeMenu>
      <HomeContact></HomeContact>
      <HomeChefRecommends></HomeChefRecommends>
      <HomeMenuInfo></HomeMenuInfo>
      <HomeTestimonial></HomeTestimonial>
    </div>
  );
};

export default Home;
