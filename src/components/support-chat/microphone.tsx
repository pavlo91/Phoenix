import React, { useEffect } from "react";

export default function microphone() {
  useEffect(() => {
    // document.addEventListener("DOMContentLoaded", function () {
    //   // Query elements
    //   const micIcon = document.querySelector(".mic-icon");
    //   const recordingInterface = document.querySelector(".recording-interface");
    //   const recordingTimer = document.getElementById("recording-timer");
    //   const cancelRecording = document.getElementById("cancel-recording");

    //   let timerInterval;

    //   // Reset all microphone states
    //   function resetMicState() {
    //     micIcon.classList.remove(
    //       "bot-talking",
    //       "user-talking",
    //       "permission-denied",
    //       "both-talking"
    //     );
    //     micIcon.classList.add("default");
    //   }

    //   // Handle bot talking state
    //   function botIsTalking(isTalking) {
    //     if (isTalking) {
    //       micIcon.classList.add("bot-talking");
    //     } else {
    //       micIcon.classList.remove("bot-talking");
    //       // Check for overlapping talking states
    //       if (micIcon.classList.contains("user-talking") && isTalking) {
    //         resetMicState();
    //         micIcon.classList.add("both-talking");
    //       }
    //     }
    //   }

    //   // Start the recording asynchronously
    //   async function startRecording() {
    //     try {
    //       let stream = await navigator.mediaDevices.getUserMedia({
    //         audio: true,
    //       });
    //       let seconds = 0;
    //       timerInterval = setInterval(function () {
    //         seconds++;
    //         recordingTimer.textContent = new Date(seconds * 1000)
    //           .toISOString()
    //           .substr(14, 5);
    //       }, 1000);
    //     } catch (err) {
    //       console.error("Microphone permission denied:", err);
    //       micIcon.classList.add("permission-denied");
    //       return;
    //     }
    //   }

    //   // Stop the recording
    //   function stopRecording() {
    //     clearInterval(timerInterval);
    //   }

    //   // Event delegation for microphone component
    //   document.body.addEventListener("click", async function (event) {
    //     if (event.target.closest(".mic-icon")) {
    //       recordingInterface.style.display = "block";
    //       await startRecording();
    //       resetMicState();
    //       micIcon.classList.add("user-talking");
    //     } else if (event.target.closest(".cancel-recording")) {
    //       recordingInterface.style.display = "none";
    //       stopRecording();
    //       resetMicState();
    //     }
    //   });
    // });
  }, []);
  return (
    <div
      className="microphone-component"
      role="region"
      aria-label="Microphone Component"
    >
      <button
        className="mic-icon default"
        // onclick={toggleMicState}
        role="button"
        aria-label="Toggle Microphone"
      >
        <i className="bi bi-mic" aria-hidden="true"></i>
      </button>
      <div
        className="recording-interface"
        role="dialog"
        aria-label="Recording Interface"
      >
        <div
          className="pulsating-dot"
          role="alert"
          aria-label="Recording Indicator"
        ></div>
        <span
          className="recording-timer"
          id="recording-timer"
          role="timer"
          aria-label="Recording Time"
        >
          00:00
        </span>
        <button
          className="cancel-recording"
          id="cancel-recording"
          role="button"
          aria-label="Cancel Recording"
        >
          <i className="bi bi-x-lg" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
