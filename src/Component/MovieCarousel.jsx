// import React from 'react'
// import { Carousel, Container, Row, Col, Button, Badge } from "react-bootstrap";
// import { FaPlay, FaHeart, FaShareAlt, FaStar } from "react-icons/fa";
// import '../Styles/MovieCarousel.css'
// import '../Styles/Comman.css'


// function MovieCarousel() {
//     const movies = [
//     {
//       title: "WARFARE",
//       description:
//         "Written and directed by Iraq War veteran Ray Mendoza and Alex Garland (Civil War, 28 Days Later), Warfare embeds audiences with a platoon of American Navy SEALs on a surveillance mission gone wrong in insurgent territory. A visceral, boots-on-the-ground story of modern warfare and brotherhood, told like never before: in real-time and based on the memory of the people who lived it.",
//       tags: ["Drama", "Action", "War"],
//       rating: "8.4/10",
//       runtime: "1h 38mins",
//       certificate: "A",
//       poster: "./Images/warfare.jpg",
//     },
//     {
//       title: "CHHAAVA",
//       description:
//         "After Chhatrapati Shivaji Maharaj's death, the Mughals aim to expand into the Deccan, only to face his fearless son, Chhatrapati Sambhaji Maharaj. Chhaava, inspired by Shivaji Sawant's novel, chronicles Chhatrapati Sambhaji Maharaj's unwavering resistance against Aurangzeb, marked by courage, strategy, and betrayal.",
//       tags: ["DRAMA" ,"Action", "HISTORICAL"],
//       rating: "9.2/10",
//       runtime: "2h 41mins",
//       certificate: "UA",
//       poster: "./Images/chhaava.png",
//     },
//     {
//       title: "MAD SQUARE",
//       description:
//         "Mad Square is a Telugu movie starring Narne Nithin, Sangeeth Shobhan, Ram Nithin and Priyanka Jawalkar in prominent roles. It is written and directed by Kalyan Shankar.",
//       tags: [ "Drama" ,"COMEDY"],
//       rating: "8.4/10",
//       runtime: "2h 7mins",
//       certificate: "UA",
//       poster: "./Images/mad-square.png",
//     },
//   ];

//   return (
//     <div className='vh-100 d-flex justify-content-center container-w-100 z-3' style={{ backgroundImage: "url('images/login-bg.png')" }}>
//         <Carousel indicators={false}>
//       {movies.map((movie, index) => (
//         <Carousel.Item key={index}>
//           <Container fluid className=" text-white d-sm-flex w-75 justify-content-center mt-6 py-5 pt-9" >
//             <Row className="align-items-center ">

//               <Col md={8} className=" px-5">

//                 <div className="mb-2">
//                   {movie.tags.map((tag, i) => (
//                     <Badge
//                       key={i}
//                       bg={i === 0 ? "primary" : i === 1 ? "warning" : "danger"}
//                       text={i === 1 ? "dark" : "light"}
//                       className="me-2"
//                     >
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>


//                 <h1 className="">{movie.title}</h1>


//                 <p className=" ">{movie.description}</p>


//                 <div className="d-flex flex-row mb-3">
//                   <Button className='bg-blue border-0  d-flex align-items-center gap-2'>
//                     <FaPlay /> Watch Trailer
//                   </Button>
//                   <Button className='bg-blue border-0  d-flex align-items-center gap-2'>
//                     <FaHeart /> Add to Favorite
//                   </Button>
//                   <Button className='bg-blue border-0  d-flex align-items-center gap-2'>
//                     <FaShareAlt /> Share
//                   </Button>
//                 </div>


//                 <div className="mb-3">
//                   <span className="me-2 text-warning">
//                     <FaStar /> {movie.rating}
//                   </span>
//                   <span className="me-2">• Run Time: {movie.runtime}</span>
//                   <span>• {movie.certificate}</span>
//                 </div>


//                 <Button variant="info" size="lg" className="fw-bold  " href="/Moredetail">

//                   More Detail
//                 </Button>
//               </Col>


//               <Col md={4} className="text-center">
//                 <img
//                   src={movie.poster}
//                   alt={`${movie.title} Poster`}
//                   className="img-fluid rounded-4 shadow"
//                 />
//               </Col>

//             </Row>
//           </Container>
//         </Carousel.Item>
//       ))}
//     </Carousel>



//     </div>
//   )
// }

// export default MovieCarousel
import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button, Badge } from "react-bootstrap";
import { FaPlay, FaHeart, FaShareAlt, FaStar, FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube } from "react-icons/fa";
import '../Styles/MovieCarousel.css';
import '../Styles/Comman.css';

function MovieCarousel() {
  const [activeShareIndex, setActiveShareIndex] = useState(null);

  const movies = [
    {
      title: "WARFARE",
      description:
        "Written and directed by Iraq War veteran Ray Mendoza and Alex Garland (Civil War, 28 Days Later), Warfare embeds audiences with a platoon of American Navy SEALs on a surveillance mission gone wrong in insurgent territory. A visceral, boots-on-the-ground story of modern warfare and brotherhood.",
      tags: ["Drama", "Action", "War"],
      rating: "8.4/10",
      runtime: "1h 38mins",
      certificate: "A",
      poster: "./Images/warfare.jpg",
      trailer: "https://www.youtube.com/watch?v=example_warfare",
      detailPage: "/details/warfare",
    },
    {
      title: "CHHAAVA",
      description:
        "After Chhatrapati Shivaji Maharaj's death, the Mughals aim to expand into the Deccan, only to face his fearless son, Chhatrapati Sambhaji Maharaj. Chhaava chronicles his unwavering resistance against Aurangzeb, marked by courage and betrayal.",
      tags: ["Drama", "Action", "Historical"],
      rating: "9.2/10",
      runtime: "2h 41mins",
      certificate: "UA",
      poster: "./Images/chhaava.png",
      trailer: "https://www.youtube.com/watch?v=example_chhaava",
      detailPage: "/details/chhaava",
    },
    {
      title: "MAD SQUARE",
      description:
        "Mad Square is a Telugu movie starring Narne Nithin, Sangeeth Shobhan, Ram Nithin and Priyanka Jawalkar in prominent roles. It is written and directed by Kalyan Shankar.",
      tags: ["Drama", "Comedy"],
      rating: "8.4/10",
      runtime: "2h 7mins",
      certificate: "UA",
      poster: "./Images/mad-square.png",
      trailer: "https://www.youtube.com/watch?v=example_madsquare",
      detailPage: "/details/mad-square",
    },
  ];

  const handleTrailer = (url) => {
    window.open(url, "_blank");
  };

  const handleFavorite = (movieTitle) => {
    alert(`${movieTitle} has been added to your favorites ❤️`);
  };

  const toggleShareIcons = (index) => {
    setActiveShareIndex(activeShareIndex === index ? null : index);
  };

  const handleMoreDetail = (url) => {
    window.location.href = url;
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url('images/login-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Carousel indicators={false} className="w-100">
        {movies.map((movie, index) => (
          <Carousel.Item key={index}>
            <Container
              fluid
              className="text-white d-flex justify-content-center align-items-center py-5"
              style={{ minHeight: "90vh" }}
            >
              <Row className="align-items-center justify-content-center w-75">
                <Col md={7} className="px-4">
                  <div className="mb-2">
                    {movie.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        bg={i === 0 ? "primary" : i === 1 ? "warning" : "danger"}
                        text={i === 1 ? "dark" : "light"}
                        className="me-2"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h1 className="fw-bold mb-3">{movie.title}</h1>
                  <p className="mb-4">{movie.description}</p>

                  <div className="d-flex flex-wrap gap-3 mb-3">
                    <Button
                      className="bg-blue border-0 d-flex align-items-center gap-2"
                      onClick={() => handleTrailer(movie.trailer)}
                    >
                      <FaPlay /> Watch Trailer
                    </Button>

                    <Button
                      className="bg-blue border-0 d-flex align-items-center gap-2"
                      onClick={() => handleFavorite(movie.title)}
                    >
                      <FaHeart /> Add to Favorite
                    </Button>

                    <div className="position-relative">
                      <Button
                        className="bg-blue border-0 d-flex align-items-center gap-2"
                        onClick={() => toggleShareIcons(index)}
                      >
                        <FaShareAlt /> Share
                      </Button>

                      {activeShareIndex === index && (
                        <div
                          className="d-flex gap-2 mt-2 p-2 bg-dark rounded-3 shadow position-absolute"
                          style={{ zIndex: 10 }}
                        >
                          <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light"
                          >
                            <FaFacebookF size={20} />
                          </a>
                          <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light"
                          >
                            <FaTwitter size={20} />
                          </a>
                          <a
                            href="https://plus.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light"
                          >
                            <FaGooglePlusG size={20} />
                          </a>
                          <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light"
                          >
                            <FaYoutube size={20} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="me-2 text-warning">
                      <FaStar /> {movie.rating}
                    </span>
                    <span className="me-2">• Run Time: {movie.runtime}</span>
                    <span>• {movie.certificate}</span>
                  </div>

                   <Button variant="info" size="lg" className="fw-bold  " href="/Moredetail">

                   More Detail
                 </Button>
                </Col>

                <Col md={5} className="text-center">
                  <img
                    src={movie.poster}
                    alt={`${movie.title} Poster`}
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MovieCarousel;
