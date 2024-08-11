import { useDispatch, useSelector } from "react-redux"
import "../sellrentone.css"
import { setSelectedCity } from "../reducer/Actions";

export default function SellRentOne(){

    const dispatch = useDispatch();
    
    const state = useSelector((state)=>state.data)
    const onCitySelect = (value) =>{
      dispatch(setSelectedCity(value))
    }

    return(
        <div> 
         <h2 className="h2-style"> Sell or Rent Your Property For Free</h2>
         <div className="default-box-holder">
         <div className="left-box">
            <h3 className="h2-style">Why Post through us?</h3>
            <p className="p-style"><span></span>Zero Brokerage </p>
            <p className="p-style"><span></span>Faster Tenets</p>
            <p className="p-style"><span></span>10k+ buyer/tenets connection</p>
         </div>
         <div className="right-box">
            <select value={state.selectedCity} onChange={(e)=>{onCitySelect(e.target.value)}} className="select-box-2">
                <option value="" disabled selected>Select your City</option>
                <option className="select-box-2">Bangalore</option>
                <option className="select-box-2">Pune</option>
                <option className="select-box-2">Gurgaon</option>
                <option className="select-box-2">Delhi</option>
                <option className="select-box-2">Ghaziabad</option>
                <option className="select-box-2">Greater Noida</option>
                <option className="select-box-2">Mumbai</option>
                <option className="select-box-2" >Chennai</option>
                <option className="select-box-2">Hyderabad</option>
                <option className="select-box-2">Faridabad</option>
                <option className="select-box-2">Noida</option>
            </select>

            <p>Get updates on Whatsapp</p>
            <h4 className="h4-style">Property Type</h4>
            <div className="property-type-holder">
                <div className="inner-component">
                  <h4>Residential</h4>
                </div>
                <div className="inner-component">
                    <h4>Commercial</h4>
                </div>
                <div className="inner-component">
                    <h4>Land/Plot</h4>
                </div>
            </div>
            <div className="property-type-holder-2">
                <div className="property-info-holder">
                <h5>Select Property Ad Type </h5>
                <div className="property-type-holder-3">
                <button className="button-style">Rent</button>
                <button className="button-style">Resale</button>
                <button className="button-style">PG/Hostel</button>
                <button className="button-style">Flatmates</button>
                </div>
            </div>
            </div>
            <button className="post-button">Start Posting Your Ad For Free</button>
         </div>
         </div>

        </div>
    )
}