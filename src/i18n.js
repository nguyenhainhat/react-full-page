import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Header menu":
        "17-10, Dosan-daero 8-gil, Gangnam-gu, Republic of Korea 1F",
      "Box content 0":
        "Our company provided all the appliances in need, as well as VFX, social advertising design, artwork, game development, technology, and output. In addition, we also deduce motion graphics with subtitle",
      "Box content 1":
        "Our company experiences conducting brand design with various companies, including UI/UX, branding, editing, graphics, industrial design, and maintenance of new media, company, social, and marketing de",
      "Box content 2":
        "The development area was recognized for its diversity through the verification of the stability stage. The development team, who always concerned about the stability of the development. Moreover, they",
      "Box content 3":
        "We understand the society needs their own label/keyword of the culture to share their communication. This has become part of their strength in their lives. Moreover, we realized connect people with cu",
      "History 0 0": "NETFLX Produces Opening Title of Domestic Drama",
      "History 0 1": "Cheil Worldwide / Innocean Partner Selection",
      "History 0 2": "Hyndai Card TVC and Viral Imaging",
      "History 0 3": "Samsung Grande Dryer AI Digital Video Production",
      "History 0 4": "Samsung Card Collaboration Digital Video Production",
      "History 0 5": "JTBC Value-Mental-Posture Spot Video Production",
      "History 0 6": "SKT Quantum + Galaxy A TVC and Digital Imaging",
      "History 0 7": "Hyundai Oilbank, a symbol, animation production",
      // 1
      "History 1 0": "ma:nyo TVC Production",
      "History 1 1": "ISA KNOX TVC Production",
      "History 1 2": "Samsung Galaxy FAN Curator Video Production",
      "History 1 3": "Cha-pi CHINA TVC Production",
      "History 1 4": "Samsung Galaxy Screensaver Video Production",
      "History 1 5": "Samsung Galaxy Celeb Live Video Production",
      "History 1 6": "Type in Search Word: WWW tvn Drama Title Production",
      "History 1 7": "Samsung Galaxy S10 TVC Production",
      //   2
      "History 2 0": "LG Display Shocase Video Production",
      "History 2 1": "SSG Campaign TVC 제작",
      "History 2 2": "Lineage 2M BI Video Production",
      "History 2 3": "Netflix TV Show 'Kingdom' Title 제작",
      "History 2 4": "Samsung Mobility Shocase Video Production",
      "History 2 5": "SKT / KT / U+ Mobile Operators TVC Production",
      // 3
      "History 3 0":
        "Establishment of 'LOOC Academy,' a business-focused educational institution",
      "History 3 1": "Samsung QLED TV Welcome Video Production",
      "History 3 2": "G Dragon 'Untitle' M/V Production",
      "History 3 3": "TaeYang X Lexus TVC and M/V Producton",
      "History 3 4": "Hyundai Veloster Viral Video Production",
      //   4
      "History 4 0":
        "Establishment of 'LOOC Academy,' a business-focused educational institution",
      "History 4 1": "Samsung QLED TV Welcome Video Production",
      "History 4 2": "G Dragon 'Untitle' M/V Production",
      "History 4 3": "TaeYang X Lexus TVC and M/V Producton",
      "History 4 4": "Hyundai Veloster Viral Video Production",
    },
  },
  kr: {
    translation: {
      "Header menu": "서울특별시 강남구 도산대로 8길 17-10 이리스빌딩 1F",
      "Box content 0":
        "VFX, 소셜광고 디자인, 아트웍, 게임 개발 등 이미지와 디자인 제작에 필요한 모든 것 그리고 고객이 필요로 하는 기술과 결과물을 제공합니다. 또한 모션그래픽 및 자막, 종적 타이포그래피, 애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을 도출합니다.",
      "Box content 1":
        "UI/UX, 브랜드/편집/그래픽/산업디자인 및 뉴미디어, 컴퍼니/브랜드/소셜/마케팅 디자인 유지보수 등 넓은 바운더리와 다양한 경험으로 많은 기업들과 브랜드 디자인을 진행하고 있습니다. 고객과 기업의 니즈를 맞추고 조율하여 최상의 결과물을 도출할 수 있게 합니다.",
      "Box content 2":
        "개발 영역은 각 단계를 차근히 밟으며 안정적으로 증명을 거쳐 그 다양성과 안정성을 인정받고 있습니다. 트렌디하면서 안정성있는 개발을 위해 언제나 고민하고 노력하는 개발팀은 기업과의 협업 업무부터 자체 플랫폼 개발 등 다양한 업무 를 진행합니다.",
      "Box content 3":
        "다양한 사람들이 각자 원하는 문화라는 키워드로 소통하고 나누며 참여하는 것이 얼마나 큰 힘이 되는지, 사람을 이어주는 문화사업이 얼마나 많은 행복을 주는지 알고 있습니다. Concept cube는 뮤직, 세미나 등 다양한 문화 행사를 만들고 함께 나누려 노력합니다.",
      "History 0 0": "NETFLX 국내 드라마 오프닝 타이틀 제작",
      "History 0 1": "제일기획 / 이노션 협력업체 선정",
      "History 0 2": "현대 카드 TVC 및 바이럴 영상 제작",
      "History 0 3": "삼성 그랑데 건조기 AI 디지털영상제작",
      "History 0 4": "삼성카드 콜라보레이션 디지털 영상제작",
      "History 0 5": "JTBC 가치-정신-자세 스팟 영상 제작",
      "History 0 6": "SKT 퀀텀 + 갤럭시 A TVC 및 디지털 영상제작",
      "History 0 7": "현대오일뱅크 심볼 애니메이션 제작",
      //   1
      "History 1 0": "마녀공장 TVC 제작",
      "History 1 1": "이자녹스 TVC 제작",
      "History 1 2": "Samsung Galaxy FAN Curator 영상 제작",
      "History 1 3": "Cha-pi CHINA TVC 제작",
      "History 1 4": "Samsung Galaxy Screensaver 영상 제작",
      "History 1 5": "Samsung Galaxy Celeb Live 영상 제작",
      "History 1 6": "SKT 퀀텀 + 갤럭시 A TVC 및 디지털 영상제작",
      "History 1 7": "WWW '검색어를 입력하세요' tvn 드라마 Title 제작",
      //   2
      "History 2 0": "LG Display Shocase 영상 제작",
      "History 2 1": "SSG 켐페일 TVC 제작",
      "History 2 2": "Lineage 2M BI 영상 제작",
      "History 2 3": "Netflix TV Show 'Kingdom' Title 제작",
      "History 2 4": "Samsung Mobility Showcase 영상 제작",
      "History 2 5": "SKT / KT / U+ 통신사 TVC 제작",
      // 3
      "History 3 0": "실무중심의 교육기관 '루크 아카데미' 설립",
      "History 3 1": "삼성 QLED TV 웰컴 비디오 제작",
      "History 3 2": "지드래곤 'Untitle' M/V 제작",
      "History 3 3": "태양 X Lexus TVC 및 M/V 제작",
      "History 3 4": "현대 벨로스터 바이럴 영상 제작",
      // 4
      "History 4 0": "실무중심의 교육기관 '루크 아카데미' 설립",
      "History 4 1": "삼성 QLED TV 웰컴 비디오 제작",
      "History 4 2": "지드래곤 'Untitle' M/V 제작",
      "History 4 3": "태양 X Lexus TVC 및 M/V 제작",
      "History 4 4": "현대 벨로스터 바이럴 영상 제작",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
