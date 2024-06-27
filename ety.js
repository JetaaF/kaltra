let currentStep = 0;
const totalSteps = 5;

const backwardButton = document.getElementById('backward');
const forwardButton = document.getElementById('forward');

function updateButtonStates() {
    if (currentStep === 0) {
        backwardButton.classList.remove('enabled');
        backwardButton.disabled = true;
    } else {
        backwardButton.classList.add('enabled');
        backwardButton.disabled = false;
    }

    if (currentStep === totalSteps) {
        forwardButton.classList.remove('enabled');
        forwardButton.disabled = true;
    } else {
        forwardButton.classList.add('enabled');
        forwardButton.disabled = false;
    }
}

function stepBackward() {
    if (currentStep > 0) {
        currentStep--;
        console.log('Stepped backward to:', currentStep);
        updateButtonStates();
    }
}

function stepForward() {
    if (currentStep < totalSteps) {
        currentStep++;
        console.log('Stepped forward to:', currentStep);
        updateButtonStates();
    }
}

// Initialize button states on load
updateButtonStates();
