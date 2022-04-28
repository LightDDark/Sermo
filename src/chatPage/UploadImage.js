import React, {useEffect, useState} from "react";
import "./image.css"

function UploadImage() {
        const [chosenImage, setChosenImage] = useState();
        const [imUrl, setImUrl] = useState(null);
        
        useEffect(()=>{
            if (!chosenImage){
                return;
            }
            const url = URL.createObjectURL(chosenImage);
            setImUrl(url);},[chosenImage]);
        
        function onImageChange(e){
            setChosenImage(...e.target.files);
        }
        return (
            <div>
                <input id="actual-btn-im" type="file" multiple accept="image/*" onChange={onImageChange}/>
                <img src={imUrl} alt=""/>
            </div>
        );
}

export default UploadImage;