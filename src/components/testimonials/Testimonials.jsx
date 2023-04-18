import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Aniekan Udo",
      title: "Full Stack Developer",
      img:
        "assets/AnaikenUdo.jpg",
      icon: "assets/linkedin.png",
      desc:
        "I worked with Nuri at Microverse, I would vouch that he is very good with people and has the ability to maximize their potential. He was always very committed and focused on delivering on time. He was a top performer and inspired us to give our best.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Mike (Chibundu) Kanu",
      title: "Front-end developer",
      img:
        "assets/MikeKanu.jpg",
      icon: "assets/linkedin.png",
      desc:
        "Nuri is a great person and I can vouch for him any day and any time. I have worked with him on various coding projects and our relationship did not end as coding partners, as we are really good friends now. His communication skill is unique. how he handles coding challenges and problem solving, in general, is amazing.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials