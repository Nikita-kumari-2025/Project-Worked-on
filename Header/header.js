import React from 'react'
import Logoa from "../Asset/Csir-Logo.png";
import Logob from "../Asset/CIMFR-LOGO.png";
import "./header.css";
import { NavLink } from 'react-router-dom';

import { Link } from "react-router-dom"

const header = () => {
    return (
        <>
            <nav className="header sticky-top">
                <header id="header">
                    <div className="container">
                        <div className="header cimfr-navbar-header" style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "10px 80px",
                            flexWrap: "wrap",
                            backgroundColor: "#e9f0f5"
                        }}>
                            <img src={Logoa} alt="csir logo" style={{ width: "150px", height: "auto", /*marginLeft:"30px" */}} />
                            <div className="header-text" style={{
                                flex: 1,
                                padding: "10px",
                            }}>
                                <p style={{
                                    fontSize: "18px",
                                    color: "#000",
                                    margin: "5px 0",
                                    fontFamily: '"Segoe UI", sans-serif',
                                }}>सीएसआईआर–केंद्रीय खनन एवं ईंधन अनुसंधान संस्थान, धनबाद</p>
                                <h2 style={{
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    color: "#003366",
                                    margin: "5px 0",
                                    fontFamily: '"Segoe UI", sans-serif',
                                }}>CSIR-CENTRAL INSTITUTE OF MINING AND FUEL RESEARCH, DHANBAD</h2>
                                <p style={{
                                    fontSize: "16px",
                                    color: "#000",
                                    margin: "5px 0",
                                    fontFamily: '"Segoe UI", sans-serif',
                                }}>COUNCIL OF SCIENTIFIC & INDUSTRIAL RESEARCH</p>
                                <p style={{
                                    fontSize: "16px",
                                    color: "#000",
                                    margin: "5px 0",
                                    fontFamily: '"Segoe UI", sans-serif',
                                }}>MINISTRY OF SCIENCE & TECHNOLOGY, GOVERNMENT OF INDIA</p>
                            </div>
                            <img src={Logob} alt="cimfr logo" style={{ width: "150px", height: "auto", /*marginRight:"30px"*/ }} />

                        </div>
                        <div className="col-md-2" style={{ float: 'right', margin: 'right:31px' }}></div>
                        <div style={{ margin: 'top:90px' }}></div>
                    </div>
                    <div className="col-md-1" style={{ margin: '32px 0px 0px -20px' }}></div>
                </header>
            </nav>

            <nav className="title">
                <Link to="/" ><div className="head">IRON-ORE-CLASSIFICATION </div></Link>

                <div><ul>
                    <li>
                        <NavLink to="/">Home</NavLink></li>
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>

                    </li>
                    <li>
                        <NavLink to="/minesdetails">MinesDetails</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signin">Sign In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </ul></div>
            </nav>


        </>
    )
}

export default header

