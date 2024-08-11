import "./property-details.css"
import NoBrokerLogo from "./assets/home.png";
import DummyPic from "./assets/dummypic.jpg"
import BigDummyPic from "./assets/dummy_property.png"
import BedroomPic from "./assets/bed.png"
import ApartmentPic from "./assets/apartment.png"
import BalconyPic from "./assets/balcony.png"
import BirthdayPic from "./assets/birthday.png"
import CarPic from "./assets/car.png"
import KeysPic from "./assets/keys.png"
import PersonPic from "./assets/person.png"
import CalendarPic from "./assets/calendar.png"
import QuickViewPropertyItem from "./CardComponents/QuickViewPropertyItem";
import Location from "./assets/location_icon.png"
import PropertyListMap from "./PropertyListMap";

export default function PropertyDetails({detailsProp}){


    return(
        <div>
        <div className="details-header"> 
        <div className="logo-container">
            <img src={NoBrokerLogo} alt="no broker logo"/>
        </div>
         <div className="title">
            <h3 className="title-height">{detailsProp && detailsProp.flatName}2 BHK Flat in KPR Residency For Rent In Btm Layout</h3>
            <p>{detailsProp && detailsProp.flatAddress} KAS Officers Colony, Stage 2, BTM Layout, Bangaluru, Karnataka 560068, India</p>
         </div>
            <div className="price">
                <h3 className="title-height">₹ {detailsProp && detailsProp.flatRent} 20,000/M+</h3>
                <p>Negotiable</p>
            </div>
             <div className="measurements">
                <h3 className="title-height">{detailsProp && detailsProp.flatMeasures} 600</h3>
                <p>Sq.Ft</p>
                </div> 
               <div className="deposit">
                 <h3 className="title-height">{detailsProp && detailsProp.depositAmt} ₹ 70,000</h3>
                 <p>Deposit</p>
                 </div>
        </div>
        <div className="details-container">
         <div className="details-container-image-slider">
         <img  src={DummyPic} height="512px" width="756px" title="image_slider"/>
         </div>   
         <div className="right-container-default">
         <div class="grid-container-2">
                <div class="grid-item-2">
                <span><img src={BedroomPic}  title="bed-room-pic" className="span-img-default"/></span>   
                <span className="grid-item-inneritem">
                <h3 className="property-grid-title">{detailsProp && detailsProp.bedroomCount}2 Bedroom</h3>
                <p className="propery-description-default">No. of Bedroom</p>
                </span> 
                 </div>
                 <div class="grid-item-2">
                 <span><img src={ApartmentPic} title="bed-room-pic" className="span-img-default"/></span> 
                 <span className="grid-item-inneritem">
                 <h3 className="property-grid-title">{detailsProp && detailsProp.propertyType}Apartment</h3>
                 <p className="propery-description-default">Property Type</p>
                 </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={PersonPic} title="bed-room-pic" className="span-img-default"/></span> 
                 <span className="grid-item-inneritem"> 
                 <h3 className="property-grid-title">{detailsProp && detailsProp.preferredTenets}</h3>
                 <p className="propery-description-default">Preferred Tenets</p>
                 </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={KeysPic} title="bed-room-pic" className="span-img-default"/></span> 
                 <span className="grid-item-inneritem">   
                 <h3 className="property-grid-title">{detailsProp && detailsProp.possessionFrom}</h3>
                 <p className="propery-description-default">Possession</p>
                 </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={CarPic} title="bed-room-pic" className="span-img-default"/></span>    
                 <span className="grid-item-inneritem"> 
                <h3 className="property-grid-title">{detailsProp && detailsProp.carParking}</h3>
                <p className="propery-description-default">Parking</p>
                </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={BirthdayPic} title="bed-room-pic" className="span-img-default"/></span> 
                 <span className="grid-item-inneritem"> 
                 <h3 className="property-grid-title">{detailsProp && detailsProp.buildingAge} Years</h3>
                 <p className="propery-description-default">Age of Building</p>
                 </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={BalconyPic} title="bed-room-pic" className="span-img-default"/></span> 
                 <span className="grid-item-inneritem"> 
                 <h3 className="property-grid-title">{detailsProp && detailsProp.countOfBalcony}1</h3>
                 <p className="propery-description-default">Balcony</p>
                 </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={CalendarPic} title="bed-room-pic" className="span-img-default"/></span>   
                 <span className="grid-item-inneritem"> 
                 <h3 className="property-grid-title">{detailsProp && detailsProp.datePosted}July 15, 2024</h3>
                 <p className="propery-description-default">Posted On</p>
                 </span>
                 </div>
               </div>
               <div className="details-btn-footer">
                <button className="btn-default2">Contact</button>
                <button className="btn-default2">Schedule Visit</button>
               </div>
               </div>
               </div>
               <div>
                <h2>Overview</h2>
                <div className="overview-default">
                <div className="grid-container-3">
                    <span className="grid-item-3">     
                    <span>Furnishng status</span><span className="span-default-0">{detailsProp && detailsProp.furnishingStatus}</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Facing</span><span className="span-default-0">{detailsProp && detailsProp.flatFacing}</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Water Supply</span><span className="span-default-0">{detailsProp && detailsProp.flatWaterSupply}</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Floor</span><span className="span-default-0">{detailsProp && detailsProp.floorNumber}3/{detailsProp && detailsProp.totalFloorNumber}5</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Bathroom</span><span className="span-default-0">{detailsProp && detailsProp.bathroomCount}2</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Non-Veg Allowed </span><span className="span-default-0">{detailsProp && detailsProp.nonVegAllowed}Yes</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Gated Security</span><span className="span-default-0">{detailsProp && detailsProp.securityType}Yes</span>
                    </span>
                    </div>
                    <div className="parent-default0">
                    <h3 className="header-default-0">Activity On This Property</h3>
                    <hr className="hr-default-0"/>
                    <span className="flexview-default">
                    <div className="background-default-0">
                        <h2 className="default-text-1">{detailsProp && detailsProp.uniqueViews}798</h2>
                        <p className="default-text-0">Unique Views</p>
                    </div>
                    <div className="background-default-0">
                        <h2 className="default-text-1">{detailsProp && detailsProp.shortlists}84</h2>
                        <p className="default-text-0">Shortlists</p>
                    </div>
                    <div className="background-default-0">
                        <h2 className="default-text-1">{detailsProp && detailsProp.contacted}76</h2>
                        <p className="default-text-0">Contacted</p>
                    </div>
                    </span>
                </div>
                </div>
                <div className="overview-default-2">
                <div className="overview-default-1">
                <div className="parent-default1">
                  <h3 className="header-default-1">Description</h3>
                  <p className="default-text-1">{detailsProp && detailsProp.propertyDescription}Looking for a two bedroom on rent? The spacious two bedroom flat for rent in BTM Layout for 20,000 is ideal for families & bachelors. The east facing home is on the 3rd floor & over 600 sqft. You get ample and dedicated parking facility for car with this home. If you need amenities such as security you will be happy to note that this home has this & more.</p>
                  <hr className="hr-default-0"/>
                  <button className="btn-default-1">Show More</button>
                </div>
                <div className="parent-default2">
                  <h3 className="header-default-1">Amenities</h3>
                  <p className="default-text-1">{detailsProp && detailsProp.propertyAmenities}Looking for a two bedroom on rent? The spacious two bedroom flat for rent in BTM Layout for 20,000 is ideal for families & bachelors. The east facing home is on the 3rd floor & over 600 sqft. You get ample and dedicated parking facility for car with this home. If you need amenities such as security you will be happy to note that this home has this & more.</p>
                  <hr className="hr-default-0"/>
                  <button className="btn-default-1">Show More</button>
                </div>
                </div>
               <div className="quickview-parent-default">
                <QuickViewPropertyItem/>
                </div>
                 </div>
                </div>
                <div>
                <div className="parent-default1">
                <h3 className="header-default-1">Neighbourhood</h3>
                <div className="overview-default-1">
                    <div className="overview-default-2">
                        <span><img src={Location} title="LocationIcon" className="span-img-default-2"/>Your Location-</span>
                        <input type="search" value={""} onChange={()=>{onChangeHandler()}} placeholder="Type in place to get direction" className="input-default-1"/>
                        <button className="btn-default-1">Get Directions</button>
                    </div>
                    <PropertyListMap/>
                </div>
              
                </div>
                </div>
               </div>
    )
}