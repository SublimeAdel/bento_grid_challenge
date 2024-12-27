/* script to dynamically increment the growth percentage till it reaches its final value */
const finalPercentage = 56;
let increment = 1;
let percentElement = document.getElementById("growthPercent");

function updatePercentage() {
    if (increment < finalPercentage) {
        increment++;
        percentElement.innerHTML = `>${increment}%`;

        let interval = 15 + (increment*2); // Increase the delay dynamically

        // Schedule the next update
        setTimeout(updatePercentage, interval);
    }
}

// Start the first update
updatePercentage();
