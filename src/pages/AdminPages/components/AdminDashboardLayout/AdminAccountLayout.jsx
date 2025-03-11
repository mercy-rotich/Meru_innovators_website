import MegaDashboard from "../../../../components/users/navbar/MegaDashboard";
import AdminAccountSidebar from "../AdminSidebar/AdminSidebar";
import "../../../UserAccount/UserAccountLayout/UserAccountLayout.css";
import AdminNavbar from "./AdminNavbar";
import CustomTime from "../../../../components/CustomTime/CustomTIme";
const AdminAccountLayout = ({ children }) => {
  return (
    <div className="account-layout">
      {/* <MegaDashboard /> */}
      <AdminNavbar />
      <AdminAccountSidebar />
      <div className="main">{children}</div>
      <CustomTime />
    </div>
  );
};

export default AdminAccountLayout;
