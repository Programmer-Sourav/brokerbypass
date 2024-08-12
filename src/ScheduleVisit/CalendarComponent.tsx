
import { formatDate } from "date-fns";
import "../calendarcomponent.css"
import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];  /**equaivalent to type Value = Date | Date[] as ValuePiece is Date */



export default function CalendarComponent(){

    const [value, onChange] = useState<Value>(new Date());
    

    const formatDate = (date: Date, format: String) =>{
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.getMonth().toString().padStart(2, '0');
        const year = date.getFullYear().toString();

        return format.replace('dd', day).replace('MM', month).replace('YYYY', year);

    }

    const onDateChange = (locale: string, date: Value) : void =>{
        if(date instanceof Date){
            console.log('Formatted Date: ', formatDate(date, 'dd-MM-YYYY'))
        onChange(date)
        }
        else{
            console.error("Invalid date Value")
        }
    }
    
    return(
   
        <div className="calendarview"> 
            <Calendar onChange={(date)=>onDateChange('en-IN', date)} value={value}/>   
        </div> 
     
    )
}