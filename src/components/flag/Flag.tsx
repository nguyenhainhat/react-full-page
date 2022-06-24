import "./flag.scss"

const flagContent = [
  {
    title: "Partnetship",
    desc: "looc.tzlee@gmail.com",
    link: "looc.tzlee@gmail.com",
  },
  {
    title: "Recruiting",
    desc: "looc.tzlee@gmail.com",
    link: "looc.tzlee@gmail.com",
  },
  { title: "Learn more", desc: "Learn more about us >", link: "/about" },
];

const Flag: React.FC = () => {
  return (
    <section className="section flag">
      <div className="container">
        <div className="flag_container">
          <div className="flag_container_left">
            {flagContent.map((item, i) => (
              <div className="flag_container_left_item">
                <h3>{item.title}.</h3>
                <a href={item.link}>{item.desc}</a>
              </div>
            ))}
          </div>
          <div className="flag_container_right">
            <h2>Let's <br /> Make the world <br /> Together. </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flag;
