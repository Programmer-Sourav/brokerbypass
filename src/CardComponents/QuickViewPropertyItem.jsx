import "./quickproperty.css"
import Home from "../assets/home.png"

export default function QuickViewPropertyItem(){

    return(
        <div>
        <div className="quick-overview-default"> 
        <img src={Home} alt="left-logo"/>
        <div className="top-default-0">
        <h4>2 BHK Flat for Rent in HSR Layout</h4>
        <p>standalone building, 3rd cross road, Rajiv Gandhi nagar</p>
        <p className="custom-para">Within a km</p>
        <footer>
            <span><p>Rent: </p>
                 <p>Rs. 20000</p> </span>
            <span>
                <p>Area: </p>
                <p>800 Sqft</p>
            </span>
        </footer>
        </div>
        </div>
        <div className="quick-overview-default"> 
        <img src={Home} alt="left-logo"/>
        <div className="top-default-0">
        <h4>2 BHK Flat for Rent in HSR Layout</h4>
        <p>standalone building, 3rd cross road, Rajiv Gandhi nagar</p>
        <p className="custom-para">Within a km</p>
        <footer>
            <span><p>Rent: </p>
                 <p>Rs. 20000</p> </span>
            <span>
                <p>Area: </p>
                <p>800 Sqft</p>
            </span>
        </footer>
        </div>
        </div>
        <div className="quick-overview-default"> 
        <img src={Home} alt="left-logo"/>
        <div className="top-default-0">
        <h4>2 BHK Flat for Rent in HSR Layout</h4>
        <p>standalone building, 3rd cross road, Rajiv Gandhi nagar</p>
        <p className="custom-para">Within a km</p>
        <footer>
            <span><p>Rent: </p>
                 <p>Rs. 20000</p> </span>
            <span>
                <p>Area: </p>
                <p>800 Sqft</p>
            </span>
        </footer>
        </div>
        </div>
        <button className="btn-default-rent">More 2BHK properties for rent in BTM Layout</button>
        </div>
    )
}