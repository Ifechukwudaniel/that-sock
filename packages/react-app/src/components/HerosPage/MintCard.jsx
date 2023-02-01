/* eslint-disable prettier/prettier */
import React from "react";
import "./Heros.css";
import party from "../../components/Icons/Party.svg";
import SocksImage from "../../components/Icons/CardSocks.svg";
import BackgroundImageComponent from "../Icons/SocksAndPeg";
import CardBackground from "../../components/Icons/Background.png";
function MintCard() {
  return (
    <div className="Container__Element">
    <div className="Card">
      <div className="Mint__Card">
        <div className="Card__Head">
          <div className="party__div">
            <BackgroundImageComponent src={party} width={55} height={55} />
          </div>
          <div className="Header__Text">
            <strong>Scratch this protective layer to see the true colours of your Sock</strong>
          </div>
        </div>
        <div className="SocksCardImage">
          <BackgroundImageComponent src={SocksImage} />
        </div>
        <div className="Footer__Text">
          <b>
            Only <span>3728 Socks</span>available on a price curve <span>increasing 0.2% </span>with each new mint.
            Double the supply of the <a href="#">Original Ethereum Mainnet That Socks!</a>
          </b>
        </div>
        <div className="Mint"><span>Mint Now!</span></div>
      </div>
    </div>
    <div className="Background__Image">
    <BackgroundImageComponent src={CardBackground}  />
    </div>
    
    </div>
  );
}

export default MintCard;
