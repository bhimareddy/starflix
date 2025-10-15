import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Image, Tabs, Tab } from 'react-bootstrap';
import { Star, Heart, Share, Search, PersonCircle } from 'react-bootstrap-icons'; 

// A simple component to render the star rating
const StarRating = ({ rating, totalStars = 5 }) => {
    // Determine the number of solid stars based on the rating out of 10
    const solidStars = Math.round((rating / 10) * totalStars);
    const hollowStars = totalStars - solidStars;

    return (
        <span className="star-rating">
            {[...Array(solidStars)].map((_, i) => (
                <Star key={`solid-${i}`} className="text-warning me-1" fill="currentColor" />
            ))}
            {[...Array(hollowStars)].map((_, i) => (
                <Star key={`hollow-${i}`} className="text-secondary me-1" />
            ))}
        </span>
    );
};


const ChhaavaPage = () => {
    // Placeholder data from the image
    const movieData = {
        title: "Chhaava",
        rating: 9.2,
        reviewsCount: "180K Reviews",
        director: "Laxman Utekar",
        synopsis: "After Chhatrapati Shivaji Maharaj's death, the Mughals aim to expand into the Deccan, only to face his fearless son, Chhatrapati Sambhaji Maharaj. Chhaava, inspired by Shivaji Sawant's novel, chronicles Chhatrapati Sambhaji Maharaj.",
        // Placeholder image URL - replace with your actual image path or URL
        posterUrl: "/Images/chhaava.png", 
        // 1. ADD YOUTUBE VIDEO ID HERE (e.g., for the trailer)
        youtubeId: "https://youtu.be/77vRyWNqZjMhttps://youtu.be/77vRyWNqZjM?t=150" // Replace with a real video ID
    };

    // Construct the YouTube embed URL
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${movieData.youtubeId}?autoplay=0&controls=1&rel=0`;

    

    return (
        <div className="bg-dark text-white min-vh-100">
            {/* ===================================================================
            1. Navigation Bar (Top) 
            ... (rest of the Navbar code)
            =================================================================== */}
            <Navbar variant="dark" expand="lg" className="p-3" style={{ backgroundImage: "url('images/login-bg.png')"}}>
                <Container fluid>
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <span style={{ color: 'gold', fontSize: '24px', marginRight: '5px' }}>★</span>
                        <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>Star</span>
                        <span style={{ color: '#F9A825', fontWeight: 'bold' }}>Flix</span>
                    </Navbar.Brand>
                    <Nav className="justify-content-end w-100">
                        <Nav.Link href="#" className="text-white mx-3">HOME</Nav.Link>
                        <Nav.Link href="#" className="text-white mx-3">MOVIES</Nav.Link>
                        <Nav.Link href="#" className="text-white mx-3">TV SHOWS</Nav.Link>
                        <Nav.Link href="#" className="text-white mx-3">NEW & POPULAR</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><PersonCircle className="fs-3 text-white" /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* ===================================================================
            2. Search Bar (Below Nav, Over Background Image) 
            ... (rest of the Search Bar code)
            =================================================================== */}
            <div className="position-relative" style={{ 
                backgroundImage: "url('images/login-bg.png')", 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '100px 0 200px 0', 
                marginTop: '-1px' 
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>

                <Container className="position-relative ">
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <Form className="d-flex bg-blue rounded-pill p-1">
                                <Form.Group controlId="search-type" className="d-flex align-items-center me-2 ms-2">
                                    <Form.Select className="border-0 bg-transparent text-dark fw-bold">
                                        <option>TV SHOW</option>
                                        <option>MOVIE</option>
                                    </Form.Select>
                                </Form.Group>
                                <FormControl
                                    type="search"
                                    placeholder="Search for a movie, TV Show or celebrity that you are looking for"
                                    className="me-2 border-0 bg-transparent"
                                    aria-label="Search"
                                />
                                <Button variant="link" className="text-dark me-2">
                                    <Search size={24} />
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ===================================================================
            3. Main Content (Movie Details) 
            =================================================================== */}
            <Container className="mt-n5 position-relative"> 
                <Row>
                    {/* Left Column: Poster Image */}
                    <Col md={4} lg={3} className="mb-4">
                        <Image src={movieData.posterUrl} fluid rounded style={{ minWidth: '250px' }} alt={`${movieData.title} poster`} />
                    </Col>

                    {/* Right Column: Details, Rating, Tabs */}
                    <Col md={8} lg={9}>
                        <h1 className="display-4 fw-bold">{movieData.title}</h1>
                        
                        {/* Action Buttons */}
                        <div className="d-flex align-items-center my-3">
                            <Button variant="outline-warning" className="me-3 d-flex align-items-center">
                                <Heart className="me-2" /> ADD TO FAVORITE
                            </Button>
                            <Button variant="outline-light" className="d-flex align-items-center">
                                <Share className="me-2" /> SHARE
                            </Button>
                        </div>
                        
                        {/* Rating and Reviews */}
                        <div className="d-flex align-items-center mb-4">
                            <div className="me-4">
                                <p className="mb-0 fs-3 fw-bold">{movieData.rating} / 10</p>
                                <small className="text-muted">{movieData.reviewsCount}</small>
                            </div>
                            <div>
                                <h5 className="mb-1 text-uppercase text-secondary">Movie Rating:</h5>
                                <StarRating rating={movieData.rating} totalStars={5} />
                            </div>
                        </div>

                        {/* Tabs: Overview, Cast & Crew, Reviews */}
                        <Tabs defaultActiveKey="overview" id="movie-details-tabs" className="mb-3 custom-tabs-dark">
                            <Tab eventKey="overview" title="OVERVIEW">
                                <Row className="py-3">
                                    {/* 2. MAIN CHANGE: Video Embed and Synopsis */}
                                    <Col md={8}>
                                        {/* Aspect ratio container for responsive video */}
                                        <div className="ratio ratio-16x9 mb-3">
                                            <iframe
                                                src={youtubeEmbedUrl}
                                                title={`${movieData.title} Trailer`}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                style={{ border: 0 }}
                                            ></iframe>
                                        </div>
                                        <p>{movieData.synopsis}</p>
                                    </Col>
                                    {/* Director details moved to Col md={4} to match layout */}
                                    <Col md={4} className="text-start">
                                        <p className="mb-0 fw-bold">Director:</p>
                                        <p>{movieData.director}</p>
                                    </Col>
                                </Row>
                            </Tab>
                            {/* ... (rest of the tabs) */}
                            <Tab eventKey="cast" title="CAST & CREW">
                                <div className="py-3">
                                    <p>Cast and crew information goes here...</p>
                                </div>
                            </Tab>
                            <Tab eventKey="reviews" title="REVIEWS">
                                <div className="py-3">
                                    <p>User reviews content goes here...</p>
                                </div>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
            
            {/* Optional: Add a custom style block for better tab appearance in dark mode */}
            <style jsx="true">{`
                .custom-tabs-dark .nav-link {
                    color: #fff !important; 
                    border: none;
                    font-weight: bold;
                }
                .custom-tabs-dark .nav-link.active {
                    color: #ffc107 !important; 
                    background-color: transparent !important;
                    border-bottom: 2px solid #ffc107 !important; 
                }
                .star-rating .text-warning {
                    color: #ffc107 !important;
                }
            `}</style>
        </div>
    );
}

export default ChhaavaPage;