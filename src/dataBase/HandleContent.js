import React from "react";

function handleText({ content }) {
  return <p>{content}</p>;
}

function handleVideo({ content }) {
  return <p>{content}</p>;
}

function handleAudio({ content }) {
  return <p>{content}</p>;
}

function handleImage({ content }) {
  return <img src={content} alt="couldnt show"/>;
}

const operMap = new Map()
  .set("video", handleVideo)
  .set("audio", handleAudio)
  .set("text", handleText)
  .set("image", handleImage);

function HandleContent({ type, content }) {
  return operMap.get(type)(content);
}

export default HandleContent;
