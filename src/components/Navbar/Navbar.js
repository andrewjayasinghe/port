import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
// import main_logo2 from "./logo-image/logo2.png";
import "./Navbar.css"



class Navbar extends Component {

    render() {

        return (


          <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" style={{backgroundColor:"#2A3c43"}}>
            <div>
  <a href={process.env.PUBLIC_URL + '/#/'}  id="logo-href">ANDREW JAYASINGHE</a>
  </div>
       

             <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" className="navDropDown"/>
              
              
              
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" >

      
  <ReactBootStrap.Nav className="mr-auto">

</ReactBootStrap.Nav>
  
      <ReactBootStrap.Nav className='nav-size' >
      <ReactBootStrap.NavDropdown title="Projects" id="nav-dropdown" className="nav-font" style={{boxShadow: "none"}} >
        <ReactBootStrap.NavDropdown.Item href="https://andrewjayasinghe.github.io/Hangman/Hangman/" target="_blank" className="drop" >Hangman Game</ReactBootStrap.NavDropdown.Item>      
          <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://dansljardin.herokuapp.com/#/" target="_blank" className="drop" >Dans L' Jardin</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://headstartschildcare.com/#/" target="_blank" className="drop" >Headstarts Day Care</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
      </ReactBootStrap.NavDropdown>
        <ReactBootStrap.Nav.Link href={process.env.PUBLIC_URL + '/#/'} className="nav-font" id="home">Term-1</ReactBootStrap.Nav.Link >
        <ReactBootStrap.Nav.Link  href={process.env.PUBLIC_URL + '/#/Term2'} className="nav-font" id="faq">Term-2</ReactBootStrap.Nav.Link >
        <ReactBootStrap.Nav.Link  href={process.env.PUBLIC_URL + '/#/Term3'} className="nav-font" id="info">Term-3</ReactBootStrap.Nav.Link >
        <ReactBootStrap.Nav.Link  href={process.env.PUBLIC_URL + '/#/Term4'} className="nav-font" id="about">Term-4</ReactBootStrap.Nav.Link >
        <ReactBootStrap.Nav.Link  href={process.env.PUBLIC_URL + '/#/T'} className="nav-font" id="resume" >Résumé</ReactBootStrap.Nav.Link >


   </ReactBootStrap.Nav>

    </ReactBootStrap.Navbar.Collapse>
  
  </ReactBootStrap.Navbar>




        )

    }
}

export default Navbar