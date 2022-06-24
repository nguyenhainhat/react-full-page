import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import SwiperCore, { EffectFade } from 'swiper'
import "swiper/css";

import img1 from "../../assets/img/mod-2/console-img-1.png";
import img2 from "../../assets/img/mod-2/console-img-2.png";
import img3 from "../../assets/img/mod-2/console-img-3.png";
import img4 from "../../assets/img/mod-2/console-img-4.png";
import img5 from "../../assets/img/mod-2/console-img-5.png";
import img6 from "../../assets/img/mod-2/console-img-6.png";
import "./sliderImg.scss";

const slideImgs = [img1, img2, img3, img4, img5, img6];

const SliderImg: React.FC = () => {
  SwiperCore.use([EffectFade]);
  return (
    <>
      <section className="section slider">
        <div className="slider_container">
          <div className="slider_container_heading">
            <h1>
              Creative, <br /> Fun and- <br /> Enjoyable <br /> work <br />{" "}
              Impressive
            </h1>
          </div>
          <div className="slider_img">
            <Swiper
              spaceBetween={0}
              effect={"fade"} 
              slidesPerView={1}
              autoplay={{
                delay: 2500,
              }}
              modules={[Autoplay]}
            >
              {slideImgs.map((item,index) => (
                <SwiperSlide key={index}>
                  <div className="slider-img_container">
                    <img src={item} alt="slider-img_item" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderImg;
