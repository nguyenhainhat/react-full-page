import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./history.scss";

// import required modules
import { Pagination } from "swiper";

const historyContent = [
  {
    year: "2021",
    content: [
      "NETFLX Produces Opening Title of Domestic Drama",
      "Cheil Worldwide / Innocean Partner Selection",
      "Hyndai Card TVC and Viral Imaging",
      "Samsung Grande Dryer AI Digital Video Production",
      "Samsung Card Collaboration Digital Video Production",
      "JTBC Value-Mental-Posture Spot Video Production",
      "SKT Quantum + Galaxy A TVC and Digital Imaging",
      "Hyundai Oilbank, a symbol, animation production",
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
      "Samsung Galaxy Celeb Live Video Production",
      "Type in Search Word: WWW tvn Drama Title Production",
      "Samsung Galaxy S10 TVC Production",
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
      "SKT / KT / U+ Mobile Operators TVC Production",
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
  return (
    <section className="section history">
      <div className="container">
        <div className="history_container">
          <h2>History</h2>
          <div className="history_scroll">
            <div className="history_content">
              <Swiper
                className="mySwiper"
                spaceBetween={20}
                slidesPerView={1}
                grabCursor={true}
                pagination={true}
                modules={[Pagination]}
                breakpoints={{
                  // when window width is >= 768px
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                    pagination: false,
                  },
                  1024: {
                    slidesPerView: 4,
                    pagination: false,
                  },
                }}
              >
                {historyContent.map((item, index) => (
                  <SwiperSlide>
                    <div className="history_content_item">
                      <h3>{item.year}</h3>
                      <div className="history_content_desc">
                        {item.content.map((itemContent, index) => (
                          <div className="history_content_desc_item">
                            <p>{itemContent}</p>
                            <span>MOTION</span>
                          </div>
                        ))}
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
