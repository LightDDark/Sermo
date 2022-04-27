import React, {useEffect, useState} from "react";

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
                <input type="file" multiple accept="image/*" onChange={onImageChange}/>
                <img src={imUrl} alt="image cannot be displayed"/>
            </div>
        );
}

export default UploadImage;