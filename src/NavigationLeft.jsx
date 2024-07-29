import { useDispatch, useSelector } from "react-redux"
import "./navigationleft.css"
import { setPreferredTenets, setPropertyType, setSelectedBHKType, setSelectedFurnishing, setSelectedParking } from "./reducer/Actions"
export default function NavigationLeft(){

  const {selectedBHKType, selectedAvaiabilityType, preferredTenets, selectedPropertyType, selectedFurnishing, selectedParking} = useSelector((state)=>state.data)

  const dispatch = useDispatch()
 

  function onSelectBHKValue(data){
    dispatch(setSelectedBHKType(data))
  }

  function onRadioChange(selectedValue){
    dispatch(setPropertyStatus(selectedValue))
  }

  function onPreferredTenetsChange(selectedValue){
    dispatch(setPreferredTenets(selectedValue))
  }

  function onPropertyTypeChange(selectedValue){
    dispatch(setPropertyType(selectedValue))
  }

  function onFurnishingValueChange(selectedValue){
    dispatch(setSelectedFurnishing(selectedValue))
  }

  function onParkingValueChange(selectedValue){
    dispatch(setSelectedParking(selectedValue))
  }

    return(
        <div className="navigation-default">
         <p className="default-bold-text">BHK Type</p>   
         <div className="default-flex-col">
          <button className="default-button-select" value="1 RK" onClick={(e)=>onSelectBHKValue(e.target.value)}>1 RK</button>
          <button className="default-button-select" value="1 BHK" onClick={(e)=>onSelectBHKValue(e.target.value)}>1 BHK</button>
          <button className="default-button-select" value="2 BHK" onClick={(e)=>onSelectBHKValue(e.target.value)}>2 BHK</button>
          <button className="default-button-select" value="3 BHK" onClick={(e)=>onSelectBHKValue(e.target.value)}>3 BHK</button>
          <button className="default-button-select" value="4 BHK" onClick={(e)=>onSelectBHKValue(e.target.value)}>4 BHK</button>
          <button className="default-button-select" value="4+ BHK" onClick={(e)=>onSelectBHKValue(e.target.value)}>4+ BHK</button>
         </div>
         <div className="default-nav-col">
          <p className="default-bold-text">Rent Range: ₹ 0 to ₹ 5 Lacs</p>
         </div>
         
         <p className="default-bold-text">Availaibility</p>   
         <div className="default-flex-col">
            <label>
            <input type="radio" checked={selectedAvaiabilityType==="Immediate"} onChange={()=>{onRadioChange()}}/> Immediate
            </label>
            <label>
            <input type="radio" checked={selectedAvaiabilityType==="Within 15 days"} onChange={()=>{onRadioChange()}}/> Within 15 days
            </label>
            <label>
            <input type="radio" checked={selectedAvaiabilityType==="Within 30 days"} onChange={()=>{onRadioChange()}}/> Within 30 days
            </label>
            <label>
            <input type="radio" checked={selectedAvaiabilityType==="After 30 days"} onChange={()=>{onRadioChange()}}/> After 30 days
            </label>
          </div>
          <p className="default-bold-text">Preferred Tenants</p>
          <div className="default-flex-col">
            <label>
            <input type="checkbox"  checked={preferredTenets.includes("Family")} onChange={()=>{onPreferredTenetsChange()}}/> Family
            </label>
            <label>
            <input type="checkbox"  checked={preferredTenets.includes("Company")} onChange={()=>{onPreferredTenetsChange()}}/> Company
            </label>
            <label>
            <input type="checkbox"  checked={preferredTenets.includes("Bachelor Male")} onChange={()=>{onPreferredTenetsChange()}}/> Bachelor Male
            </label>
            <label>
            <input type="checkbox"   checked={preferredTenets.includes("Bachelor Female")} onChange={()=>{onPreferredTenetsChange()}}/> Bachelor Female
            </label>
          </div>
          <p className="default-bold-text">Property Type</p>
          <div className="default-flex-col">
            <label>
            <input type="checkbox"  checked={selectedPropertyType.includes("Apartment")} onChange={()=>{onPropertyTypeChange()}}/> Apartment
            </label>
            <label>
            <input type="checkbox"  checked={selectedPropertyType.includes("Independent House/Villa")} onChange={()=>{onPropertyTypeChange()}}/> Independent House/Villa
            </label>
            <label>
            <input type="checkbox"  checked={selectedPropertyType.includes("Gated Community Villa")} onChange={()=>{onPropertyTypeChange()}}/> Gated Community Villa
            </label>
          </div>
          <p className="default-bold-text">Furnishing</p>
          <div className="default-flex-col">
            <label>
            <input type="checkbox" checked={selectedFurnishing.includes("Full")} onChange={()=>{onFurnishingValueChange()}}/> Full
            </label>
            <label>
            <input type="checkbox" checked={selectedFurnishing.includes("Semi")} onChange={()=>{onFurnishingValueChange()}}/> Semi
            </label>
            <label>
            <input type="checkbox" checked={selectedFurnishing.includes("None")} onChange={()=>{onFurnishingValueChange()}}/> None
            </label>
          </div>
          <p className="default-bold-text">Parking</p>
          <div className="default-flex-col">
            <label>
            <input type="checkbox"  checked={selectedParking.includes("2 Wheeler")} onChange={()=>{onParkingValueChange()}}/> 2 Wheeler
            </label>
            <label>
            <input type="checkbox"  checked={selectedParking.includes("4 Wheeler")} onChange={()=>{onParkingValueChange()}}/> 4 Wheeler
            </label>
            <label>
            <input type="checkbox"  checked={selectedParking.includes("2 Wheeler")} onChange={()=>{onParkingValueChange()}}/> Show only lease properties
            </label>
          </div>
       
        </div>
    )
}