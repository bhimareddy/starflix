// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Nav, Navbar, Dropdown, Form, Button } from 'react-bootstrap';
// import Search from '../Component/Search';

// // --- Helper Functions and Mock Data ---

// // Mock data structure, flattened for a single grid display
// const getMovies = () => {
//     const moviesByLang = {
//          tvShows : [
//                 { title: "BIG BOSS", image: "/Images/bigboss.png" },
//                 { title: "KOFFEE WITH KARUN", image: "/Images/koffee-with-karan.png" },
//                 { title: "ISHMART JODI", image: "/Images/ishmart_jodi.png" },
//                 { title: "SHERLOCK", image: "/Images/sherlock.png" },
//                 { title: "DANCE+", image: "/Images/dance.png" },
//                 { title: "SUPERSINGER JUNIOR", image: "/Images/supersinger_junior.png" },
//                 { title: "BIGBOSS", image: "/Images/bigboss.png" },
//                 { title: "KOFFEE WITH KARUN", image: "/Images/koffee-with-karan.png" },
//                 { title: "ISHMART", image: "/Images/ishmart_jodi.png" },
//                 { title: "SHERLOCK", image: "/Images/sherlock.png" },
//                 { title: "DANCE+", image: "/Images/dance.png" },
//                 { title: "SUPERSINGER JUNIOR", image: "/Images/supersinger_junior.png" },
//             ]
//     };

//     // Flatten all movie lists into a single array for the static grid
//     return Object.values(moviesByLang).flat();
// };

// const allMovies = getMovies();
// const expand = "sm";

// // Custom placeholder function for images since local paths won't load
// const handleImageError = (e) => {
//     e.target.onerror = null; // Prevent infinite loop
//     e.target.src = "https://placehold.co/100x150/0f1f2e/ffffff?text=Poster";
//     e.target.style.filter = "grayscale(50%)";
// }

// // --- Footer Component ---

// const Footer = () => {
//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     return (
//         <footer
//             style={{
//                 backgroundColor: "#0b1622", // dark blackish-blue background
//                 color: "#ccc", // light grey text
//                 padding: "15px 40px",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 fontSize: "14px",
//                 borderTop: '1px solid #1a2a3a'
//             }}
//         >
//             <p style={{ margin: 0 }}>© 2025 StarFlix. All Rights Reserved.</p>
//             <button
//                 onClick={scrollToTop}
//                 style={{
//                     background: "none",
//                     border: "none",
//                     color: "#00AEEF", // Using StarFlix blue for the button
//                     cursor: "pointer",
//                     fontSize: "14px",
//                     fontWeight: "bold",
//                     transition: 'color 0.2s',
//                 }}
//                 onMouseOver={(e) => e.target.style.color = 'white'}
//                 onMouseOut={(e) => e.target.style.color = '#00AEEF'}
//             >
//                 Back to top ↑
//             </button>
//         </footer>
//     );
// };

// // --- Main Movie Grid Page Component (formerly MovieItem) ---

// function MovieGridPage() {
//     // State for the filter form (filtering logic not implemented, only UI/console log)
//     const [filterState, setFilterState] = useState({
//         movieName: '',
//         genres: '',
//         rating: '',
//         releaseFrom: '',
//         releaseTo: '',
//     });

//     const handleCardClick = (movie) => {
//         // Logging for demonstration in a standalone environment
//         console.log(`Navigating to movie details for: ${movie.title}`);
//     };

//     const handleFilterSubmit = (e) => {
//         e.preventDefault();
//         // Here you would implement state updates and filtering of 'allMovies'
//         console.log("Filter submitted:", filterState);
//     };

//     return (
//         <>
//             {/* Custom CSS for look and feel, replacing Common.css */}
//             <style>
//                 {`
//                     body {
//                         background-color: #0b1622; /* Deep dark background */
//                     }
//                     /* Ensure icons from bootstrap-icons are included if used (e.g., bi-person-fill) */
//                     @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
//                     .starflix-navbar {
//                         background-color: #0b1622 !important; 
//                         border-bottom: 1px solid #1a2a3a;
//                         box-shadow: 0 2px 4px rgba(0,0,0,0.5);
//                     }
//                     .movie-card {
//                         background-color: #0b1622 !important;
//                         border-radius: 8px;
//                         transition: transform 0.3s ease, box-shadow 0.3s ease;
//                         overflow: hidden;
//                         height: 100%; 
//                         display: flex;
//                         flex-direction: column;
//                         border: 1px solid #1a2a3a; /* Subtle border */
//                     }
//                     .movie-card:hover {
//                          transform: scale(1.05);
//                          box-shadow: 0 0 20px rgba(0, 174, 239, 0.5); /* Blue glow on hover */
//                     }
//                     .movie-card img {
//                         height: auto;
//                         width: 100%;
//                         aspect-ratio: 2/3; /* Standard movie poster ratio */
//                         object-fit: cover;
//                         border-radius: 8px 8px 0 0;
//                     }
//                     .movie-title {
//                         font-size: 14px;
//                         font-weight: 600;
//                         text-align: center;
//                         color: white;
//                         padding: 8px 0;
//                         text-transform: uppercase;
//                         white-space: nowrap;
//                         overflow: hidden;
//                         text-overflow: ellipsis;
//                     }
//                     .movie-hover-card {
//                         position: relative;
//                     }
//                     .hover-overlay {
//                         position: absolute;
//                         top: 0;
//                         left: 0;
//                         width: 100%;
//                         height: 100%;
//                         background:(181, 197, 203, 0.85); /* StarFlix blue overlay */
//                         color: blue;
//                         display: flex;
//                         align-items: center;
//                         justify-content: center;
//                         font-weight: bold;
//                         font-size: 16px;
//                         opacity: 0;
//                         transition: opacity 0.3s ease;
//                         border-radius: 8px;
//                     }
//                     .movie-hover-card:hover .hover-overlay {
//                         opacity: 1;
//                     }
//                     .read-more {
//                         padding: 10px 20px;
//                         background-color:rgb(0, 0, 255);
//                         color: #0b1622;
//                         border-radius: 50px;
//                         box-shadow: 0 4px 8px rgba(0,0,0,0.3);
//                     }

//                     /* Filter Sidebar Styling */
//                     .filter-sidebar {
//                         background-color: #1a2a3a; /* Darker blue background for the filter panel */
//                         color: white;
//                         padding: 20px;
//                         border-radius: 8px;
//                         box-shadow: 0 4px 15px rgba(0,0,0,0.3);
//                         position: sticky;
//                         top: 80px; 
//                         margin-bottom: 20px; /* Space for mobile view */
//                     }
//                     @media (min-width: 992px) { /* Adjust sticky position for desktop */
//                         .filter-sidebar {
//                            top: 80px; 
//                         }
//                     }
//                     .filter-sidebar .form-control, .filter-sidebar .form-select {
//                         background-color: #0b1622;
//                         border: 1px solid #333;
//                         color: white;
//                     }
//                     .filter-sidebar .form-control::placeholder {
//                         color: #aaa;
//                     }
//                     .filter-sidebar .form-label {
//                         font-weight: 600;
//                         color: #ccccccff;
//                     }
//                     .btn-submit {
//                         background-color: #00AEEF; /* StarFlix Blue */
//                         border: none;
//                         font-weight: bold;
//                         transition: background-color 0.2s;
//                         border-radius: 5px;
//                     }
//                     .btn-submit:hover {
//                         background-color: #1d95c8ff;
//                     }
//                     .navbar-nav .nav-link:hover {
//                         color: #00AEEF !important;
//                     }
//                 `}
//             </style>

//             {/* Navbar Section */}
//             <Navbar
//                 key={expand}
//                 expand={expand}
//                 className="starflix-navbar w-100 position-fixed z-3"
//                 sticky="top"
//                 style={{ minHeight: '60px' }}
//             >
//                 <Container fluid className="px-md-5">
//                     <Navbar.Brand href="#home" className="d-flex align-items-center">
//                         <span style={{ color: 'gold', fontSize: '24px', marginRight: '5px' }}>★</span>
//                         <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>Star</span>
//                         <span style={{ color: 'white', fontWeight: 'bold' }}>Flix</span>
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="dark" className="border-0 bg-secondary" />

//                     <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end w-100">
//                         <Nav className="align-items-center">
//                             <Nav.Link href="/home" className="fw-bold text-white me-3">HOME</Nav.Link>
//                             <Nav.Link href="/movies" className="fw-bold text-white me-3">MOVIES</Nav.Link>
//                             <Nav.Link href="/TvShow" className="fw-bold text-white me-3">TV SHOWS</Nav.Link>
//                             <Nav.Link href="/New" className="fw-bold text-white me-3">NEW & POPULAR</Nav.Link>
//                             <Dropdown align="end" className="ms-3">
//                                 <Dropdown.Toggle
//                                     as="a"
//                                     id="profile-dropdown-toggle"
//                                     className="nav-link p-0 d-flex align-items-center"
//                                     style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none' }}
//                                 >
//                                     <img
//                                         src="Images/digit_icon.png"
//                                         alt="Profile"
//                                         style={{
//                                             width: "35px",
//                                             height: "35px",
//                                             borderRadius: "50%",
//                                             backgroundColor: "#fff",
//                                             padding: "5px",
//                                         }}
//                                     />

//                                 </Dropdown.Toggle>

//                                 <Dropdown.Menu variant="dark" className="bg-dark p-0" style={{ border: '1px solid #333', minWidth: '200px' }}>
//                                     <Dropdown.Item href="#profile" className="text-white py-2" style={{ backgroundColor: 'transparent', borderBottom: '1px solid #333' }}>Profile</Dropdown.Item>
//                                     <Dropdown.Item href="#account" className="text-white py-2" style={{ backgroundColor: 'transparent', borderBottom: '1px solid #333' }}>ACCOUNT</Dropdown.Item>
//                                     <Dropdown.Item href="#signout" className="text-white py-2" style={{ backgroundColor: 'transparent' }}>SIGN OUT</Dropdown.Item>
//                                 </Dropdown.Menu>
//                             </Dropdown>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>


//             {/* Main Content Area */}
//             <div className="py-5" style={{ backgroundColor: '#0b1622', minHeight: '100vh', paddingTop: '80px' }}>
//                 <Container fluid className="pt-4 px-md-5">
//                     <Row>
//                         <div className='bg-bule'>
//                             <Search />
//                         </div>

//                         {/* 1. Movie Grid Column (Left side on desktop: order 1) */}
//                         <Col xs={{ span: 12, order: 1 }} lg={{ span: 12, order: 1 }} className="mb-4">
//                             <h2 className="text-white text-center">TvShow</h2>
//                             <Row className="gy-4">
//                                 {allMovies.map((movie, movieIndex) => (
//                                     <Col xs={6} sm={4} md={3} xl={2} key={movieIndex} className="d-flex justify-content-center">
//                                         <Card
//                                             className="movie-card movie-hover-card justify-content-center"
//                                             style={{ cursor: 'pointer', maxWidth: '200px' }} // Max width constraint for better small card sizing
//                                             onClick={() => handleCardClick(movie)}
//                                         >
//                                             <Card.Img
//                                                 variant="top"
//                                                 src={movie.image}
//                                                 alt={`${movie.title} poster`}
//                                                 onError={handleImageError}
//                                             />
//                                             <div className="hover-overlay">
//                                                 <span className="read-more">READ MORE</span>
//                                             </div>
//                                             <Card.Body className="p-0 text-center">
//                                                 <Card.Title className="movie-title px-1">{movie.title}</Card.Title>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                         </Col>



//                     </Row>
//                 </Container>
//             </div>
//         </>
//     );
// }


import React, { useState } from "react";
import { Container, Row, Col, Card, Nav, Navbar, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Search from "../Component/Search";

// --- Helper Functions and Mock Data ---
const getMovies = () => {
  const moviesByLang = {
    tvShows: [
      { title: "BIG BOSS", image: "/Images/bigboss.png" },
      { title: "KOFFEE WITH KARUN", image: "/Images/koffee-with-karan.png" },
      { title: "ISHMART JODI", image: "/Images/ishmart_jodi.png" },
      { title: "SHERLOCK", image: "/Images/sherlock.png" },
      { title: "DANCE+", image: "/Images/dance.png" },
      { title: "SUPERSINGER JUNIOR", image: "/Images/supersinger_junior.png" },
      { title: "BIGBOSS", image: "/Images/bigboss.png" },
      { title: "KOFFEE WITH KARUN", image: "/Images/koffee-with-karan.png" },
      { title: "ISHMART", image: "/Images/ishmart_jodi.png" },
      { title: "SHERLOCK", image: "/Images/sherlock.png" },
      { title: "DANCE+", image: "/Images/dance.png" },
      { title: "SUPERSINGER JUNIOR", image: "/Images/supersinger_junior.png" },
    ],
  };
  return Object.values(moviesByLang).flat();
};

const allMovies = getMovies();
const expand = "sm";

// --- Handle missing images ---
const handleImageError = (e) => {
  e.target.onerror = null;
  e.target.src = "https://placehold.co/100x150/0f1f2e/ffffff?text=Poster";
  e.target.style.filter = "grayscale(50%)";
};

// --- Footer Component ---
const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer
      style={{
        backgroundColor: "#0b1622",
        color: "#ccc",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px",
        borderTop: "1px solid #1a2a3a",
      }}
    >
      <p style={{ margin: 0 }}>© 2025 StarFlix. All Rights Reserved.</p>
      <button
        onClick={scrollToTop}
        style={{
          background: "none",
          border: "none",
          color: "#00AEEF",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold",
          transition: "color 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.color = "white")}
        onMouseOut={(e) => (e.target.style.color = "#00AEEF")}
      >
        Back to top ↑
      </button>
    </footer>
  );
};

// --- Main Movie Grid Page ---
function MovieGridPage() {
  const navigate = useNavigate();

  const handleCardClick = (movie) => {
    // Redirect to show detail page with movie title as param
    navigate(`/tvshowdetail/${encodeURIComponent(movie.title)}`, { state: { movie } });
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
        key={expand}
        expand={expand}
        className="starflix-navbar w-100 position-fixed z-3"
        sticky="top"
        style={{ minHeight: "60px" }}
      >
        <Container fluid className="px-md-5">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span style={{ color: "gold", fontSize: "24px", marginRight: "5px" }}>★</span>
            <span style={{ color: "#00AEEF", fontWeight: "bold" }}>Star</span>
            <span style={{ color: "white", fontWeight: "bold" }}>Flix</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            variant="dark"
            className="border-0 bg-secondary"
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end w-100">
            <Nav className="align-items-center">
              <Nav.Link href="/home" className="fw-bold text-white me-3">HOME</Nav.Link>
              <Nav.Link href="/movies" className="fw-bold text-white me-3">MOVIES</Nav.Link>
              <Nav.Link href="/TvShow" className="fw-bold text-white me-3">TV SHOWS</Nav.Link>
              <Nav.Link href="/New" className="fw-bold text-white me-3">NEW & POPULAR</Nav.Link>
              <Dropdown align="end" className="ms-3">
                <Dropdown.Toggle
                  as="a"
                  id="profile-dropdown-toggle"
                  className="nav-link p-0 d-flex align-items-center"
                  style={{ cursor: "pointer", backgroundColor: "transparent", border: "none" }}
                >
                  <img
                    src="Images/digit_icon.png"
                    alt="Profile"
                    style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#fff", padding: "5px" }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  variant="dark"
                  className="bg-dark p-0"
                  style={{ border: "1px solid #333", minWidth: "200px" }}
                >
                  <Dropdown.Item href="#profile" className="text-white py-2" style={{ backgroundColor: "transparent", borderBottom: "1px solid #333" }}>Profile</Dropdown.Item>
                  <Dropdown.Item href="#account" className="text-white py-2" style={{ backgroundColor: "transparent", borderBottom: "1px solid #333" }}>ACCOUNT</Dropdown.Item>
                  <Dropdown.Item href="#signout" className="text-white py-2" style={{ backgroundColor: "transparent" }}>SIGN OUT</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className="py-5" style={{ backgroundColor: "#0b1622", minHeight: "100vh", paddingTop: "80px" }}>
        <Container fluid className="pt-4 px-md-5">
          <div className="bg-blue">
            <Search />
          </div>
          <h2 className="text-white text-center mb-4">TV SHOWS</h2>
          <Row className="gy-4">
            {allMovies.map((movie, movieIndex) => (
              <Col xs={6} sm={4} md={3} xl={2} key={movieIndex} className="d-flex justify-content-center">
                <Card
                  className="movie-card movie-hover-card justify-content-center"
                  style={{ cursor: "pointer", maxWidth: "200px", position: "relative" }}
                  onClick={() => handleCardClick(movie)}
                >
                  <Card.Img
                    variant="top"
                    src={movie.image}
                    alt={`${movie.title} poster`}
                    onError={handleImageError}
                  />
                  <div className="hover-overlay">
                    <span className="read-more">READ MORE</span>
                  </div>
                  <Card.Body className="p-0 text-center">
                    <Card.Title className="movie-title px-1">{movie.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />

      {/* Hover CSS */}
      <style>{`
        .movie-hover-card {
          position: relative;
        }
        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 174, 239, 0.6);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 8px;
        }
        .movie-hover-card:hover .hover-overlay {
          opacity: 1;
        }
        .read-more {
          padding: 10px 20px;
          background-color: #00AEEF;
          color: #0b1622;
          border-radius: 50px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
      `}</style>
    </>
  );
}

// --- Main App Component ---
export default function App() {
  return <MovieGridPage />;
}
