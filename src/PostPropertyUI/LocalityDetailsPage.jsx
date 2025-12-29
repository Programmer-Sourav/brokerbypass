import "../locality_details_post_property.css"
import LocationBigICon from "../assets/location_big.png"
import MapsComponent from "./MapComponent"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedCity } from "../reducer/Actions"
import { useState } from "react"

export default function LocationDetailsPage(){
  
    const { selectedCity } = useSelector((state)=>state.data)
    const dispatch = useDispatch()

    const [locality, setLocality]  = useState("")
    const [landmark, setLandMark] = useState("")


    const onCitySelection = (value) =>{
       dispatch(setSelectedCity(value))
    }

    return(
        <div className="right-nav">
        <div className="header-height">
        </div>  
        <div className="select-flex-row"> 
        <div className="select-flex"> 
        <h4 className="select-h4-default">City*</h4>
        <select value={selectedCity} onChange={(e)=>onCitySelection(e.target.value)} className="select-big">
            <option>Bangalore</option>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Hyderabad</option>
        </select>
        </div>
        <div className="select-flex"> 
        <h4 className="select-h4-default">Locality*</h4>
        <input type="text" value ={locality} className="select-big" onChange={(e)=>{setLocality(e.target.value)}} placeholder="Enter location/society name"/>
        </div>
        </div>
        <div className="select-flex"> 
        <h4 className="select-h4-default">Landmark/Street*</h4>
        <input type="text" value ={landmark}  onChange={(e)=>{setLandMark(e.target.value)}} className="select-big" placeholder="e.g. xyz street"/>
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