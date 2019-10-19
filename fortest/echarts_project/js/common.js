function checkvalue(){
    var items = document.getElementsByTagName("input");
    var flag=true;
    for(var i=0;i<items.length;i++){
        if(items[i].value == ''){
            flag=false;
        }
    }
    if(flag==true){
        document.getElementsByTagName("button")[0].removeAttribute("disabled");
    }else{
        document.getElementsByTagName("button")[0].setAttribute("disabled", true);
    }
}
var majors = [
    ["major1", "major2", "major3", "major4"],
    ["major5", "major6", "major7", "major8", "major9"],
    ["major10", "major11"],
    ["major12", "major13", "major14"],
    ["major15", "major16", "major17", "major18"]
];
function checkunit(x) {
    var selects = document.getElementById("studentMajor");
    console.log(selects);
    if (selects.childElementCount != 0) {
        selects.options.length = 0;
    }
    var length = 0;
    for (var i = 1; i < x; i++) {
        length += majors[i - 1].length;
    }
    for (var i = 0; i < majors[x - 1].length; i++) {
        var item = document.createElement("option");
        item.value = length + i + 1;
        item.innerHTML = majors[x - 1][i];
        selects.appendChild(item);
    }
}