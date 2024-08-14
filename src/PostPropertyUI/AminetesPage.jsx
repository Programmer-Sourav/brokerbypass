import { useDispatch, useSelector } from "react-redux"
import "../amenities-page.css"
import WaterDropletIcon from "../assets/water-drop.png"
import GymIcon from "../assets/gym-gray.png"
import ChickenIcon from "../assets/chicken.png"
import SecurityIcon from "../assets/security-guard.png"
import KeyIcon from "../assets/keys-gray.png"


///may try to load icons from servers
import LiftIcon from "../assets/lift.png"
import WifiIcon from "../assets/wifi-internet.png"
import AirconditionerIcon from "../assets/air-conditioner.png"
import ClubHouseIcon from "../assets/club.png"
import IntercomIcon from "../assets/intercom.png"
import SwimmingPoolIcon from "../assets/swimming-pool.png"
import ChildrenPlayArea from "../assets/children.png"
import FireSafety from "../assets/fire-extinguisher.png"
import ServantRoomIcon from "../assets/waiter.png"
import ShoppingIcon from "../assets/shopping-mall.png"
import GasIcon from "../assets/gas.png"
import ParkIcon from "../assets/park.png"
import HarvestingIcon from "../assets/harvesting.png"
import SewageIcon from "../assets/water-waste.png"
import HouseKeeperIcon from "../assets/housekeeper.png"
import PowerBackupIcon from "../assets/battery.png"
import VisitorParkingIcon from "../assets/car-parking.png"


import { setWaterAvailabilityValue } from "../reducer/Actions"
import { Img } from "@chakra-ui/react"

export default function AminetesPage(){

  const {water} = useSelector((state)=>state.data)

  const amenetiesDataFromServer = [{id:1, aAmenity: "Lift", aicon: LiftIcon }, {id:2, aAmenity:"Internet Services", aicon: WifiIcon}, {id:3, aAmenity:"Air Conditioner", aicon: AirconditionerIcon}, {id:4, aAmenity: "Club House", aicon: ClubHouseIcon}, {id:5, aAmenity: "Intercom", aicon: IntercomIcon}, {id:6, aAmenity:"Swimming pool", aicon: SwimmingPoolIcon} , {id:7, aAmenity:"Children Play Area", aicon: ChildrenPlayArea}, {id:8, aAmenity:"Fire Safety", aicon: FireSafety}, {id:9, aAmenity: "Servant Room",aicon:ServantRoomIcon},{id:10, aAmenity: "Shopping Center", aicon: ShoppingIcon}, {id:11, aAmenity: "Gas Pipeline",aicon: GasIcon}, {id:12, aAmenity: "Park", aicon: ParkIcon}, {id:13, aAmenity: "Rain Water Harvesting", aicon:HarvestingIcon}, {id:14, aAmenity: "Sewage Treatment Plant", aicon: SewageIcon}, {id:15, aAmenity: "House Keeping", aicon: HouseKeeperIcon}, {id:16, aAmenity: "Power Backup", aicon: PowerBackupIcon}, {id:17, aAmenity: "Visitor Parking", aicon: ParkIcon}]

  const dispatch = useDispatch()

  const setWaterAvailibilityPreference = (value) =>{
     dispatch(setWaterAvailabilityValue(value))
  }
  const onChangeHandler = () =>{

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
                <div className="select-big">
                  <div className="select-flex"></div>

                  <span className="icon-container"><img src={WaterDropletIcon} className="select-icon-measurements" alt="water-droplet"/></span>
               
                  <select value={""} onChange={(e)=>{setWaterAvailibilityPreference(e.target.value)}} className="select-small">
                    <option>Borewell</option>
                    <option>Corporation</option>
                  </select>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Gym*</h4>
                <div className="select-big">
                  <div className="select-flex-row-default">
                  <span className="icon-container">
                    <img src={GymIcon} className="select-icon-measurements" alt="gym-droplet"/>
                    
                    </span>
                  <button onClick={""} className="select-inner-button">No</button>
                  <button onClick={""} className="select-inner-button">Yes</button>
                  </div>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Non-Veg Allowed*</h4>
                <div className="select-big">
                  <div className="select-flex-row-default">
                  <span className="icon-container">
                    <img src={ChickenIcon} className="select-icon-measurements" alt="gym-droplet"/>
                    
                    </span>
                  <button onClick={""} className="select-inner-button">No</button>
                  <button onClick={""} className="select-inner-button">Yes</button>
                  </div>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Gated Security*</h4>
                <div className="select-big">
                  <div className="select-flex-row-default">
                  <span className="icon-container">
                    <img src={SecurityIcon} className="select-icon-measurements" alt="gym-droplet"/>
                    
                    </span>
                  <button onClick={""} className="select-inner-button">No</button>
                  <button onClick={""} className="select-inner-button">Yes</button>
                  </div>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Who will show the property?*</h4>
                <div className="select-big">
                  <div className="select-flex-row-default">
                  <span className="icon-container">
                    <img src={KeyIcon} className="select-icon-measurements" alt="gym-droplet"/>
                    
                    </span>
                  <button onClick={""} className="select-inner-button">No</button>
                  <button onClick={""} className="select-inner-button">Yes</button>
                  </div>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Secondary Number*</h4>
                <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="select-flex-row-default-height"> 
                <h4>Do you have more similar properties/units available? *</h4>
                <button onClick={""} className="select-inner-button">No</button>
                <button onClick={""} className="select-inner-button">Yes</button>
                </div>
                <div className="select-flex"> 
                <h4>Add Direction Tip for your tenants*</h4>
                <input type="text" value ={""} className="select-flex-row-128" placeholder="e.g. xyz street"/>
                </div>
                <h4>Select the available amenities</h4>

                <div class="amenities-container">
                <div class="amenities-column">
                  {
                    amenetiesDataFromServer.map((amenityItem, id)=>(
                      <li key={id} style={{listStyle: "none"}} className="item-box-large">
                     <div>
                     <label> 
                     <input type="checkbox" onChange={()=>{onChangeHandler()}} value={""} />
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
                 <button onClick={""} className="footer-btn-one">Back</button>
                 <button onClick={""} className="footer-btn-two">Save & Continue</button>
                </div>
                </div>
                </div>
        
    )
}