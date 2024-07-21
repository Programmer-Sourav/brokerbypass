export default function RentDiv(){


    return(
        <div className="selectbar-default">
            <label>
            <input type="radio" value={""} checked={""} className="radiobtn" onChange={()=>{onSelectHouse()}}/>Full House </label>
            <label>
            <input type="radio" value={""} checked={""} className="radiobtn" onChange={()=>{onSelectLand()}}/> Land/Plot</label>
            <select value = {""} onChange={()=>{onBHKTypeSelection()}} className="default-box">
                <option>BHK Type</option>
                <option>1 RK</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
            </select>
            <select value = {""} onChange={()=>{onPropertySelection()}} className="default-box">
                <option>Property status</option>
                <option>Under Construction</option>
                <option>Ready</option>
            </select>
            <div className="default-box">
            <label>
            <input type="checkbox" checked={""} onChange={()=>{onNewBuilderProjectsSelection()}}/>
            New Builder Projects
            </label>
            </div>
         </div> 
    )
}