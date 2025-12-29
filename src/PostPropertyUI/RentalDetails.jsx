import "../rental-details.css"
import { useDispatch, useSelector } from "react-redux"
import { setAvailableFrom, setExpectedDeposit, setExpectedRent, setMaintenanceAmount, setMonthlyMaintenance, setPreferredTenets, setPropertyChange, setRentDetailsDescription, setRentNegotiableFlag, setSelectedFurnishing, setSelectedParking } from "../reducer/Actions";
import CalendarIcon from "../assets/calendar.png"

export default function RentalDetails(){

    const { propertyAvailability, expectedRent, expectedDeposit, 
        monthlyMaintenance, maintenanceAmount, availableFrom,
         rentDetailsDescription, rentNegotiable, preferredTenets, 
         selectedFurnishing, selectedParking } = useSelector((state)=>state.data)
    const dispatch = useDispatch();

    const onPropertyChange = (valueItem) =>{
      dispatch(setPropertyChange(valueItem))
    }

    const onExpectedRentChange = (value) =>{
        dispatch(setExpectedRent(value))
    }

    const onExpectedDepositChange = (value) =>{
        dispatch(setExpectedDeposit(value))
    }

    const onMonthlyMaintenanceChange = (value) =>{
        dispatch(setMonthlyMaintenance(value))
    }
    
    const onMaintenanceAmountChange = (value) =>{
        dispatch(setMaintenanceAmount(value))
    }

    const onAvailableFromChange = (value) =>{
        dispatch(setAvailableFrom(value))
    }


    const onRentDetailsDescription = (value) =>{
        dispatch(setRentDetailsDescription(value))
    }

    const onSelectFurnishingValueChange = (value) =>{
        dispatch(setSelectedFurnishing(value))
    }

    const onParkingValueChange = (value) =>{
       dispatch(setSelectedParking(value))
    }

    const onTenetsPreferenceChange = (value) =>{
        dispatch(setPreferredTenets(value))
    }

    const onChangeCheckbox = (value) =>{
        dispatch(setRentNegotiableFlag(value))
    }
    return(
        <div className="rbody"> 
        <div className="header-prompt">
        <h3>Provide rental details about your property</h3>
        </div>
        <p>Property available for</p>
        <label> 
        <input type="radio" checked={propertyAvailability==="rent"} onChange={()=>{onPropertyChange("rent")}} />
        Only rent
        </label>
        <label> 
        <input type="radio" checked={propertyAvailability==="lease"} onChange={()=>{onPropertyChange("lease")}} />
        Only lease
        </label>

        <div className="default-flex-row">
        <div className="default-flex-column"> 
        <p className="p-design">Expected Rent*</p>
        <input type="text" className="input-text" value={expectedRent} onChange={(e)=>{onExpectedRentChange(e.target.value)}} />
        <span className="default-text-style">$ 10k</span>
        </div>
        <div className="default-flex-column"> 
        <p className="p-design">Expected Deposit*</p>
        <input type="text" className="input-text" value={expectedDeposit} onChange={(e)=>{onExpectedDepositChange(e.target.value)}}/>
        <span className="default-text-style">$ 3 Lacs</span>
        </div>
        </div>   
        <label>
        <input type="checkbox" checked={!rentNegotiable} onChange={()=>{onChangeCheckbox(rentNegotiable)}}/>
        Rent negotiable
        </label>
        <div className="default-flex-row">
        <div className="default-flex-column"> 
        <p className="p-design">Monthly Maintainance*</p>
        <select value={monthlyMaintenance} className="input-text" onChange={(e)=>{onMonthlyMaintenanceChange(e.target.value)}}>
        <option>Maintenance Included</option>
        <option>Maintenance Extra</option>
        </select>
        </div>
        {/*This will be dynamically shown*/}
        <div className="default-flex-column"> 
        <p className="p-design">Maintenance Amount*</p>
        <div className="default-input-flex">
        <span className="span-default-style">$</span>    
        <input type="text" className="inner-input-text" placeholder="Enter Amount" value={maintenanceAmount} onChange={(e)=>{onMaintenanceAmountChange(e.target.value)}}/>
        <p className="p-design-default">/ Month</p>
        </div>
        </div>
        </div>
        <p className="p-div-default">Available From*</p>
        <div className="default-input-flex">
        <span className="span-default-style">$</span>    
        <input type="text" className="inner-input-text" placeholder="08/09/2024"></input>
        <span><img src={CalendarIcon} alt="calendar" className="icon-style"/></span>
        </div>
        <p>Preferred Tenets*</p>
        <div className="default-flex-row-1">
        <label>
            <input type ="checkbox" checked={preferredTenets.includes("Anyone")} onChange={()=>{onTenetsPreferenceChange("Anyone")}}/>
            Anyone
        </label>
        <label>
            <input type ="checkbox" checked={preferredTenets.includes("Family")} onChange={()=>{onTenetsPreferenceChange("Family")}}/>
            Family
        </label>
        <label>
            <input type ="checkbox" checked={preferredTenets.includes("Bachelor Female")} onChange={()=>{onTenetsPreferenceChange("Bachelor Female")}}/>
            Bachelor Female
        </label>
        <label>
            <input type ="checkbox" checked={preferredTenets.includes("Bachelor Male")} onChange={()=>{onTenetsPreferenceChange("Bachelor Male")}}/>
            Bachelor Male
        </label>
        <label>
            <input type ="checkbox" checked={preferredTenets.includes("Company")} onChange={()=>{onTenetsPreferenceChange("Company")}}/>
            Company
        </label>
        </div>
        <div className="default-flex-row">
        <div className="default-flex-column"> 
        <p className="p-design">Furnishing*</p>
        <select value={selectedFurnishing} onChange={(e)=>{onSelectFurnishingValueChange(e.target.value)}} className="input-text">
            <option>Fully Furnished</option>
            <option>Semi Furnished</option>
            <option>Unfurnished</option>
        </select>
        </div>
        <div className="default-flex-column"> 
        <p className="p-design">Parking*</p>
        <select value={selectedParking} onChange={(e)=>{onParkingValueChange(e.target.value)}} className="input-text">
            <option>Car</option>
            <option>Bike</option>
            <option>Both</option>
            <option>None</option>
        </select>
        </div>
        </div> 
        <p className="p-div-default">Description</p>
        <input type="text" onChange={(e)=>{onRentDetailsDescription(e.target.value)}} value={rentDetailsDescription} className="default-input-1"/>
        </div>
    )
}