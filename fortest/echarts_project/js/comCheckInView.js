var DATA = [];

function timeOfToday() {
    var mydateInput = document.getElementById("time");
    var date = new Date();
    var dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    mydateInput.value = dateString;
}

$(document).ready(function () {
    $("#view-main").click(function () {
        htmlobj = $.ajax({
            type: "POST",
            url: "http://47.101.143.52:8080/comCheckIn/list-count",
            data: {
                "recordDate": document.getElementById("time").value
            },
            dataType: "json",
            ContentType: "application/json",
            success: function (data) {
                var DATA = [];

                for (var i = 0; i < data.length; i++) {
                    DATA.push({
                        name: data[i]["companyType"],
                        value: data[i]["count"]
                    });
                }
                var myChart = echarts.init(document.getElementsByClassName("view-main")[0]);
                myChart.setOption({
                    title: {
                        text: '企业信息统计',
                        left: 'center',
                        top: 0,
                        textStyle: {
                            color: '#000',
                            fontSize: 25
                        }
                    },
                    series: [{
                        name: '企业统计',
                        type: 'pie',
                        radius: ['40%', '60%'],
                        // radius: '55%',
                        data: DATA,
                        label: {
                            normal: {
                                textStyle: {
                                    fontSize: 18
                                },
                                show: true,
                                formatter: "{b} : {c} ({d}%)"
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 100,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                })
            }
        });
    });
});