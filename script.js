// Set the wedding date here
const weddingDate = new Date("2025-05-01T00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Find the difference between now and the wedding date
    const distance = weddingDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the elements with id
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerText = "It's Our Wedding Day!";
    }
}, 1000);
