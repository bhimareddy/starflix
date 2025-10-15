// import React, { useState, useEffect }  from 'react'

// function Theather() {
//   const videos = [
//     {
//         title: "Logan Official Trailer 1 (2017) - Hugh Jackman Movie",
//         url: "https://www.youtube.com/embed/Div0iP65aZo"
//     },
//     {
//         title: "Beauty and the Beast: Official Teaser Trailer 2",
//         url: "https://www.youtube.com/embed/OvW_L8sTu5E"
//     },
//     {
//         title: "Fast & Furious 8",
//         url: "https://www.youtube.com/embed/uisBaTkQAEs"
//     },
//     {
//         title: "Wonder Woman",
//         url: "https://www.youtube.com/embed/1Q8fG0TtVAY"
//     },
//     {
//         title: "Oblivion: Official Teaser Trailer",
//         url: "https://www.youtube.com/embed/dQ3Mt9yiz6k"
//     }
// ];
//  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentVideoIndex((prevIndex) =>
//                 prevIndex === videos.length - 1 ? 0 : prevIndex + 1
//             );
//         }, 5000); // Change every 5 seconds

//         return () => clearInterval(interval);
//     }, []);



//   return (
//     <div style={{ display: "flex", backgroundColor: "#0B1C2C", color: "white" }} className='container-w-100'>
//             <div style={{ flex: 3, margin: "10px" }}>
//                 <h2>IN THEATER</h2>
//                 <iframe
//                     width="75%"
//                     height="400"
//                     src={videos[currentVideoIndex].url}
//                     title={videos[currentVideoIndex].title}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//                 <p>{videos[currentVideoIndex].title}</p>
//             </div>
//             <div style={{ flex: 1, margin: "10px" }}>
                
//                 <ul style={{ listStyle: "none", padding: 0 }}>
//                     {videos.map((vid, index) => (
//                         <li
//                             key={index}
//                             onClick={() => setCurrentVideoIndex(index)}
//                             style={{
//                                 margin: "10px 0",
//                                 cursor: "pointer",
//                                 background:
//                                     index === currentVideoIndex ? "#38628cff" : "transparent",
//                                 padding: "5px",
//                                 height: "50px",
//                                 width: "100%",
//                                 textaline:"center"

//                             }}
//                         >
//                             {vid.title}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>

//   )
// }

// export default Theather
import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Theater = () => {
  const trailers = [
    {
      title: "Logan: Director James Mangold Interview",
      time: "2:43",
      video: "https://www.youtube.com/embed/gbug3zTm3Ws",
      thumbnail: "Images/trailer3.png",
    },
    {
      title: "Beauty and the Beast: Official Teaser Trailer 2",
      time: "2:32",
      video: "https://www.youtube.com/embed/e3Nl_TCQXuw",
      thumbnail: "Images/trailer4.png",
    },
    {
      title: "Fast & Furious 8",
      time: "3:11",
      video: "https://www.youtube.com/embed/uisBaTkQAEs",
      thumbnail: "Images/trailer5.jpg",
    },
    {
      title: "Wonder Woman",
      time: "2:30",
      video: "https://www.youtube.com/embed/1Q8fG0TtVAY",
      thumbnail: "Images/trailer7.jpg",
    },
    {
      title: "Oblivion: Official Teaser Trailer",
      time: "2:45",
      video: "https://www.youtube.com/embed/XmIIgE7eSak",
      thumbnail: "Images/trailer2.jpg",
    },
  ];

  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);

  // ✅ useState to hold slider references
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  // ✅ Link sliders after mount
  useEffect(() => {
    setNav1(mainSlider.current);
    setNav2(thumbSlider.current);
  }, []);

  // Custom Arrows (simple ▲ ▼)
  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{ cursor: "pointer", fontSize: "20px", color: "white", textAlign: "center" }}
    >
      ▲
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{ cursor: "pointer", fontSize: "20px", color: "white", textAlign: "center" }}
    >
      ▼
    </div>
  );

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
  };

  const thumbSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    focusOnSelect: true,
    vertical: true,
    arrows: true,
    autoplay: true,
      autoplaySpeed: 2500,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 992, settings: { vertical: false, slidesToShow: 3 } },
      { breakpoint: 768, settings: { vertical: false, slidesToShow: 2 } },
    ],
  };

  return (
    <div className="in-theater-section text-white py-5" style={{ backgroundColor: "#07131f" }}>
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={6}>
            <h3 className="fw-bold text-uppercase">In Theater</h3>
          </Col>
          <Col md={6} className="text-end">
            <a href="/trailers" className="text-white-50 fw-semibold text-decoration-none">
              View All →
            </a>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* ✅ Main Video Slider */}
          <Col md={8}>
            <Slider {...mainSettings} ref={mainSlider}>
              {trailers.map((t, i) => (
                <div key={i} className="ratio ratio-16x9">
                  <iframe
                    src={t.video}
                    title={t.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </Slider>
          </Col>

          {/* ✅ Thumbnail Slider */}
          <Col md={4} className="position-relative">
            <Slider {...thumbSettings} ref={thumbSlider}>
              {trailers.map((t, i) => (
                <div
                  key={i}
                  className="d-flex align-items-center mb-3 bg-dark rounded p-2"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={t.thumbnail}
                    alt={t.title}
                    style={{
                      width: "80px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    className="me-3"
                  />
                  <div>
                    <div className="fw-semibold small text-white">{t.title}</div>
                    <small className="text-muted">{t.time}</small>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Theater;