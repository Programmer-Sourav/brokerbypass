import "./navigationleft.css"
export default function NavigationLeft(){

    return(
        <div className="navigation-default">
         <p className="default-bold-text">BHK Type</p>   
         <div className="default-flex-col">
          <button className="default-button-select">1 RK</button>
          <button className="default-button-select">1 BHK</button>
          <button className="default-button-select">2 BHK</button>
          <button className="default-button-select">3 BHK</button>
          <button className="default-button-select">4 BHK</button>
          <button className="default-button-select">4+ BHK</button>
         </div>
         <div className="default-nav-col">
          <p className="default-bold-text">Rent Range: ₹ 0 to ₹ 5 Lacs</p>
         </div>
         
         <p className="default-bold-text">Availaibility</p>   
         <div className="default-flex-col">
            <label>
            <input type="radio" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Immediate
            </label>
            <label>
            <input type="radio" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Within 15 days
            </label>
            <label>
            <input type="radio" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Within 30 days
            </label>
            <label>
            <input type="radio" value={""} checked={true} onChange={()=>{onRadioChange()}}/> After 30 days
            </label>
          </div>
          <p className="default-bold-text">Preferred Tenants</p>
          <div className="default-flex-col">
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Family
            </label>
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Company
            </label>
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Bachelor Male
            </label>
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Bachelor Female
            </label>
          </div>
          <p className="default-bold-text">Property Type</p>
          <div className="default-flex-col">
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Apartment
            </label>
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Independent House/Villa
            </label>
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Gated Community Villa
            </label>
          </div>
          <p className="default-bold-text">Furnishing</p>
          <div className="default-flex-col">
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Full
            </label>
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Semi
            </label>
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> None
            </label>
          </div>
          <p className="default-bold-text">Parking</p>
          <div className="default-flex-col">
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> 2 Wheeler
            </label>
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> 4 Wheeler
            </label>
            <label>
            <input type="checkbox" value={""} checked={true} onChange={()=>{onRadioChange()}}/> Show only lease properties
            </label>
          </div>
       
        </div>
    )
}