var DATA = [{
    name: "1",
    type: "2",
    intention: "3",
    curriculum: "4"
}, {
    name: "5",
    type: "6",
    intention: "7",
    curriculum: "8"
}, {
    name: "9",
    type: "10",
    intention: "13",
    curriculum: "14"
}, {
    name: "11",
    type: "12",
    intention: "31",
    curriculum: "41"
}];

function companyview() {
    var tbody = document.getElementsByTagName("tbody")[0];
    var child = tbody.children;
    for(var i=child.length-1;i>=0;i--){
        tbody.removeChild(child[i]);
    }
    for (var i = 0; i < DATA.length; i++) {
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (var j in DATA[i]) {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.innerHTML = DATA[i][j];
        }
    }
}

function timeOfToday() {
    var mydateInput = document.getElementById("time");
    var date = new Date();
    var dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    mydateInput.value = dateString;
}
