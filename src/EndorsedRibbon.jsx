import React from "react";

import "./styles.scss";

import { BiBadgeCheck } from "react-icons/bi";

const EndorsedRibbon = ({ display }) => {
  return display ? (
    <div className="body">
      <div className="arrow-right" />
      <BiBadgeCheck className="icon" />
      <p>Endorsed</p>
    </div>
  ) : null;
};

export default EndorsedRibbon;
