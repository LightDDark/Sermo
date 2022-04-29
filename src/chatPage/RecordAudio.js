import {useState} from "react";

function RecordAudio(props) {
    const [activeContact, setActiveContact] = props.active;
    const log = props.log;
    const userName = props.userName;
    const [audioFile,setAudioFile] = useState(null);
    let audioIN = {audio: true};
    navigator.mediaDevices.getUserMedia(audioIN)

        .then(function (mediaStreamObj) {
            
            let audio = document.querySelector('audio');
            let start = document.getElementById('btnStart');
            let stop = document.getElementById('btnStop');
            let playAudio = document.getElementById('audioPlay');
            audio.srcObject =mediaStreamObj;

            audio.onloadedmetadata = function (ev) {
                audio.play();
            };
            
            let mediaRecorder = new MediaRecorder(mediaStreamObj);

            start.addEventListener('click', function (ev) {
                mediaRecorder.start();
            })

            stop.addEventListener('click', function (ev) {
                mediaRecorder.stop();
            });
            
            mediaRecorder.ondataavailable = function (ev) {
                dataArray.push(ev.data);
            }
            
            let dataArray = [];
            
            mediaRecorder.onstop = function (ev) {
                
                let audioData = new Blob(dataArray,
                    {'type': 'audio/mp3;'});
                
                dataArray = [];
                
                let audioSrc = window.URL
                    .createObjectURL(audioData);

                playAudio.src = audioSrc;
                setAudioFile(playAudio);
            }
        })
        // If any error occurs then handles the error
        .catch(function (err) {
            console.log(err.name, err.message);
        });
        function newAudioMessage() {
            log.newMessage("audio", audioFile, userName);
            setActiveContact([activeContact[0], log]);
    }
    return (
        <div>
            <p>
                <button id="btnStart">START RECORDING</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button id="btnStop" >STOP RECORDING</button>
            </p>
            <audio id="audioPlay" controls></audio>
            <button onClick={newAudioMessage}>click here to upload</button>
        </div>
    );
}
export default RecordAudio;