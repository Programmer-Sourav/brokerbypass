import "./property-details.css"
import NoBrokerLogo from "./assets/home.png";
import DummyPic from "./assets/dummypic.jpg"
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

export default function PropertyDetails(){


    return(
        <div>
        <div className="details-header"> 
        <div className="logo-container">
            <img src={NoBrokerLogo} alt="no broker logo"/>
        </div>
         <div className="title">
            <h3 className="title-height">2 BHK Flat in KPR Residency For Rent In Btm Layout</h3>
            <p>KAS Officers Colony, Stage 2, BTM Layout, Bangaluru, Karnataka 560068, India</p>
         </div>
            <div className="price">
                <h3 className="title-height">₹ 20,000/M+</h3>
                <p>Negotiable</p>
            </div>
             <div className="measurements">
                <h3 className="title-height">600</h3>
                <p>Sq.Ft</p>
                </div> 
               <div className="deposit">
                 <h3 className="title-height">₹ 70,000</h3>
                 <p>Deposit</p>
                 </div>
        </div>
        <div className="details-container">
         <div className="details-container-image-slider">
         <img src={DummyPic} alt="image_slider"/>
         </div>   
         <div className="right-container-default">
         <div class="grid-container-2">
                <div class="grid-item-2">
                <span><img src={BedroomPic} alt="bed-room-pic" className="span-img-default"/></span>   
                <span className="grid-item-inneritem">
                <h3 className="property-grid-title">2 Bedroom</h3>
                <p className="propery-description-default">No. of Bedroom</p>
                </span> 
                 </div>
                 <div class="grid-item-2">
                 <span><img src={ApartmentPic} alt="bed-room-pic" className="span-img-default"/></span> 
                 <span className="grid-item-inneritem">
                 <h3 className="property-grid-title">Apartment</h3>
                 <p className="propery-description-default">Property Type</p>
                 </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={PersonPic} alt="bed-room-pic" className="span-img-default"/></span> 
                 <span className="grid-item-inneritem"> 
                 <h3 className="property-grid-title">Anyone</h3>
                 <p className="propery-description-default">Preferred Tenets</p>
                 </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={KeysPic} alt="bed-room-pic" className="span-img-default"/></span> 
                 <span className="grid-item-inneritem">   
                 <h3 className="property-grid-title">Aug 1, 2024</h3>
                 <p className="propery-description-default">Possession</p>
                 </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={CarPic} alt="bed-room-pic" className="span-img-default"/></span>    
                 <span className="grid-item-inneritem"> 
                <h3 className="property-grid-title">Car</h3>
                <p className="propery-description-default">Parking</p>
                </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={BirthdayPic} alt="bed-room-pic" className="span-img-default"/></span> 
                 <span className="grid-item-inneritem"> 
                 <h3 className="property-grid-title">1-3 Years</h3>
                 <p className="propery-description-default">Age of Building</p>
                 </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={BalconyPic} alt="bed-room-pic" className="span-img-default"/></span> 
                 <span className="grid-item-inneritem"> 
                 <h3 className="property-grid-title">1</h3>
                 <p className="propery-description-default">Balcony</p>
                 </span>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={CalendarPic} alt="bed-room-pic" className="span-img-default"/></span>   
                 <span className="grid-item-inneritem"> 
                 <h3 className="property-grid-title">July 15, 2024</h3>
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
                    <span>Furnishng status</span><span className="span-default-0">Semi</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Facing</span><span className="span-default-0">East</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Water Supply</span><span className="span-default-0">Both</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Floor</span><span className="span-default-0">3/5</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Bathroom</span><span className="span-default-0">2</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Non-Veg Allowed </span><span className="span-default-0">Yes</span>
                    </span>
                    <span className="grid-item-3">   
                    <span>Gated Security</span><span className="span-default-0">Yes</span>
                    </span>
                    </div>
                    <div className="parent-default0">
                    <h3 className="header-default-0">Activity On This Property</h3>
                    <hr className="hr-default-0"/>
                    <span className="flexview-default">
                    <div className="background-default-0">
                        <h2 className="default-text-1">798</h2>
                        <p className="default-text-0">Unique Views</p>
                    </div>
                    <div className="background-default-0">
                        <h2 className="default-text-1">84</h2>
                        <p className="default-text-0">Shortlists</p>
                    </div>
                    <div className="background-default-0">
                        <h2 className="default-text-1">76</h2>
                        <p className="default-text-0">Contacted</p>
                    </div>
                    </span>
                </div>
                </div>
                <div className="overview-default-2">
                <div className="overview-default-1">
                <div className="parent-default1">
                  <h3 className="header-default-1">Description</h3>
                  <p className="default-text-1">Looking for a two bedroom on rent? The spacious two bedroom flat for rent in BTM Layout for 20,000 is ideal for families & bachelors. The east facing home is on the 3rd floor & over 600 sqft. You get ample and dedicated parking facility for car with this home. If you need amenities such as security you will be happy to note that this home has this & more.</p>
                  <hr className="hr-default-0"/>
                  <button className="btn-default-1">Show More</button>
                </div>
                <div className="parent-default2">
                  <h3 className="header-default-1">Amenities</h3>
                  <p className="default-text-1">Looking for a two bedroom on rent? The spacious two bedroom flat for rent in BTM Layout for 20,000 is ideal for families & bachelors. The east facing home is on the 3rd floor & over 600 sqft. You get ample and dedicated parking facility for car with this home. If you need amenities such as security you will be happy to note that this home has this & more.</p>
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
                        <span><img src={Location} alt="LocationIcon" className="span-img-default-2"/>Your Location-</span>
                        <input type="search" value={""} onChange={()=>{onChangeHandler()}} placeholder="Type in place to get direction" className="input-default-1"/>
                        <button className="btn-default-1">Get Directions</button>
                    </div>
                </div>
                </div>
                </div>
               </div>
    )
}