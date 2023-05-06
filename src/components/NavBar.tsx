import { Image, Button, Container, Col } from "react-bootstrap"
import '../scss/navbar.scss';

export const NavBar = () => {
    return (
        <Container
            fluid={'lg'}
            as={'nav'}
            className="navbar-main d-flex justify-content-between align-items-center mt-2 mb-2 "
            style={{
                height: '50px',
            }}
        >
            <Col 
                as={'div'}
                className="div-logo"
                lg={2} md={2} xs={6}
            >
                <Image
                    src="/images/logo.svg"
                    alt="Log"
                    className="img-logo"
                    fluid={true}
                />
                
            </Col>
            <Button
                variant="info"
                className="rounded-pill bg-body fw-bolder"
            >
                Try it Free
            </Button>
        </Container>
    )
}
