export default function BuyDiv(){
    return(
        <div className="selectbar-default">
        <label>
        <input type="radio" value={""} checked={""} className="radiobtn"  onChange={()=>onSelectBHKType()}/>Full House </label>
        <label>
        <input type="radio" value={""} checked={""} className="radiobtn"  onChange={()=>onSelectBHKType()}/> Pg/Hostel</label>
        <label>
        <input type="radio" value={""} checked={""} className="radiobtn"  onChange={()=>onSelectBHKType()}/> Flatmates</label>
        <select value = {""} onChange={()=>{onBHKTypeSelection()}} className="default-box">
            <option>BHK Type</option>
            <option>1 RK</option>
            <option>1 BHK</option>
            <option>2 BHK</option>
        </select>
        <select value = {""} onChange={()=>{onPropertySelection()}} className="default-box">
            <option>Availability</option>
            <option>Within 15 days</option>
            <option>Within 30 days</option>
            <option>After 30 days</option>
        </select>
     </div> 
    )
}