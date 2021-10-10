import React, { Suspense, lazy } from "react";
import { ClipLoader } from "react-spinners";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const GlobalStyle = lazy(() => import("utils/globalStyles"));
const Navbar = lazy(() => import("components/Navbar/Navbar"));
const Heading = lazy(() => import("components/Header/Main"));
const Sketch = lazy(() => import("pages/Projects/Sketch"));

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Suspense
          fallback={
            <div className="loader-wrapper">
              <ClipLoader color="#000000" loading={true} size={150} />
            </div>
          }
        >
          <GlobalStyle />
          <Heading />
          <div className="container">
            <Navbar />
            <Route exact path="/">
              <Sketch />
            </Route>
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
