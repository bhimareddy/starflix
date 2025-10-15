// import React from 'react'
// import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel, Button, Badge } from "react-bootstrap";
// import '../Styles/Comman.css';
// import { useNavigate } from 'react-router-dom'

// function TvShows() {
//   const movies = [
//     { title: 'BIG BOSS', image: '/Images/bigboss.png' },
//     { title: 'KOFFEE WITH KARAN', image: '/Images/koffee-with-karan.png' },
//     { title: 'ISHMART JODI', image: '/Images/ishmart_jodi.png' },
//     { title: 'SHERLOCK', image: '/Images/sherlock.png' },
//     { title: 'DANCE+', image: '/Images/dance.png' },
//     { title: 'SUPERSINGER JUNIOR', image: '/Images/supersinger_junior.png' },
//     { title: 'BIG BOSS 2', image: '/Images/bigboss.png' },
//     { title: 'KOFFEE WITH KARAN 2', image: '/Images/koffee-with-karan.png' },
//     { title: 'ISHMART 2', image: '/Images/ishmart_jodi.png' },
//     { title: 'SHERLOCK 2', image: '/Images/sherlock.png' },
//     { title: 'DANCE+ 2', image: '/Images/dance.png' },
//     { title: 'SUPERSINGER JUNIOR 2', image: '/Images/supersinger_junior.png' },
//   ];

//   // Helper function to chunk the movies into groups for each carousel slide
//   const chunkArray = (array, size) => {
//     const chunkedArr = [];
//     for (let i = 0; i < array.length; i += size) {
//       chunkedArr.push(array.slice(i, i + size));
//     }
//     return chunkedArr;
//   };
//   const navigate = useNavigate();

//   const movieGroups = chunkArray(movies, 6);
//   return (
//     <div className="bg-black container-w-100">
//       <div className="movies-container bg-dark vh-80">
//         <Container fluid>
//           <div className="d-flex justify-content-between align-items-center ">
//             <h2 className="text-white">POPULAR TV SHOWS</h2>
//             <span className="text-white view-all">VIEW ALL &gt;</span>
//           </div>

//           <Carousel
//             indicators={false}
//             nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
//             prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
//           >
//             {movieGroups.map((group, index) => (
//               <Carousel.Item key={index}>
//                 <Row className="justify-content-center">
//                   {group.map((movie, movieIndex) => (
//                     <Col xs={6} sm={4} md={3} lg={2} key={movieIndex} className="mb-4 d-flex justify-content-center">
//                       <Card
//                         className="movie-card bg-dark text-white border-0"
//                         style={{ cursor: 'pointer' }}
//                         onClick={() =>
//                           navigate(`/tvshow/${TvShows.title}`, {
//                             state: { title: TvShows.title, image: TvShows.image },
//                           })
//                         }
//                       >
//                         <Card.Img
//                           variant="top"
//                           src={movie.image}
//                           alt={`${movie.title} poster`}
//                         />
//                         <Card.Body className="p-0 mt-2 text-center">
//                           <Card.Title className="movie-title">{movie.title}</Card.Title>
//                         </Card.Body>
//                       </Card>
//                     </Col>
//                   ))}
//                 </Row>
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </Container>
//       </div>
//     </div>


//   )
// }


// export default TvShows

// // import React from 'react'
// // import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'
// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import '../Styles/Comman.css'

// // import { useNavigate } from 'react-router-dom'

// // function TvShows() {
// //   const tvShows = [
// //      { title: 'BIG BOSS', image: '/Images/bigboss.png' },
// //     { title: 'KOFFEE WITH KARAN', image: '/Images/koffee-with-karan.png' },
// //     { title: 'ISHMART JODI', image: '/Images/ishmart_jodi.png' },
// //     { title: 'SHERLOCK', image: '/Images/sherlock.png' },
// //     { title: 'DANCE+', image: '/Images/dance.png' },
// //     { title: 'SUPERSINGER JUNIOR', image: '/Images/supersinger_junior.png' },
// //     { title: 'BIG BOSS 2', image: '/Images/bigboss.png' },
// //     { title: 'KOFFEE WITH KARAN 2', image: '/Images/koffee-with-karan.png' },
// //     { title: 'ISHMART 2', image: '/Images/ishmart_jodi.png' },
// //     { title: 'SHERLOCK 2', image: '/Images/sherlock.png' },
// //     { title: 'DANCE+ 2', image: '/Images/dance.png' },
// //     { title: 'SUPERSINGER JUNIOR 2', image: '/Images/supersinger_junior.png' },
// //   ];
// // ;

// //   // Helper function to chunk shows into groups for carousel slides
// //   const chunkArray = (array, size) => {
// //     const chunkedArr = [];
// //     for (let i = 0; i < array.length; i += size) {
// //       chunkedArr.push(array.slice(i, i + size));
// //     }
// //     return chunkedArr;
// //   };

// //   const navigate = useNavigate();
// //   const showGroups = chunkArray(tvShows, 6);

// //   return (
// //     <div className="bg-black py-4 container-w-100">
// //       <div className="movies-container bg-dark py-4">
// //         <Container fluid>
// //           <div className="d-flex justify-content-between align-items-center mt-2">
// //             <h2 className="text-white">POPULAR TV SHOWS</h2>
// //             <span className="text-white view-all">VIEW ALL &gt;</span>
// //           </div>

// //           {/* Carousel */}
// //           <Carousel
// //             interval={null}
// //             indicators={false}
// //             nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
// //             prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
// //             className="mt-3"
// //           >
// //             {showGroups.map((group, index) => (
// //               <Carousel.Item key={index}>
// //                 <Row className="justify-content-center">
// //                   {group.map((show, showIndex) => (
// //                     <Col
// //                       xs={6}
// //                       sm={4}
// //                       md={3}
// //                       lg={2}
// //                       key={showIndex}
// //                       className="d-flex justify-content-center"
// //                     >
// //                       <Card
// //                         className="movie-card bg-dark text-white border-0"
// //                         style={{ cursor: 'pointer' }}
// //                         onClick={() =>
// //                           navigate(`/tvshow/${TvShows.title}`, { state: { TvShows } })
// //                         }
// //                       >
// //                         <Card.Img
// //                           variant="top"
// //                           src={TvShows.image}
// //                           alt={`${TvShows.title} poster`}
// //                         />
// //                         <Card.Body className="p-0 mt-2 text-center">
// //                           <Card.Title className="TvShow-title">{TvShows.title}</Card.Title>
// //                         </Card.Body>
// //                       </Card>
// //                     </Col>
// //                   ))}
// //                 </Row>
// //               </Carousel.Item>
// //             ))}
// //           </Carousel>
// //         </Container>
// //       </div>
// //     </div>
// //   );
// // }

// // export default TvShows;
import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Comman.css';
import { useNavigate } from 'react-router-dom';

function TvShows() {
  const shows = [
    { title: 'BIG BOSS', image: '/Images/bigboss.png' },
    { title: 'KOFFEE WITH KARAN', image: '/Images/koffee-with-karan.png' },
    { title: 'ISHMART JODI', image: '/Images/ishmart_jodi.png' },
    { title: 'SHERLOCK', image: '/Images/sherlock.png' },
    { title: 'DANCE+', image: '/Images/dance.png' },
    { title: 'SUPERSINGER JUNIOR', image: '/Images/supersinger_junior.png' },
    { title: 'BIG BOSS 2', image: '/Images/bigboss.png' },
    { title: 'KOFFEE WITH KARAN 2', image: '/Images/koffee-with-karan.png' },
    { title: 'ISHMART 2', image: '/Images/ishmart_jodi.png' },
    { title: 'SHERLOCK 2', image: '/Images/sherlock.png' },
    { title: 'DANCE+ 2', image: '/Images/dance.png' },
    { title: 'SUPERSINGER JUNIOR 2', image: '/Images/supersinger_junior.png' },
  ];

  // Split into groups of 6 per carousel slide
  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  const navigate = useNavigate();
  const showGroups = chunkArray(shows, 6);

  return (
    <div className="bg-black container-w-100">
      <div className="movies-container bg-dark vh-80">
        <Container fluid>
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="text-white">POPULAR TV SHOWS</h2>
            <span className="text-white view-all">VIEW ALL &gt;</span>
          </div>

          {/* Carousel */}
          <Carousel
            indicators={false}
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
          >
            {showGroups.map((group, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  {group.map((show, i) => (
                    <Col
                      xs={6}
                      sm={4}
                      md={3}
                      lg={2}
                      key={i}
                      className="mb-4 d-flex justify-content-center"
                    >
                      <Card
                        className="movie-card bg-dark text-white border-0"
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                          navigate(`/tvshow/${show.title}`, {
                            state: {
                              movie: {
                                title: show.title,
                                image: show.image,
                                link: `https://www.youtube.com/results?search_query=${encodeURIComponent(show.title)}+trailer`,
                              },
                            },
                          })
                        }
                      >
                        <Card.Img
                          variant="top"
                          src={show.image}
                          alt={`${show.title} poster`}
                        />
                        <Card.Body className="p-0 mt-2 text-center">
                          <Card.Title className="movie-title">{show.title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    </div>
  );
}

export default TvShows;
