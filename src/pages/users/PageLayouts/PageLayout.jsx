import MegaDashboard from "../../../components/users/navbar/MegaDashboard";
import Footer from "../../../components/users/Footer/Footer";
const PageLayout = ({ children,title }) => {
  return (
    <>
    
      <MegaDashboard title={title} />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
