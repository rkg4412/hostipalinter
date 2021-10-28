import React, { Component } from 'react';
import { Container, Navbar, Nav, Alert, Placeholder } from 'react-bootstrap';
import "./reg.css"


class Regpop extends Component {


    render() {
        return (
            <div className="pop">
                <Alert show={this.props.trigger} className="alert_now">
                    <label style={{ fontSize: "large", marginLeft: "10px" }}>Name: </label>
                    <br />
                    <input type="text" style={{ border: "black solid 2px", marginLeft: "10px", height: "20px", width: "90%", borderRadius: "10px" }} placeholder="Name.."></input>
                    <br />
                    <label style={{ fontSize: "large", marginLeft: "10px" }} >Email:</label>
                    <br />
                    <input type="text" style={{ border: "black solid 2px", marginLeft: "10px", height: "20px", width: "90%", borderRadius: "10px" }} placeholder="Email.." />
                    <br />
                    <label style={{ fontSize: "large", marginLeft: "10px" }}>Password:</label>
                    <br />
                    <input type="Password" style={{ border: "black solid 2px", marginLeft: "10px", height: "20px", width: "90%", borderRadius: "10px" }} placeholder="Password.." />
                    <br />
                    <label style={{ fontSize: "large", marginLeft: "10px" }}>Phone Number:</label>
                    <br />
                    <input type="Password" style={{ border: "black solid 2px", marginLeft: "10px", height: "20px", width: "90%", borderRadius: "10px" }} placeholder="Ph no.." />
                    <br />
                    <button style={{ borderRadius: "20px", height: "40px", marginTop: "20px", marginLeft: "30px", width: "230px", fontSize: "large", backgroundColor: "rgb(238, 179, 137)" }} onClick={() => {
                        this.props.state()
                    }}>Sign Up</button>
                </Alert>
            </div>
        )
    }




}


export default Regpop