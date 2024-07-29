import { useDispatch, useSelector } from "react-redux"
import { setPropertyStatus, setSelectedBHKType, setSelectedPlotType } from "./reducer/Actions";

export default function RentDiv(){
 
     const {selectedPlotType, selectedBHKType, newBuilderProjectsSelected} = useSelector((state)=>state.data)
     const dispatch = useDispatch();


     function onSelectPlot(selectedValue){
        dispatch(setSelectedPlotType(selectedValue))
     }


     function onBHKTypeSelection(selectedValue){
        dispatch(setSelectedBHKType(selectedValue))
     }

     function onNewBuilderProjectsSelection(selectedValue){
       // dispatch()
     }

     function onPropertySelection(selectedValue) {
        dispatch(setPropertyStatus(selectedValue))
     }
    return(
        <div className="selectbar-default">
            <label>
            <input type="radio" value="full-house" checked={selectedPlotType==="full-house"} className="radiobtn" onChange={(e)=>{onSelectPlot(e.target.value)}}/>Full House </label>
            <label>
            <input type="radio" value="Land-and-plot" checked={selectedPlotType==="Land-and-plot"} className="radiobtn" onChange={(e)=>{onSelectPlot(e.target.value)}}/> Land/Plot</label>
            <select value = {selectedBHKType} onChange={(e)=>{onBHKTypeSelection(e.target.value)}} className="default-box">
                <option>BHK Type</option>
                <option>1 RK</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
            </select>
            <select value = {selectedBHKType} onChange={(e)=>{onPropertySelection(e.target.value)}} className="default-box">
                <option>Property status</option>
                <option>Under Construction</option>
                <option>Ready</option>
            </select>
            <div className="default-box">
            <label>
            <input type="checkbox" checked={true} onChange={()=>{onNewBuilderProjectsSelection()}}/>
            New Builder Projects
            </label>
            </div>
         </div> 
    )
}