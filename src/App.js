import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <Services data={this.state.resumeData.resume} />
        <About data={this.state.resumeData.main} />
        {/* <Portfolio data={this.state.resumeData.Team}/> */}
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;

// {
//   "img": "images/team/ars.jpg",
//   "name": "Abdul Rehman",
//   "job": "Software Engineer"
// },
// {
//   "name": "twitter",
//   "url": "http://twitter.com",
//   "className": "fa fa-twitter"
// },
//{
//   "name": "github",
//   "url": "",
//   "className": "fa fa-github"
// }
