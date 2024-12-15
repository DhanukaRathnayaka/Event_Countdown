// Timer Elements
let timerDisplay = document.getElementById("timer");
let countdown;
let totalTime = 180; // Default time: 3 minutes
let isPaused = false; // Timer pause state
let remainingTime = totalTime;
const
}

// Start Timer
function startTimer() {
  clearInterval(countdown);
  isPaused = false;
  countdown = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      displayTime(remainingTime);

      // Play sound during the last 5 seconds
      if (remainingTime === 5) {
        const endSound = document.getElementById("endSound");
        endSound.play();
      }
    } else {
      clearInterval(countdown);
    }
  }, 1000);
}

// Pause Timer
function pauseTimer() {
  const pauseButton = document.querySelector(".pause");
  if (!isPaused) {
    clearInterval(countdown);
    isPaused = true;
    pauseButton.textContent = "Resume";
  } else {
    startTimer();
    pauseButton.textContent = "Pause";
  }
}

// Reset Timer
function resetTimer() {
  clearInterval(countdown);
  remainingTime = totalTime = 180; // Reset to 3 minutes
  displayTime(totalTime);
  document.querySelector(".pause").textContent = "Pause";
  isPaused = false;

  // Stop and reset the music
  const endSound = document.getElementById("endSound");
  endSound.pause();
  endSound.currentTime = 0;
}

// Open Edit Modal
function openEditModal() {
  editModal.style.display = "block";
}

// Close Edit Modal
function closeEditModal() {
  editModal.style.display = "none";
}

// Save Edited Time
function saveEdit() {
  const hours = parseInt(document.getElementById("editHours").value) || 0;
  const minutes = parseInt(document.getElementById("editMinutes").value) || 0;
  const seconds = parseInt(document.getElementById("editSeconds").value) || 0;

  totalTime = remainingTime = Math.max(0, hours * 3600 + minutes * 60 + seconds); // Ensure no negative time
  displayTime(totalTime);
  closeEditModal();
}

// Reset Edit Fields
function resetEdit() {
  document.getElementById("editHours").value = 0;
  document.getElementById("editMinutes").value = 3;
  document.getElementById("editSeconds").value = 0;
}

// Initialize
displayTime(totalTime);
