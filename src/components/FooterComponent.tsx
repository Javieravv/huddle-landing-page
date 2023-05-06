import { Col, Container, Row, Image  } from 'react-bootstrap';
import '../scss/styles-main.scss';

export const FooterComponent = () => {
    return (
        <Container
            as={'footer'}
            className='footer-component '
            fluid
        >
            <Container
                as={'section'}
                className='footer-main text-white '
            >
                <Row>
                    <Col
                        lg={2} md={3} xs={5}
                    >
                        <Image
                            src="/images/logo-1.svg"
                            alt='Logo 1'
                            fluid
                            className='mb-3'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                        <div
                            className="option-footer d-flex justify-content-between gap-2"
                        >
                            <div>
                                <Image
                                    src="/images/icon-location.svg"
                                    alt="Location"
                                />
                            </div>
                            <p className='fs-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam illo perspiciatis reprehenderit facilis soluta laudantium!</p>
                        </div>
                        <div
                            className="option-footer d-flex gap-2"
                        >
                            <div>
                                <Image
                                    src="/images/icon-phone.svg"
                                    alt="Phone"
                                />
                            </div>
                            <p className='fs-6'>+1-543-123-4561</p>
                        </div>
                        <div
                            className="option-footer d-flex gap-2"
                        >
                            <div>
                                <Image
                                    src="/images/icon-email.svg"
                                    alt="Email"
                                />
                            </div>
                            <p className='fs-6'>example@huddle.com</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <ul>
                            <li>
                                <p className='text-capitalize'>about us</p>
                            </li>
                            <li>
                                <p className='text-capitalize'>what we do</p>
                            </li>
                            <li>
                                <p className='text-uppercase'>faq</p>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <ul>
                            <li>
                                <p className='text-capitalize'>career</p>
                            </li>
                            <li>
                                <p className='text-capitalize'>blog</p>
                            </li>
                            <li>
                                <p className='text-capitalize'>contact us</p>
                            </li>
                        </ul>
                    </Col>
                    <Col 
                        xs={12} md={6} lg={3}
                        className='d-flex flex-column justify-content-between align-items-center align-items-md-start '
                    >
                        <div className='mb-3'>
                            <Image 
                                src="/images/facebook.svg"
                                alt="Facebook"
                                className='img-social me-3'
                            />
                            <Image 
                                src="/images/twitter.svg"
                                alt="Facebook"
                                className='img-social me-3'
                            />
                            <Image 
                                src="/images/instagram.svg"
                                alt="Facebook"
                                className='img-social me-3'
                            />
                        </div>
                        <div>
                            <p>Copyright 2023 Huddle. All rights reserved </p>
                        </div>
                    </Col>
                </Row>

            </Container>


        </Container>
    )
}
