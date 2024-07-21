import "./subheader.css"



export default function SubHeader(){

    return(
        <header className="header"> 
        <div className="input-parent-default">
        <input type="search" placeholder="Add more..." onChange={()=>{onChangeSearch()}} className="input-default"/>
        <button className="btn-default">Search</button>
        </div>
        <div className="input-parent-default">
            <button className="btn-small-default-green">List</button>
            <button className="btn-small-default-green">Map</button>
        </div>
        </header>
    )
}