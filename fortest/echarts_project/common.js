
var majors = [
    ["major1", "major2", "major3", "major4"],
    ["major5", "major6", "major7", "major8", "major9"],
    ["major10", "major11"],
    ["major12", "major13", "major14"],
    ["major15", "major16", "major17", "major18"]
];
function checkschool(x) {
    var selects = document.getElementById("student-major");
    if (selects.childElementCount != 0) {
        // for(var i=0;i<selects.childElementCount;i++){
        //     selects.childNodes
        // }
        selects.options.length = 0;
    }
    var length = 0;
    for (var i = 1; i < x; i++) {
        length += majors[i - 1].length;
        // console.log(length);
    }
    // console.log(length);
    for (var i = 0; i < majors[x - 1].length; i++) {
        var item = document.createElement("option");
        item.value = length + i + 1;
        item.innerHTML = majors[x - 1][i];
        selects.appendChild(item);
    }
}