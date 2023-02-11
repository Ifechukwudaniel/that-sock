/* eslint-disable prettier/prettier */
import React from "react";
import "./Navbar.css";
import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function MobileSideModal({ openMenu, setOpenMenu }) {
  const location = useLocation();
  let REF = useRef();
  useEffect(() => {
    let handler = e => {
      try {
        if (!REF.current.contains(e.target)) {
          setOpenMenu(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div selectedKeys={[location.pathname]} className="Sidebar__Container">
      <div className="Sidebar" ref={REF}>
        <div onClick={() => setOpenMenu(!openMenu)} key="/" className="Sidebar__item">
          <Link to="/">All Socks</Link>
        </div>
        <div onClick={() => setOpenMenu(!openMenu)} key="/yourSocks" className="Sidebar__item">
          <Link to="/yourSocks">Your Socks</Link>
        </div>
        <div onClick={() => setOpenMenu(!openMenu)} key="/guide" className="Sidebar__item">
          <Link to="/guide">Guide</Link>
        </div>
        <div onClick={() => setOpenMenu(!openMenu)} key="/contracts" className="Sidebar__item">
          <Link to="/contracts">Contract</Link>
        </div>
      </div>
    </div>
  );
}

export default MobileSideModal;
