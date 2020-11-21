import React, { useState } from 'react'
import "./dashboard.css"
import img from "./Auth/LoginDoc/undraw_authentication_fsn5 (2).svg"
 const Home = () => {

    const[Doctors ,updateDoctor]=useState([]);

    return (
        <div className="home">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav  ml-auto">
                    <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                </div>
            </div>
        </nav>
            <div className="row">
                <div className="col-lg-9">
                    <div className=" card rounded shadow-lg">
                        <h1 className="text-center sticky-top card-header">Recommended </h1>
                        <div className="allDocInfo card-body">
                            <div className="card rounded shadow-lg docInfo">
                                <div className="card-header text-center">
                                    <h3>Doctor1</h3>
                                </div>
                                <div className="card-body">
                                        <h5 className="card-title">CARDIOLOGIST</h5>
                                        <p className="card-text">accha ilaaz karuga ake toh dekho complain nhi ayi kabhi murdo se</p>
                                        <p className="card-text docState">Rajasthan</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="#" className="btn rounded btn-primary profile">View Profile</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <a href="#" className="btn rounded btn-info chat">Chat With the Doctor</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card rounded shadow-lg docInfo">
                                <div className="card-header text-center">
                                    <h3>Doctor1</h3>
                                </div>
                                <div className="card-body">
                                        <h5 className="card-title">CARDIOLOGIST</h5>
                                        <p className="card-text">accha ilaaz karuga ake toh dekho complain nhi ayi kabhi murdo se</p>
                                        <p className="card-text docState">Rajasthan</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="#" className="btn rounded btn-primary profile">View Profile</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <a href="#" className="btn rounded btn-info chat">Chat With the Doctor</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card rounded shadow-lg docInfo">
                                <div className="card-header text-center">
                                    <h3>Doctor1</h3>
                                </div>
                                <div className="card-body">
                                        <h5 className="card-title">CARDIOLOGIST</h5>
                                        <p className="card-text">accha ilaaz karuga ake toh dekho complain nhi ayi kabhi murdo se</p>
                                        <p className="card-text docState">Rajasthan</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="#" className="btn rounded btn-primary profile">View Profile</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <a href="#" className="btn rounded btn-info chat">Chat With the Doctor</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card rounded shadow-lg docInfo">
                                <div className="card-header text-center">
                                    <h3>Doctor1</h3>
                                </div>
                                <div className="card-body">
                                        <h5 className="card-title">CARDIOLOGIST</h5>
                                        <p className="card-text">accha ilaaz karuga ake toh dekho complain nhi ayi kabhi murdo se</p>
                                        <p className="card-text docState">Rajasthan</p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="#" className="btn rounded btn-primary profile">View Profile</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <a href="#" className="btn rounded btn-info chat">Chat With the Doctor</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>       
                    <div className="patientInfo rounded  shadow-lg">
                        <div className="card rounded">
                            <div className="card-header text-center">
                                <h3>Hello Name!!</h3>
                            </div>
                            <div className="card-body rounded text-center">
                                <h4>Your Details</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        YOUR EMAIL
                                    </div>
                                    <div className="col-lg-6">
                                        YOUR BLOOD GROUP
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        YOUR AGE
                                    </div>
                                    <div className="col-lg-6">
                                        YOUR GENDER
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        YOUR DOB
                                    </div>
                                    <div className="col-lg-6">
                                        YOUR CITY
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        YOUR EM.NAME
                                    </div>
                                    <div className="col-lg-6">
                                        YOUR EM.NO
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card shadow-lg rounded">
                        <div className="card-header rounded">
                           <h3 className="text-center"> Health Tips!!   <i class="fas fa-heartbeat"></i></h3>
                        </div>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Home;

// SP ,SD CITY,PHNO,A-CP