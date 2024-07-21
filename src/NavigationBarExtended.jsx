import "./navbar.css"
import Logo from "./assets/nb_logo_new_trans.svg" 

export default function NavigationBarExtended(){



    return(
        <div>
        <header className="header"> 
        <span className="companylogo">
            <img src={Logo} alt="logo"/>
        </span>
        <span><select value={""} onChange={()=>{onselectionchange()}} className="select-default-transparent">
             <option>Rent</option>
             <option>Rent</option>
             <option>Rent</option>
             <option>Rent</option>
             <option>Rent</option>
             <option>Rent</option>
             <option>Rent</option>
            </select></span>
        <nav className="nav-bar">
        <button className="btn-default-2">For Property owners</button>
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