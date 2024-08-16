import "../schedule-page.css"
import ClockIcon from "../assets/clock.png"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedOwnerAvailability } from "../reducer/Actions"

export default function SchedulePage(){

    const { selectOwnerAvailability, selectOwnerAvailabilityTime } = useSelector((state)=>state.data)

    const dispatch = useDispatch()

    const setAvailibilityOnBtnClick = (value) =>{
          dispatch(setSelectedOwnerAvailability(value))
    }

    const setOwnerAvailibityTime = (value) =>{
        dispatch(setOwnerAvailibityTime(value))
    }

    return(
        <div className="pbody"> 
        <p>Availability</p>
        <div className="btn-default-holder">
        <button className="btn-default-big" value={selectOwnerAvailability}  onClick={()=>{setAvailibilityOnBtnClick("everyday")}}>Everyday <span className="small-text">Mon-Sun</span></button>
        <button className="btn-default-big" value={selectOwnerAvailability}  onClick={()=>{setAvailibilityOnBtnClick("weekday")}}>Weekday <span className="small-text">Mon-Fri</span></button>
        <button className="btn-default-big" value={selectOwnerAvailability}  onClick={()=>{setAvailibilityOnBtnClick("weekend")}} >Weekend <span className="small-text">Sat,Sun</span></button>
        </div>
        <p>Select Time Schedule</p>
        <div className="btn-default-holder">
        <button className="btn-default-big-2"><span><img src={ClockIcon} alt="clock-icon" className="small-icon"/></span> <span className="small-text">Start Time</span></button>
        <button className="btn-default-big-2"><span><img src={ClockIcon} alt="clock-icon" className="small-icon"/></span><span className="small-text">End Time</span></button>
        </div>
        <label>
        <input type="checkbox" ></input>
        Available All Day
        </label>
        </div>
    )
}