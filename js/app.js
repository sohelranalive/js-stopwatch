let time = 0;
let intervalId = 0;
let isPaused = false;

const startTime = () => {
    if (!isPaused) {
        const startButton = document.getElementById('start-button')
        const stopButton = document.getElementById('stop-button')
        const resetButton = document.getElementById('reset-button')
        stopButton.classList.remove('disable')
        resetButton.classList.remove('disable')
        startButton.classList.add('disable')
        intervalId = setInterval(() => {
            time++
            const setTime = document.getElementById('set-time')
            setTime.innerText = time;
        }, 1000)
    }
    else {
        const startButton = document.getElementById('start-button')
        startButton.classList.add('disable')
        const stopButton = document.getElementById('stop-button')
        const resetButton = document.getElementById('reset-button')
        stopButton.classList.remove('disable')
        resetButton.classList.remove('disable')

        intervalId = setInterval(() => {
            time++
            const setTime = document.getElementById('set-time')
            setTime.innerText = time;
        }, 1000)
    }
}

const resetTime = () => {
    time = 0;
    clearInterval(intervalId);
    const setTime = document.getElementById('set-time')
    setTime.innerText = time;
    const startButton = document.getElementById('start-button')
    startButton.classList.remove('disable')
    const stopButton = document.getElementById('stop-button')
    stopButton.classList.add('disable')
    const resetButton = document.getElementById('reset-button')
    resetButton.classList.add('disable')
}

const stopTime = () => {
    clearInterval(intervalId);
    const stopButton = document.getElementById('stop-button')
    stopButton.classList.add('disable')
    const startButton = document.getElementById('start-button')
    startButton.classList.remove('disable')
    isPaused = true;
}