function attachEventsListeners() {

    const days = document.getElementById('days');
    const daysBtn = document.getElementById('daysBtn');

    const hours = document.getElementById('hours');
    const hoursBtn = document.getElementById('hoursBtn');

    const minutes = document.getElementById('minutes');
    const minutesBtn = document.getElementById('minutesBtn');

    const seconds = document.getElementById('seconds');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', (ev) => {
        hours.value = days.value * 24;
        minutes.value = days.value * 60 * 24;
        seconds.value = days.value * 24 * 3600;
    });
    hoursBtn.addEventListener('click', (ev) => {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = hours.value * 3600;
    });
    minutesBtn.addEventListener('click', (ev) => {
        seconds.value = minutes.value * 60
        hours.value = minutes.value / 60;
        days.value = minutes.value / 24;
    });
    secondsBtn.addEventListener('click', (ev) => {
        minutes.value = seconds.value / 60;
        hours.value = seconds.value / 3600;
        days.value = seconds.value / 86400;
    });
}