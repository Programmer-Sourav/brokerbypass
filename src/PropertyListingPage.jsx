import "./propertylisting.css"
export default function PropertyListingPage(){


    return(
        <div className="top-default-col">
        <div className="top-default">
        <div className="top-details">
            <span>Home/Bangalore/Stage2</span>
            </div>
            <div className="top-details">
               <span className="text-default-center">Sort By:</span>  
               <select value={""} onChange={()=>{onSelectionChanged()}} className="select-default">
                <option>By Rating</option>
                <option>Posted On (Newest first)</option>
                <option>Posted On (Oldest First)</option>
                <option>Rent (Low To High)</option>
                <option>Rent (High To Low)</option>
                <option>Available From (Earliest First)</option>
                <option>Available From (Oldest First)</option>
               </select>
        </div>
        </div>
        <p className="default-text">{202}-Apartments, Flats for Rent in Stage 2, Bangalore, Karnataka Without Brokerage |</p>
        </div>    
        )
}