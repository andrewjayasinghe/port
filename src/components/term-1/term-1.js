import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import "./term-1.css"

class Term_1 extends Component {

    render() {

            

        return (
            <>
                <ReactBootStrap.Container style={{ marginTop: "20px" }}>

                    <ReactBootStrap.Row className="size">
                    <ScrollAnimation animateIn='animate__backInDown'
                            animateOut='animate__backOutDown' duration="3">

                        <div id="tit">
                            <div id="test"  >
                                <div style={{display:"inline-block", marginRight:"12px"}}>
                                <ReactBootStrap.Spinner animation="grow" variant="danger" style={{width: "30px", height:"35px" }}/></div>
                                <div style={{ display: "inline-block" }}>
                                      <p id="anum"> WELCOME!</p>
                                </div>
                               
                                <div style={{display:"inline-block"}}>
                                <ReactBootStrap.Spinner animation="grow" variant="warning" style={{ width: "30px", height:"35px" }}/></div>

                                <p id="desc">This is my educational background portfolio which includes the courses
                                I've completed at BCIT and a brief description of what i've learned from each course.
                                This page contains all the courses i have completed during Term-1
                        </p>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>



                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                    <ScrollAnimation animateIn='bounceInLeft'
                            animateOut='bounceOutRight' duration="2">  

                        <div id="al">
                            <div id="test1">
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034322/" target="blank" id="anum1" >ACIT 1620</a></p>
                                <p id="well" className="title">Fundamental Web Technologies</p>
                                <p id="desc">This course introduced me to the fundamental principles and
                                techniques for designing and developing effective Web sites.
                                Topics included:
                            <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }}>
                                        <li id="item"><i> Hand-coding pages with HTML </i></li>
                                        <li id="item"><i> Styling text and
                            content with CSS </i></li>
                                        <li id="item"><i> Adding dynamic features with client-side scripting techniques </i></li>
                                        <li id="item"><i> Server-side scripting and managing files and Web sites using File Transfer Protocol
                             software such as wordpress </i> </li>
                                        <li id="item"><i> I was also introduced to information architecture and interface
                             design, XML, as well as advanced mark-up techniques using DHTML. </i> </li>

                                    </ul>


                                </p>
                            </div>
                        </div>
                        </ScrollAnimation>

                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>

                    <ScrollAnimation animateIn='bounceInRight'
                            animateOut='bounceOutLeft' duration="2">  
                        <div id="al1">
                            <div id="test2">
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193044280/" target="blank" id="anum1" >ACIT 1420</a></p>
                                <p id="well" className="title">Windows System Administration</p>
                                <p id="desc">This course was about the configuration, maintenance, and administration
                                of a Windows computer.
                                Topics I studied included:
     <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
                                        <li className="test" id="item"><i>An introduction to PC hardware, functions of an
     Operating System</i></li>
                                        <li id="item"><i>Windows OS architecture, file and disk management</i></li>
                                        <li id="item"><i>BIOS, UEFI & Firmware</i></li>
                                        <li id="item"><i>Multi-boot & virtual machines</i></li>
                                        <li id="item" ><i>Software installation/removal</i></li>
                                        <li id="item"><i>Performance tuning</i></li>
                                        <li id="item" ><i>Data Backup & Protection, troubleshooting, networking, security,
     virus protection, and firewalls</i></li>
                                    </ul>



                                </p>

                            </div>
                        </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                        <ScrollAnimation animateIn='bounceInLeft'
                            animateOut='bounceOutRight' duration="2">  
                        <div id="al2">
                            <div id="test3">
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034355/" target="blank" id="anum1" >ACIT 1630</a></p>
                                <p id="well" className="title">Database Systems</p>
                                <p id="desc"  className="title">This course covered relational database technology,
                                including basic concepts, relational algebra, enhanced entity-relationship data modeling,
                                functional dependencies and normalization, design methodology, SQL query language (DDL and DML),
                                views, security and transaction management.
 </p>

                            </div>
                        </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                    <ScrollAnimation animateIn='bounceInRight'
                            animateOut='bounceOutLeftt' duration="2">   
                        <div id="al3">
                            <div id="test4">
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034319/" target="blank" id="anum1" >ACIT 1515</a></p>
                                <p id="well" className="title">Scripting using Python</p>
                                <p id="desc"  className="title">The course introduced the fundamental concepts of programming for IT professionals,
                                with a focus on scripting languages that are commonly found in the workplace.
                                Projects, assignments, and activities are representative of tasks that
                                IT professionals are likely to encounter in the workplace. We had to design,
                                implement, test, and debug programs that incorporated: variables, expressions,
                                assignments, I/O, conditional and iterative control constructs, functions,
                                and parameter passing. This was all done using The PYTHON Scripting Language
 </p>

                            </div>
                        </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                    <ScrollAnimation animateIn='bounceInLeft'
                            animateOut='bounceOutRight' duration="2">   
                        <div id="al4">
                            <div id="test5">
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034328/" target="blank" id="anum1" >COMM 1116</a></p>
                                <p id="well" className="title">Business Communications 1</p>
                                <p id="desc"  className="title">This course has taught me how to be a professional and
                                efficient communicator at work. outcomes were how to communicate quickly, clearly, and effectively.
 </p>

                            </div>
                        </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                    <ScrollAnimation animateIn='bounceInLeft'
                            animateOut='bounceOutRight' duration="2"> 
                        <div id="al5">
                            <div id="test6">
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193041874/" target="blank" id="anum1" >MATH 1310</a></p>
                                <p id="well" className="title">Technical Mathematics for IT</p>
                                <p id="desc"  className="title">This was an introductory course to the core mathematical
                                constructs that underlie information technology. It has provided me with
                                a good base for technical and programming courses i am taking at the moment
                                as well as in the terms to come. Topics covered include select topics from
                                discrete mathematics such as Boolean algebra, numeric systems and data representation,
                                as well as algebraic fundamentals such as
                                algebraic operations, functions, equations and logarithms, linear systems, vectors and matrices.
 </p>

                            </div>  </div>
                            </ScrollAnimation>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <ScrollAnimation animateIn='bounceInRight'
                            animateOut='bounceOutLeft' duration="2">  
                        <div id="al6">
                            <div id="test7">
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034585/" target="blank" id="anum1" >ORGB 1100</a></p>
                                <p id="well" className="title">Organizational Behavior</p>
                                <p id="desc"  className="title">                                         
                                This course Presented the study of
                            factors that either influence or are influenced by
                            people at work. The course focused on macro factors such
                            as organizational structure, technology and environment; group
                            factors such as group dynamics, leadership, conflict, change and decision making;
                            and micro or individual factors such as personality, attitudes,
                             perception and motivation
                             </p>



                            </div>  </div>
                            </ScrollAnimation>
                    </ReactBootStrap.Row>


                </ReactBootStrap.Container> 
{/*                 
           <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
  <h1>
    React Animate On Scroll
  </h1>
  <h2>
    Using:
  </h2>
</ScrollAnimation>
<ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
  <h2>
    <a href='https://daneden.github.io/animate.css/'>
      Animate.css
    </a>
  </h2>
</ScrollAnimation> */}


            </>

        )

    }
}

export default Term_1