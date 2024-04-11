import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Home from "../src/pages/Home";







function App() {

  return (
      <Router>


          {/* Page contents. */}
          <div className="app">
              <div className="appContent">
                  {/* Insert any new routes below the <Routes> tag below. */}
                  <Routes>
                      {/* Public Routes: these are available to access at all times. */}
                      <Route path="/" element={<Home />} />
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

export default App;