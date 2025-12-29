import { useDispatch, useSelector } from "react-redux"
import { setPropertyStatus, setSelectedBHKType, setSelectedPlotType } from "./reducer/Actions";

export default function BuyDiv(){

    const {selectedPlotType, selectedBHKType, selectedAvaiabilityType} = useSelector((state)=>state.data)
    const dispatch = useDispatch();

    const onSelectPlot = (selectedPlotValue) =>{
         dispatch(setSelectedPlotType(selectedPlotValue))
    }

    const onBHKTypeSelection = (selectedBhkType) =>{
        dispatch(setSelectedBHKType(selectedBhkType))
    }

    const onPropertySelection = (selectedAvaiabilityStatus) =>{
        dispatch(setPropertyStatus(selectedAvaiabilityStatus))
    }

    return(
        <div className="selectbar-default">
        <label>
        <input type="radio" value="full-house" checked={selectedPlotType==="full-house"} className="radiobtn"  onChange={(e)=>onSelectPlot(e.target.value)}/>Full House </label>
        <label>
        <input type="radio" value="Land-and-plot" checked={selectedPlotType==="pg-and-hostel"} className="radiobtn"  onChange={(e)=>onSelectPlot(e.target.value)}/> Pg/Hostel</label>
        <label>
        <input type="radio" value="flatmates" checked={selectedPlotType==="flatmates"} className="radiobtn"  onChange={(e)=>onSelectPlot(e.target.value)}/> Flatmates</label>
        <select value = {selectedBHKType} onChange={(e)=>{onBHKTypeSelection(e.target.value)}} className="default-box">
            <option>BHK Type</option>
            <option>1 RK</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
        </select>
        <select value = {selectedAvaiabilityType} onChange={(e)=>{onPropertySelection(e.target.value)}} className="default-box">
            <option>Availability</option>
            <option>Within 15 days</option>
            <option>Within 30 days</option>
            <option>After 30 days</option>
        </select>
     </div> 
    )
}