import Address from "../Address";
import "./SockCard.css";

export default function SockCard({
  image,
  id,
  name,
  description,
  color,
  owner,
  mainnetProvider,
  blockExplorer,
  yourSocks,
  tx,
  transferToAddresses,
  setTransferToAddresses,
  writeContracts,
  address,
}) {
  const showTransfer = yourSocks && tx && transferToAddresses && setTransferToAddresses && writeContracts && address;
  return (
    <div className="sock__card">
      <div className="sock__image__wrapper">
        <img className="sock__image" src={image} alt={"Sock #" + id} />
      </div>
      <div className="sock__content">
        <div className="sock__align_start">
          <h3>{name}</h3>
        </div>
        <div className="sock__align_start">
          <span> Color: {color}</span>
        </div>
        <div className="sock__align_start">
          <Address address={owner} ensProvider={mainnetProvider} blockExplorer={blockExplorer} fontSize={16} />
        </div>
      </div>
    </div>
  );
}
