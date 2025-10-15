// export default MovieItem;
import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Navbar, Dropdown, Form, Button } from 'react-bootstrap';

import Search from '../Component/Search'

// --- Helper Functions and Mock Data ---

// Mock data structure, flattened for a single grid display
const getMovies = () => {
    const moviesByLang = {
        ENGLISH: [
            { title: 'HOBBIT', image: '/Images/hobbit.png' },
            { title: 'BACK TO THE FUTURE', image: '/Images/back-to-the-future.png' },
            { title: 'JURASSIC PARK', image: '/Images/jurassic_park.png' },
            { title: 'SICARIO', image: '/Images/sicario.png' },
            { title: 'STAR WARS', image: '/Images/star_wars.png' },
        ],
        HINDI: [
            { title: '12TH FAIL', image: '/Images/12th_fail.png' },
            { title: 'CHHAAVA', image: '/Images/chhaava.png' },
            { title: 'JAAT', image: '/Images/jaat.png' },
            { title: 'THE DIPLOMAT', image: '/Images/the_diplomat.png' },
        ],
        TELUGU: [
            { title: 'PUSHPA 2', image: '/Images/pushp2.png' },
            { title: 'BIG BOSS', image: '/Images/bigboss.png' },
            { title: 'KALKI', image: '/Images/kalki.png' },
            { title: 'SALAAR', image: '/Images/salaar.png' }
        ],
        MALAYALAM: [
            { title: 'MANJUMMUL BOYS', image: '/Images/manjummul_boys.png' },
            { title: 'REKHA CHITHRAM', image: '/Images/rekhachithram.png' },
            { title: '2018', image: '/Images/2018.png' },
        ]
    };

    // Flatten all movie lists into a single array for the static grid
    return Object.values(moviesByLang).flat();
};

const allMovies = getMovies();
const expand = "sm";

// Custom placeholder function for images since local paths won't load
const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = "https://placehold.co/100x150/0f1f2e/ffffff?text=Poster";
    e.target.style.filter = "grayscale(50%)";
}

// --- Footer Component ---

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            style={{
                backgroundColor: "#0b1622", // dark blackish-blue background
                color: "#ccc", // light grey text
                padding: "15px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
                borderTop: '1px solid #1a2a3a'
            }}
        >
            <p style={{ margin: 0 }}>© 2025 StarFlix. All Rights Reserved.</p>
            <button
                onClick={scrollToTop}
                style={{
                    background: "none",
                    border: "none",
                    color: "#00AEEF", // Using StarFlix blue for the button
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                    transition: 'color 0.2s',
                }}
                onMouseOver={(e) => e.target.style.color = 'white'}
                onMouseOut={(e) => e.target.style.color = '#00AEEF'}
            >
                Back to top ↑
            </button>
        </footer>
    );
};

// --- Main Movie Grid Page Component (formerly MovieItem) ---

function MovieGridPage() {
    // State for the filter form (filtering logic not implemented, only UI/console log)
    const [filterState, setFilterState] = useState({
        movieName: '',
        genres: '',
        rating: '',
        releaseFrom: '',
        releaseTo: '',
    });

    const handleCardClick = (movie) => {
        // Logging for demonstration in a standalone environment
        console.log(`Navigating to movie details for:${movie.title}`);
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        // Here you would implement state updates and filtering of 'allMovies'
        console.log("Filter submitted:", filterState);
    };

    return (
        <>
            {/* Custom CSS for look and feel, replacing Common.css */}
            <style>
                {`
                    body {
                        background-color: #0b1622; /* Deep dark background */
                    }
                    /* Ensure icons from bootstrap-icons are included if used (e.g., bi-person-fill) */
                    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
                    .starflix-navbar {
                        background-color: #0b1622 !important; 
                        border-bottom: 1px solid #1a2a3a;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.5);
                    }
                    .movie-card {
                        background-color: #0b1622 !important;
                        border-radius: 8px;
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                        overflow: hidden;
                        height: 100%; 
                        display: flex;
                        flex-direction: column;
                        border: 1px solid #1a2a3a; /* Subtle border */
                    }
                    .movie-card:hover {
                         transform: scale(1.05);
                         box-shadow: 0 0 20px rgba(0, 174, 239, 0.5); /* Blue glow on hover */
                    }
                    .movie-card img {
                        height: auto;
                        width: 100%;
                        aspect-ratio: 2/3; /* Standard movie poster ratio */
                        object-fit: cover;
                        border-radius: 8px 8px 0 0;
                    }
                    .movie-title {
                        font-size: 14px;
                        font-weight: 600;
                        text-align: center;
                        color: white;
                        padding: 8px 0;
                        text-transform: uppercase;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .movie-hover-card {
                        position: relative;
                    }
                    .hover-overlay {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background:(181, 197, 203, 0.85); /* StarFlix blue overlay */
                        color: blue;
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
                        background-color:rgb(0, 0, 255);
                        color: #0b1622;
                        border-radius: 50px;
                        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                    }
                    
                    /* Filter Sidebar Styling */
                    .filter-sidebar {
                        background-color: #1a2a3a; /* Darker blue background for the filter panel */
                        color: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                        position: sticky;
                        top: 80px; 
                        margin-bottom: 20px; /* Space for mobile view */
                    }
                    @media (min-width: 992px) { /* Adjust sticky position for desktop */
                        .filter-sidebar {
                           top: 80px; 
                        }
                    }
                    .filter-sidebar .form-control, .filter-sidebar .form-select {
                        background-color: #0b1622;
                        border: 1px solid #333;
                        color: white;
                    }
                    .filter-sidebar .form-control::placeholder {
                        color: #aaa;
                    }
                    .filter-sidebar .form-label {
                        font-weight: 600;
                        color: #ccccccff;
                    }
                    .btn-submit {
                        background-color: #00AEEF; /* StarFlix Blue */
                        border: none;
                        font-weight: bold;
                        transition: background-color 0.2s;
                        border-radius: 5px;
                    }
                    .btn-submit:hover {
                        background-color: #1d95c8ff;
                    }
                    .navbar-nav .nav-link:hover {
                        color: #00AEEF !important;
                    }
                `}
            </style>

            {/* Navbar Section */}
            <Navbar
                key={expand}
                expand={expand}
                className="starflix-navbar w-100 position-fixed z-3"
                sticky="top"
                style={{ minHeight: '60px' }}
            >
                <Container fluid className="px-md-5">
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <span style={{ color: 'gold', fontSize: '24px', marginRight: '5px' }}>★</span>
                        <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>Star</span>
                        <span style={{ color: 'white', fontWeight: 'bold' }}>Flix</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="dark" className="border-0 bg-secondary" />

                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end w-100">
                        <Nav className="align-items-center">
                            <Nav.Link href="/home" className="fw-bold text-white me-3">HOME</Nav.Link>
                            <Nav.Link href="/movies" className="fw-bold text-white me-3">MOVIES</Nav.Link>
                            <Nav.Link href="/TvShow" className="fw-bold text-white me-3">TV SHOWS</Nav.Link>
                            <Nav.Link href="/Newpopular" className="fw-bold text-white me-3">NEW & POPULAR</Nav.Link>
                            <Dropdown align="end" className="ms-3">
                                <Dropdown.Toggle
                                    as="a"
                                    id="profile-dropdown-toggle"
                                    className="nav-link p-0 d-flex align-items-center"
                                    style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none' }}
                                >
                                    <img
                                        src="Images/digit_icon.png"
                                        alt="Profile"
                                        style={{
                                            width: "35px",
                                            height: "35px",
                                            borderRadius: "50%",
                                            backgroundColor: "#fff",
                                            padding: "5px",
                                        }}
                                    />
                                
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark" className="bg-dark p-0" style={{ border: '1px solid #333', minWidth: '200px' }}>
                                    <Dropdown.Item href="#profile" className="text-white py-2" style={{ backgroundColor: 'transparent', borderBottom: '1px solid #333' }}>Profile</Dropdown.Item>
                                    <Dropdown.Item href="/Account" className="text-white py-2" style={{ backgroundColor: 'transparent', borderBottom: '1px solid #333' }}>ACCOUNT</Dropdown.Item>
                                    <Dropdown.Item href="/" className="text-white py-2" style={{ backgroundColor: 'transparent' }}>SIGN OUT</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
         

            {/* Main Content Area */}
            <div className="py-5" style={{ backgroundColor: '#0b1622', minHeight: '100vh', paddingTop: '80px' }}>
                <Container fluid className="pt-4 px-md-5">
                    <Row>
                        <div>
                            <Search/>
                        </div>

                        {/* 1. Movie Grid Column (Left side on desktop: order 1) */}
                        <Col xs={{ span: 12, order: 1 }} lg={{ span: 9, order: 1 }} className="mb-4">
                            <h2 className="text-white text-center">NEW & POPULAR</h2>
                            <Row className="gy-4">
                                {allMovies.map((movie, movieIndex) => (
                                    <Col xs={6} sm={4} md={3} xl={2} key={movieIndex} className="d-flex justify-content-center">
                                        <Card
                                            className="movie-card movie-hover-card"
                                            style={{ cursor: 'pointer', maxWidth: '200px' }} // Max width constraint for better small card sizing
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
                        </Col>

                        {/* 2. Filter Sidebar Column (Right side on desktop: order 2) */}
                        <Col xs={{ span: 12, order: 2 }} lg={{ span: 3, order: 2 }}>
                            <div className="filter-sidebar">
                                <h5 className="text-center mb-4" style={{ color: 'white', fontWeight: 'bold' }}>Movie Filter</h5>
                                <Form onSubmit={handleFilterSubmit}>

                                    {/* Movie Name */}
                                    <Form.Group className="mb-3">
                                        <Form.Label className="d-block">Movie name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter keywords"
                                            value={filterState.movieName}
                                            onChange={(e) => setFilterState({ ...filterState, movieName: e.target.value })}
                                        />
                                    </Form.Group>

                                    {/* Genres & Subgenres */}
                                    <Form.Group className="mb-3">
                                        <Form.Label className="d-block">Genres & Subgenres</Form.Label>
                                        <Form.Select
                                            value={filterState.genres}
                                            onChange={(e) => setFilterState({ ...filterState, genres: e.target.value })}
                                        >
                                            <option value="">Enter to filter genres</option>
                                            <option value="Action">Action</option>
                                            <option value="Thriller">Thriller</option>
                                            <option value="SciFi">Sci-Fi</option>
                                            <option value="Drama">Drama</option>
                                        </Form.Select>
                                    </Form.Group>

                                    {/* Rating Range */}
                                    <Form.Group className="mb-3">
                                        <Form.Label className="d-block">Rating Range</Form.Label>
                                        <Form.Select
                                            value={filterState.rating}
                                            onChange={(e) => setFilterState({ ...filterState, rating: e.target.value })}
                                        >
                                            <option value="">-- Select the rating range below --</option>
                                            <option value="8+">8.0 & above</option>
                                            <option value="7+">7.0 - 7.9</option>
                                            <option value="6+">6.0 - 6.9</option>
                                        </Form.Select>
                                    </Form.Group>

                                    {/* Release Year */}
                                    <Form.Group className="mb-4">
                                        <Form.Label className="d-block">Release Year</Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Select
                                                    value={filterState.releaseFrom}
                                                    onChange={(e) => setFilterState({ ...filterState, releaseFrom: e.target.value })}
                                                >
                                                    <option value="">From</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2010">2010</option>
                                                </Form.Select>
                                            </Col>
                                            <Col>
                                                <Form.Select
                                                    value={filterState.releaseTo}
                                                    onChange={(e) => setFilterState({ ...filterState, releaseTo: e.target.value })}
                                                >
                                                    <option value="">To</option>
                                                    <option value="2025">2025</option>
                                                    <option value="2015">2015</option>
                                                </Form.Select>
                                            </Col>
                                        </Row>
                                    </Form.Group>

                                    <Button type="submit" className="btn-submit w-100 py-2">
                                        APPLY FILTER
                                    </Button>
                                </Form>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    );
}


// --- Main App Component ---
export default function App() {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif' }}>
            <MovieGridPage />
            <Footer />
        </div>
    );
}