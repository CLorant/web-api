import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { ZaszloListPage } from "./ZaszloListPage";
import { ZaszloSinglePage } from "./ZaszloSinglePage";
import { ZaszloCreatePage } from "./ZaszloCreatePage";
import { ZaszloModPage } from "./ZaszloModPage";
import { ZaszloDelPage } from "./ZaszloDelPage";
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Termék</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/uj-zaszlo'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új termék</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<ZaszloListPage />} />
        <Route path="/zaszlo/:zaszloId" exact element={<ZaszloSinglePage />} />
        <Route path="/uj-zaszlo" exact element={<ZaszloCreatePage />} />
        <Route path="/mod-zaszlo/:zaszloId" exact element={<ZaszloModPage />} />
        {<Route path="/del-zaszlo/:zaszloId" exact element={<ZaszloDelPage />} />}
      </Routes>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li  className="nav-item">
            <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
              <span className="nav-link text-muted">Termékek</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/uj-zaszlo'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
              <span className="nav-link text-muted">Új termék</span>
            </NavLink>
          </li>
        </ul>
        <p className="text-center text-muted">©2023 Zászlóárus</p>
      </footer>
    </Router>
  );
}
export default App;