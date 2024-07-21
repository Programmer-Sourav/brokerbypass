export default function CommercialDiv(){

    return(
        <div className="selectbar-default">
        <label>
        <input type="radio" value={""} checked={""} className="radiobtn" onChange={()=>{onRentChange()}}/>Rent </label>
        <label>
        <input type="radio" value={""} checked={""} className="radiobtn" onChange={()=>{onBuyChange()}}/> Buy</label>
       
      
        <select value = {""} onChange={()=>{onBHKTypeSelection()}} className="default-box">
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