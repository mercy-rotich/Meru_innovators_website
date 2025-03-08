import MegaDashboard from "../../../../components/users/navbar/MegaDashboard";
import AdminAccountSidebar from "../AdminSidebar/AdminSidebar";
import "../../../UserAccount/UserAccountLayout/UserAccountLayout.css";
const AdminAccountLayout = ({ children }) => {
  return (
    <div className="account-layout">
      <MegaDashboard />
      <AdminAccountSidebar />
      <div className="main">{children}</div>
    </div>
  );
};

export default AdminAccountLayout;
