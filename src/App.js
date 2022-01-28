import React, { Suspense, lazy, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Routes, Route } from "react-router-dom";
const NewCustomer = lazy(() => import("pages/Customers/NewCustomer"));
const Statistics = lazy(() => import("pages/Statistics/Statistics"));
const GlobalStyle = lazy(() => import("utils/globalStyles"));
const Navbar = lazy(() => import("components/Navbar/Navbar"));
const Heading = lazy(() => import("components/Header/Main"));
const Sketch = lazy(() => import("pages/Projects/Sketch"));

const App = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="wrapper">
        <Suspense
          fallback={
            <div className="loader-wrapper">
              <ClipLoader color="var(--main-color)" loading={true} size={150} />
            </div>
          }
        >
          <GlobalStyle />
          <div className="app-container">
            <Navbar hamburger={hamburger} setHamburger={setHamburger} />
            <div className="right-sidebar">
              <Heading hamburger={hamburger} setHamburger={setHamburger} />
              <Routes>
              <Route path="/*" element={<Sketch />} />
              <Route path="/customers" element={<NewCustomer />} />
              <Route path="/statistics" element={<Statistics />} />
      </Routes>
            </div>
          </div>
        </Suspense>
    </div>
  );
};

export default App;
