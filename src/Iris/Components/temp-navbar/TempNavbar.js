import React, { useState, useEffect } from "react";
import "./temp-nevbar.scss";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

// 選單連結要使用NavLink取代Link
import { NavLink } from "react-router-dom";

function TempNavbar(props) {
  return (
    <>
      <Navbar
        changeheight
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">React測試站</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto temp-font-size">
            {/* 把Nav.Link作為NavLink來使用 */}
            {/* 一定要加上exact，不然首頁會一直點亮(active) */}
            <Nav.Link as={NavLink} to="/" exact>
              首頁
            </Nav.Link>
            <Nav.Link as={NavLink} to="/test">
              Test
            </Nav.Link>
            <Nav.Link as={NavLink} to="/test2">
              Test2
            </Nav.Link>
            <Nav.Link as={NavLink} to="/userprofile">
              user profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default TempNavbar;
