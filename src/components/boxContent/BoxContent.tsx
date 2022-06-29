import { Link } from "react-router-dom";
import "./boxContent.scss";
import img1 from "../../assets/img/mod-3/img1.png";
import img1Light from "../../assets/img/mod-3/img1-light.png";
import img2 from "../../assets/img/mod-3/img2.png";
import img2Light from "../../assets/img/mod-3/img2-light.png";
import img3 from "../../assets/img/mod-3/img3.png";
import img3Light from "../../assets/img/mod-3/img3-light.png";
import img4 from "../../assets/img/mod-3/img4.png";
import img4Light from "../../assets/img/mod-3/img4-light.png";
import { useRef, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const boxContentItems = [
  {
    title: "Game Development",
    img: img1,
    imgL: img1Light,
    desc: "VFX, 소셜광고 디자인, 아트웍, 게임 개발 등 이미지와 디자인 제작에 필요한 모든 것 그리고 고객이 필요로 하는 기술과 결과물을 제공합니다. 또한 모션그래픽 및 자막, 종적 타이포그래피, 애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을 도출합니다.",
  },
  {
    title: "UI design",
    img: img2,
    imgL: img2Light,
    desc: "UI/UX, 브랜드/편집/그래픽/산업디자인 및 뉴미디어, 컴퍼니/브랜드/소셜/마케팅 디자인 유지보수 등 넓은 바운더리와 다양한 경험으로 많은 기업들과 브랜드 디자인을 진행하고 있습니다. 고객과 기업의 니즈를 맞추고 조율하여 최상의 결과물을 도출할 수 있게 합니다.",
  },
  {
    title: "SI",
    img: img3,
    imgL: img3Light,
    desc: "개발 영역은 각 단계를 차근히 밟으며 안정적으로 증명을 거쳐 그 다양성과 안정성을 인정받고 있습니다. 트렌디하면서 안정성있는 개발을 위해 언제나 고민하고 노력하는 개발팀은 기업과의 협업 업무부터 자체 플랫폼 개발 등 다양한 업무 를 진행합니다.",
  },
  {
    title: "Game Marketing",
    img: img4,
    imgL: img4Light,
    desc: "다양한 사람들이 각자 원하는 문화라는 키워드로 소통하고 나누며 참여하는 것이 얼마나 큰 힘이 되는지, 사람을 이어주는 문화사업이 얼마나 많은 행복을 주는지 알고 있습니다. Concept cube는 뮤직, 세미나 등 다양한 문화 행사를 만들고 함께 나누려 노력합니다.",
  },
];

const BoxContent: React.FC = () => {
  const [hoverImg, setHoverImg] = useState(false);
  const [numImg, setNumImg] = useState(Number);
  const { t, i18n } = useTranslation();

  return (
    <section className="section boxContent">
      <div className="container">
        <div className="boxContent_container">
          {boxContentItems.map((item, index) => {
            const handleHoverEnter = () => {
              setHoverImg(true);
              setNumImg(index);
            };
            const handleHoverLeave = () => {
              setHoverImg(false);
            };

            return (
              <div
                key={index}
                className={`boxContent_item ${index}`}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
              >
                <div className="boxContent_item_wrap">
                  <div className="boxContent_item_heading">
                    {item?.title.split(" ").map((items) => (
                      <h2>{items}</h2>
                    ))}
                  </div>
                  <div
                    className={`${
                      hoverImg && index === numImg
                        ? "boxContent_item_arrow arrow-active"
                        : "boxContent_item_arrow"
                    }`}
                  >
                    <AiOutlineArrowDown />
                  </div>
                </div>
                <img
                  className="boxContent_item-img"
                  src={`${
                    hoverImg && index === numImg ? item?.imgL : item?.img
                  }`}
                  alt={item?.title}
                />
                <div className="boxContent_item_info">
                  <span className="boxContent_item_span">{item?.title}</span>
                  <p>
                    {t(`Box content ${index}`)}
                    {/* {item?.desc} */}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BoxContent;
