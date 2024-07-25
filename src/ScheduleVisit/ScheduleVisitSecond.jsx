import "../ScheduleVisit/ScheduleVisitInitial.css"
import MorningDiv from "./MorningDiv"
export default function ScheduleVisitSecond(){


    return(
        <div className="schedule-body">
        <div className="left-pane"></div>    
        <div className="right-pane">
        <p className="schedule-text-default-3">Date </p>
        <div className="top-parent-default">
        <button className="button-default-0">Today</button> 
        <button className="button-default-0">Tomorrow</button>  
        <button className="button-default-0">Pick A Date</button> 
        </div>    
        <p className="schedule-text-default-3">Time </p>
        <div className="right-rectangle-box"> 
        <div className="top-parent-default-0">
        <button className="button-default-3">Morning</button> 
        <button className="button-default-3">Afternoon</button>  
        <button className="button-default-3">Evening</button> 
        </div>
        <div className="hr-default-1">
        <hr/>
        </div> 
        <div className="text-background-0">
            <p className="text-highlight-0">The owner will be showing the property at <h4 className="same-line-default">05:00 PM</h4> on <h4 className="same-line-default">26 July!!</h4></p>
        </div>
        <MorningDiv/>
        </div>
          <p className="text-background-1"> Owner will be available at the above specified date and time</p>
          <button className="button-default-2">Schedule Visit</button>
        </div>
        </div>
    )
}