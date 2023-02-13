/* eslint-disable prettier/prettier */
import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Party from "../Icons/Party";
import scratchImage from "../Icons/scratch.png";
import ScratchCard, { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v2";
import "./MintCard.css";
import { ethers } from "ethers";

function MintCard({ onMint, priceToMint, image, setEmptyImage, left }) {
  const ref = useRef(null);
  console.log(image);
  const resetScratch = () => {
    ref.current && ref.current.reset();
  };

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
              <strong>Scratch this protective layer to see the true colors of your Sock</strong>
            </div>
          </div>
          <ScratchCard
            ref={undefined}
            isDrawing={false}
            width={350}
            height={350}
            image={scratchImage}
            finishPercent={50}
            onComplete={() => console.log("complete")}
            brushSize={0}
            customBrush={CUSTOM_BRUSH_PRESET}
          >
            <div className="nft_image_wrapper">
              <img className="nft_image" draggable="false" src={image.length == 0 ? scratchImage : image} />
            </div>
          </ScratchCard>
          <div className="Footer__Text">
            <b>
              Only <span>{left} Socks</span>available on a price curve <span>increasing 0.2% </span>with each new mint.
              Double the supply of the <a href="#">Original Ethereum Mainnet That Socks!</a>
            </b>
          </div>
          <div className="sock__button_wrapper">
            <Button
              onClick={() => {
                resetScratch();
                setEmptyImage();
                onMint();
              }}
              className="mint__button"
            >
              Mint Now At {priceToMint && (+ethers.utils.formatEther(priceToMint)).toFixed(4)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintCard;

// <div className="SocksCardImage_wrapper">
// <div className="SocksCardImage">
//   <img className="nft__image" draggable="false" src={"/assets/sockType/Long.png"} />
//   <img className="scratch__image" draggable="false" src={scratchImage} />
// </div>
// </div>
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
