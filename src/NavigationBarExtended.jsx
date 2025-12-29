import "./navbarextended.css"
import Logo from "./assets/nb_logo_new_trans.svg" 
import { useDispatch, useSelector } from "react-redux"
import { setCurrentSelection } from "./reducer/Actions";
import SubHeader from "./SubHeader";
//import DDIcons from "./assets/dropdownselect.png"


export default function NavigationBarExtended(){

    const dropdownItems = [{category: "Residential", values: ["Rent", "Buy", "Pg/Hostel", "Flatmates", "Land/Plot"] }, 
                           {category: "Commercial", values: ["Rent", "Buy"]}]


    const currentSelection = useSelector((state)=>state.data);

    const dispatch = useDispatch();




    function onselectionchange(selectedValue){
      dispatch(setCurrentSelection(selectedValue))
    }

    return(
        <div className="header-default">
        <header className="header-default-nb"> 
        <span className="companylogo">
            <img src={Logo} alt="logo"/>
        </span>
        <span><select value={currentSelection} onChange={(e)=>{onselectionchange(e.target.value)}} className="select-default-transparent">
              {
                dropdownItems.map((item, index)=>(
                    <optgroup key ={index} label = {item.category} className="group-details">
                        {
                            item.values.map((value, idx)=>(
                                <option key={idx}>{value}</option>
                            ))
                        }
                    </optgroup>
                ))
              }
              
            </select></span>
        <nav className="nav-bar">
        <button className="btn-default-nb">For Property owners</button>
        <div className="nav-container-right">
        <div className="signup">Sign up |</div>  
        <div className="login">Log in |</div>
        <div className="menu">Menu</div> 
        </div>
        </nav>
        </header>
        <SubHeader/>
        </div>
    )
}