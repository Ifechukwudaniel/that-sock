import React from "react";
import styleSock from "../components/Icons/guide/styleSocks.svg";
import "./Guide.css";

export default function Guide() {
  return (
    <div className="guide__page">
      <div className="guide-wrapper">
        <h2 className="large__text"> The Ultimate Guide to</h2>
        <img className="guide__howtosvg" src={styleSock} />
        <p className="guide__text">
          Socks are not the most important part of our daily wardrobe, but quite often we simply need these. We had made
          our research and found out that some people have a hard time finding the right socks for their everyday looks.
          It’s for such people that we decided to share a small guide, with limited collection of “That Socks” SVG NFTs
        </p>
      </div>
      <div className="guide-wrapper">
        <h2 className="guide__title "> Pick the right length. </h2>
        <p className="guide__text">
          The length of the sock may depend on the season, your outfit, the shoes you wear. For example Dr. Marten is
          best worn in socks with extra fleece on the heel or the entire sole, so they rub less. With hard shoes it is
          better to wear tight socks, in winter - high socks, will be much warmer. If the heel is often rubbed, then you
          can order additional leather patches that will also protect the back of the shoe from the inside
        </p>
        <div className="guide-image-row">
          <div className=" guide-image-col">
            <img src="/assets/sockType/Long.png" alt="Sock  Image" />
            <img src="/assets/sockType/Middle.png" alt="Sock  Image" />
            <img src="/assets/sockType/Short.png" alt="Sock  Image" />
          </div>
        </div>
      </div>

      <div className="guide-wrapper">
        <h2 className="guide__title"> Examples </h2>
        <p className="guide__text">Don’t know how to match your socks and shoes? Here are some ideas for you.</p>

        <div className="guide-image-row">
          <div className=" guide-image-col">
            <img src="/assets/examples/Long.png" alt="Sock  Image" />
            <img src="/assets/examples/Middle.png" alt="Sock  Image" />
            <img src="/assets/examples/Short-2.png" alt="Sock  Image" />
            <img src="/assets/examples/Long-2.png" alt="Sock  Image" />
            <img src="/assets/examples/Long-3.png" alt="Sock  Image" />
            <img src="/assets/examples/Middle-1.png" alt="Sock  Image" />
            <img src="/assets/examples/Middle-2.png" alt="Sock  Image" />
            <img src="/assets/examples/Long-1.png" alt="Sock  Image" />
            <img src="/assets/examples/Middle-3.png" alt="Sock  Image" />
          </div>
        </div>
      </div>
      <div className="guide-wrapper">
        <h2 className="guide__title"> Classy black&white </h2>
        <p className="guide__text">
          It is very useful to have several pairs of cotton socks in black and white, because they fit well with almost
          everything. If you are not a fan of white socks, take black ones. Blue and brown socks can be combined with
          trousers of the same colour, pretty much applies to every plain colour.
        </p>
        <div className="guide-image-row">
          <div className=" guide-image-col">
            <img src="/assets/blackAndWhite/white.png" alt="Sock  Image" />
            <img src="/assets/blackAndWhite/black.png" alt="Sock  Image" />
          </div>
        </div>
      </div>
      <div className="guide-wrapper">
        <h2 className="guide__title">Use Patterns</h2>
        <p className="guide__text">
          It is very useful to have several pairs of cotton socks in black and white, because they fir well with almost
          everything. If you are not a fan of white socks, take cotton black ones (not dark blue! Black, dark light
          grey, even beige, but not blue, not brown either"). Avoid mixing patterned socks with patterned pants.
        </p>
        <div className="guide-image-row">
          <div className=" guide-image-col">
            <img src="/assets/patterns/patterns-1.png" alt="Sock  Image" />
            <img src="/assets/patterns/patterns-2.png" alt="Sock  Image" />
            <img src="/assets/patterns/patterns-3.png" alt="Sock  Image" />
          </div>
        </div>
      </div>
      <div className="guide-wrapper">
        <h2 className="guide__title">Warm or cold?</h2>
        <p className="guide__text">
          Doesn’t matter what, always pick a nice breathable fabrics, like cotton, wool, viscose, cashmere, silk. You
          can also use socks with mixed materials. It will help you to avoid uncomfortable situations with stinky socks.
          For summer use more breathable and light socks, for winter, warm and dense, You don't want your feet to
          freeze, it's easy to get sick like this.
        </p>
        <div className="guide-image-row">
          <div className=" guide-image-col">
            <img src="/assets/examples/WARM.png" alt="Sock  Image" />
            <img src="/assets/examples/COLD.png" alt="Sock  Image" />
          </div>
        </div>
      </div>
      <div className="guide-wrapper">
        <h2 className="guide__title">Tidy and Clean </h2>
        <p className="guide__text">
          Keep your socks clean and tidy, you never know where you'll have to take off your shoes. Old socks should go
          either to the trash or to recycling, but definitely it doesn’t have a place in your drawer.
        </p>
        <div className="guide-image-row">
          <div className=" guide-image-col">
            <img src="/assets/examples/DIRTY.png" alt="Sock  Image" />
            <img src="/assets/examples/FRESH.png" alt="Sock  Image" />
          </div>
        </div>
      </div>
      <div className="guide-wrapper">
        <h2 className="guide__title">White Flag </h2>
        <p className="guide__text">
          Don’t mix up! I advise you not to mix brands of socks and shoes. Don't wear Adidas with Nike and New Balance
          with Reebok, it's all "White Flag". Most sports brands have in stock not only shoes, but also socks in the
          amount of 2-5 pairs at once. If you don't want to wear branded socks, you can again use patterned socks, or
          the black/white version.
        </p>
        <div className="guide-image-row">
          <div className=" guide-image-col">
            <img src="/assets/examples/dont-mix.png" alt="Sock  Image" />
            <img src="/assets/examples/dont-mix-1.png" alt="Sock  Image" />
          </div>
        </div>
      </div>
      <div className="guide-wrapper">
        <h2 className="guide__title">Alternative </h2>
        <div className="guide-image-row">
          <div className=" guide-image-col">
            <img src="/assets/alt/alt-1.png" alt="Sock  Image" />
            <img src="/assets/alt/alt-2.png" alt="Sock  Image" />
            <img src="/assets/alt/alt-3.png" alt="Sock  Image" />
            <img src="/assets/alt/alt-4.png" alt="Sock  Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
