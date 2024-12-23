import "./CourseItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CourseItem({ image, title, text, id }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">
          <Link to={`/course/${id}`} className="btn-buy">
            خرید دوره
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}
export default CourseItem;
