// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import slider1 from '../../assets/images/sliders/slider1.jpg';
import slider2 from '../../assets/images/sliders/slider2.jpg';
import slider3 from '../../assets/images/sliders/slider3.jpg';

const Slider = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="relative container mx-auto">
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
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="" className="w-full h-[calc(100vh-500px)] md:h-[calc(100vh-50px)] object-cover" />
            <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-white space-y-8 text-center">
                <h1 className="text-4xl md:text-8xl">Music for Everyone</h1>
                <p className="text-3xl md:text-4xl">Awaken Possibility</p>
                <div className="w-3/5 md:w-3/12 mx-auto">
                  <button className="bg-blue-500 w-full font-medium text-white text-xl rounded-full py-2 md:py-5 px-5 md:px-8">
                    START LEARNING
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" className="w-full h-[calc(100vh-500px)] md:h-[calc(100vh-50px)] object-cover" />
            <div className="w-full p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-white space-y-8 text-center">
                <h1 className="text-4xl md:text-8xl">Music is Your World</h1>
                <p className="text-3xl md:text-4xl font-light ">Don't Miss a Chance</p>
                <div className="w-3/5 md:w-3/12 mx-auto">
                  <button className="bg-blue-500 w-full font-medium text-white text-xl rounded-full py-2 md:py-5 px-5 md:px-8">
                    START LEARNING
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" className="w-full h-[calc(100vh-500px)] md:h-[calc(100vh-50px)] object-cover" />
            <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-white space-y-8 text-center">
                <h1 className="text-4xl md:text-8xl">Start With a Note</h1>
                <p className="text-3xl md:text-4xl font-light ">Awaken Possibility</p>
                <div className="w-3/5 md:w-3/12 mx-auto">
                  <button className="bg-blue-500 w-full font-medium text-white text-xl rounded-full py-2 md:py-5 px-5 md:px-8">
                    START LEARNING
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
