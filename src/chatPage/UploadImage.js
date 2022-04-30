import React, { useEffect } from "react";
import "./image.css";

function UploadImage(props) {
  const [chosenImage, setChosenImage] = props.chosenImage;
  const setImUrl = props.setImUrl;

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

  return (
    <div>
      <input
        id="actual-btn-im"
        type="file"
        multiple
        accept="image/*"
        onChange={onImageChange}
      />
    </div>
  );
}

export default UploadImage;
