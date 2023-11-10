import * as React from 'react';
import Button from "components/base/Button";
import PaperClip from 'components/icons/PaperClip';
import MicIcon from 'components/icons/MicIcon';
import PlaneIcon from 'components/icons/PlaneIcon';
import CloseIcon from 'components/icons/CloseIcon';

interface WidgetFooterProps {
  handleMsg: (msg: string) => void;
}

const WidgetFooter = ({ handleMsg }: WidgetFooterProps) => {
  const [msg, setMsg] = React.useState<string>('');
  const [micPermission, setMicPermission] = React.useState<boolean>(false);
  const [recording, setRecording] = React.useState<boolean>(false);
  const [recordTime, setRecordTime] = React.useState<number>(0);
  const intervalIDRef = React.useRef<any>(null);
  const [audioStream, setAudioStram] = React.useState<MediaStream>();

  const sendMsg = React.useCallback(() => {
    handleMsg(msg);
    setMsg('');
  }, [msg]);

  const checkMicPermission = React.useCallback(() => {
    navigator.mediaDevices.getUserMedia({video: false, audio: true})
    .then((stream) => {
      if(stream) {
        stream.getTracks().forEach(track => {
          track.stop();
        })
        setMicPermission(true);
        localStorage.setItem('MicPermission', 'Granted');
      }
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    })
  }, []);

  const convertSTM = (secs: number) => {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;
    let m, s;
    if(minutes < 10) {
      m = `0${minutes}`;
    } else {
      m = `${minutes}`
    }
    if(seconds < 10) {
      s = `0${seconds}`;
    } else {
      s = `${seconds}`
    }
    return `${m}:${s}`
  }

  const startRecordInterval = React.useCallback(() => {
    intervalIDRef.current = setInterval(() => {
      setRecordTime(prev => prev + 1);
    }, 1000);
  }, [])

  const startRecording = React.useCallback(() => {
    navigator.mediaDevices.getUserMedia({video: false, audio: true})
    .then((stream) => {
      if(stream) {
        setAudioStram(stream);
        setRecording(true);
        startRecordInterval();
      }
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    })
  }, []);

  const stopRecording = React.useCallback(() => {
    audioStream?.getAudioTracks().forEach(track => {
      track.stop();
    });
    setRecording(false);
    setRecordTime(0);
    clearInterval(intervalIDRef.current);
    intervalIDRef.current = null;
  }, [intervalIDRef, audioStream]);

  const handleSpeech = React.useCallback(() => {
    if(!micPermission) {
      checkMicPermission();
    } else {
      if(recording) {
        stopRecording();
      } else {
        startRecording();
      }
    }
    
  }, [micPermission, recording]);

  React.useEffect(() => {
    localStorage.getItem('MicPermission') === 'Granted' && checkMicPermission();
  }, []);

  return (
    <div
      className={`card-footer d-flex align-items-center gap-2 border-top ps-3 pe-4 py-3 widget-footer${recording ? '-active' : ''}`}
      style={{ zIndex: "5"}}
    >
      <button className="btn p-0 border-0 mic-btn">
        {recording ? 
          <Button className="p-0" onClick={() => stopRecording()}>
            <CloseIcon/>
          </Button>
          :
          <Button className="p-0">
            <label
              className="btn btn-link d-flex p-0 text-500 fs--1 border-0"
              htmlFor="supportChatAttachment"
            >
              <PaperClip/>
            </label>
            <input
              className="d-none"
              type="file"
              id="supportChatAttachment"
            />
          </Button>
        }
      </button>
      <div className={`bg-white d-flex align-items-center flex-1 gap-3 border rounded-2 px-2 ${recording ? 'hidden' : ''}`}>
        <input
          className="form-control outline-none border-0 flex-1 fs--1 px-0"
          type="text"
          placeholder="Write message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          className="btn p-0 border-0 send-btn"
          onClick={sendMsg}
          disabled={msg ? false : true}
          >
            <PlaneIcon/>
          </button>
      </div>
      {recording && (
        <div className='d-flex align-items-center'>
          <div className='record-indiciator me-2'></div>
          <div className="record-counter text-white">{convertSTM(recordTime)}</div>
        </div>
      )}
      <button className="btn p-0 border-0 mic-btn">
        <Button className="p-0" onClick={() => handleSpeech()}>
          <label
            className="text-900 fs-9 cursor-pointer"
            htmlFor="microphone"
          >
            <MicIcon color={micPermission ? recording ? '#F26D7E' : 'green' : undefined}/>
          </label>
        </Button>
      </button>
    </div>
  )
}

export default WidgetFooter;