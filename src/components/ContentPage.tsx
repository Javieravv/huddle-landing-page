import { Container, Row, Image, Col, Button } from "react-bootstrap"
import { FC } from "react"
import '../scss/content-main.scss';

interface itemPage {
    title: string;
    description: string;
    image: string;
    classes: string;
}

const itemPage: itemPage[] = [
    {
        title: "Grow Together",
        description: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
        image: "/images/illustration-grow-together.svg",
        classes: ""
    },
    {
        title: "Flowin Conversations",
        description: "You wouldn't paginate a conversation in real life, so why do in online? Our threads have just-in-time loading for a more natural flow",
        image: "/images/illustration-flowing-conversation.svg",
        classes: "flex-row-reverse"
    },
    {
        title: "Your Users",
        description: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your user can start chattin inmediately",
        image: "/images/illustration-your-users.svg",
        classes: ""
    }
]

const ItemPage: FC<itemPage> = ({ title, description, image, classes }) => {
    return (
        <Row
            as={'article'}
            className={`d-flex align-items-center mt-5 border border-2 rounded-4 shadow pb-5 pt-5 text-center text-md-start ${classes}`}
        >
            <Col
                as={'div'}
                xs={12} md={6}
                className="ps-5 pe-5"
            >
                <h2>{title}</h2>
                <p> {description} </p>
            </Col>
            <Col
                as={'div'}
                xs={12} md={6}
            >
                <Image
                    src={image}
                    alt={image}
                    fluid={true}
                    width={'80%'}
                />
            </Col>
        </Row>
    )
}

export const ContentPage = () => {
    return (
        <Container
            fluid={'lg'}
            as={'section'}
            className="content-main"
            style={{
                marginBottom: '150px'
            }}
        >
            <Row
                as={'div'}
                className="div-items mb-5"
            >
                <Col
                    className="me-2 ms-2"
                >
                    {
                        itemPage.map(item => (
                            <ItemPage
                                key={item.title}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                classes={item.classes}
                            />
                        ))
                    }
                </Col>
            </Row>
            <Row className="justify-content-center position-relative">
                <Col
                    as={'div'}
                    className="ready-tobuild d-flex flex-column align-items-center justify-content-center border border-2 shadow position-absolute bg-body rounded-2 text-center"
                    lg={6} md={6} xs={11}
                    style={{
                        top: '10px'
                    }}
                >
                    <h2 className="text-capitalize pb-2">ready to build your community</h2>
                    <Button
                        className="btn-page text-capitalize"
                    >
                        get started for free
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
