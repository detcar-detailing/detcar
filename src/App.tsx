//// filepath: /home/neo/GitLair/detcar-web/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./components/pages/Home";
import Kontakt from "./components/pages/Kontakt";
import Datenschutz from "./components/pages/Datenschutz";
import Impressum from "./components/pages/Impressum";
import Form from "./components/pages/Form";
import Success from "./components/pages/Success";
//import Gallery from "./components/pages/Gallery";
import ServiceDetailPage from "./components/pages/ServiceDetailPage";

/* Components to be always shown */
import Topbar from "./components/sections/topbar/Topbar";
import Footer from "./components/sections/footer/Footer";
import ScrollUp from "./components/ScrollUp";
import Loader from "./components/Loader";

import ScrollToTop from "./components/ScrollToTop";

/* styles */
import "./App.css";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Router>
        <ScrollToTop />
        <Topbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/kontakt"
              element={
                <>
                  <Kontakt />
                  <Loader />
                </>
              }
            />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/form" element={<Form />} />
            <Route path="/success" element={<Success />} />
            <Route path="/impressum" element={<Impressum />} />
            {/*             <Route path="/gallery" element={<Gallery />} /> */}
            <Route
              path="/service-detail/:packageKey"
              element={<ServiceDetailPage />}
            />
          </Routes>
        </div>

        <ScrollUp />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
