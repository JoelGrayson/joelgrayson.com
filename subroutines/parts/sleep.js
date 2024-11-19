function sleep(seconds) {
    console.log('Sleeping for', seconds, 'seconds');
    return new Promise(resolve=>{
        setTimeout(resolve, seconds*1000);
    });
}

module.exports=sleep;
