import { useRef, useState } from "react"
import "../ScheduleVisit/ScheduleVisitInitial.css"
import MorningDiv from "./MorningDiv"
import CalendarComponent from "./CalendarComponent";
import { OverlayPanel } from 'primereact/overlaypanel';

import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    ChakraProvider,
    Button,
    Box,
  } from '@chakra-ui/react'



export default function ScheduleVisitSecond(){
   
    const [showCalendar, setShowCalendar] = useState(false);

    const op = useRef(null);

    return(
        <div className="schedule-body">
        <div className="left-pane"></div>    
        <div className="right-pane">
        <p className="schedule-text-default-3">Date </p>
        <div className="top-parent-default">
        <button className="button-default-0">Today</button> 
        <button className="button-default-0">Tomorrow</button> 
        
        {/* <Popover>
         <PopoverTrigger>
        <button className="button-default-0">Pick A Date</button> 
        </PopoverTrigger> 
        <PopoverContent>
       <PopoverArrow />
       <PopoverCloseButton />
       {/* <PopoverHeader>Confirmation!</PopoverHeader>
       <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody> */}
      {/*</div> <PopoverBody>
       <CalendarComponent/>
       </PopoverBody>
       </PopoverContent>
       </Popover> */}
       <Button type="button" label="Pick A Date" onClick={(e) => op.current.toggle(e)} />
       <OverlayPanel ref={op}>
      <CalendarComponent/>
    </OverlayPanel>
        
    
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
            <div className="text-highlight-0">The owner will be showing the property at <h4 className="same-line-default">05:00 PM</h4> on <h4 className="same-line-default">26 July!!</h4></div>
        </div>
        <MorningDiv/>
        </div>
          <p className="text-background-1"> Owner will be available at the above specified date and time</p>
          <button className="button-default-2">Schedule Visit</button>
        </div>
        </div>
    )
}


