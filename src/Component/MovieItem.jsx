import React, { useState }  from 'react'
import { Container, Row, Col, Card, Nav, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/Comman.css'
import '../Styles/MovieItem.css'
import { useNavigate } from 'react-router-dom'



function MovieItem() {
     const moviesByLang = {
        ENGLISH: [
            { title: 'HOBBIT', image: '/Images/hobbit.png' },
            { title: 'BACK TO THE FUTURE', image: '/Images/back-to-the-future.png' },
            { title: 'JURASSIC PARK', image: '/Images/jurassic_park.png' },
            { title: 'PULSE', image: '/Images/pulse.png' },
            { title: 'SICARIO', image: '/Images/sicario.png' },
            { title: 'STAR WARS', image: '/Images/star_wars.png' },

            { title: 'HOBBIT', image: '/Images/hobbit.png' },
            { title: 'BACK TO THE FUTURE', image: '/Images/back-to-the-future.png' },
            { title: 'JURASSIC PARK', image: '/Images/jurassic_park.png' },
            { title: 'PULSE', image: '/Images/pulse.png' },
            { title: 'SICARIO', image: '/Images/sicario.png' },
            { title: 'STAR WARS', image: '/Images/star_wars.png' }
        ],
        HINDI: [
            { title: '12TH FAIL', image: '/Images/12th_fail.png' },
            { title: 'CHHAAVA', image: '/Images/chhaava.png' },
            { title: 'JAAT', image: '/Images/jaat.png' },
            { title: 'THE DIPLOMAT', image: '/Images/the_diplomat.png' },
         
        ],
        TELUGU: [
            { title: 'COURT', image: '/Images/court.png' },
            { title: 'PUSHPA2', image: '/Images/pushp2.png' },
            { title: 'KALKI', image: '/Images/kalki.png' },
            { title: 'SALAAR', image: '/Images/salaar.png' }
        ],
        TAMIL: [
            { title: 'INDIAN2', image: '/Images/barateeyudu_2.png' },
            { title: 'GOOD BAD UGLY', image: '/Images/good_bad_ugly.png' },
            { title: 'DRAGON', image: '/Images/dragon.png' },
            { title: 'MAHARAJA', image: '/Images/maharaja.png' }
        ],
        MALAYALAM: [
            { title: 'MANJUMMUL BOYS', image: '/Images/manjummul_boys.png' },
            { title: '2018', image: '/Images/2018.png' },
            { title: 'PONMAN', image: '/Images/ponman.png' },
            { title: 'REKHA CHITHRAM', image: '/Images/rekhachithram.png' }
        ]
    }

    // Active language tab
    const [activeLang, setActiveLang] = useState('ENGLISH')

    // Helper to chunk movies into groups of 6
    const chunkArray = (array, size) => {
        const chunkedArr = []
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size))
        }
        return chunkedArr
    }
    const navigate = useNavigate();

    // Current movie groups
    const movieGroups = chunkArray(moviesByLang[activeLang] || [], 6)


    return (
       <div className="bg-black py-4 container-w-100">
            <div className="movies-container bg-dark py-4">
                <Container fluid>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <h2 className="text-white">MOVIES</h2>
                        <span className="text-white view-all">VIEW ALL &gt;</span>
                    </div>

                    {/* Language Tabs */}
                    <Nav
                        variant="tabs"
                        activeKey={activeLang}
                        onSelect={(selectedKey) => setActiveLang(selectedKey)}
                        className="movie-langs .nav-link "
                    >
                        {Object.keys(moviesByLang).map((lang) => (
                            <Nav.Item key={lang}>
                                <Nav.Link eventKey={lang} className="movie-langs-nav-link movie-langs-nav-link:hover movie-langs-nav-link.active  ">
                                    {lang}
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>

                    {/* Carousel */}
                    <Carousel
                        interval={null}
                        indicators={false}
                        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                        className="mt-3"
                    >
                        {movieGroups.map((group, index) => (
                            <Carousel.Item key={index}>
                                <Row className="justify-content-center">
                                    {group.map((movie, movieIndex) => (
                                        <Col
                                            xs={6}
                                            sm={4}
                                            md={3}
                                            lg={2}
                                            key={movieIndex}
                                            className=" d-flex justify-content-center"
                                        >
                                            <Card
                                                className="movie-card bg-dark text-white border-0"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => navigate(`/movie/${movie.title}`, { state: { movie } })}
                                            >
                                                <Card.Img
                                                    variant="top"
                                                    src={movie.image}
                                                    alt={`${movie.title} poster`}
                                                />
                                                <Card.Body className="p-0 mt-2 text-center">
                                                    <Card.Title className="movie-title">{movie.title}</Card.Title>
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

        
        

    )
}



export default MovieItem