import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TopHeader from "../components/TopHeader/TopHeader";
import Footer from "../components/Footer/Footer";
import FooterBanner from "../components/Footer/FooterBanner";
import Design from "../components/Footer/Design";

const MainLayout = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Outlet />
      <Footer />
      <FooterBanner />
      <Design />
    </div>
  );
};

export default MainLayout;
