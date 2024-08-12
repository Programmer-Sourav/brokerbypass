import { useDispatch, useSelector } from "react-redux"
import "../amenities-page.css"
import WaterDrop from "../assets/water-drop.png"
import GymIcon from "../assets/gym-icon.png"
import NonVegIcon from "../assets/non_veg.png"
import GatedSecurityIcon from "../assets/security.png"
import KeyPersonIcon from "../assets/keys.png"

import { setWaterSupplySpecification } from "../reducer/Actions"


export default function AminetesPage(){

   const { waterSupply } = useSelector((state)=>state.data)

   const dispatch = useDispatch()


   const onChangeWaterSupply = (value) =>{
      console.log(444, value)
      setWaterSupplySpecification(dispatch(value))
   }

    return(
               
               <div className="right-nav">
                <div className="header-height">
                    <h3>Provide details about amenities your property offer</h3>
                </div>  
                <div className="select-flex-row"> 
                <div className="select-flex"> 
                <h4>Bathroom(s)*</h4>
                <div className="select-flex-row-2">
                  <button onClick={""}>-</button>
                  <p>{"1"}</p>
                  <button onClick={""}>+</button>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Balcony</h4>
                <div className="select-flex-row-2">
                  <button onClick={""}>-</button>
                  <p>{"1"}</p>
                  <button onClick={""}>+</button>
                </div>
                </div>

                <div className="select-flex"> 
                <h4>Water Supply*</h4>
                <div className="select-flex-row-2">
                <span><img src={WaterDrop} alt="water-drop" className="img-small"/></span>  
                <select value ={waterSupply}  onChange={(e)=>{onChangeWaterSupply(e.target.value)}} className="select-borderless">
                  <option>Select</option>
                  <option>Borewell</option>
                  <option>Corporation</option>
                </select> 
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Gym*</h4>
                <div className="select-flex-row-2">
                <span><img src={GymIcon} alt="water-drop" className="img-small"/></span>  
                <span><button onClick={""} className="btn-inner-small-5">No</button></span>
                <span><button onClick={""} className="btn-inner-small-5">Yes</button></span>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Non-Veg Allowed*</h4>
                <div className="select-flex-row-2">
                <span><img src={NonVegIcon} alt="water-drop" className="img-small"/></span>  
                <span><button onClick={""} className="btn-inner-small-5">No</button></span>
                <span><button onClick={""} className="btn-inner-small-5">Yes</button></span>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Gated Security*</h4>
                <div className="select-flex-row-2">
                <span><img src={GatedSecurityIcon} alt="water-drop" className="img-small"/></span>  
                <span><button onClick={""} className="btn-inner-small-5">No</button></span>
                <span><button onClick={""} className="btn-inner-small-5">Yes</button></span>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Who will show the property?*</h4>
                <div className="select-flex-row-2">
                <span><img src={KeyPersonIcon} alt="water-drop" className="img-small"/></span>  
                <span><button onClick={""} className="btn-inner-small-5">No</button></span>
                <span><button onClick={""} className="btn-inner-small-5">Yes</button></span>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Secondary Number*</h4>
                <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="select-flex-row-3"> 
                <h4>Do you have more similar properties/units available? *</h4>
                <span><button onClick={""} className="btn-inner-small-5">No</button></span>
                <span><button onClick={""} className="btn-inner-small-5">Yes</button></span>
                </div>
                <h4>Add Direction Tip for your tenants*</h4>
             
                <input type="text" value ={""} className="select-input-box" placeholder="e.g. xyz street"/>
               
                <div className="footer-flex-row">
                 <button onClick={""} className="footer-btn-one">Back</button>
                 <button onClick={""} className="footer-btn-two">Save & Continue</button>
                </div>
                </div>
                </div>
        
    )
}