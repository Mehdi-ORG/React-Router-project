import { Col, Container, Row } from "react-bootstrap";
import Navbarmenu from "../../component/navbar/Navbar";
import "./Home.css";
import image1 from "../../asset/images/vintage.svg";
import { useState } from "react";
import Footer from "../../component/footer/Footer";
import CourseItem from "../../component/course/CourseItem";
import { CourseData } from "../../Data";

function Home() {
  const [courses, setCourses] = useState(CourseData);
  return (
    <>
      <Navbarmenu />
      <Container fluid="md">
        <Row className="justify-center align-items-center py-5">
          <Col lg={6}>
            <h1>برنامه نویسی با نکست وان کد</h1>
            <p style={{ textAlign: "justify" }}>
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
          <Col lg={6}>
            <img src={image1} className="img-fluid" />
          </Col>
        </Row>
        <Row className="py-5">
          <h1>دوره های آموزشی</h1>
          {courses.map((course) => (
            <Col key={course.id} md={6} lg={4} xl={3} className="gy-4">
              <CourseItem {...course} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
