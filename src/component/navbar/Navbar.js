import { useState } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { isLogin } from "../../Utils";

function Navbarmenu() {

  const [loginstatus, setLoginstatus]=useState(isLogin() ? 'خروج' : "ورود")
  const logoutHandler = ()=>{
    document.cookie =
        "username=admin; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";
        setLoginstatus('ورود')
  }

  const expand = 'md'
  return (
    <Navbar key={expand} expand={expand} className="mb-3" style={{backgroundColor : "rgb(186 , 182, 253)"}}>
          <Container >
            <Navbar.Brand href="#">نکست وان کد</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  نکست وان کد
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to='/' className='nav-link' >صفحه اصلی</NavLink>
                  <NavLink to='/about' className='nav-link' >درباره ما</NavLink>
                  <NavLink to='/article' className='nav-link' >مقالات</NavLink>
                  <NavLink to='/panel' className='nav-link' >پنل</NavLink>
                   {isLogin() ? <NavLink onClick={logoutHandler} to='/login' className='nav-link' >{loginstatus}</NavLink> :
                   <NavLink to='/login' className='nav-link' >{loginstatus}</NavLink>}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}
export default Navbarmenu;
