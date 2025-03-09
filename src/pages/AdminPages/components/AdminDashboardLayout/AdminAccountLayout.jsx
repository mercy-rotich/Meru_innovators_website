import MegaDashboard from "../../../../components/users/navbar/MegaDashboard";
import AdminAccountSidebar from "../AdminSidebar/AdminSidebar";
import "../../../UserAccount/UserAccountLayout/UserAccountLayout.css";
import AdminNavbar from "./AdminNavbar";
const AdminAccountLayout = ({ children }) => {
  return (
    <div className="account-layout">
      {/* <MegaDashboard /> */}
      <AdminNavbar/>
      <AdminAccountSidebar />
      <div className="main">{children}</div>
    </div>
  );
};

export default AdminAccountLayout;
