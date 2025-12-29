import "./propertylisting.css"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedSortingValue, sortValue } from "./reducer/Actions";
export default function PropertyListingPage(){

    const dispath = useDispatch();
    const { selectedSortingValue } = useSelector((state)=>state.data)
    
    const onSelectionChanged = (value) =>{
     dispath(setSelectedSortingValue(value))
     dispath(sortValue(value))
    }
    return(
        <div className="top-default-col">
        <div className="top-default">
        <div className="top-details">
            <span>Home/Bangalore/Stage2</span>
            </div>
            <div className="top-details">
               <span className="text-default-center">Sort By:</span>  
               <select value={selectedSortingValue} onChange={(e)=>{onSelectionChanged(e.target.value)}} className="select-default-bg">
                <option value="rating">By Rating</option>
                <option value="newest">Posted On (Newest first)</option>
                <option value ="oldest">Posted On (Oldest First)</option>
                <option value="lth">Rent (Low To High)</option>
                <option value="htl">Rent (High To Low)</option>
                <option value="earliest">Available From (Earliest First)</option>
                <option value="oldest">Available From (Oldest First)</option>
               </select>
        </div>
        </div>
        <p className="default-text">{202}-Apartments, Flats for Rent in Stage 2, Bangalore, Karnataka Without Brokerage |</p>
        </div>    
        )
}