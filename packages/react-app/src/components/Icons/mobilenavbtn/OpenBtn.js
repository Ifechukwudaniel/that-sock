import * as React from "react";
const OpenBtn = props => (
  <svg width={34} height={34} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 5H12H19" stroke="black" strokeWidth={2} strokeLinecap="round" />
    <path d="M5 12H19" stroke="black" strokeWidth={2} strokeLinecap="round" />
    <path d="M5 19H12H19" stroke="black" strokeWidth={2} strokeLinecap="round" />
  </svg>
);
export default OpenBtn;
