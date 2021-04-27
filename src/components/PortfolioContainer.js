import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "AboutMe") {
      return <AboutMe/>;
    } else if (this.state.currentPage === "MyWork") {
        return <MyWork/>;
    } else if (this.state.currentPage === "Skills") {
        return <Skills/>;
    } else {
      return <ContactMe/>;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
