import React, {useRef, useState} from "react";

function UploadVideo(props) {
    const height = props.height;
    const vidInput = useRef();
    const [vidSource, setVidSource] = useState();

    const setVidUrl = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setVidSource(url);
    };

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
            />
            {vidSource && (
                <video
                    className="VideoInput_video"
                    width="100%"
                    height={height}
                    controls
                    src={vidSource}
                />
            )}
        </div>
    );
}

export default UploadVideo;