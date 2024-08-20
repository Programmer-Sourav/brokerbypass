import { useDispatch, useSelector } from "react-redux"
import "../amenities-page.css"
import WaterDrop from "../assets/water-drop.png"
import GymIcon from "../assets/gym-icon.png"
import NonVegIcon from "../assets/non_veg.png"
import GatedSecurityIcon from "../assets/security.png"
import KeyPersonIcon from "../assets/keys.png"
import LiftIcon from "../assets/lift.png"
import WifiIcon from "../assets/wifi-internet.png"
import AirconditionerIcon from "../assets/air-conditioner.png"
import ClubHouseIcon from "../assets/club.png"
import IntercomIcon from "../assets/intercom.png"
import FireSafety from "../assets/fire-extinguisher.png"
import SwimmingPoolIcon from "../assets/swimming-pool.png"
import ChildrenPlayArea from "../assets/children.png"
import ServantRoomIcon from "../assets/janitor.png"
import ShoppingIcon from "../assets/shopping-mall.png"
import GasIcon from "../assets/gas.png"
import ParkIcon from "../assets/park.png"
import HarvestingIcon from "../assets/harvesting.png"
import SewageIcon from "../assets/water-waste.png"
import HouseKeeperIcon from "../assets/housekeeper.png"
import PowerBackupIcon from "../assets/battery.png"
import ParkingIcon from "../assets/car-parking.png"

import { setAndSaveAmenitiesDetails, setSelectedAmenities, setWaterSupplySpecification } from "../reducer/Actions"
import { useState } from "react"


export default function AminetesPage(){

  const [bathroomCount, setBathroomCount] = useState(1)
  const [balconyCount, setBalconyCount] = useState(1)
  const [gymOption, setGymOption] = useState("maybe")
  const [nonVegOption, setNonVegOption] = useState("maybe")
  const [securiytOption, setSecurityOption] =  useState("maybe")
  const [propertyPerson, setPropertyPerson] = useState("")
  const [secondaryNumber, setSecondaryNumber] = useState("")
  const [similarPropertyHolder, setSimilarPropertyHolder] = useState("maybe")
  const [directionTips, setDirectionTips] = useState("")

  const {water, waterSupply, amenities} = useSelector((state)=>state.data)

  const amenetiesDataFromServer = [{id:1, aAmenity: "Lift", aicon: LiftIcon }, {id:2, aAmenity:"Internet Services", aicon: WifiIcon}, {id:3, aAmenity:"Air Conditioner", aicon: AirconditionerIcon}, {id:4, aAmenity: "Club House", aicon: ClubHouseIcon}, {id:5, aAmenity: "Intercom", aicon: IntercomIcon}, {id:6, aAmenity:"Swimming pool", aicon: SwimmingPoolIcon} , {id:7, aAmenity:"Children Play Area", aicon: ChildrenPlayArea}, {id:8, aAmenity:"Fire Safety", aicon: FireSafety}, {id:9, aAmenity: "Servant Room",aicon:ServantRoomIcon},{id:10, aAmenity: "Shopping Center", aicon: ShoppingIcon}, {id:11, aAmenity: "Gas Pipeline",aicon: GasIcon}, {id:12, aAmenity: "Park", aicon: ParkIcon}, {id:13, aAmenity: "Rain Water Harvesting", aicon:HarvestingIcon}, {id:14, aAmenity: "Sewage Treatment Plant", aicon: SewageIcon}, {id:15, aAmenity: "House Keeping", aicon: HouseKeeperIcon}, {id:16, aAmenity: "Power Backup", aicon: PowerBackupIcon}, {id:17, aAmenity: "Visitor Parking", aicon: ParkingIcon}]

  const dispatch = useDispatch()


  const setWaterAvailibilityPreference = (value) =>{
     dispatch(setWaterAvailabilityValue(value))
  }
  const onChangeHandler = (data) =>{
    dispatch(setSelectedAmenities(data))
  }

   const onChangeWaterSupply = (value) =>{
      dispatch(setWaterSupplySpecification(value))
   }
   

   const saveTheAmenitiesDetails = () =>{
    const amenityDetails = {bathrooms: bathroomCount, 
      balcony: balconyCount, 
      water_supply: waterSupply,
      gymAvailable: gymOption,
      nonVegAllowed: nonVegOption, 
      gatedSecurity: securiytOption, 
      contactPerson: propertyPerson, 
      secondaryPhone: secondaryNumber, 
      propertyAvailableFlag: similarPropertyHolder,
      direction: directionTips, 
      availableAmenities: amenities}
      dispatch(setAndSaveAmenitiesDetails(amenityDetails))
   }

   const backToLastSection = () =>{

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
                  <button onClick={()=>{bathroomCount>0 ? setBathroomCount(pCount=>pCount-1) : ""}}>-</button>
                  <p>{bathroomCount}</p>
                  <button onClick={()=>{bathroomCount>=0 ? setBathroomCount(pCount=>pCount+1) : ""}}>+</button>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Balcony</h4>
                <div className="select-flex-row-2">
                  <button onClick={()=>{balconyCount>0 ? setBalconyCount(pCount=>pCount -1) : ""}}>-</button>
                  <p>{balconyCount}</p>
                  <button onClick={()=>{balconyCount>=0 ? setBalconyCount(pCount=>pCount +1) : ""}}>+</button>
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
                <span><button onClick={()=>{setGymOption("No")}} className={gymOption==="No"? "btn-inner-small-5-focus" : "btn-inner-small-5"}>No</button></span>
                <span><button onClick={()=>{setGymOption("Yes")}} className={gymOption==="Yes"? "btn-inner-small-5-focus" : "btn-inner-small-5"}>Yes</button></span>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Non-Veg Allowed*</h4>
                <div className="select-flex-row-2">
                <span><img src={NonVegIcon} alt="water-drop" className="img-small"/></span>  
                <span><button onClick={()=>{setNonVegOption("No")}} className={nonVegOption==="No"? "btn-inner-small-5-focus" : "btn-inner-small-5"}>No</button></span>
                <span><button onClick={()=>{setNonVegOption("Yes")}} className={nonVegOption==="Yes"? "btn-inner-small-5-focus" : "btn-inner-small-5"}>Yes</button></span>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Gated Security*</h4>
                <div className="select-flex-row-2">
                <span><img src={GatedSecurityIcon} alt="water-drop" className="img-small"/></span>  
                <span><button onClick={()=>{setSecurityOption("No")}} className={securiytOption==="No"? "btn-inner-small-5-focus" : "btn-inner-small-5"}>No</button></span>
                <span><button onClick={()=>{setSecurityOption("Yes")}} className={securiytOption==="Yes"? "btn-inner-small-5-focus" : "btn-inner-small-5"}>Yes</button></span>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Who will show the property?*</h4>
                <div className="select-flex-row-2">
                <span><img src={KeyPersonIcon} alt="water-drop" className="img-small"/></span>  
                <select value ={propertyPerson}  onChange={(e)=>{setPropertyPerson(e.target.value)}} className="select-borderless">
                  <option>Select</option>
                  <option>Self</option>
                  <option>Security</option>
                  <option>Relative</option>
                  <option>Someone else</option>
                </select> 
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Secondary Number*</h4>
                <input type="number" value ={secondaryNumber} onChange={(e)=>{setSecondaryNumber(e.target.value)}} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="select-flex-row-3"> 
                <h4>Do you have more similar properties/units available? *</h4>
                <span><button onClick={()=>{setSimilarPropertyHolder("No")}} className={similarPropertyHolder==="No"? "btn-inner-small-5-focus" : "btn-inner-small-5"}>No</button></span>
                <span><button onClick={()=>{setSimilarPropertyHolder("Yes")}} className={similarPropertyHolder==="Yes"? "btn-inner-small-5-focus" : "btn-inner-small-5"}>Yes</button></span>
                </div>
                <h4>Add Direction Tip for your tenants*</h4>
                <input type="text" value ={directionTips} onChange={(e)=>{setDirectionTips(e.target.value)}} className="select-flex-row-128" placeholder="e.g. xyz street"/>
                </div>
                <h4>Select the available amenities</h4>

                <div class="amenities-container">
                <div class="amenities-column">
                  {
                    amenetiesDataFromServer.map((amenityItem, id)=>(
                      <li key={id} style={{listStyle: "none"}} className="item-box-large">
                     <div>
                     <label> 
                     <input type="checkbox" checked={amenities.includes(amenityItem.aAmenity)} onChange={()=>{onChangeHandler(amenityItem.aAmenity)}} />
                     <span><img src={amenityItem.aicon} className="select-icon-measurements-l" alt={amenityItem.aAmenity}/></span>
                     <span className="amenity-item-text">{amenityItem.aAmenity}</span>
                     </label> 
     
                     </div>  
                     </li>
                      
                    ))
                  }
                </div>
                </div>

                <div className="footer-flex-row">
                 <button onClick={backToLastSection} className="footer-btn-one">Back</button>
                 <button onClick={saveTheAmenitiesDetails} className="footer-btn-two">Save & Continue</button>
                </div>
                </div>
       
              
        
    )
}
