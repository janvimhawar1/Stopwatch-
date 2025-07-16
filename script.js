let timer;
        let isRunning = false;
        let seconds = 0, minutes = 0, hours = 0;

        function updateDisplay() {
            document.querySelector(".stopwatch").textContent =
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function startStopwatch() {
            isRunning || (isRunning = true, timer = setInterval(updateTime, 1000));
        }

        function stopStopwatch() {
            isRunning = false;
            clearInterval(timer);
        }

        function resetStopwatch() {
            stopStopwatch();
            seconds = minutes = hours = 0;
            updateDisplay();
        }

        function updateTime() {
            seconds = (seconds + 1) % 60;
            minutes = (minutes + (seconds === 0)) % 60;
            hours += minutes === 0 && seconds === 0;
            updateDisplay();
        }