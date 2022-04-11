import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 15;

  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/business"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/entertainment"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/sports"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/technology"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/health"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/science"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="general"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                />
              }
            >
              {" "}
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
