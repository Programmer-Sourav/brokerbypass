import { useState } from "react"
import "../calendarcomponent.css"

export default function DummyModal(){

    const [modalState, setModalState] = useState(false);

    const openModal = () =>{
         setModalState(!modalState)
    }

    return(
        <div>
             <div className="modal">
              <div className="content">
                <h1 style= {{color: "green"}}>
                        Hello GeeksForGeeks!
                    </h1>
                    <p>Never Give Up!</p>
                    </div>
                    </div>
        </div>
    )
}