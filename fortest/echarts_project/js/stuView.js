function timeOfToday() {
    var mydateInput = document.getElementById("time");
    var date = new Date();
    var dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    mydateInput.value = dateString;
}
var chooseArea = document.getElementsByClassName("choose-area")[0];
for (var i = 0; i < chooseArea.children.length; i++) {
    var child = chooseArea.children[i];
    (function run(child, i) {
        child.onclick = function () {
            if (child.className == "")
                child.className = "active";
            else {
                child.className = "";
            }
            for (var j = 0; j < chooseArea.children.length; j++) {
                if (i == j) {
                    continue;
                } else {
                    chooseArea.children[j].className = "";
                }
            }
        };
    })(child, i);
}
var viewtypenum = 0;
var databyunit = [];
var databymajor = []

var databyboth = [
    // {
    //     unit: "学院1",
    //     major: {
    //         major1: 15,
    //         major2: 10,
    //         major3: 30,
    //         major4: 20,
    //         major_sum: 4,
    //     },
    // },
    // {
    //     unit: "学院2",
    //     major: {
    //         major5: 35,
    //         major6: 22,
    //         major7: 34,
    //         major8: 16,
    //         major9: 16,
    //         major_sum: 5,
    //     },
    // }, {
    //     unit: "学院3",
    //     major: {
    //         major10: 45,
    //         major11: 32,
    //         major_sum: 2,
    //     },
    // }, {
    //     unit: "学院4",
    //     major: {
    //         major12: 65,
    //         major13: 52,
    //         major14: 74,
    //         major_sum: 3,
    //     },
    // }, {
    //     unit: "学院5",
    //     major: {
    //         major15: 45,
    //         major16: 32,
    //         major17: 24,
    //         major18: 26,
    //         major_sum: 4,
    //     }
    // }
];
var databyboth_value = Object.values(databyboth);
var databyboth_key = Object.keys(databyboth);
var databymajor_name = [];
var databymajor_value = [];
for (var i = 0; i < databymajor.length; i++) {
    databymajor_name.push(databymajor[i].name);
    databymajor_value.push(databymajor[i].value);
}
function unique(arr) {
    return Array.from(new Set(arr))
}

function viewbyunit(myChart, data) {
    var option = {
        title: {
            text: '学院统计',
            left: 'center',
            top: 0,
            textStyle: {
                color: '#000',
                fontSize: 25
            }
        },
        series: [{
            name: '学生统计',
            type: 'pie',
            radius: '55%',
            data: data,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 20
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
    }
    myChart.setOption(option);
}

function viewbymajor(myChart, data) {
    var dataName = [];
    for (var i in data) {
        dataName.push(data[i]['name']);
    }
    var option = {
        title: {
            text: '专业统计',
            left: 'center',
            top: 0,
            textStyle: {
                color: '#000',
                fontSize: 25
            },
        },
        xAxis: {
            type: 'category',
            data: dataName,
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 20 //更改坐标轴文字大小
                }
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: data,
            type: 'bar',
            label: {
                normal: {
                    fontSize: 18,
                    formatter: '{c}',
                    distance: -8,
                    show: true,
                    position: 'top'
                }
            },
        }]
    }
    myChart.setOption(option);
}

function viewbyboth(myChart,data,dataunit) {
    var majorLength = 0;
    for (var key in data) {
        majorLength += data[key]["major"]['major_sum'];
    }
    var data_final = new Array(majorLength);
    for (var i = 0; i < majorLength; i++) {
        data_final[i] = new Array(data.length);
    }
    for (var i = 0, sum = 0; i < data.length; i++) {
        for (var j = 0; j < data[i]['major']["major_sum"]; j++) {
            data_final[sum++][i] = Object.values(data[i]['major'])[j];
        }
    }
    var seriesitem = [];
    var count = 0;
    for (var i in data) {
        for (var j = 0; j < data[i]["major"]['major_sum']; j++) {
            seriesitem.push({
                name: Object.keys(data[i]['major'])[j],
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        fontSize: 18,
                        formatter: '{a}: {c}',
                        show: true,
                        position: 'inside'
                    }
                },
                data: data_final[count++]
            });
        }
    }
    var sumdata = new Array(data.length);
    for (var i = 0; i < sumdata.length; i++) {
        sumdata[i] = 0;
    }
    seriesitem.push({
        name: '合计',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                distance: -25,
                position: 'bottom',
                textStyle: {
                    color: '#000'
                },
                formatter: '',
                fontSize: 18
            }
        },
        data: sumdata 
    });
    var option = {
        title: {
            text: '学院专业统计',
            left: 'center',
            top: 0,
            textStyle: {
                color: '#000',
                fontSize: 25
            },
        },
        xAxis: {
            type: 'category',
            data: dataunit,
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 20 //更改坐标轴文字大小
                }
            }
        },
        yAxis: {
            type: 'value',
        },
        series: seriesitem,
    };
    var series = option["series"];
    var fun = function (params) {
        var data = 0;
        for (var i = 0; i < series.length; i++) {
            var x = series[i].data[params.dataIndex];
            if (typeof (x) != 'number')
                continue;
            data += series[i].data[params.dataIndex];
            
        }
        return '合计: ' + data;

    }
    //加载页面时候替换最后一个series的formatter
    series[series.length - 1]["label"]["normal"]["formatter"] = fun;

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}

$(document).ready(function () {
    $('#view-main').click(function () {
        var viewtype = document.getElementsByClassName("choose-area")[0].getElementsByClassName("active")[0].innerText;
        var chartcontainer = document.getElementsByClassName("view-main")[0];
        var posturl = "";
        if (chartcontainer.children.length != 0) {
            var lastChart = chartcontainer;
            lastChart = echarts.dispose(lastChart);
        }
        var myChart = echarts.init(chartcontainer);
        if (viewtype == '按学院统计') {
            posturl = "http://47.101.143.52:8080/stuCheckIn/count-unit";
            // viewbyunit(myChart);
        } else if (viewtype == '按专业统计') {
            posturl = "http://47.101.143.52:8080/stuCheckIn/count-major";
            // viewbymajor(myChart);
        } else {
            posturl = "http://47.101.143.52:8080/stuCheckIn/count-unit-major";
            // viewbyboth(myChart);
        }
        htmlobj = $.ajax({
            type: "POST",
            url: posturl,
            data: {
                "recordDate": document.getElementById("time").value
            },
            dataType: "json",
            ContentType: "application/json",
            success: function (data) {
                var databyunit= [];
                var databymajor=[];
                var databyboth=[];
                var list = data;
                if (viewtype == '按学院统计') {
                    for (var i = 0; i < list.length; i++) {
                        databyunit.push({
                            name: list[i]["unitName"],
                            value: list[i]['count']
                        })
                    }
                    viewbyunit(myChart, databyunit);
                } else if (viewtype == '按专业统计') {
                    for (var i = 0; i < list.length; i++) {
                        databymajor.push({
                            name: list[i]['major'],
                            value: list[i]['count']
                        })
                    }
                    viewbymajor(myChart, databymajor);
                } else {
                    var dataunit=[];
                    for(var i in list){
                        dataunit.push(list[i]['unitName']);
                    }
                    dataunit = unique(dataunit);
                    var datamajor = new Array(list.length);
                    var data_1 = new Array(dataunit.length+1);
                    for(var i in dataunit){
                        data_1[i]={};
                        var sum=0;
                        for(var j in list){
                            if(list[j]['unitName']==dataunit[i]){
                                data_1[i][list[j]['major']]=list[j]['count'];
                                sum++;
                            }
                        }
                        data_1[i]['major_sum']=sum;
                    }
                    for(var i in data_1){
                        databyboth.push({
                            unit: dataunit[i],
                            major: data_1[i]
                        })
                    }
                    viewbyboth(myChart,databyboth,dataunit);
                }
            }
        })
    });
});