import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  reactPortfolio,
  railsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("react");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "rails",
      title: "Ruby on Rails",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "react":
        setData(reactPortfolio);
        break;
      case "rails":
        setData(railsPortfolio);
        break;
      default:
        setData(reactPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target='_blank' rel="noreferrer" className='projLink'>
          <div className="item">
              <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}