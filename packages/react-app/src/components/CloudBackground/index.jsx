/* eslint-disable prettier/prettier */
import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQueryhooks";
//clouds
import cloud_1 from "../../components/Icons/clouds/cloud_1.svg";
import cloud_2 from "../../components/Icons/clouds/cloud_2.svg";
import cloud_3 from "../../components/Icons/clouds/cloud_3.svg";
import cloud_4 from "../../components/Icons/clouds/cloud_4.svg";
import cloud_5 from "../../components/Icons/clouds/cloud_5.svg";

import "./CloudBackground.css";
export default function CloudBackground() {
  return (
    <div className="background__clouds">
      <div className="cloud__1">
        <img alt="cloud" src={cloud_1} />
      </div>
      <div className="cloud__3">
        <img alt="cloud" src={cloud_3} />
      </div>
      <div className="cloud__4">
        <img alt="cloud" src={cloud_4} />
      </div>
      <div className="cloud__2">
        <img alt="cloud" src={cloud_2} />
      </div>
      <div className="cloud__5">
        <img alt="cloud" src={cloud_5} />
      </div>
      <div className="cloud__3">
        <img alt="cloud" src={cloud_3} />
      </div>
      <div className="cloud__4">
        <img alt="cloud" src={cloud_4} />
      </div>
      <div className="cloud__2">
        <img alt="cloud" src={cloud_2} />
      </div>
    </div>
  );
}
