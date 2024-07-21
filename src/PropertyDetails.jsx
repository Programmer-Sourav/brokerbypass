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
                <h3 className="property-grid-title">2 Bedroom</h3>
                <p className="propery-description-default">No. of Bedroom</p>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={ApartmentPic} alt="bed-room-pic" className="span-img-default"/></span> 
                 <h3 className="property-grid-title">Apartment</h3>
                 <p className="propery-description-default">Property Type</p>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={PersonPic} alt="bed-room-pic" className="span-img-default"/></span>    
                 <h3 className="property-grid-title">Anyone</h3>
                 <p className="propery-description-default">Preferred Tenets</p>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={KeysPic} alt="bed-room-pic" className="span-img-default"/></span>   
                 <h3 className="property-grid-title">Aug 1, 2024</h3>
                 <p className="propery-description-default">Possession</p>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={CarPic} alt="bed-room-pic" className="span-img-default"/></span>    
                <h3 className="property-grid-title">Car</h3>
                <p className="propery-description-default">Parking</p>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={BirthdayPic} alt="bed-room-pic" className="span-img-default"/></span> 
                 <h3 className="property-grid-title">1-3 Years</h3>
                 <p className="propery-description-default">Age of Building</p>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={BalconyPic} alt="bed-room-pic" className="span-img-default"/></span> 
                 <h3 className="property-grid-title">1</h3>
                 <p className="propery-description-default">Balcony</p>
                 </div>
                 <div class="grid-item-2">
                 <span><img src={CalendarPic} alt="bed-room-pic" className="span-img-default"/></span>   
                 <h3 className="property-grid-title">July 15, 2024</h3>
                 <p className="propery-description-default">Posted</p>
                 </div>
               </div>
               <div className="details-btn-footer">
                <button className="btn-default2">Contact</button>
                <button className="btn-default2">Schedule Visit</button>
               </div>
               </div>
               </div>
        </div>
    )
}