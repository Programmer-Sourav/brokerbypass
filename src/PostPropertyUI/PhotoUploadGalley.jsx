import "../photo-upload-gallery.css"

import CameraIcon from "../assets/camera.png"
import WhatsAppIcon from "../assets/whatsapp.png"
import EmailIcon from "../assets/email.png"

export default function PhotoUploadGallery(){

    return(
        <div className="pbody"> 
            <h4 id="custom-h-4">Upload photos & videos</h4>
            <div className="pbox">
                <img src={CameraIcon} alt="camera-icon" className="cameraicon"/>
                <h4>Add photos to get 5X more responses.</h4>
                <h4 id="custom-h-3">90% tenents contact on properties with photos.</h4>
                <button onClick={""} className="pbutton">Add Photos</button>
            </div>
            <h4 id="custom-margin-h-4">We can upload photos on your behalf</h4>
            <div className="pfooterboxcontainer">
             <div className="pfooterbox">
               <span><img src={WhatsAppIcon} className="footericon" alt="whatsapp"/></span>
               <p className="p-custom-gray">Whatsapp us on</p>
               <p className="p-custom">0-9916-7-2----</p>
             </div>
             <div className="pfooterbox">
                <span><img src={EmailIcon} className="footericon" alt="whatsapp"/></span>
                <p className="p-custom-gray">Email to</p>
                <p className="p-custom">photos@bypassbroker.com</p>
             </div>
             </div>
        </div>
    )
}