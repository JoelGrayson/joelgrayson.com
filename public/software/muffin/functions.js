const muffinFieldEl=document.getElementById('muffinField');
const pointsEls=document.querySelectorAll('.points');
let points=0;
let paused=false;
const numMuffinsEls=document.querySelectorAll('.numMuffins');
let numStartingMuffins=5;
let numMuffins=0;
let levelNum=0;
const levelEls=document.querySelectorAll('.level');
const numMuffinImgs=7; //for fetching src (number of imgs in ~/img/muffins)

let numCurrentCabbages=0;
let absoluteNumCabbages=0; //for unique ids
let absoluteNumFarmers=0;

for (let i=0; i<numStartingMuffins; i++) {
    newMuffin();
}
function removeMuffin() {
    if (numMuffins>0) { //will remove muffins until no left
        let muffinEl=document.getElementById(`muffin-${numMuffins-1}`);
        muffinEl.parentNode.removeChild(muffinEl);
        updateNumMuffins(numMuffins-1);
    }
    if (numMuffins===0) { //no more muffins left
        alert('You lose');
        location.reload();
    }
}
function randomMuffinSrc() {
    return `img/muffins/${Math.floor(Math.random()*numMuffinImgs)+1}.png`;
}
function newMuffin() {
    let muffinEl=document.createElement('img');
    muffinEl.src=randomMuffinSrc();
    muffinEl.draggable=false;
    muffinEl.id=`muffin-${numMuffins}`;
    muffinEl.alt='muffin';
    muffinEl.classList.add('muffin');
    muffinEl.addEventListener('click', ()=>{
        // alert(`You clicked muffin #${i}`);
    });
    muffinFieldEl.appendChild(muffinEl);
    updateNumMuffins(numMuffins+1);
}
function newUmbrella() {
    let umbrellaEl=document.createElement('img');
    umbrellaEl.className='umbrella';
    umbrellaEl.src='img/umbrella.png';
    document.getElementById('umbrellaContainer').appendChild(umbrellaEl);
}

class Cabbage {
    constructor() {
        this.cabbage=document.createElement('img');
        this.cabbage.id=`cabbage-${absoluteNumCabbages}`;
        this.cabbage.draggable=false;
        this.cabbage.src='img/cabbage.png';
        this.cabbage.alt='cabbage';
        this.cabbage.addEventListener('mouseenter', ()=>{this.crush()});
        this.cabbage.classList.add('cabbage');
        absoluteNumCabbages++;
        numCurrentCabbages++;
        document.getElementById('cabbageContainer').appendChild(this.cabbage);
        this.yLoc=-10; //vh for height
        this.speed=0.2;
        this.xLoc=Math.random()*90; //% for width
        this.cabbage.style.left=this.xLoc+'%';
        this.alive=true;
        this.interval=setInterval(()=>{
            if (!paused) {
                this.cabbage.style.top=this.yLoc+'vh';
                if (this.yLoc>=80) {
                    this.explode();
                } else {
                    this.yLoc+=this.speed;
                }
            }
        }, 10);
    }
    crush() { //cursor clicks it
        if (this.alive) { //won't be crushed if already exploded
            this.alive=false;
            this.cabbage.src='img/cabbage crushed.png';
            clearInterval(this.interval);
            setTimeout(()=>{
                this.remove();
            }, 400);
            updatePoints(points+1);
        }
    }
    explode() { //hits ground
        removeMuffin();
        this.alive=false;
        this.cabbage.src='img/explosion.gif';
        clearInterval(this.interval); //stops from setting setTimeout() many times
        setTimeout(()=>{
            this.remove();
        }, 1000);
    }
    remove() {
        this.alive=false;
        clearInterval(this.interval);
        this.cabbage.parentNode.removeChild(this.cabbage);
        numCurrentCabbages--;
    }
}
function updatePoints(newScore) {
    points=newScore;
    for (let i=0; i<pointsEls.length; i++) {
        pointsEls[i].innerHTML=points;
    }
}
function updateNumMuffins(newNumMuffins) {
    numMuffins=newNumMuffins;
    for (let i=0; i<numMuffinsEls.length; i++)
        numMuffinsEls[i].innerHTML=numMuffins;
}
const shadowEl=document.getElementById('shadow');
function instructions(showHide) {
    let visibilityState=(showHide?'visible':'hidden');
    shadowEl.style.visibility=visibilityState;
    document.getElementById('instructionsModal').style.visibility=visibilityState;
}
const levelModalEl=document.getElementById('levelModal');
function levelModal(showHide) {
    if (showHide) {
        visibilityState='visible';
        paused=true;
    } else {
        visibilityState='hidden';
        paused=false;
    }
    shadowEl.style.visibility=visibilityState;
    levelModalEl.style.visibility=visibilityState;
}
function updateLevel(newLevelNum) {
    levelNum=newLevelNum;
    for (let i=0; i<levelEls.length; i++)
        levelEls[i].innerHTML=`${levelNum+1}/5`; //zero-based becomes positive-based
    
    paused=true;
    levelModal(true);
    nf.notify(`Level ${levelNum} complete`, 'hsl(131, 100%, 70%)');
}
class Farmer {
    constructor() {
        this.imgEl=document.createElement('img');
        this.imgEl.classList.add('farmer');
        document.getElementById('farmers').appendChild(this.imgEl);
        this.imgEl.id=`farmer-${absoluteNumFarmers}`;
        absoluteNumFarmers--;
        this.imgEl.alt='farmer';
        this.default();
        this.leftPercMax=85;
        this.leftPerc=2+Math.random()*(this.leftPercMax-4);
        this.direction='right';
        this.speed=0.04;
        let changing=setInterval(()=>{
            let rand=Math.random()*3;
            if (rand<1)
                this.default();
            else if (rand<2)
                this.shovel();
            else if (rand<3)
                this.tractor();
        }, 6000);
        let moving=setInterval(()=>{
            if (this.direction==='right') {
                if (this.leftPerc>=this.leftPercMax)
                    this.flipSides();
                this.leftPerc+=this.speed;
            } else if (this.direction==='left') {
                if (this.leftPerc<=0)
                    this.flipSides();
                this.leftPerc-=this.speed;
            }
            this.imgEl.style.left=this.leftPerc+'%';
        }, 10);
    }
    default() {
        this.imgEl.src='img/farmer.png'
    }
    shovel() {
        this.imgEl.src='img/farmer shovel.png';
    }
    tractor() {
        this.imgEl.src='img/farmer tractor.png';
    }
    remove() {
        this.imgEl.parentNode.removeChild(this.imgEl);
    }
    flipSides() {
        if (this.direction==='left') {
            this.direction='right';
            this.imgEl.style.transform='scaleX(1)'; //flip so facing right
        } else if (this.direction==='right') {
            this.direction='left';
            this.imgEl.style.transform='scaleX(-1)';
        }
    }
}