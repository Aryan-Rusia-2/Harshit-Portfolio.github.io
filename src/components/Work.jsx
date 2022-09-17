import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import pic1 from "../assets/1.jpg"
import pic2 from "../assets/2.jpg"
import pic3 from "../assets/3.jpg"
import pic4 from "../assets/4.jpg"
import pic6 from "../assets/6.jpg"
import pic7 from "../assets/7.jpg"
import pic8 from "../assets/8.jpg"
import pic9 from "../assets/9.jpg"
import pic10 from "../assets/10.jpg"

// import pic3 from "../assets/3.jpg"

const Work = () => {
    return (
        <>
            <div className="px-5 md:px-10 pt-16">

                <div className="mx-10 md:mx-32 mb-8">
                    <p className="text-2xl md:text-4xl text-center font-bold text-black border-black dark:border-gray-500 ">
                     Nature Photography
                    </p>
                </div>


                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            className="object-fill w-full max-h-screen min-w-screen-lg"
                            src={pic10}
                            alt="slide 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full max-h-screen min-w-screen-lg"
                            src={pic2}
                            alt=" slide 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full max-h-screen min-w-screen-lg"
                            src={pic3}
                            alt="slide 3"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full max-h-screen min-w-screen-lg"
                            src={pic4}
                            alt="slide 3"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full max-h-screen min-w-screen-lg"
                            src={pic6}
                            alt="slide 3"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full max-h-screen min-w-screen-lg"
                            src={pic7}
                            alt="slide 3"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full max-h-screen min-w-screen-lg"
                            src={pic8}
                            alt="slide 3"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full max-h-screen min-w-screen-lg"
                            src={pic9}
                            alt="slide 3"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="object-fill w-full max-h-screen min-w-screen-lg"
                            src={pic1}
                            alt="slide 3"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

        </>



    )
}

export default Work




