import React, { Fragment } from "react";

import MobileNav from "./MobileNav";

import { useState } from "react";

import DesktopNav from "./DesktopNav";

const MegaDashboard = ({gallery}) => {
  const [showMobile, setMobileNav] = useState(false);

  const closeMobileNav = () => {
    setMobileNav(false);
  };
  const openMobileNav = () => {
    setMobileNav(true);
  };

  return (
    <Fragment>
      <DesktopNav openMobileNav={openMobileNav} gallery={"gallery"} />
      <MobileNav onClose={closeMobileNav} showMobile={showMobile} />
    </Fragment>
  );
};

export default MegaDashboard;
