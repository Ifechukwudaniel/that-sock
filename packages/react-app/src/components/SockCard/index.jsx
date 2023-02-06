import Address from "../Address";
import "./SockCard.css";

export default function SockCard({
  image,
  id,
  name,
  description,
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
        <div>
          <span>{name}</span>
        </div>
        <div>{description}</div>
        <div>
          <Address address={owner} ensProvider={mainnetProvider} blockExplorer={blockExplorer} fontSize={16} />
        </div>
      </div>
    </div>
  );
}
