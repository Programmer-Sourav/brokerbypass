import "../locality_details.css"
import LocationBigICon from "../assets/location_big.png"
import MapsComponent from "./MapComponent"

export default function LocationDetailsPage(){


    return(
        <div className="right-nav">
        <div className="header-height">
        </div>  
        <div className="select-flex-row"> 
        <div className="select-flex"> 
        <h4>City*</h4>
        <select value={""} onChange={()=>onBHKTypeSelection()} className="select-big">
            <option>Bangalore</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Hyderabad</option>
        </select>
        </div>
        <div className="select-flex"> 
        <h4>Locality*</h4>
        <input type="text" value ={""} className="select-big" placeholder="Enter location/society name"/>
        </div>
        </div>
        <div className="select-flex"> 
        <h4>Landmark/Street*</h4>
        <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
        </div>
        <div>
        <span className="img-design"><img src={LocationBigICon} alt="location-marker" width={40} height={40} /></span>
        <span className="header-mark">Mark Locality on Map</span>
        </div>
        <p className="default-margin-4">Set property location by using search box and move the map</p>
        <MapsComponent/>
        </div>
    )
}