import { useDispatch, useSelector } from "react-redux"
import { setCommercialPropertyHoldingStatus, setSelectedBHKType } from "./reducer/Actions";

export default function CommercialDiv(){

    const {commercialPropHoldingStatus, selectedBHKType} = useSelector((state)=>state.data)

    const dispatch = useDispatch();


    const onBHKTypeSelection = (value) =>{
     dispatch(setSelectedBHKType(value))
    }

    const onHoldingStatusChange = (value) =>{
        dispatch(setCommercialPropertyHoldingStatus(value))
    }
    return(
        <div className="selectbar-default">
        <label>
        <input type="radio" value= "rent" checked={commercialPropHoldingStatus==="rent"} className="radiobtn" onChange={(e)=>{onHoldingStatusChange(e.target.value)}}/>Rent </label>
        <label>
        <input type="radio" value= "buy" checked={commercialPropHoldingStatus==="buy"} className="radiobtn" onChange={(e)=>{onHoldingStatusChange(e.target.value)}}/> Buy</label>
       
      
        <select value = {selectedBHKType} onChange={(e)=>{onBHKTypeSelection(e.target.value)}} className="default-box">
            <option>Property Type</option>
            <option>Office Space</option>
            <option>Co-working</option>
            <option>Restaurant/Cafe</option>
            <option>Shop</option>
            <option>Showroom</option>
        </select>
        </div>
    )
}