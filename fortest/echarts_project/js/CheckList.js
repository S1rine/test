function timeOfToday() {
    var mydateInput = document.getElementById("time");
    var date = new Date();
    var dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    mydateInput.value = dateString;
}
$(document).ready(function () {
    $('#view-main-in').click(function () {
        htmlobj = $.ajax({
            type: "POST",
            url: "http://47.101.143.52:8080/comCheckIn/list",
            data: {
                "recordDate": document.getElementById("time").value
            },
            dataType: "json",
            ContentType: "application/json",
            success: function (data) {
                var tbody = document.getElementsByTagName("tbody")[0];
                var child = tbody.children;
                for (var i = child.length - 1; i >= 0; i--) {
                    tbody.removeChild(child[i]);
                }
                for (var i = 0; i < data.length; i++) {
                    var tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    for (var j in data[i]) {
                        if (j == 'checkInId' || j == 'recordDate' || j == 'count')
                            continue;
                        var td = document.createElement("td");
                        tr.appendChild(td);
                        td.innerHTML = data[i][j];
                    }
                }
            }
        })
    });
    $('#view-main-out').click(function () {
        htmlobj = $.ajax({
            type: "POST",
            url: "http://47.101.143.52:8080/comCheckOut/list",
            data: {
                "recordDate": document.getElementById("time").value
            },
            dataType: "json",
            ContentType: "application/json",
            success: function (data) {
                var tbody = document.getElementsByTagName("tbody")[0];
                var child = tbody.children;
                for (var i = child.length - 1; i >= 0; i--) {
                    tbody.removeChild(child[i]);
                }
                for (var i = 0; i < data.length; i++) {
                    var tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    for (var j in data[i]) {
                        if (j == 'checkOutId' || j == 'recordDate' || j == 'count')
                            continue;
                        var td = document.createElement("td");
                        tr.appendChild(td);
                        td.innerHTML = data[i][j];
                    }
                }
            }
        })
    });
});