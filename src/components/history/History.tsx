import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "./history.scss";

// import required modules
import { Pagination, FreeMode, Scrollbar, Mousewheel } from "swiper";
import { useTranslation } from "react-i18next";

const historyContent = [
  {
    year: "2021",
    content: [
      "NETFLX Produces Opening Title of Domestic Drama",
      "Cheil Worldwide / Innocean Partner Selection",
      "Hyndai Card TVC and Viral Imaging",
      "Samsung Grande Dryer AI Digital Video Production",
      "Samsung Card Collaboration Digital Video Production",
    ],
  },
  {
    year: "2020",
    content: [
      "ma:nyo TVC Production",
      "ISA KNOX TVC Production",
      "Samsung Galaxy FAN Curator Video Production",
      "Cha-pi CHINA TVC Production",
      "Samsung Galaxy Screensaver Video Production",
    ],
  },
  {
    year: "2019",
    content: [
      "LG Display Shocase Video Production",
      "SSG Campaign TVC 제작",
      "Lineage 2M BI Video Production",
      "Netflix TV Show 'Kingdom' Title 제작",
      "Samsung Mobility Shocase Video Production",
    ],
  },
  {
    year: "2018",
    content: [
      "Establishment of 'LOOC Academy,' a business-focused educational institution",
      "Samsung QLED TV Welcome Video Production",
      "G Dragon 'Untitle' M/V Production",
      "TaeYang X Lexus TVC and M/V Producton",
      "Hyundai Veloster Viral Video Production",
    ],
  },
  {
    year: "2017",
    content: [
      "Establishment of 'LOOC Academy,' a business-focused educational institution",
      "Samsung QLED TV Welcome Video Production",
      "G Dragon 'Untitle' M/V Production",
      "TaeYang X Lexus TVC and M/V Producton",
      "Hyundai Veloster Viral Video Production",
    ],
  },
];

const History: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section history">
      <div className="container">
        <div className="history_container">
          <h2>History</h2>
          <div className="history_scroll">
            <div className="history_content">
              <Swiper
                className="mySwiper"
                slidesPerView={1}
                grabCursor={true}
                pagination={{
                  clickable: true,
                }}
                centeredSlides={true}
                roundLengths={true}
                modules={[Pagination]}
                breakpoints={{
                  // when window width is >= 768px

                  768: {
                    centeredSlides: false,
                    slidesPerView: 3,
                    pagination: false,
                  },
                  1024: {
                    slidesPerView: 4,
                    pagination: false,
                  },
                }}
              >
                {historyContent.map((item, indexBox) => (
                  <SwiperSlide>
                    <div className="history_content_item">
                      <h3>{item.year}</h3>
                      <div className="history_content_desc">
                        <Swiper
                          direction={"vertical"}
                          slidesPerView={4}
                          spaceBetween={10}
                          scrollbar={true}
                          mousewheel={true}
                          modules={[Scrollbar, Mousewheel]}
                          className="mySwiper"
                          breakpoints={{
                            // when window width is >= 768px
                            768: {
                              spaceBetween: 20,
                              centeredSlides: false,
                            },
                            1600: {
                              slidesPerView: 4,
                              pagination: false,
                            },
                          }}
                        >
                          {item.content.map((itemContent, index) => (
                            <SwiperSlide>
                              <div className="history_content_desc_item">
                                <p>{t(`History ${indexBox} ${index}`)}</p>
                                <span>MOTION</span>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
