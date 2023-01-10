//Adds link event listeners to each <button targetUrl='v3'>Version 3</button>
document.querySelectorAll('button[targetUrl]').forEach(button=>{
    button.addEventListener('click', ()=>{
        window.location=button.attributes.targetUrl.nodeValue;
    });
});