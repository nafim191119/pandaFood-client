
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const CardInfo = ({item}) => {
    console.log(item)


    return (
        <div>
            <div className="bg-white py-32 px-8">
                <div className="flex gap-x-16">
                    <div className="w-2/5">
                        <Swiper
                            rewind={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <h1>Name:</h1>
                        <h1>Price:</h1>
                        <button className="btn btn-outline">Default</button>
                    </div>
                </div>

            </div>
            <div className="bg-primary py-24 px-8">
                <div className="text-white">
                    <Tabs defaultIndex={0}>
                        <div className="w-fit">
                            <div className="mx-auto text-xl mb-8 ">
                                <TabList>
                                    <Tab>Description</Tab>
                                    <Tab>Review</Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <div className="grid grid-cols-1 space-y-8">
                                    <h1 className="text-4xl font-bold">Title Name:</h1>
                                    <h1 className="text-2xl font-semibold">Subtitle:</h1>
                                    <h1 className="text-xl">Featured:
                                        <ul className="text-xl">
                                            <li>1</li>
                                            <li>2</li>
                                            <li>3</li>
                                        </ul>
                                    </h1>
                                    <h1 className="text-xl">Specification:</h1>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;