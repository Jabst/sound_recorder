const audioCollection = [];

const stopButton = document.getElementById("actionStop");
const actionButton = document.getElementById("action");
$("#see").hide();

const recordAudio = () =>
  new Promise(async resolve => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];

    mediaRecorder.addEventListener("dataavailable", event => {
      audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/mpeg" });

        audioCollection.push(audioBlob);
        appendToList();
      });

    stopButton.addEventListener('click', function() {
        mediaRecorder.stop();
        actionButton.disabled = false;
        stopButton.disabled = true;
        $("#see").hide();
      });

    const start = () => mediaRecorder.start();

    resolve({ start });
  });

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const handleAction = async () => {
  const recorder = await recordAudio();
  actionButton.disabled = true;
  stopButton.disabled = false;
  recorder.start();
  $("#see").show();
};