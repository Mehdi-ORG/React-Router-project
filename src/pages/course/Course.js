import { useParams } from "react-router-dom";
import "./Course.css";
import Navbarmenu from "../../component/navbar/Navbar";
import { CourseData } from "../../Data";
import { Col, Container, Row } from "react-bootstrap";

function Course() {
  const courseId = useParams().courseId;
  const courseInfo = CourseData.find((course) => course.id == courseId);
 
  return (
    <>
      <Navbarmenu />
      <Container fluid='md'>
        <Row className="align-items-center">
          <Col md={5}>
            <img src={courseInfo.image} className="img-fluid" />
          </Col>
          <Col md={7}>
            <h3 style={{fontFamily: 'lalezar'}}>{courseInfo.title}</h3>
            <p>{courseInfo.teacher}</p>
            <p>
              <b>{courseInfo.text}</b>
            </p>
            <p style={{textAlign: 'justify'}}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Course;
