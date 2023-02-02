import * as React from "react";
const Cloud = props => (
  <svg
    width={props.width ? props.width : 157}
    height={99}
    viewBox={`0 0 ${props.width ? props.width : "157"} 99`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.8349 26.3824C-2.12848 37.8139 -3.52184 52.5795 4.79624 58.5334C-5.6623 95.6856 36.3036 92.7257 52.0745 86.6017C68.788 109.056 91.1501 95.9577 100.242 86.6017C140.633 97.6248 153.826 72.4825 155.373 58.5334C162.802 37.7118 142.993 28.4238 132.16 26.3824C115.447 -9.1367 88.0452 1.7259 75.8582 16.5255C51.7164 -18.9936 26.7333 11.5828 17.8349 26.3824Z"
      fill="white"
    />
  </svg>
);
export default Cloud;
