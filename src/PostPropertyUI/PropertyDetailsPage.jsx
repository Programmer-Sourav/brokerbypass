import "../property-details-setting.css"

import PropertyDetailsImg from "../assets/property_big.png";
import LocalityDetailsImg from "../assets/location_big.png"
import RentDetailsImg from "../assets/rent_big.png"
import AmenitiesImg from "../assets/amenities_big.png"
import GallryImg from "../assets/gallary.png"
import ScheduleImg from "../assets/calendar_big.png"

export default function PropertyDetailsPage(){


    return(
        <div className="details-page-body"> 
        <div className="left-nav">
            <div className="item-box">
                <span><img src={PropertyDetailsImg} alt="property-details" height={30} width={30}/></span>
                <p>Property Details</p>
            </div>
            <div className="item-box">
            <span><img src={LocalityDetailsImg} alt="property-details" height={30} width={30}/></span>
                <p>Locality Details</p>
            </div>
            <div className="item-box">
            <span><img src={RentDetailsImg} alt="property-details" height={30} width={30}/></span>
                <p>Rental Details</p>
            </div>
            <div className="item-box">
            <span><img src={AmenitiesImg} alt="property-details" height={30} width={30}/></span>
                <p>Amenities</p>
            </div>
            <div className="item-box">
            <span><img src={GallryImg} alt="property-details" height={30} width={30}/></span>
                <p>Gallry</p>
            </div>
            <div className="item-box">
            <span><img src={ScheduleImg} alt="property-details" height={30} width={30}/></span>
                <p>Schedule</p>
            </div>
        </div>  
        <div className="right-nav">
        <div className="header-height">
        <h3>Property Details</h3>
        </div> 
        <div className="select-flex">  
        <h4>Apartment Type*</h4> 
        <select value={""} onChange={()=>onAprtmentTypeSelection()} className="select-big">
            <option>Independent House/Villa</option>
            <option>Gated Community Villa</option>
        </select>
        </div>
        <div className="select-flex-row">
        <div className="select-flex"> 
        <h4>BHK Type</h4>
        <select value={""} onChange={()=>onBHKTypeSelection()} className="select-big">
            <option>1RK</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>4 BHK</option>
            <option>4+ BHK</option>
        </select>
        </div>
        <div className="select-flex"> 
        <h4>Floor</h4>
        <select value={""} onChange={()=>onBHKTypeSelection()} className="select-small">
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>4 BHK</option>
            <option>4+ BHK</option>
        </select>
        </div>
        <div className="select-flex"> 
        <h4>Total Floor</h4>
        <select value={""} onChange={()=>onBHKTypeSelection()} className="select-small">
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>4 BHK</option>
            <option>4+ BHK</option>
        </select>
        </div>
        </div>
        <div className="select-flex-row">
        <div className="select-flex"> 
        <h4>Property Age</h4>
        <select value={""} onChange={()=>onBHKTypeSelection()} className="select-big">
            <option>Less than a year</option>
            <option>1 to 3 year</option>
            <option>3 to 5 year</option>
            <option>5 to 10 year</option>
            <option>More than 10 year</option>
        </select>
        </div>
        <div className="select-flex"> 
        <h4>Facing</h4>
        <select value={""} onChange={()=>onBHKTypeSelection()} className="select-big">
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
            <option>North-East</option>
            <option>South-East</option>
            <option>North-Wast</option>
            <option>North-Wast</option>
            <option>Don't know</option>
        </select>
        </div>
        </div>
        <div className="select-flex"> 
        <h4>Built Up Area</h4>
        <select value={""} onChange={()=>onBHKTypeSelection()} className="select-big">
            <option>1 BHK</option>
            <option>2 BHK</option>
            <option>3 BHK</option>
            <option>4 BHK</option>
            <option>4+ BHK</option>
        </select>
        </div>
        </div>  
        </div>
    )
}