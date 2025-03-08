import MegaDashboard from "../../../../components/users/navbar/MegaDashboard";
import AdminAccountSidebar from "../AdminSidebar/AdminSidebar";
import "../../../UserAccount/UserAccountLayout/UserAccountLayout.css";
const AdminAccountLayout = () => {
  return (
    <div className="account-layout">
      <MegaDashboard />
      <AdminAccountSidebar />
    </div>
  );
};

export default AdminAccountLayout;
