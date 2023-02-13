import socks_1 from "../../components/Icons/socks/SocksMobile.svg";
import socks_2 from "../../components/Icons/socks/SocksTablet.svg";
import socks_3 from "../../components/Icons/socks/SocksDesktop.svg";
import useMediaQuery from "../../hooks/useMediaQueryhooks";
import "./SockBackground.css";
export default function SockBackground() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const isTablet = useMediaQuery("(min-width: 740px)");
  const isMobile = useMediaQuery("(min-width: 100px)");
  return (
    <div className="socks__container">
      <div className="Background__Socks__Container">
        <img
          className={isDesktop ? "sock__desktop" : isTablet ? "sock__tablet" : isMobile ? "sock__mobile" : ""}
          src={isDesktop ? socks_3 : isTablet ? socks_3 : isMobile ? socks_1 : null}
        />
      </div>
    </div>
  );
}
