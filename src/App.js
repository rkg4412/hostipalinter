import React, { Component } from 'react';
import { Container, Navbar, Nav, Alert, Card } from 'react-bootstrap';
import Regpop from './componen/registerpop';
import './App.css';
import "./componen/reg.css";
import pm from "./himga/pm.jfif"
import ps from "./himga/ps.jfif"
import ph from "./himga/ph.jfif"
import hp1 from "./himga/hp1.png"
import h1 from "./himga/h1.jfif"
import h2 from "./himga/h2.jfif"
import h3 from "./himga/h3.jfif"
import h5 from "./himga/h5.jfif"
import Loginpop from "./componen/loginpop";

class App extends Component {
  state = {
    regstate: false,
    logstate: false,
    count: 0
  }

  handelREgisterAlert = () => {
    this.setState({
      regstate: false
    })
  }

  handleLogAlert = () => {
    this.setState({
      logstate: false
    })
  }

  handleIncrease = (e) => {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrease = (e) => {
    e.preventDefault();
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {

    const l = {
      0: h1,
      1: h2,
      2: h3,
      3: h5,
    }

    return (
      <div >
        <Regpop trigger={this.state.regstate} state={this.handelREgisterAlert} />
        <Loginpop trigger={this.state.logstate} state={this.handleLogAlert} />
        <Container style={(this.state.regstate === true || this.state.logstate === true) ? { filter: "blur(20px)" } : {}}>
          <Navbar>

            <Container >
              <div className="navb">
                <Navbar.Brand>ABC hospitals..
                  <img src={hp1} style={{ height: "100px", width: "100px", position: "absolute", right: "10px" }} />
                </Navbar.Brand>
              </div>
              <Container className="navjs">
                <Nav className="navjs_nav">

                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">About</Nav.Link>
                  <Nav.Link href="#pricing">Features</Nav.Link>
                </Nav>
                <Navbar.Text className="navjs_navtext">
                  <Nav.Link onClick={() => {
                    this.setState({
                      regstate: true
                    })
                  }} disabled={this.state.logstate === true ? true : false}> Register</Nav.Link>
                  <Nav.Link onClick={() => {
                    this.setState({
                      logstate: true
                    })
                  }} disabled={this.state.regstate === true ? true : false}> login</Nav.Link>
                </Navbar.Text>
              </Container>
            </Container>
          </Navbar>
          <div className="imageclass">
            <img src={l[this.state.count]} style={{
              position: "absolute",
              left: "250px",
              height: "200px",
              width: "500px",

            }} />
            <input type="button" value="<" className={this.state.count == 0 ? "imgbutton lt disable" : "imgbutton lt"} disabled={this.state.count == 0 ? true : false} onClick={this.handleDecrease} />
            <input type="button" value=">" className={this.state.count == 3 ? "imgbutton rt disable" : "imgbutton rt"} disabled={this.state.count == 3 ? true : false} onClick={this.handleIncrease} />
          </div>
          <div className="pat">
            <h1>Patient Status</h1>
            <input type="text" placeholder="Enter Patient Id....." className="pfield" />
            <button className="patbutton"> Search</button>
          </div>
          <div className="playcard">
            <Card className="card1">
              <Card.Img src={pm} alt="Card Image" style={{
                opacity: 0.7,
                borderStyle: 'solid',
                borderWidth: "2px",
                borderColor: "black"
              }} />
              <Card.ImgOverlay>
                <Card.Title className="cardt"> Medications</Card.Title>
              </Card.ImgOverlay>
            </Card>
            <Card className="card1">
              <Card.Img src={ph} alt="Card Image" style={{
                opacity: 0.7, borderStyle: 'solid',
                borderWidth: "2px",
                borderColor: "black"
              }} />
              <Card.ImgOverlay>
                <Card.Title className="cardt"> Prescription</Card.Title>
              </Card.ImgOverlay>
            </Card>
            <Card className="card1">
              <Card.Img src={ps} alt="Card Image" style={{
                opacity: 0.7, borderStyle: 'solid',
                borderWidth: "2px",
                borderColor: "black"
              }} />
              <Card.ImgOverlay>
                <Card.Title className="cardt"> Scans</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
