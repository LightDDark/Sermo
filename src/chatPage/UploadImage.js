import React, { useRef, useState } from "react";
import "./image.css";

function UploadImage(props) {
  const [activeContact, setActiveContact] = props.active;
  const log = props.log;
  const userName = props.userName;
  const [imEvent, setimEvent] = useState(false);
  const [imUrl, setImUrl] = useState(null);
  const imInput = useRef();
  
  const setImgUrl = (event) => {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setImUrl(url);
      document.getElementById("actual-btn-im").addEventListener("click", function(event){
        event.preventDefault()
      });
  };

  function newImageMessage() {
    if (imUrl) {
      log.newMessage("image", imUrl, userName);
      setImUrl(null);
      setActiveContact([activeContact[0], log]);
    }
  }
  return (
      <div>
        <input
            id="actual-btn-im"
            type="file"
            multiple
            accept="image/*"
            onChange={setImgUrl}
            ref={imInput}
        />
        {imUrl && (
            <button id="lie" className="Fl" onClick={newImageMessage}>send image</button>
        )}
      </div>
  );
}

export default UploadImage;
