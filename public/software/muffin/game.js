let farmers=[];
let farmerEfficiency=10000;
function newFarmer() {
    farmers.push(new Farmer());
}

function farming(timeout) {
    setTimeout(()=>{
        newMuffin();
        if (farmers.length>0)
            if (!paused)
                farming(farmerEfficiency/farmers.length); //8 seconds max. Lower based on number of farmers
    }, timeout);
}

// LEVELS

let levels=[
    {
        startingInterval: 1200,
        increaseRate: 0.015,
        numCabbagesLeft: 5
    },
    {
        startingInterval: 1000,
        increaseRate: 0.03,
        numCabbagesLeft: 10
    },
    {
        startingInterval: 1000,
        increaseRate: 0.13,
        numCabbagesLeft: 12
    },
    {
        startingInterval: 1000,
        increaseRate: 1,
        numCabbagesLeft: 15
    },
    {
        startingInterval: 1000,
        increaseRate: 0.1,
        numCabbagesLeft: 35
    },
];

instructions(true);
document.getElementById('startBtn').addEventListener('click', ()=>{
    level(levels[levelNum]);
    newFarmer();
    farming(farmerEfficiency/farmers.length);
    instructions(false);
});

function level(input={startingInterval, increaseRate, numCabbagesLeft}) {
    if (input.numCabbagesLeft>0) {
        new Cabbage();
        setTimeout(()=>{
            level({
                startingInterval: input.startingInterval*(1-input.increaseRate),
                increaseRate: input.increaseRate,
                numCabbagesLeft: input.numCabbagesLeft-1
            });
        }, input.startingInterval);
    } else {
        let interval=setInterval(()=>{
            if (!document.getElementById('cabbageContainer').innerHTML) {
                clearInterval(interval);
                if (levelNum<levels.length-1) {
                    updateLevel(levelNum+1);
                    level(levels[levelNum]);
                } else {
                    levelModalEl.innerHTML=`<div class='container'><h1>You win!</h1></div>`;
                    levelModal(1);
                }
            }
        }, 500); //checks every 0.5 seconds if container is empty. then moves on to next level
    }
}