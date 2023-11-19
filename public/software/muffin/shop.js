const shopBtn=document.getElementById('shopBtn');
const shopModalEl=document.getElementById('shopModal');
const closeBtn=document.getElementById('closeBtn');

shopBtn.addEventListener('click', ()=>{
    paused=true;
    shopModalEl.style.visibility='visible';
});
closeBtn.addEventListener('click', ()=>{
    paused=false;
    shopModalEl.style.visibility='hidden';
});

setupTransaction('muffinBtn', 5, newMuffin);
setupTransaction('umbrellaBtn', 10, newUmbrella)
setupTransaction('farmerBtn', 15, newFarmer);

function setupTransaction(btnId, price, resultHandler) {
    document.getElementById(btnId).addEventListener('click', ()=>{
        transaction(price)
        .then(()=>{
            resultHandler();
        })
        .catch(()=>{
            alert('Insufficient funds');
        });
    });
}
function shopItem(itemName, imgSrc) {
    let itemEl=document.createElement('div');
    itemEl.classList.add('shopping-item');
    let thumbnailEl=document.createElement('img');
    thumbnailEl.src=imgSrc;
    thumbnailEl.height='71px';
    thumbnailEl.alt=itemName;
    itemEl.appendChild(thumbnailEl);
    let itemNameEl=document.createElement('div');
    itemNameEl.innerText=itemName;
    
    itemEl.appendChild(itemNameEl);
}

function transaction(price) {
    return new Promise((resolve, reject)=>{
        if (points>=price) {
            updatePoints(points-price);
            resolve('Transaction successful');
        } else {
            reject('Not enough points');
        }
    });
}