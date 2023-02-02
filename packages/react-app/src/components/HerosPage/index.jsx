/* eslint-disable prettier/prettier */
import { Link, useLocation } from "react-router-dom";
import BackgroundImageComponent from "../Icons/SocksAndPeg";
import socks_1 from "../../components/Icons/SocksMobile.png";
import socks_2 from "../../components/Icons/SocksTablet.png";
import socks_3 from "../../components/Icons/SocksDesktop.png";
import useMediaQuery from "../../hooks/useMediaQueryhooks";
import MintCard from "./MintCard";
import Guide from "../GuideSection/Index";
//clouds
import cloud_1 from "../../components/Icons/Cloud1.png";
import cloud_2 from "../../components/Icons/Cloud2.png";
import cloud_3 from "../../components/Icons/Cloud3.png";
import cloud_4 from "../../components/Icons/Cloud4.png";
import cloud_5 from "../../components/Icons/Cloud3.png";
import "./Heros.css";
export default function HerosPage() {
  let clouds = [cloud_1, cloud_2, cloud_3, cloud_4, cloud_5]
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
        {clouds.map((cloud, i) => <div className={`Cloud__${i + 1}`}>
          <BackgroundImageComponent src={cloud} />
        </div>)}
      </div>
      <div className="Card__Container">
        <MintCard />
      </div>
      <Guide />
    </div>
  );
}
