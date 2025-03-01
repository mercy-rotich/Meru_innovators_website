import MegaDashboard from "../../../components/users/navbar/MegaDashboard";
import Footer from "../../../components/users/Footer/Footer";
const PageLayout = ({ children, gallery }) => {
  return (
    <>
      <MegaDashboard gallery={"gallery"} />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
