import "../amenities-page.css"

export default function AminetesPage(){




    return(
               
               <div className="right-nav">
                <div className="header-height">
                    <h3>Provide details about amenities your property offer</h3>
                </div>  
                <div className="select-flex-row"> 
                <div className="select-flex"> 
                <h4>Bathroom(s)*</h4>
                <div className="select-flex-row-2">
                  <button onClick={""}>-</button>
                  <p>{"1"}</p>
                  <button onClick={""}>+</button>
                </div>
                </div>
                <div className="select-flex"> 
                <h4>Balcony</h4>
                <div className="select-flex-row-2">
                  <button onClick={""}>-</button>
                  <p>{"1"}</p>
                  <button onClick={""}>+</button>
                </div>
                </div>

                <div className="select-flex"> 
                <h4>Water Supply*</h4>
                <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="select-flex"> 
                <h4>Gym*</h4>
                <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="select-flex"> 
                <h4>Non-Veg Allowed*</h4>
                <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="select-flex"> 
                <h4>Gated Security*</h4>
                <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="select-flex"> 
                <h4>Who will show the property?*</h4>
                <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="select-flex"> 
                <h4>Secondary Number*</h4>
                <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="select-flex"> 
                <h4>Do you have more similar properties/units available? *</h4>
                <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="select-flex"> 
                <h4>Add Direction Tip for your tenants*</h4>
                <input type="text" value ={""} className="select-big" placeholder="e.g. xyz street"/>
                </div>
                <div className="footer-flex-row">
                 <button onClick={""} className="footer-btn-one">Back</button>
                 <button onClick={""} className="footer-btn-two">Save & Continue</button>
                </div>
                </div>
                </div>
        
    )
}