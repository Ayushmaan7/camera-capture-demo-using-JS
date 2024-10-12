// Access the DOM elements
const video = document.getElementById('camera');
const canvas = document.getElementById('photo');
const captureBtn = document.getElementById('capture-btn');
const context = canvas.getContext('2d');

// Request access to the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error("Error accessing the camera: ", error);
    });

// Capture photo on button click
captureBtn.addEventListener('click', () => {
    // Set canvas dimensions to match video size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current frame from the video onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Show the captured image on the canvas
    canvas.style.display = 'block';
});
