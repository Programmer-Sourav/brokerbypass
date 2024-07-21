import "./propertyitem.css"
import  HomePic from "../assets/dummypic.jpg"
import Wish from "../assets/wishlist.png"
import Report from "../assets/flag.png"

export default function PropertyListItem(){


    return(
        <div className="card-parent">
            <p className="property-title-default">2 BHK House For Rent In J.P. Nagar</p>
            <p className="propery-description-default"><span>Independent House, Bannerghatta main road near the Thai Spa(Vega City Mall) </span> <span className="propery-description-default">Explore nearby</span></p>
            <div className="room-details-price">
                <div className="room-details-inner-component">
                    <p>₹15,000</p>
                    <p className="propery-description-default">Rent (negotiable)</p>
                </div>
                <div className="room-details-inner-component">
                <p>₹80,000</p>
                <p className="propery-description-default">Deposit</p>
                </div>
                <div className="room-details-inner-component">
                <p>600 sqft</p>
                <p className="propery-description-default">Builtup</p>
                </div>
            </div>
                <div className="room-details-overall">
                <img src={HomePic}  alt="homepic" className="img-cotainer"/>
                <div className="room-details-container">
                <div class="grid-container">
                 <div class="grid-item">
                    <p className="property-grid-title">Semi Furnished</p>
                    <p className="propery-description-default">Furnishing</p>
                 </div>
                 <div class="grid-item">
                 <p className="property-grid-title">2 BHK</p>
                 <p className="propery-description-default">Apartment Type</p>
                 </div>
                 <div class="grid-item">
                 <p className="property-grid-title">All</p>
                 <p className="propery-description-default">Preferred Tenets</p>
                 </div>
                 <div class="grid-item">
                 <p className="property-grid-title">Ready To Move</p>
                 <p className="propery-description-default">Available From</p>
                 </div>
               </div>
               <div className="footer-row">
               <button className="button-default">Get Owner Details</button>
               
                <img src={Wish} alt="wishlist" className="icon-box"/>
              
               <img src={Report} alt="report" className="icon-box"/>
               
               </div>
               </div>
                </div>   
           </div>
    )
}