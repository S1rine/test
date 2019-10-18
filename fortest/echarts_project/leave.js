var count=0;
function checkvalue(x) {
    if (x !== '') {
        count++;
        console.log(count);
    } else {
        count--;
    }
    changebutton(count);
}
function changebutton(x){
    if(x==3){
        document.getElementsByTagName('button')[0].removeAttribute("disabled");
    } else {
        document.getElementsByTagName("button")[0].setAttribute("disabled", 'true');
    }
}