import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h3>رسالت نکست وان کد</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <img src="https://cdn.zarinpal.com/badges/trustLogo/1.png" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
