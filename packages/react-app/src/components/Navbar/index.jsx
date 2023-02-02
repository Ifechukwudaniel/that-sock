import { Menu, Tooltip } from "antd";

import { Link, useLocation } from "react-router-dom";
import Account from "../Account";
import LogoIcon from "../Icons/LogoIcon";
import Hamburger from "../Icons/Hamburger";
import "./Navbar.css";
import { useState } from "react";
export default function NavBar({
  useBurner,
  address,
  localProvider,
  userSigner,
  mainnetProvider,
  price,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
}) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenModal = () => {
    setOpenMenu(!openMenu);
    console.log("yessas");
  };

  console.log(openMenu);
  return (
    <div className="navbar">
      <div className="navbar__menu__container">
        <div className="navbar__menu-item__mobile"></div>
        <Menu selectedKeys={[location.pathname]} mode="horizontal" className="navbar__menu">
          <Menu.Item key="/" className="navbar__menu-item">
            <Link to="/" className="navbar__link navbar__menu-item-desktop-content">
              Home
            </Link>
          </Menu.Item>

          <Menu.Item key="/yourSocks" className="navbar__menu-item">
            <Link to="/yourSocks" className="navbar__link navbar__menu-item-desktop-content">
              Your Socks
            </Link>
          </Menu.Item>

          <Menu.Item key="/guide" className="navbar__menu-item">
            <Link to="/guide" className="navbar__link navbar__menu-item-desktop-content">
              Guide
            </Link>
          </Menu.Item>

          <Menu.Item key="/contracts" className="navbar__menu-item">
            <Link to="/contracts" className="navbar__link navbar__menu-item-desktop-content">
              Contracts
            </Link>
          </Menu.Item>
        </Menu>
      </div>

      <div className="navbar__logo">
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>

      <div className="navbar__account">
        <Account
          useBurner={useBurner}
          address={address}
          localProvider={localProvider}
          userSigner={userSigner}
          mainnetProvider={mainnetProvider}
          price={price}
          web3Modal={web3Modal}
          loadWeb3Modal={loadWeb3Modal}
          logoutOfWeb3Modal={logoutOfWeb3Modal}
          connectButtonStyles="lg"
        />
      </div>
    </div>
  );
}
