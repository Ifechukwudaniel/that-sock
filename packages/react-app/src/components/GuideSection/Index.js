import "./Guide.css";
import HeaderComponent from "./HeaderComponent";
import Headings from "./Headings";
import Paragraph from "./Paragraph";
import IMAGES from "./Assets";
import Assets from "./AssetsContainer";
import Cloud from "./Cloud";
export default function Guide() {
  return (
    <main className="container">
      {headers.map((header, i) => (
        <div className="component" key={i}>
          <Headings content={header} size={i === 0 ? 40 : null} />
          {i == 0 ? <HeaderComponent style={{ width: "100%" }} /> : null}
          {switchClouds[i]}
          <Paragraph content={paragraphs[i]} />
          {i !== 0 ? <Assets images={IMAGES[i - 1]} key={i} /> : null}
        </div>
      ))}
    </main>
  );
}
let headers = [
  "The Ultimate Guide to",
  "Pick the right length.",
  "Examples",
  "Classy black&white",
  "Use Patterns",
  "Warm or Cold",
  "Tidy and Clean",
  "White Flag",
  "Alternative",
];
let paragraphs = [
  "Socks are not the most important part of our daily wardrobe, but quite often we simply need these.  We had made our research and found out that some people have a hard time finding the right socks for their everyday looks. Its for such people that we decided to share a small guide, with limited collection of “That Socks” SVG NFTs.",
  "The length of the sock may depend on the season, your outfit, the shoes you wear. For example Dr. Marten is best worn in socks with extra fleece on the heel or the entire sole, so they rub less. With hard shoes it is better to wear tight socks, in winter - high socks, will be much warmer. If the heel is often rubbed, then you can order additional leather patches that will also protect the back of the shoe from the inside.",
  "Dont know how to match your socks and shoes? Here are some ideas for you.",
  "It is very useful to have several pairs of cotton socks in black and white, because they fit well with almost everything. If you are not a fan of white socks, take black ones. Blue and brown socks can be combined with trousers of the same colour, pretty much applies to every plain colour.",
  "It is very useful to have several pairs of cotton socks in black and white, because they fit well with almost everything. If you are not a fan of white socks, take cotton black ones (not dark blue! Black, dark light grey, even beige, but not blue, not brown either). Avoid mixing patterned socks with patterned pants.",
  "Doesnt matter what, always pick a nice breathable fabrics, like cotton, wool, viscose, cashmere, silk. You can also use socks with mixed materials. It will help you to avoid uncomfortable situations with stinky socks. For summer use more breathable and light socks, for winter, warm and dense, You don't want your feet to freeze, it's easy to get sick like this.",
  "Keep your socks clean and tidy, you never know where you'll have to take off your shoes. Old socks should go either to the trash or to recycling, but definitely it doesnt have a place in your drawer",
  "Dont mix up! I advise you not to mix brands of socks and shoes. Don't wear Adidas with Nike and New Balance with Reebok, it's all “White Flag”. Most sports brands have in stock not only shoes, but also socks in the amount of 2-5 pairs at once. If you don't want to wear branded socks, you can again use patterned socks, or the black/white version.",
];
let switchClouds = [
  <>
    <Cloud
      className="cloud"
      style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", transform: "scale(1.3)" }}
    />
    <Cloud className="cloud" style={{ bottom: "10%", left: "0", transform: "scale(0.7)" }} />
  </>,
  <>
    <Cloud className="cloud" style={{ right: "0", bottom: "40%", transform: "scale(1.7)" }} />
    <Cloud className="cloud" style={{ top: "50%", left: "-40%", transform: "scale(0.9)" }} />
  </>,
  <></>,
  <Cloud className="cloud" style={{ top: "50%", left: "20px", transform: "scale(1.5)" }} />,
  <Cloud className="cloud" style={{ top: "20px", left: "50%", transform: "scale(1.9)" }} />,
];
