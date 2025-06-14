import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./containers/Layout";
import Login from "./views/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/page_404" element={<p>404</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
