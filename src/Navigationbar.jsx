import "./navbar.css"
import Logo from "./assets/nb_logo_new_trans.svg"
import { useState } from "react"

export default function Navigationbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <>
        <header className="header-default-nb">
        <span className="companylogo">
            <img src={Logo} alt="logo"/>
        </span>

        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-bar ${menuOpen ? 'nav-open' : ''}`}>
        <button className="btn-default-nb">For Property owners</button>
        <div className="nav-container-right">
        <div className="signup">Sign up |</div>
        <div className="login">Log in |</div>
        <div className="menu">Menu</div>
        </div>
        </nav>
        </header>
        </>
    )
}