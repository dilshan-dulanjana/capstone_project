import React from 'react';
import "./Navigate.css";
export default function Navigate() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid ">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a className="navbar-brand" href="#" style={{ color: "white", padding:"5rem"}}> Home</a>

            </li>
            <li className="nav-item">
            <a className="navbar-brand" href="#" style={{ color: "white" }}> contact us</a>
            </li>
            <li className="nav-item">
            <a className="navbar-brand" href="#" style={{ color: "white" }}> Tourism News</a>
            </li>
            <li className="nav-item">
            <a className="navbar-brand" href="#" style={{ color: "white" }}> Video Streaming</a>
            </li>
            <li className="nav-item">
            <a className="navbar-brand" href="#" style={{ color: "white" }}> About us</a>
            </li>
            <li className="nav-item">
            <a className="navbar-brand" href="#" style={{ color: "white" }}> Tourism Hotline</a>
            </li>
            <li className="nav-item">
            <a className="navbar-brand" href="#" style={{ color: "white" }}> Select Language</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
