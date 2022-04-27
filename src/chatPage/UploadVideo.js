import React, {useRef, useState} from "react";

function UploadVideo(props) {
    const height = props.height;
    const width = props.width;
    const vidInput = useRef();
    const [vidSource, setVidSource] = useState();

    const handleChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setVidSource(url);
    };

    const handleChoose = (event) => {
        vidInput.current.click();
    };

    return (
        <div className="VideoInput">
            <input
                onChange={handleChange}
                ref={vidInput}
                className="VideoInput_input"
                type="file"
                accept=".mov,.mp4"
            />
            {!vidSource && <button onClick={handleChoose}>Choose</button>}
            {vidSource && (
                <video
                    className="VideoInput_video"
                    width="100%"
                    height={height}
                    controls
                    src={vidSource}
                />
            )}
            <div className="VideoInput_footer">{vidSource || "please select video to upload"}</div>
        </div>
    );
}

export default UploadVideo;