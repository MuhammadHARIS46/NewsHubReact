import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 15;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="us"
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
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="us"
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
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="us"
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
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="us"
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
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="us"
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
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="us"
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
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="us"
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
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="us"
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
};
export default App;
