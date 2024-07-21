import { useState } from "react"
import "./appstartpage.css"
import Navigationbar from "./Navigationbar"
import RentDiv from "./RentDiv"
import BuyDiv from "./BuyDiv"
import CommercialDiv from "./CommercialDiv"
import HomePic from "./assets/home.png"
import ListPic from "./assets/list.png"
import BlockPic from "./assets/userblock.png"

export default function FirstHome(){

    const [selectedTab, setSelectedTab] = useState("Buy")
    const onSearchChange = () =>{

    }

    const onSearchClick = () =>{

    }

    const postFreePropertyAdv = () =>{

    }

    return(
        <div className="body">
        <Navigationbar/>
        <h1 className="headingprompt">
            World's First Free & NoBrokerage Property Site To Help Community
        </h1>
        <div className="tabbar">
            <button onClick={()=>{setSelectedTab("1")}}>Buy</button>
            <button onClick={()=>{setSelectedTab("2")}}>Rent</button>
            <button onClick={()=>{setSelectedTab("3")}}>Commercial</button>
        </div>
        <div className="parent-div">
        <div className="searchholder">
           <select value={""} onChange={()=>onselectionchange()} className="searchdropdown">
            <option>Bangalore</option>
            <option>Pune</option>
            <option>Chennai</option>
            <option>Hyderabad</option>
            <option>Mumbai</option>
            <option>Pune</option>
           </select>
           <input type="search" placeholder="Search upto 3 localities or landmarks" value={""} onChange={()=>onSearchChange()} className="searchbar"/>
           <button onClick={()=>{onSearchClick()}} className="searchbutton">Search</button>
           </div>
           {selectedTab==="1" ? <RentDiv/> :""}
           {selectedTab==="2" ? <BuyDiv/> : ""}
           {selectedTab==="3" ? <CommercialDiv/> : ""}
        
         </div>
         
           <div className="default-prompt">
            <section> ---------Are you a property owner?---------- </section>
           
           <button onClick={postFreePropertyAdv} className="btn-default">Post Free Property Ad</button>
           </div>
           <div className="section-default">
            <p className="section-prompt">--------------------- We Make A Difference --------------------- </p>
           <div className="row-flex-default">
            <div className="diff-holder">
            <div className="circle-default">₹130 cr+</div>
            <p>Brokerage saved monthly</p>
            </div>
            <div className="diff-holder">
            <div className="circle-default">30 Lakh+</div>
            <p>Customers connected monthly</p>
            </div>
            <div className="diff-holder">
            <div className="circle-default">
            2 Lakh+</div>
            <p>New listings monthly</p>
            </div>
           </div>
           </div>

           <div className="section-default">
            <p className="section-prompt">--------------------- Why Bypassbroker?  --------------------- </p>
           <div className="row-flex-default">
            <div className="diff-holder">
            <div className="circle-default">
            <img src={BlockPic} height="128" width="128"  alt="homepic"/>
            </div>
            <p>No Brokerage Fee</p>
            </div>
            <div className="diff-holder">
            <div className="circle-default">
            <img src={HomePic} height="128" width="128"  alt="homepic"/>
            </div>
            <p>Shortlist without site visit</p>
            </div>
            <div className="diff-holder">
            <div className="circle-default">
            <img src={ListPic} height="128" width="128"  alt="homepic"/>
            </div>
            <p>Spam free listing</p>
            </div>
           </div>
           </div>

           <footer>
            <div className="footer-container">
                <div className="footer-default">
                    <p className="text-default">Find Property</p>
                    <p>Select from thoudands of options</p>
                    <button className="small-btn-default">Find Now</button>
                </div>
                <div className="footer-default">
                    <p className="text-default">List your property</p>
                    <p>For free. Without any Brokerage.</p>
                    <button className="small-btn-default">List Now</button>
                </div>
            </div>
           </footer>
           </div>

      
      
    )
}