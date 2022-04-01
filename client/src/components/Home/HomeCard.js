import { Card, Col, Grid, Text, Row, Button } from "@nextui-org/react"
import { Link } from "react-router-dom";

export default function HomeCard({ data }) {
  return (
    <Grid xs={10} sm={4}>
      <Card hoverable cover css={{ w: '100%' }}>
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              {data.categorie}
            </Text>
            <Text h3 color="#fff">
              {data.name}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body>
          <Card.Image
            src={data.img.secure_url}
            height={400}
            width="100%"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: 'absolute',
            bgBlur: '#ffffff',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1
          }}
        >
          <Row>
            <Col>
              <Text color="#fff" size={15}>{data.rating}</Text>
              <Text color="#fff" size={12}>{data.working_hours}</Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Link to={`/restaurants/${data._id}`}>
                  <Button flat auto rounded color="secondary">
                    <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                      Menu
                    </Text>
                  </Button>
                </Link>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}