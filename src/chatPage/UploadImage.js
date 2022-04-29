import React, { useEffect, useState } from "react";
import "./image.css";

function UploadImage(props) {
  const [activeContact, setActiveContact] = props.active;
  const log = props.log;
  const userName = props.userName;
  const [chosenImage, setChosenImage] = useState(null);
  const [imUrl, setImUrl] = useState(null);

  useEffect(() => {
    if (!chosenImage) {
      return;
    }
    const url = URL.createObjectURL(chosenImage);
    setImUrl(url);
  }, [chosenImage]);

  function onImageChange(e) {
    setChosenImage(...e.target.files);
  }
  function newImageMessage() {
    if (imUrl) {
      log.newMessage("image", imUrl, userName);
      setImUrl(null);
      setChosenImage(null);
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
        onChange={onImageChange}
      />
      {imUrl && (
        <button className="confirm-send-im" onClick={newImageMessage}>
          send image
        </button>
      )}
    </div>
  );
}

export default UploadImage;
