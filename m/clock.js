let playerName = "";
let score = 0;

// Prompt for name before starting the exercise
function askPlayerName() {
  playerName = prompt("Bitte gib deinen Namen ein:", "");
  if (!playerName) playerName = "Player";
  document.getElementById("playerName").textContent = playerName + "'s";
}

askPlayerName(); // Call immediately on page load

// Update scoreboard with player's name
function updateScoreboard() {
  document.getElementById("scoreboard").textContent = `Score: ${score}`;
  document.getElementById("playerName").textContent = playerName + "'s";
}

let currentClock = null;
let difficulty = "easy";
const difficultySettings = {
  easy: { minutes: [0], reward: 5, penalty: 3 },
  intermediate: { minutes: [30], reward: 10, penalty: 4 },
  hard: { minutes: [20, 40], reward: 15, penalty: 5 },
  extreme: { minutes: [10, 50], reward: 20, penalty: 6 },
};

function drawClock(canvasId, hour, minute, direction, showSolution = false) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const r = canvas.width / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(r, r);

  // Face
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.95, 0, 2 * Math.PI);
  ctx.fillStyle = "#ffcc80";
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#000";
  ctx.stroke();

  // Hour marks and numbers
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI) / 6;
    ctx.save();
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(r * 0.85, 0);
    ctx.lineTo(r * 0.95, 0);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();

    const num = i || 12;
    const x = Math.cos(angle - Math.PI / 2) * r * 0.75;
    const y = Math.sin(angle - Math.PI / 2) * r * 0.75;
    ctx.font = "18px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000";
    ctx.fillText(num.toString(), x, y);
  }

  // Minute ticks
  for (let i = 0; i < 60; i++) {
    const angle = (i * Math.PI) / 30;
    ctx.save();
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(r * 0.9, 0);
    ctx.lineTo(r * 0.95, 0);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  // Compute hand angles
  const hourAngle = (Math.PI / 6) * ((hour % 12) + minute / 60);
  const minuteAngle = (Math.PI / 30) * minute;

  // Hands
  ctx.save();
  ctx.rotate(hourAngle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -r * 0.5);
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.rotate(minuteAngle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -r * 0.75);
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.restore();

  // Center dot
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(0, 0, 4, 0, 2 * Math.PI);
  ctx.fill();

  // Arc between hands
  let startAngle = hourAngle - Math.PI / 2;
  let endAngle = minuteAngle - Math.PI / 2;
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(255,0,0,0.6)";
  ctx.arc(0, 0, r * 0.39, startAngle, endAngle, direction);
  ctx.stroke();

  // Compute angle
  let rawDiff = endAngle - startAngle;
  if (direction && rawDiff > 0) rawDiff -= 2 * Math.PI;
  if (!direction && rawDiff < 0) rawDiff += 2 * Math.PI;
  const angleDeg = Math.abs((rawDiff * 180) / Math.PI);

  // Label for angle (only show solution)
  if (showSolution) {
    const midAngle = startAngle + rawDiff / 2;
    const labelR = r * 0.52;
    ctx.fillStyle = "red";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      Math.round(angleDeg) + "°",
      labelR * Math.cos(midAngle),
      labelR * Math.sin(midAngle)
    );
  }

  ctx.restore();
  return Math.round(angleDeg);
}

function normalizeHour(hourStr) {
  let h = parseInt(hourStr, 10);
  if (isNaN(h)) return null;
  if (h === 12) h = 0;
  return h;
}

function randomHour() {
  return Math.floor(Math.random() * 12) + 1;
}
function randomDirection() {
  return Math.random() < 0.5;
}

function nextClock() {
  const settings = difficultySettings[difficulty];
  const hour = randomHour();
  const minute =
    settings.minutes[Math.floor(Math.random() * settings.minutes.length)];
  const direction = randomDirection();
  const angle = drawClock("clockCanvas", hour, minute, direction);
  currentClock = { hour, minute, direction, angle };

  const timeInput = document.getElementById("timeInput");
  const angleInput = document.getElementById("angleInput");
  const feedback = document.getElementById("feedback");
  const solutionDiv = document.getElementById("solution");
  const checkBtn = document.getElementById("checkBtn");

  timeInput.value = "";
  angleInput.value = "";
  feedback.textContent = "";
  solutionDiv.textContent = "";
  checkBtn.disabled = false;
  checkBtn.style.opacity = "1";

  timeInput.classList.remove("correct", "wrong");
  angleInput.classList.remove("correct", "wrong");
}

function checkAnswer() {
  const timeInput = document.getElementById("timeInput");
  const angleInput = document.getElementById("angleInput");
  const feedback = document.getElementById("feedback");
  const solutionDiv = document.getElementById("solution");
  const checkBtn = document.getElementById("checkBtn");

  checkBtn.disabled = true;
  checkBtn.style.opacity = "0.6";

  let timeStr = timeInput.value.trim();
  const angleVal = parseFloat(angleInput.value);
  const settings = difficultySettings[difficulty];

  // Normalize time format like "0:30" → "00:30"
  if (/^\d{1}:\d{2}$/.test(timeStr)) {
    timeStr = "0" + timeStr;
    timeInput.value = timeStr;
  }

  const timeMatch = timeStr.match(/^(\d{1,2}):(\d{2})$/);
  let timeCorrect = false;

  if (timeMatch) {
    const [_, hStr, mStr] = timeMatch;
    const h = normalizeHour(hStr);
    const m = parseInt(mStr);
    const correctHour = currentClock.hour % 12;
    const studentHour = h % 12;
    if (m === currentClock.minute && studentHour === correctHour) {
      timeCorrect = true;
    }
  }

  const angleCorrect = Math.abs(angleVal - currentClock.angle) <= 0; // tolerance for angle input

  // Coloring logic
  timeInput.classList.remove("correct", "wrong");
  angleInput.classList.remove("correct", "wrong");

  if (timeInput.value && angleInput.value) {
    timeInput.classList.add(timeCorrect ? "correct" : "wrong");
    angleInput.classList.add(angleCorrect ? "correct" : "wrong");
  } else if (timeInput.value || angleInput.value) {
    timeInput.classList.add("wrong");
    angleInput.classList.add("wrong");
  }

  let points = 0;
  if (timeInput.value === "" && angleInput.value === "") {
    feedback.textContent = "⏳ No answer given.";
    feedback.style.color = "#777";
  } else if (timeCorrect && angleCorrect) {
    points = settings.reward;
    feedback.textContent = `✅ Correct! +${points} points`;
    feedback.style.color = "green";
  } else {
    points = -settings.penalty;
    feedback.textContent = `❌ Wrong. -${Math.abs(points)} points`;
    feedback.style.color = "red";
  }

  score += points;
  document.getElementById("scoreboard").textContent = `Score: ${score}`;
  (document.getElementById("scoreboard").style.color =
    points > 0 ? "green" : points < 0 ? "red" : "black"),
    setTimeout(
      () => (document.getElementById("scoreboard").style.color = "black"),
      1500
    );

  // Show solution
  const correctTime = `${String(currentClock.hour).padStart(2, "0")}:${String(
    currentClock.minute
  ).padStart(2, "0")}`;
  solutionDiv.textContent = `🕐 Correct Time: ${correctTime}`;
  drawClock(
    "clockCanvas",
    currentClock.hour,
    currentClock.minute,
    currentClock.direction,
    true
  );
}

// Difficulty change event → new clock
document.getElementById("difficulty").addEventListener("change", (e) => {
  difficulty = e.target.value;
  nextClock();
});

// Always default to "easy" after reload
window.onload = () => {
  document.getElementById("difficulty").value = "easy";
  difficulty = "easy";
  nextClock();
};
