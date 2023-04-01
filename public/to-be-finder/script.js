var alert=document.getElementById('alert');
const findLst=['am','is','are','was','were','being','be','been',"i'm","they're","there're","he's","she's","there's","we're","isn't","aren't","wasn't","weren't"];

function checkAndAlert() {
    setInterval(()=>{
        var numInstances=0;
        var newString=document.querySelector('textarea').value;

        for (var i=0; i<findLst.length; i++) {
            if (new RegExp(`\\b${findLst[i]}\\b`,'gi').test(newString)) {
                numInstances++;
            }
            alert.innerHTML=numInstances;
        }
        for (var i=0; i<findLst.length; i++) {
            if ((new RegExp(`\\b${findLst[i]}\\b`,'gi')).test(newString)) {
                alert.style.opacity='1';
                alert.style.width='50px';
                alert.style.height='50px';

                let find=document.getElementById('find'); //changes 'Find' button
                find.style.backgroundColor='#d9d9d9';
                find.style.borderColor='#d9d9d9';
                find.style.transform='scale(1.1)';
                break;
            } else {
                alert.style.opacity='0';
                alert.style.width='20px';
                alert.style.height='20px';

                let find=document.getElementById('find'); //changes 'Find' button
                find.style.backgroundColor='#f2f2f2';
                find.style.borderColor='#ccc';
                find.style.transform='scale(1)';
            }
        }
    },500);
}
checkAndAlert();

function find() {
    var newString=document.querySelector('textarea').value;
    var numInstances=0;

    for (var i=0; i<findLst.length; i++) {
        if (!(new RegExp(`\\b${findLst[i]}\\b`,'gi').test(newString))) {
            document.getElementById('submitResponse').innerHTML='You\'re all set. No to be verbs';
        }
    }
    for (var i=0; i<findLst.length; i++) {
        if (new RegExp(`\\b${findLst[i]}\\b`,'gi').test(newString)) {
            numInstances++;
        }
        newString=newString.replace(new RegExp(`\\b${findLst[i]}\\b`,'gi'),`[[${findLst[i].toUpperCase()}]]`);
    }
    console.log(numInstances);
    if (numInstances>0) {
        document.getElementById('submitResponse').innerHTML=`${numInstances} instance${numInstances===1?'':'s'} of 'to be'`;
    }
    document.querySelector('textarea').value=newString;
}

function hideMessage() {
    document.getElementById('submitResponse').innerHTML='';
}
function showModal() {
    document.getElementById('modal').style.display='flex';
}
function hideModal() {
    document.getElementById('modal').style.display='none';
}
