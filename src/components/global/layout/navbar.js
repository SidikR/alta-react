import { Button } from "react-bootstrap";
import logo from "../../../assets/img/logo.png";
import { RiShoppingCart2Fill } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="py-4">
      <div className="container d-flex justify-content-between">
        <div className="d-flex align-items-center gap-4">
          <div>
            <img src={logo} width={160} height={33} />
          </div>
          <div className="d-flex gap-3">
            <p className="m-0">Home</p>
            <p className="m-0">Products</p>
            <p className="m-0">About</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-4">
          <RiShoppingCart2Fill size={24} />
          <Button className="px-4 fw-bold">Sign In</Button>
        </div>
      </div>
    </nav>
  );
}
