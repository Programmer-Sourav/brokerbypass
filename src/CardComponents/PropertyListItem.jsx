import "./propertyitem.css"
import  HomePic from "../assets/dummypic.jpg"
import Wish from "../assets/wishlist.png"
import Report from "../assets/flag.png"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setOwnerDetails } from "../reducer/Actions"
import { useEffect } from "react"

export default function PropertyListItem(){
 
    const { id } = useParams();
    const data = useSelector((state)=>state.data)

    //get value -propertiesToBuy, propertiesToRent, commercialProperties
    function findTheDetailsOfTheProperty(){
       return data.propertiesToBuy.find((property)=>property.id===id)
    }

    const foundDetails = findTheDetailsOfTheProperty()

    const dispatch = useDispatch()
    const { ownerDetails }  = useSelector((state)=>state.data)

    //will be getting it from the api call
    function getOwnerDetails(){
        dispatch(setOwnerDetails())
    }

    useEffect(()=>{getOwnerDetails()}, [])
   

    return(
        <div className="card-parent">
            <p className="property-title-default">{foundDetails.flatName}2 BHK House For Rent In J.P. Nagar</p>
            <p className="propery-description-default"><span>{foundDetails.flatAddress}Independent House, Bannerghatta main road near the Thai Spa(Vega City Mall) </span> <span className="propery-description-default">Explore nearby</span></p>
            <div className="room-details-price">
                <div className="room-details-inner-component">
                    <p>{foundDetails.flatRent}₹15,000</p>
                    <p className="propery-description-default">Rent (negotiable)</p>
                </div>
                <div className="room-details-inner-component">
                <p>{foundDetails.flatDeposit}₹80,000</p>
                <p className="propery-description-default">Deposit</p>
                </div>
                <div className="room-details-inner-component">
                <p>{foundDetails.flatMeasures}600 sqft</p>
                <p className="propery-description-default">Builtup</p>
                </div>
            </div>
                <div className="room-details-overall">
                <img src={HomePic}  alt="homepic" className="img-cotainer"/>
                <div className="room-details-container">
                <div class="grid-container">
                 <div class="grid-item">
                    <p className="property-grid-title">{foundDetails.furnishedStatus}Semi Furnished</p>
                    <p className="propery-description-default">Furnishing</p>
                 </div>
                 <div class="grid-item">
                 <p className="property-grid-title">{foundDetails.apartmentType}2 BHK</p>
                 <p className="propery-description-default">Apartment Type</p>
                 </div>
                 <div class="grid-item">
                 <p className="property-grid-title">{foundDetails.preferredTenets}All</p>
                 <p className="propery-description-default">Preferred Tenets</p>
                 </div>
                 <div class="grid-item">
                 <p className="property-grid-title">{foundDetails.availableFrom}Ready To Move</p>
                 <p className="propery-description-default">Available From</p>
                 </div>
               </div>
               <div className="footer-row">
               <button className="button-default" onClick={()=>{getOwnerDetails}}>Get Owner Details</button>
               
                <img src={Wish} alt="wishlist" className="icon-box"/>
              
               <img src={Report} alt="report" className="icon-box"/>
               
               </div>
               </div>
                </div>   
           </div>
    )
}