import React, {useEffect, useState} from "react";
import "./image.css"

function UploadImage(props) {
    const log = props.log;
    const userName = props.userName;
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
        function newImageMessage(){
            log.newMessage("image", imUrl, userName);
        }
        return (
            <div>
                <input id="actual-btn-im" type="file" multiple accept="image/*" onChange={onImageChange}/>
                {imUrl && newImageMessage()}
            </div>
        );
}

export default UploadImage;