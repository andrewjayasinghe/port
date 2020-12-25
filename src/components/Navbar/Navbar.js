import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
// import main_logo2 from "./logo-image/logo2.png";
import "./Navbar.css"



class Navbar extends Component {

    render() {

        return (


          <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" style={{boxShadow: "none",backgroundColor:"#2A3c43"}}>
            <div >
  <a href={process.env.PUBLIC_URL + '/#/'} id="logo-href" className="nav-font">ANDREW JAYASINGHE</a></div>
       

             <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" className="navDropDown"/>
              
              
              
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" >
  
      <ReactBootStrap.Nav className='nav-size' >
      <ReactBootStrap.NavDropdown title="Projects" id="nav-dropdown" className="nav-font" style={{boxShadow: "none", color:"white"}} >
        <ReactBootStrap.NavDropdown.Item href="https://andrewjayasinghe.github.io/Hangman/Hangman/" target="_blank" >Hangman Game</ReactBootStrap.NavDropdown.Item>      
          <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://dansljardin.herokuapp.com/#/" target="_blank">Dans L' Jardin (Book a Musician)</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://headstartschildcare.com/#/" target="_blank" >Headstarts Day Care Website</ReactBootStrap.NavDropdown.Item>
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


  // <ReactBootStrap.Navbar bg="dark" variant="dark">
  // <ReactBootStrap.Navbar.Brand href="#home">Navbar</ReactBootStrap.Navbar.Brand>
  // <ReactBootStrap.Nav className="mr-auto">
  //   <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
  //   <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
  //   <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
  //   </ReactBootStrap.Nav>
  //   </ReactBootStrap.Navbar>  

        )

    }
}

export default Navbar