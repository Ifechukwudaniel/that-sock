import * as React from "react";
const CloseBtn = props => (
  <svg width={34} height={34} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5 19V12L5 5" stroke="black" strokeWidth={2} strokeLinecap="round" />
    <path d="M12 19V5" stroke="black" strokeWidth={2} strokeLinecap="round" />
    <path d="M19 19V12V5" stroke="black" strokeWidth={2} strokeLinecap="round" />
  </svg>
);
export default CloseBtn;
