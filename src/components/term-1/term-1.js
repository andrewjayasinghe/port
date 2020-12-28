import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import con from "../../assets/bun.jpg"
import "./term-1.css"

class Term_1 extends Component {

    render() {

        return (
            <>
                <ReactBootStrap.Container style={{ marginTop: "20px" }}>

                    <ReactBootStrap.Row className="size">

                        <div id="tit">
                            <div id="test">
                                <p id="anum">Courses Completed </p>
                                <p id="desc">This is a portfolio of my educational background which includes the courses
                                I've taken at BCIT and a brief description of what i've learned.
                        </p>
                            </div>
                        </div>

                    </ReactBootStrap.Row>



                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>

                        <div id="al">
                        <div id="test">
                            <p id="anum">ACIT 1620</p>
                            <p id="well">Fundamental Web Technologies</p>
                            <p id="desc">This course introduced me to the fundamental principles and
                            techniques for designing and developing effective Web sites.
                            Topics included:
                            <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }}>
                                    <li><i> Hand-coding pages with HTML </i></li>
                                    <li><i> Styling text and
                            content with CSS </i></li>
                                    <li><i> Adding dynamic features with client-side scripting techniques </i></li>
                                    <li><i> Server-side scripting and managing files and Web sites using File Transfer Protocol
                             software such as wordpress </i> </li>
                                    <li><i> I was also introduced to information architecture and interface
                             design, XML, as well as advanced mark-up techniques using DHTML. </i> </li>

                                </ul>


                            </p>
                            </div>
                        </div>

                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>

                        <div id="al1">
                        <div id="test">
                            <a href="https://www.bcit.ca/outlines/20193044280/" id="anum" target="blank">ACIT 1420</a>
                            <p id="well">Windows System Administration</p>
                            <p id="desc">This course was about the configuration, maintenance, and administration of a Windows computer.
                            Topics I studied included:
     <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
                                    <li className="test"><i>An introduction to PC hardware, functions of an
     Operating System</i></li>
                                    <li><i>Windows OS architecture, file and disk management</i></li>
                                    <li ><i>BIOS, UEFI & Firmware</i></li>
                                    <li ><i>Multi-boot & virtual machines</i></li>
                                    <li ><i>Software installation/removal</i></li>
                                    <li><i>Performance tuning</i></li>
                                    <li ><i>Data Backup & Protection, troubleshooting, networking, security,
     virus protection, and firewalls</i></li>
                                </ul>



                            </p>

                        </div>
                        </div>

                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>

                        <div id="al2">
                        <div id="test">

                            <p id="anum">ACIT 1630</p>
                            <p id="well">Database Systems</p>
                            <p id="desc">This course covered relational database technology,
                            including basic concepts, relational algebra, enhanced entity-relationship data modeling,
                            functional dependencies and normalization, design methodology, SQL query language (DDL and DML),
                            views, security and transaction management.
 </p>

                        </div>
                        </div>

                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>

                        <div id="al3">
                        <div id="test">
                            <p id="anum">ACIT 1515</p>
                            <p id="well">Scripting using Python</p>
                            <p id="desc">The course introduced the fundamental concepts of programming for IT professionals,
                            with a focus on scripting languages that are commonly found in the workplace.
                            Projects, assignments, and activities are representative of tasks that
                            IT professionals are likely to encounter in the workplace. We had to design,
                            implement, test, and debug programs that incorporated: variables, expressions,
                            assignments, I/O, conditional and iterative control constructs, functions,
                            and parameter passing. This was all done using The PYTHON Scripting Language
 </p>

                        </div>
                        </div>

                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>

                        <div id="al4">
                        <div id="test">
                            <p id="anum">COMM 1116</p>
                            <p id="well">Business Communications 1</p>
                            <p id="desc">This course has taught me how to be a professional and
                            efficient communicator at work. outcomes were how to communicate quickly, clearly, and effectively.
 </p>

                        </div>
                        </div>

                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>

                        <div id="al5">
                        <div id="test">
                            <p id="anum">MATH 1310</p>
                            <p id="well">Technical Mathematics for IT</p>
                            <p id="desc">This was an introductory course to the core mathematical
                            constructs that underlie information technology. It has provided me with
                            a good base for technical and programming courses i am taking at the moment
                            as well as in the terms to come. Topics covered include select topics from
                            discrete mathematics such as Boolean algebra, numeric systems and data representation,
                            as well as algebraic fundamentals such as
                            algebraic operations, functions, equations and logarithms, linear systems, vectors and matrices.
 </p>

                        </div>  </div>

                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px", marginBottom: "20px" }}>

                        <div id="al6">
                        <div id="test">
                            <p id="anum">RGB 1100</p>
                            <p id="well">Organizational Behavior</p>
                            <p id="desc">This course Presented the study of
                            factors that either influence or are influenced by
                            people at work. The course focused on macro factors such
                            as organizational structure, technology and environment; group
                            factors such as group dynamics, leadership, conflict, change and decision making;
                            and micro or individual factors such as personality, attitudes, perception and motivation.
</p>

                        </div>  </div>

                    </ReactBootStrap.Row>


                </ReactBootStrap.Container>

            </>

        )

    }
}

export default Term_1