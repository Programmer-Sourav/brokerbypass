import "./navbar.css"
import Logo from "./assets/nb_logo_new_trans.svg" 

export default function Navigationbar(){



    return(
        <div>
        <header className="header-default-nb"> 
        <span className="companylogo">
            <img src={Logo} alt="logo"/>
        </span>
        
        <nav className="nav-bar">
        <button className="btn-default-nb">For Property owners</button>
        <div className="nav-container-right">
        <div className="signup">Sign up |</div>  
        <div className="login">Log in |</div>
        <div className="menu">Menu</div> 
        </div>
        </nav>
        </header>
        </div>
    )
}