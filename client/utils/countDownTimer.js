export default function countdownTimer() {
  // set count down date
    const countDownDate = new Date("May 19, 2018 15:37:25").getTime();

    // update countDownDate every second
    const x = setInterval(() => {
      // get todays date and time
      const now = new Date().getTime();

      // find distance between now and countDownDate
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // display result in an element
      document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "";
      }
    }, 1000);
}
