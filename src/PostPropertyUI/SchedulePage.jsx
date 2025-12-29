import "../schedule-page.css"
import ClockIcon from "../assets/clock.png"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedOwnerAvailability } from "../reducer/Actions"
import { useEffect, useRef, useState } from "react"
import TimePickerComponent from "./TimePickerComponent"
import PopUp from "./TimePickerPopUp"
import EndTimePickerPopup from "./EndTimePickerPopup"
import CustomTimePicker from "./CustomTimePicker"

export default function SchedulePage(){

    const { selectOwnerAvailability, selectOwnerAvailabilityTime } = useSelector((state)=>state.data)
    const [beginTime, setBeiningTime] = useState(false);
    const [endTime, setEndingTime] = useState(false);

    const dispatch = useDispatch()


    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEnd, setIsOpenEnd] = useState(false);

    const popupRef = useRef(null);
    const popupRefEnd = useRef(null);
    const buttonRef = useRef(null);
    const buttonRefEnd = useRef(null);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

    const togglePopupEndTime = () =>{
        setIsOpenEnd(!isOpenEnd)
    }
  
    useEffect(() => {
  
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


    useEffect(()=>{
        const handleClickOutside = (event) =>{
            if(popupRefEnd.current && !popupRefEnd.current.contains(event.target) && !buttonRefEnd.current.contains(event.target)){
                setIsOpenEnd(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [])



    const setAvailibilityOnBtnClick = (value) =>{
          dispatch(setSelectedOwnerAvailability(value))
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
        <button className="btn-default-big-2" ref={buttonRef} onClick={togglePopup}><span><img src={ClockIcon} alt="clock-icon" className="small-icon"/></span> <span className="small-text">Start Time</span></button>
        <button className="btn-default-big-2" ref={buttonRefEnd} onClick={togglePopupEndTime}><span><img src={ClockIcon} alt="clock-icon" className="small-icon"/></span><span className="small-text">End Time</span></button>
        {isOpen && (
        <div ref={popupRef} className="popup">
          <CustomTimePicker prop ={"start"}/>
        </div>
      )}
        {
            isOpenEnd && (
                <div ref={popupRefEnd} className="popup-end">
                  <CustomTimePicker prop = {"end"} />
                </div>
              )
        }
        </div>
        <label>
        <input type="checkbox" ></input>
        Available All Day
        </label>
        </div>
    )
}