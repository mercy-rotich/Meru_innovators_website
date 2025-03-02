import React from "react";

import MegaDashboard from "../../../components/users/navbar/MegaDashboard";

import UserAccountSidebar from "./UserAccountSidebar";

import "./UserAccountLayout.css"

const UserAccountLayout = ({ children }) => {
  return (
    <div className="account-layout">
      <MegaDashboard />
      <UserAccountSidebar />
      <div className="main">{children}</div>
    </div>
  );
};

export default UserAccountLayout;
