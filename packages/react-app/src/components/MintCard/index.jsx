/* eslint-disable prettier/prettier */
import { Button } from "antd";
import React from "react";
import Party from "../Icons/Party";
import "./MintCard.css";
import ScratchSockIcon from "../Icons/ScratchSockIcon";

function MintCard({ handleMint }) {
  return (
    <div className="mint-card__wrapper">
      <div className="mint__card__background-1" />
      <div className="mint__card__background-2" />
      <div className="mint__card__background-3" />
      <div className="mint__card__background-4">
        <div className="Mint__Card">
          <div className="Card__Head">
            <div className="party__div">
              <Party />
            </div>
            <div className="Header__Text">
              <strong>Scratch this protective layer to see the true colours of your Sock</strong>
            </div>
          </div>
          <div className="SocksCardImage"></div>
          <div className="Footer__Text">
            <b>
              Only <span>3728 Socks</span>available on a price curve <span>increasing 0.2% </span>with each new mint. //
              Double the supply of the <a href="#">Original Ethereum Mainnet That Socks!</a>
            </b>
          </div>
          <div>
            <Button onClick={handleMint} className="mint__button">
              Mint Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintCard;

// <div className="container__element">
// <div className="mint_card">
//   <div className="Mint__Card">
//     <div className="Card__Head">
//       <div className="party__div"></div>
//       <div className="Header__Text">
//         <strong>Scratch this protective layer to see the true colours of your Sock</strong>
//       </div>
//     </div>
//     <div className="SocksCardImage"></div>
//     <div className="Footer__Text">
//       <b>
//         Only <span>3728 Socks</span>available on a price curve <span>increasing 0.2% </span>with each new mint.
//         Double the supply of the <a href="#">Original Ethereum Mainnet That Socks!</a>
//       </b>
//     </div>
//     <div className="Mint">
//       <span>Mint Now!</span>
//     </div>
//   </div>
// </div>
// <div className="Background__Image"></div>
// </div>
