
import 'react-time-picker/dist/TimePicker.css';

import { useState } from 'react';
import TimePicker from 'react-time-picker';

export default function TimePickerComponent(){

    const [ value, onChange ] = useState("10:00")



    return(
        <div> 
         <TimePicker onChange={onChange} value={value}/>
        </div>
    )
}