import { Button, Col, Container, Row, Image } from "react-bootstrap"
import '../scss/styles-main.scss';

export const HeaderComponent = () => {
  return (
    <Container
        fluid={'lg'}
            as={'section'}
            className="header-main"
        >
        <Row
            as={'article'}
            className="d-flex align-items-center pb-5 mb-1"
        >
            {/**Parte izquierda */}
            <Col
                lg={6} md={6} xs={12}
                className="mb-5 text-center text-md-start"
            >
                <h1 className="text-capitalize">build the community your fans will love</h1>
                <p className="mb-4">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <Button 
                    className="btn-page text-capitalize"
                >
                    get started for free
                </Button>
            </Col>
            {/**Parte derecha - imagen */}
            <Col
                lg={6}md={6} xs={12}
            >
                <Image 
                    src="/images/illustration-mockups.svg"
                    fluid={true}
                />
            </Col>
        </Row>
    </Container>
  )
}
