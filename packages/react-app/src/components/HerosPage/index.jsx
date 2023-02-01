/* eslint-disable prettier/prettier */
import { Link, useLocation } from "react-router-dom";
import BackgroundImageComponent from "../Icons/SocksAndPeg";
import socks_1 from "../../components/Icons/SocksMobile.png"; 
import socks_2 from "../../components/Icons/SocksTablet.png";
import socks_3 from "../../components/Icons/SocksDesktop.png"; 
import useMediaQuery from "../../hooks/useMediaQueryhooks";
import MintCard from "./MintCard";
//clouds
import cloud_1 from "../../components/Icons/Cloud1.png"; 
import cloud_2 from "../../components/Icons/Cloud2.png"; 
import cloud_3 from "../../components/Icons/Cloud3.png"; 
import cloud_4 from "../../components/Icons/Cloud4.png"; 
// import Account from "../Account";
// import ContractIcon from "../Icons/ContractIcon";
// import GuideIcon from "../Icons/GuideIcon";
// import HomeIcon from "../Icons/HomeIcon";
// import LogoIcon from "../Icons/LogoIcon";
// import LoogieIcon from "../Icons/LoogieIcon";
// import LoogieNavIcon from "../Icons/LoogieNavIcon";
// import Hamburge from "../Icons/Hamburge";
import "./Heros.css";
export default function Herospage() {
  // const location = useLocation();
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const isTablet = useMediaQuery("(min-width: 740px)");
  const isMobile = useMediaQuery("(min-width: 100px)");
  return (
    <div className="Heros">
      <div className="Background__Socks__Container">
        <BackgroundImageComponent src={isDesktop ? socks_3 : isTablet ? socks_2 : isMobile ? socks_1 : null} />
      </div>
      <div className="Background__clouds">
        <div className="Cloud__1"><BackgroundImageComponent src={cloud_1}/></div>
        <div className="Cloud__2"><BackgroundImageComponent src={cloud_2}/></div>
        <div className="Cloud__3"><BackgroundImageComponent src={cloud_3}/></div>
        <div className="Cloud__4"><BackgroundImageComponent src={cloud_4}/></div>
        <div className="Cloud__5"><BackgroundImageComponent src={cloud_3}/></div>
      </div>
      <div className="Card__Container">
        <MintCard />
      </div>
    </div>
  );
}

// vertical-align: middle;
// import cloud_4 from "../../components/Icons/Cloud4.png"; 
// border-style: none;
// scale: 2;
// position: absolute;
// margin-top: 9rem;
// top: 106px;
// left: 0;
// margin-left: -7rem;
