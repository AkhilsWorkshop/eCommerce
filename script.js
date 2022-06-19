

function currentTime() {

    var localDate = new Date();

    const monthDay = localDate.toLocaleString('default', { month: 'long', day: 'numeric'})
    const year = localDate.getFullYear();
    // var firstDay = localDate.getDate.toString();
    const hours = localDate.getHours();
    const minutes = localDate.getMinutes();
    const seconds = localDate.getSeconds();

    //To get the local date
    document.querySelector("#firstDay").innerText = monthDay + ",";
    document.querySelector("#firstYear").innerText = " " + year;
    
    
    // To get the local time
    document.querySelector("#hours").innerText = hours + ":";
    document.querySelector("#minutes").innerText = minutes + ":";
    document.querySelector("#seconds").innerText = seconds;

    setTimeout(currentTime, 1000);
}

