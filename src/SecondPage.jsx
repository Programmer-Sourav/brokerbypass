import "./property-listing.css"

import PropertyListItem from "./CardComponents/PropertyListItem";
import NavigationLeft from "./NavigationLeft";
import PropertyListingPage from "./PropertyListingPage";
import SubHeader from "./SubHeader";
import NavigationBarExtended from "./NavigationBarExtended";

export default function SecondPage(){

    return(
     <div>
     <NavigationBarExtended/>   
     {/* <SubHeader/> */}
     <NavigationLeft/>
     <div className="conatiner-default-0">
     <PropertyListingPage/>
     <PropertyListItem/>
     </div>
     </div>
   
    )
}