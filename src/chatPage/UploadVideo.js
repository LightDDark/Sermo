import React, {useRef, useState} from "react";
import "./image.css"

function UploadVideo(props) {
    const log = props.log;
    const userName = props.userName;
    const [activeContact, setActiveContact] = props.active;
    const height = props.height;
    const vidInput = useRef();
    const [vidSource, setVidSource] = useState();

    const setVidUrl = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setVidSource(url);
    };
    function newVideoMessage(){
        log.newMessage("video", vidSource, userName);
        setActiveContact([activeContact[0], log]);
    }

    return (
        <div className="VideoInput">
            <input
                id="actual-btn-vid"
                onChange={setVidUrl}
                ref={vidInput}
                className="VideoInput_input"
                type="file"
                accept=".mov,.mp4"
                hidden
            />{vidSource &&
            <button className="Fl" onClick={newVideoMessage}>send video</button>
        }
        </div>
    );
}

export default UploadVideo;