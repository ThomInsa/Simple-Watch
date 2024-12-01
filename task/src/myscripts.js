function displayText()
{
    var text = document.getElementById("textField");
    text.style.display = "block";
}

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap');

// let hour = 0o0;
let minute = 0o0;
let second = 0o0;
let count = 0o0;

const lapsArray = []

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    // hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    // document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    document.getElementById('laps').innerHTML = "";
});

lapBtn.addEventListener('click', function () {
    // Clear existing laps list
    const lapsContainer = document.getElementById('laps');
    lapsContainer.innerHTML = "";

    // Get the current lap time
    const myString = document.getElementById('min').innerHTML + ":" +
        document.getElementById('sec').innerHTML + ":" +
        document.getElementById('count').innerHTML;

    // Add the lap time to the array
    lapsArray.push(myString);

    // Create list items for each lap
    for (let i = 0; i < lapsArray.length; i++) {
        const li = document.createElement('li'); // Create a <li> element
        li.textContent = lapsArray[i];          // Set its text content
        lapsContainer.appendChild(li);          // Add the <li> to the container
    }
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        // if (minute == 60) {
        //     hour++;
        //     minute = 0;
        //     second = 0;
        // }

        // let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        // if (hour < 10) {
        //     hrString = "0" + hrString;
        // }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        // document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}




