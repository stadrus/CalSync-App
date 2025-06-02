import { Link } from "react-router";
import logo from "../images/logo.svg"

const Header = () => {
    return (
        <div className="header">
            <header>
                <img className="logo" src={logo} alt="CalSync Logo"></img>
                <h1>CalSync</h1>
            <nav className="nav-bar">
              <Link className="home-button" to='/Home'>Home</Link> | <Link className="about-button" to='/About'>About Us</Link>
            </nav>
            </header>
        </div>
    );
};

export default Header;