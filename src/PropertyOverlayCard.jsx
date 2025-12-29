
import "./overlaycard.css"
import PropertyImg from "./assets/dummypic.jpg"

export default function PropertyOverlayCard(){


    return(
        <div className="card-default">
        <img src={PropertyImg} alt="property"/>
        <div className="card-default-footer">
            <div className="card-footer-inner">
        <p className="card-footer-text-bigger-default">2 BHK| KPR RESIDE..</p>
        <p className="card-footer-text-bigger-sm2-default"><span></span>BTM Layout</p>
        <p className="card-footer-text-bigger-sm2-default"><span className="card-footer-text-bigger-sm2-default">600 Sq.Ft.</span>
        <span className="card-footer-text-bigger-sm2-default">Semi Furnished</span>
        </p>
        </div>
         <p className="card-price-default"> ₹20 K</p>
         </div>
        </div>
    )
}