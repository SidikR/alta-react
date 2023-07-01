import { Button } from "react-bootstrap";
import logo from "../../../assets/img/logo.png";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { linkProducts } from "../../../helper/constants";
import { useSelector } from "react-redux";

export default function Navbar({ hideNavbar }) {
  const { cartCounter } = useSelector((state) => state.products);
  return (
    <nav className={`py-4 ${hideNavbar && "d-none"}`}>
      <div className="container d-flex justify-content-between">
        <div className="d-flex align-items-center gap-4">
          <div>
            <img src={logo} width={160} height={33} />
          </div>
          <div className="d-flex gap-3">
            <p className="m-0">Home</p>
            <p className="m-0">
              <Link to={linkProducts}>Products </Link>
            </p>
            <p className="m-0">About</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-4">
          <div className="d-flex">
            <RiShoppingCart2Fill size={24} />
            {cartCounter.length !== 0 && <span>{cartCounter.length}</span>}
          </div>
          <Button className="px-4 fw-bold">Sign In</Button>
        </div>
      </div>
    </nav>
  );
}
