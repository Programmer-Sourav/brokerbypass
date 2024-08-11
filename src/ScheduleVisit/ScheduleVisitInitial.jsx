import "../ScheduleVisit/ScheduleVisitInitial.css"


export default function ScheduleVisitInitial({scheduleInitialData}){
    const dateTime = scheduleInitialData.dateTime;

    function scheduleVisit(){

    }

    function scheduleYourOwnTime(){
        
    }

    return(
        <div className="schedule-body">
        <div className="left-pane"></div>    
        <div className="right-pane">
        <div className="right-rectangle-box"> 
            <h5 className="schedule-text-default-0">Fri, 26th July at 05:00 PM</h5>
            <p className="schedule-text-default-1">Join next visit</p>
            <hr/>
            <p className="schedule-text-default-2">Suitable Time Preferred by Owner</p>
            <button onClick={()=>{scheduleVisit}}>Schedule Visit</button>
        </div>
          <p>- OR -</p>
          <button className="button-default-2" onClick={()=>{scheduleYourOwnTime}}>Select Your Own Time</button>
        </div>
        </div>
    )
}