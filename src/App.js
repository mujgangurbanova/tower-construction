import React, { Suspense, lazy,  useState } from "react";
import { ClipLoader } from "react-spinners";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
const NewCustomer = lazy(() => import("pages/Customers/NewCustomer"));
const Statistics = lazy(() => import("pages/Statistics/Statistics"));
const GlobalStyle = lazy(() => import("utils/globalStyles"));
const Navbar = lazy(() => import("components/Navbar/Navbar"));
const Heading = lazy(() => import("components/Header/Main"));
const Sketch = lazy(() => import("pages/Projects/Sketch"));

const App = () => {
  const  [hamburger, setHamburger] = useState(false)

  return (
    <div className="wrapper">
      <Router>
        <Suspense
          fallback={
            <div className="loader-wrapper">
              <ClipLoader color="var(--main-color)" loading={true} size={150} />
            </div>
          }
        >
          <GlobalStyle />
          <div className="container"  >
            <Navbar hamburger = {hamburger} setHamburger={setHamburger}
              
            />
            <div className="right-sidebar">
              <Heading  hamburger={hamburger} setHamburger={setHamburger}/>
              <Switch>
              <Route exact path="/">
                <Sketch></Sketch>
              </Route>
              <Route path="/customers">
                <NewCustomer />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
              </Switch>
            </div>
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
