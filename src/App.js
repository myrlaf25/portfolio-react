import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import MyWork from "./components/pages/MyWork";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/mywork" component={MyWork} />
        <Route exact path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        </div>
        <Footer/>
    </Router>
  );
}

export default App;
