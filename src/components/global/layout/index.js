import Navbar from "./navbar";
import "./layout.css";
import Footer from "./footer";

export default function Layout({ hideNavbar, children }) {
  return (
    <div>
      <Navbar hideNavbar={hideNavbar} />
      {children}
      <Footer />
    </div>
  );
}
