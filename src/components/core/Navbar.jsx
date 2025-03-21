import { Link } from "react-router-dom";
import Button from "./Button"; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src="/logo.png"  
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-2"
          />
          CauseConnect
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/donate">Donate</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/more">Know More</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/stats">Dashboard</Link></li>
          </ul>
          <div className="d-flex gap-2"> 
            <Link to="/login">
              <Button text="Login" className="small-button" />
            </Link>
            <Link to="/register">
              <Button text="Register" className="small-button" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
