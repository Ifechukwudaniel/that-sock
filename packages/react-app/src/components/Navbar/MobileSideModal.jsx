/* eslint-disable prettier/prettier */
import React from "react";
import "./Navbar.css";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function MobileSideModal({ openMenu, handleOpenModal, REF }) {
  const location = useLocation();

  return (
    <div selectedKeys={[location.pathname]} className="Sidebar__Container">
      <div className="Sidebar" ref={REF}>
        <div onClick={handleOpenModal} key="/" className="Sidebar__item">
          <Link to="/">Your Socks</Link>
        </div>
        <div onClick={handleOpenModal} key="/yourSocks" className="Sidebar__item">
          <Link to="/yourSocks">All Socks</Link>
        </div>
        <div onClick={handleOpenModal} key="/guide" className="Sidebar__item">
          <Link to="/guide">Contract</Link>
        </div>
        <div onClick={handleOpenModal} key="/contracts" className="Sidebar__item">
          <Link to="/contracts">Guide</Link>
        </div>
      </div>
    </div>
  );
}

export default MobileSideModal;
