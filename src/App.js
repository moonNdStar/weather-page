import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import temperature from "./temperature.png"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import rec9 from "./rce9.png"
import rec7 from "./rec7.png"
import plus from "./plus.png";
import rec10 from "./rec10.png"
import Col from "react-bootstrap/Col";
import rainy from "./rainy.png"
import precipitation from "./cloud.png"
import speed from "./speed.png"
import circle from "./new-moon.png";
import rec8 from "./rec8.png"
import rec6 from "./rec6.png"
import wind from "./wind.png"
import celcius from "./celsius.png";
import UV from "./UV.png"
import sunrise from "./sun.png";
import sunset from "./sun (2).png";
import isabella from "./isabella.jpg";
import rec3 from "./rec3.png"
import rec4 from "./rec4.png"
import rec5 from "./rec5.png"
import cloud from "./cloud-computing.png";
import fullsun from "./sun (4).png";
import sun from "./sun (3).png";
import rec1 from "./Rectangle1.png";
import rec2 from "./rec2.png"
import React, { Component } from "react";
import larrow from "./left-arrow.png";
import humidity from "./humidity.png";
import down from "./arrow-down-sign-to-navigate.png";
import rarrow from "./right-arrow.png";
import girl from "./47563-removebg.png";
import right2 from "./right-arrow (1).png";
import fahrenheit from "./fahrenheit-degrees.png";
import bar from "./minus (1).png";
import dots from "./more.png";
import navigation from "./gps-navigation.png";
import toggle from "./switch-off.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
      labels: {
        display: false, // Hide the legend labels
      },
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      grid: {
        color: "black",
        drawBorder: false,
        zIndex: 10,
      },
    },
    y: {
      display: false, // Hide the y-axis labels
      min: 0,
      max: 15,
      ticks: {
        stepSize: 5,
      },
    },
  },
  elements: {
    line: {
      borderWidth: 2, // Increase the border width to make the lines more visible
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  },
};

const labels = ["23%", "29%", "58%", "75%", "33%", "20%", "73%", "49%"];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "",
      data: [3, 5, 8, 2, 7, 10, 13, 5],
      borderColor: "rgba(11, 0, 51, 0.722)",
      backgroundColor: "rgba(9, 0, 108, 0.756)",
      pointRadius: 0, // Hide the points/circles
      pointHoverRadius: 0,
      barThickness: 0.2,
    },
  ],
};

function App() {
  return (
    <Container fluid>
      <Row className="top-of-page">
        <Col lg={3} className="top-of-blue">
          <div className="icon-container">
            <div className="left-icon">
              <img src={plus} id="plus-icon"></img>
            </div>
            <div className="middle-icon">
              <img src={bar} id="minus-btn"></img>
              <img src={circle} id="circle-btn"></img>
              <img src={circle} id="circle-btn"></img>
            </div>
            <div className="right-item">
              <img src={celcius} id="celcius-btn"></img>
              <img src={toggle} id="toggle-icon"></img>
              <img src={fahrenheit} id="fahrenheit-btn"></img>
            </div>
          </div>
          <div className="temp-container">
            <div className="upper-div">
              <img src={navigation} id="navigation-btn"></img>
              <p className="usa-div">New York, USA</p>
              <div className="sunrise-time">
                <img src={sunrise} id="sunrise-btn"></img>
                <p className="rise-time">07:19</p>
              </div>
            </div>
            <div className="lower-div">
              <p>Today 28 Sept</p>
              <div className="sunset-time">
                <img src={sunset} id="sunset-btn"></img>
                <p className="set-time">19:32</p>
              </div>
            </div>
          </div>
          <div className="temperature-display">
            <img src={larrow} id="left-btn"></img>
            <p>27°</p>
            <img src={rarrow} id="right-btn"></img>
          </div>
          <div className="sunny-ctn">
            <img src={sun} id="sun"></img>
            <p>Sunny</p>
          </div>
          <div className="girl-ctn">
            <img src={girl} id="girl"></img>
          </div>
        </Col>
        <Col className="opaque-big" lg={9}>
          <div className="header-img-wrapper">
            <div className="header-ctn">
              <p className="welcome-isabella">
                <b>Welcome back Isabella!</b>
              </p>
              <p className="check-text">
                Check out today's weather information
              </p>
            </div>
            <div className="img-of-girl">
              <img src={dots} id="three-dots"></img>
              <img src={isabella} id="isabella-img"></img>
            </div>
          </div>

          <Container fluid>
            <Row>
              <Col>
                <div className="chart-container">
                  <div className="upper-label">
                    <div className="upcoming-btn">
                      <p>Upcoming hours</p>
                    </div>
                    <div className="two-btn">
                      <div className="rain-btn">
                        <p>Rain Percipitation</p>
                        <img src={down} id="down-arrow-icon"></img>
                      </div>
                      <div className="next-days">
                        <p>Next days</p>
                        <img src={right2} id="right-arrow-2-icon"></img>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="x-axis-top">
                    <p>Now</p>
                    <p>11:00</p>
                    <p>12:00</p>
                    <p>13:00</p>
                    <p>14:00</p>
                    <p>15:00</p>
                    <p>16:00</p>
                    <p>17:00</p>
                  </div>
                  <div className="img-of-sun-cloud">
                    <img src={fullsun} id="full-sun"></img>
                    <img src={fullsun} id="full-sun"></img>
                    <img src={cloud} id="cloud"></img>
                    <img src={cloud} id="cloud"></img>
                    <img src={fullsun} id="full-sun"></img>
                    <img src={cloud} id="cloud"></img>
                    <img src={cloud} id="cloud"></img>
                    <img src={fullsun} id="full-sun"></img>
                  </div>
                  <div className="temp-graph">
                    <p>27°</p>
                    <p>28°</p>
                    <p>28°</p>
                    <p>29°</p>
                    <p>30°</p>
                    <p>29°</p>
                    <p>29°</p>
                    <p>28°</p>
                  </div>
                  <br></br>
                  <div className="graph-ctn">
                    <Line
                      options={{ ...options, maintainAspectRatio: false }}
                      data={data}
                    />
                  </div>
                </div>

                <Row className="containers">
                  <Col sm>
                    <div className="humidity-ctn">
                      <div className="first-humidity-line">
                        <p className="humidity-text">Humidity</p>
                        <img
                          src={humidity}
                          id="humidity-icon"
                          className="align-self-end"
                        ></img>
                      </div>
                      <div className="second-humidity-icon">
                        <p className="percent-82"><b>82%</b>&nbsp;</p>
                        <p>bad</p>
                      </div>
                      <div className="gnb">
                        <p className="good">good</p>
                        <p className="normal">normal</p>
                        <p className="bad">bad</p>
                      </div>
                      <div className="rec1-container">
                        <img src={rec1} className="rec1-img" id="rec1"></img>
                        <img src={rec1} className="rec1-img" id="rec1"></img>
                        <img src={rec2} className="rec1-img" id="rec1"></img>
                      </div>
                    </div>
                  </Col>
                  <Col sm>
                    <div className="wind-ctn-1">
                      <div className="wind-first-line">
                      <p className="wind-text">Wind</p>
                      <img src={wind} id="wind-icon" className="windicon"></img>
                      </div>
                      <div className="speed-icon-div">
                        <img src={speed} id="speed-icon"></img>
                      </div>
                      <div className="wind-para">
                          <p>8 km/h</p>
                      </div>
                    </div>
                  </Col>
                  <Col sm>
                    <div className="precipitation-ctn">
                      <div className="precipitation-first-line">
                      <p className="precipitation-heading">Precipitation</p>
                      <img src={precipitation} id="precipitation-icon"></img>
                      </div>
                      <div className="cm">
                        <p>1.4 cm</p>
                      </div>
                      <div className="precipitation-num">
                        <p>10</p>
                        <p>20</p>
                        <p>30</p>
                        <p>40</p>
                        <p>50</p>
                        <p>60</p>
                        <p>70</p>
                        <p>80</p>
                        <p>90</p>
                      </div>
                      <div className="rec3-images">
                        <img src={rec4} id="rec3"></img>
                        <img src={rec3} id="rec3"></img>
                        <img src={rec5} id="rec3"></img>
                        <img src={rec5} id="rec3"></img>
                        <img src={rec5} id="rec3"></img>
                        <img src={rec5} id="rec3"></img>
                        <img src={rec5} id="rec3"></img>
                        <img src={rec5} id="rec3"></img>
                        <img src={rec5} id="rec3"></img>
                      </div>
                    </div>
                  </Col>
                  
                </Row>
                <Row className="containers">
                  <Col sm>
                    <div className="humidity-ctn">
                      <div className="first-humidity-line">
                        <p className="humidity-text">UV index</p>
                        <img
                          src={UV}
                          id="humidity-icon"
                          className="align-self-end"
                        ></img>
                      </div>
                      <div className="second-humidity-icon">
                        <p className="percent-82"><b>4</b>&nbsp;</p>
                        <p>medium</p>
                      </div>
                      <div className="gnb">
                        <p className="">0-2</p>
                        <p className="">3-5</p>
                        <p className="">6-7</p>
                        <p className="">8-10</p>
                        <p className="">11+</p>
                      </div>
                      <div className="rec1-container">
                        <img src={rec6} className="rec1-img" id="rec1"></img>
                        <img src={rec8} className="rec1-img" id="rec1"></img>
                        <img src={rec7} className="rec1-img" id="rec1"></img>
                        <img src={rec7} className="rec1-img" id="rec1"></img>
                        <img src={rec7} className="rec1-img" id="rec1"></img>
                      </div>
                    </div>
                  </Col>
                  <Col sm>
                    <div className="wind-ctn">
                      <div className="wind-first-line">
                      <p className="wind-text">Feels like</p>
                      <img src={temperature} id="wind-icon" className="windicon"></img>
                      </div>
                      <div className="cm">
                        <p>30°</p>
                      </div>
                      <div className="gnb">
                        <p className="">0°</p>
                        <p className="">25°</p>
                        <p className="">50°</p>
                
                      </div>
                      <div className="rec1-container">
                        <img src={rec9} className="longest-bar" id="rec1"></img>
                        
                      </div>
                    </div>
                  </Col>
                  <Col sm>
                    <div className="precipitation-ctn">
                      <div className="precipitation-first-line">
                      <p className="precipitation-heading">Chance of rain</p>
                      <img src={rainy} id="precipitation-icon"></img>
                      </div>
                      <div className="cm">
                        <p>42%</p>
                      </div>
                      <div className="precipitation-num">
                        <p>0%</p>
                        <p>25%</p>
                        <p>50%</p>
                        <p>75%</p>
                        <p>100%</p>
                      </div>
                      <div className="rec3-images">
                        <img src={rec10} className="longest-bar" id="rec3"></img>
                      </div>
                    </div>
                  </Col>
                  
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
        
      </Row>
    </Container>
  );
}

export default App;
