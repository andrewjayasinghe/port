import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
// import main_logo2 from "./logo-image/logo2.png";
import "./Navbar.css"
import file from "./../../assets/COVID.pdf" 
import file1 from "./../../assets/unofficial.pdf" 
import nse1 from "./../../assets/NSE_1_Certification.pdf"
import nse3 from "./../../assets/NSE_3_Certificate.pdf"
import aws from "./../../assets/134_3_2647869_1668723274_AWS_Course_Completion_Certificate.pdf"
import cisa from "./../../assets/Cyber-P.pdf"
import qualys from "./../../assets/VMDR_coursecompletion.pdf"



class Navbar extends Component {

    render() {

        return (


          <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" style={{backgroundColor:"#2A3c43"}}>
            <div>
  <a href="https://andrewjayasinghe.github.io/test/index.html" target="_blank"  id="logo-href">ANDREW JAYASINGHE</a>
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
        <ReactBootStrap.NavDropdown.Item href="https://ieeexplore.ieee.org/document/9666565" target="_blank" className="drop" >COVID Tracing Paper</ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://github.com/andrewjayasinghe/builtspace" target="_blank" className="drop" >Builtspace Client Management</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://www.nikoiaqua.com/index.html" target="_blank" className="drop" >Nikoi Aqua Website</ReactBootStrap.NavDropdown.Item>

        
          </ReactBootStrap.NavDropdown>

          <ReactBootStrap.NavDropdown title="Credentials" id="nav-dropdown" className="nav-font" style={{boxShadow: "none"}} >
        <ReactBootStrap.NavDropdown.Item href="https://www.credly.com/users/andrew-jayasinghe" target="_blank" className="drop" >Credly Verified Certifications</ReactBootStrap.NavDropdown.Item>      
          <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://learning.customerconnect.vmware.com/site/report.do?OLTAjax=1&dispatch=printCertificate&type=COURSE_CERTIFICATE&gradeId=a4b20f09-66bf-11ed-b5a6-0cc47a352292&token=WXdfmAw7pPbO61SABr12Umpw-0Cvd-tsGs4wVJEjsG0smTy5QGXkYpjUfqTNKCrih3mbEOh5NIbc-yxryzVGiw**" target="_blank" className="drop" >VMware Skyline Advisor Pro Technologist</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href={nse1} target="_blank" className="drop" >Fortinet NSE Level 1</ReactBootStrap.NavDropdown.Item>
        
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href={nse3} target="_blank" className="drop" >Fortinet NSE Level 3</ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href={cisa} target="_blank" className="drop" >CISA Cert</ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href={qualys} target="_blank" className="drop" >Qualys Cert</ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href={aws} target="_blank" className="drop" >AWS Cloud Practitioner Essentials</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://courses.skillsbuild.skillsnetwork.site/certificates/c4148a6175ff4d0cafaf2286aea2ffe8" target="_blank" className="drop" >IBM Big Data 101</ReactBootStrap.NavDropdown.Item>

        
          </ReactBootStrap.NavDropdown>

        <ReactBootStrap.Nav.Link href={process.env.PUBLIC_URL + '/#/'} className="nav-font" id="home">Term-1</ReactBootStrap.Nav.Link >
        <ReactBootStrap.Nav.Link  href={process.env.PUBLIC_URL + '/#/Term2'} className="nav-font" id="faq">Term-2</ReactBootStrap.Nav.Link >
        <ReactBootStrap.Nav.Link  href={process.env.PUBLIC_URL + '/#/Term3'} className="nav-font" id="info">Term-3</ReactBootStrap.Nav.Link >
        <ReactBootStrap.Nav.Link  href={process.env.PUBLIC_URL + '/#/Term4'} className="nav-font" id="about">Term-4</ReactBootStrap.Nav.Link >
        {/* <ReactBootStrap.Nav.Link  href={file1} className="nav-font" id="resume" target="_blank">Transcript</ReactBootStrap.Nav.Link > */}


   </ReactBootStrap.Nav>

    </ReactBootStrap.Navbar.Collapse>
  
  </ReactBootStrap.Navbar>




        )

    }
}

export default Navbar