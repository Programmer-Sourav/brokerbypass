import { useDispatch, useSelector } from "react-redux"
import "./custom-time-picker.css"
import { useState } from "react"
import { setSelectedOwnerAvailabilityTime } from "../reducer/Actions";

export default function CustomTimePicker({prop}){

    console.log(123, prop);

    const [timeNow, setTimeNow] = useState("10:00")
    const [amPm, setAmPm] = useState("AM")
    const timeSet = ["06:00", "06:15", "06:30", "06:45", "07:00", 
       "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", "09:45",
       "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", 
        "12:00", "12:15", "12:30", "12:45", "01:00", "01:15", "01:30", "01:45", "02:00",
         "02:15", "02:30", "02:45", "03:00", "03:15", "03:30", "03:45", "04:00", "04:15", "04:30",
        "04:45", "05:00", "05:15","05:30", "05:45",  ]
    const [timeSelected, setTimeSelected] = useState("")    

    let { selectOwnerAvailibilityTime } = useSelector((state)=>state.data);

    const dispatch = useDispatch();    

    const timezone = 'Asia/Kolkata';


    const onSetAmPm = (e) =>{
      setAmPm(e.target.value)
    }

    const onBtnSelected = (timeSelected) =>{
        setTimeNow(timeSelected)
    }

    const convertToDate = (time, period) => {
        const [hours, minutes] = time.split(':').map(Number);
        let adjustedHours = period === 'PM' && hours !== 12 ? hours + 12 : hours;
        if (period === 'AM' && hours === 12) adjustedHours = 0;

        const date = new Date();
        date.setHours(adjustedHours);
        date.setMinutes(minutes);
        date.setSeconds(0);
        // Convert to UTC and then to the specified timezone
        const utcDate = zonedTimeToUtc(date, timezone);
        return utcToZonedTime(utcDate, timezone);
    };

    const isBefore = (time1, amPm1, time2, amPm2) => {
        const date1 = convertToDate(time1, amPm1);
        const date2 = convertToDate(time2, amPm2);
        return date1 < date2;
    };

    const isAfter = (time1, amPm1, time2, amPm2) => {
        const date1 = convertToDate(time1, amPm1);
        const date2 = convertToDate(time2, amPm2);
        return date1 > date2;
    };

    const handleCheckTimes = () => {
        const resultBefore = isBefore(timeNow, amPm, "11:00", "AM");
        const resultAfter = isAfter(timeNow, amPm, "09:00", "AM");
        console.log("Is before 11:00 AM:", resultBefore);
        console.log("Is after 09:00 AM:", resultAfter);
    };

    const onButtonClick = (value) =>{
        const timeConcat = timeNow+" "+amPm;
        switch(value){
            case "start":
                selectOwnerAvailibilityTime = {...selectOwnerAvailibilityTime, startTime : timeConcat}
                dispatch(setSelectedOwnerAvailabilityTime(selectOwnerAvailibilityTime));
                return selectOwnerAvailibilityTime;
            case "end":
                selectOwnerAvailibilityTime = {...selectOwnerAvailibilityTime, endTime : timeConcat }
                dispatch(setSelectedOwnerAvailabilityTime(selectOwnerAvailibilityTime));
                return selectOwnerAvailibilityTime;   
        }

    }

    

    return(
        <div className="default-custom-col">
        <div>  
        {<p className="custom-p">{timeNow} {amPm}</p>}   
        </div>  
        <div className="default-custom-tp">
        <div className="scrollable-container"> 
           {timeSet.map((timeItem, index) => (
            <div className="custom-tp" key={index}>
             <li className="custom-tp-row" onClick={()=>{onBtnSelected(timeItem)}}>{timeItem}</li>
             </div>
            ))}
        </div>
        <select onChange={onSetAmPm} value={amPm} className="ampm-container">
                <option>AM</option>
                <option>PM</option>
            </select>
        </div>
        {prop === "start" ? <button onClick={()=>{onButtonClick("start")}} className="custom-btn">Confirm Time</button> : <button onClick={()=>{onButtonClick("end")}} className="custom-btn">Confirm Time</button> }
        </div> 
    )
}