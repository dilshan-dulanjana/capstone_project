import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutUs from "./Senuri/aboutUs";
import ContactUs from "./Senuri/contactUs";
import NewsAdmin from "./Senuri/newsAdmin";
import News from "./Senuri/news";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/newsAdmin" element={<NewsAdmin />} />
        <Route path="/news" element={<News />} />


      </Routes>
    </Router>
    
  
  );
}