import MegaDashboard from "../../../components/users/navbar/MegaDashboard";
import Footer from "../../../components/users/Footer/Footer";
import ScrollToTop from "../../../components/Utility/ScrollTop";
const PageLayout = ({ children }) => {
  return (
    <>
    
      <MegaDashboard />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
