import { Link } from "react-router";
import logo from "../images/logo.svg"

const Header = () => {
    return (
        <div className="header">
            <header>
                <img className="logo" src={logo} alt="CalSync Logo"></img>
                <h1>CalSync</h1>
            <nav className="nav-bar">
              <Link to='/Home'>Home</Link> | <Link to='/About'>About Us</Link>
            </nav>
            </header>
        </div>
    );
};

export default Header;