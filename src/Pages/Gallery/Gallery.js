import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Gallery.css';
import wedding1 from '../../images/Gallery/g1.jpg'
import wedding2 from '../../images/Gallery/g2.jpg'
import wedding3 from '../../images/Gallery/g3.jpg'
import wedding4 from '../../images/Gallery/g4.jpg'
// import wedding5 from '../../images/Gallery/g5.jpg'
import wedding6 from '../../images/Gallery/g6.jpg'
// import wedding7 from '../../images/Gallery/g7.jpg'
import wedding8 from '../../images/Gallery/g9.jpg'

const Gallery = () => {
    return (
        <Container fluid className="mb-5 pb-5">
            <Row className="g-4" xs={1} md={2} lg={4}>
                <Col>
                    <Row xs={1} className="g-4">
                        <Col >
                            <div className="image-box" data-aos="fade-right" data-aos-duration="1900">
                                <Image className="w-100 gallery" src={wedding1} />
                            </div>

                        </Col>

                        <Col>
                            <div className="image-box" data-aos="fade-right" data-aos-duration="1900">
                                <Image className="w-100 gallery" src={wedding4} />
                            </div>
                        </Col>
                    </Row>

                </Col>

                <Col>
                    <Row>
                        <Col>
                            <div className="image-box" data-aos="fade-up" data-aos-duration="1900">
                                <Image className="w-100 gallery" src={wedding3} />
                            </div>
                        </Col>
                    </Row>

                </Col>
                <Col>
                    <Row xs={1} className="g-4">
                        <Col>
                            <div className="image-box" data-aos="fade-down" data-aos-duration="1900">
                                <Image className="w-100 gallery" src={wedding2} />
                            </div>
                        </Col>

                        <Col>
                            <div className="image-box"
                                data-aos="fade-up" data-aos-duration="1900">
                                <Image className="w-100 gallery" src={wedding6} />
                            </div>
                        </Col>
                    </Row>

                </Col>
                <Col>
                    <Row>
                        <Col>
                            <div className="image-box"
                                data-aos="fade-down" data-aos-duration="1900">
                                <Image className="w-100 gallery" src={wedding8} />
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>


        </Container>
    );
};

export default Gallery;