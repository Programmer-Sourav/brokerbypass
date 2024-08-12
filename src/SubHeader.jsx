import { useEffect, useRef } from "react"
import "./subheader.css"


export default function SubHeader(){


    return(
        <div className="sub-header"> 
        <div className="input-parent-default-one">
        <input type="search" placeholder="Add more..." onChange={()=>{onChangeSearch()}} className="input-default"/>
        <button className="btn-default">Search</button>
        </div>
        <div className="input-parent-default">
            <button className="btn-small-default-green-1" >List</button>
            <button className="btn-small-default-green">Map</button>
        </div>
        </div>
    )
}