function timeOfToday() {
    var mydateInput = document.getElementById("time");
    var date = new Date();
    var dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    mydateInput.value = dateString;
}
var majors = [
    ["major1", "major2", "major3", "major4"],
    ["major5", "major6", "major7", "major8", "major9"],
    ["major10", "major11"],
    ["major12", "major13", "major14"],
    ["major15", "major16", "major17", "major18"]
];
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
var databyunit = [
    {
    value: 111,
    name: '学院1'
}, {
    value: 145,
    name: '学院2'
}, {
    value: 322,
    name: '学院3'
}, {
    value: 266,
    name: '学院4'
}, {
    value: 190,
    name: '学院5'
}, ];
var databymajor = [
    {
        name: 'major1',
        value: 20
    },
    {
        name: 'major2',
        value: 45
    },
    {
        name: 'major3',
        value: 56
    }, {
        name: 'major4',
        value: 13
    }, {
        name: 'major5',
        value: 47
    },
    {
        name: 'major6',
        value: 37
    }
]

var databyboth = [{
    "学院1": {
        "major1": 15,
        "major2": 10,
        "major3": 30,
        "major4": 20,
        "major_sum": 4,
    },
    "学院2": {
        "major5": 35,
        "major6": 22,
        "major7": 34,
        "major8": 16,
        "major9": 16,
        "major_sum": 5,
    },
    "学院3": {
        "major10": 45,
        "major11": 32,
        "major_sum": 2,
    },
    "学院4": {
        "major12": 65,
        "major13": 52,
        "major14": 74,
        "major_sum": 3,
    },
    "学院5": {
        "major15": 45,
        "major16": 32,
        "major17": 24,
        "major18": 26,
        "major_sum": 4,
    }
}];
var databyboth_value = Object.values(databyboth[0]);
var databyboth_key = Object.keys(databyboth[0]);
var databymajor_name = [];
var databymajor_value = [];
for (var i = 0; i < databymajor.length; i++) {
    databymajor_name.push(databymajor[i].name);
    databymajor_value.push(databymajor[i].value);
}

function checkview() {
    var viewtype = document.getElementsByClassName("choose-area")[0].getElementsByClassName("active")[0].innerText;
    var chartcontainer = document.getElementsByClassName("view-main")[0];

    if (chartcontainer.children.length != 0) {
        // var parent = chartcontainer.getElementsByTagName("div")[0];
        // var child = parent.getElementsByTagName("canvas")[0];
        // // chartcontainer.removeChild(chartcontainer.childNodes[0]);
        // console.log(parent);
        // console.log(child);
        // parent.removeChild(child);
        // console.log(parent);
        var lastChart = chartcontainer;
        lastChart = echarts.dispose(lastChart);
    }
    var myChart = echarts.init(chartcontainer);
    if (viewtype == '按学院统计') {
        viewtypenum = 1;
        viewbyunit(myChart);
    } else if (viewtype == '按专业统计') {
        viewtypenum = 2;
        viewbymajor(myChart);
    } else {
        viewtypenum = 3;
        viewbyboth(myChart);
    }
}

function viewbyunit(myChart) {
    var option = {
        title: {
            text: '学院统计',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#000',
                fontSize: 25
            }
        },
        series: [{
            name: '学生统计',
            type: 'pie',
            radius: '55%',
            data: databyunit,
            //[{
            //         value: data2[0],
            //         name: '学院1'
            //     },
            //     {
            //         value: data2[1],
            //         name: '学院2'
            //     },
            //     {
            //         value: data2[2],
            //         name: '学院3'
            //     },
            //     {
            //         value: data2[3],
            //         name: '学院4'
            //     },
            //     {
            //         value: data2[4],
            //         name: '学院5'
            //     },
            // ],
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

function viewbymajor(myChart) {
    var option = {
        title: {
            text: '专业统计',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#000',
                fontSize: 25
            },
        },
        xAxis: {
            type: 'category',
            data: databymajor_name,
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
            data: databymajor_value,
            type: 'bar',
            label: {
                normal: {
                    fontSize: 18,
                    formatter: '{c}',
                    show: true,
                    position: 'top'
                }
            },
        }]
    }
    myChart.setOption(option);
}

function viewbyboth(myChart) {
    var majorLength = 0;
    for (var key in databyboth[0]) {
        console.log(databyboth[0][key]["major_sum"] - 1);
        majorLength += databyboth[0][key]["major_sum"];
    }
    console.log(majorLength);
    var databyboth_final = new Array(majorLength);
    console.log(databyboth_final);
    for (var i = 0; i < majorLength; i++) {
        databyboth_final[i] = new Array(databyboth_key.length);
        console.log(databyboth_final);
    }
    databyboth_final[1].length = 5;
    for (var i = 0, sum = 0; i < databyboth_key.length; i++) {
        for (var j = 0; j < databyboth_value[i]["major_sum"]; j++) {
            console.log(databyboth_value[i]);
            console.log(Object.values(databyboth_value[i])[j]);
            databyboth_final[sum++][i] = Object.values(databyboth_value[i])[j];
            console.log("1");
        }
    }
    console.log(databyboth_final);
    var option = {
        title: {
            text: '学院专业统计',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#000',
                fontSize: 25
            },
        },
        xAxis: {
            type: 'category',
            data: ['学院1', '学院2', '学院3', '学院4', '学院5'],
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
        series: [{
                name: 'major1',
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
                data: databyboth_final[0] //[100, , , , ]
            },
            {
                name: 'major2',
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
                data: databyboth_final[1]
            },
            {
                name: 'major3',
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
                data: databyboth_final[2]
            },
            {
                name: 'major4',
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
                data: databyboth_final[3]
            },
            // 学院1
            {
                name: 'major5',
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
                data: databyboth_final[4]
            },
            {
                name: 'major6',
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
                data: databyboth_final[5]
            },
            {
                name: 'major7',
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
                data: databyboth_final[6]
            },
            {
                name: 'major8',
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
                data: databyboth_final[7]
            },
            {
                name: 'major9',
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
                data: databyboth_final[8]
            },
            // 学院2
            {
                name: 'major10',
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
                data: databyboth_final[9]
            },
            {
                name: 'major11',
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
                data: databyboth_final[10]
            },
            // 学院3
            {
                name: 'major12',
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
                data: databyboth_final[11]
            },
            {
                name: 'major13',
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
                data: databyboth_final[12]
            },
            {
                name: 'major14',
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
                data: databyboth_final[13]
            },
            // 学院4
            {
                name: 'major15',
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
                data: databyboth_final[14]
            },
            {
                name: 'major16',
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
                data: databyboth_final[15]
            },
            {
                name: 'major17',
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
                data: databyboth_final[16]
            },
            {
                name: 'major18',
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
                data: databyboth_final[17]
            },
            // 学院5
            {
                name: '合计',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#000'
                        },
                        formatter: '',
                        fontSize: 18
                    }
                },
                data: [
                    0, 0, 0, 0, 0
                ] //思路一：给series集合末尾多加一栏用于展示合计，但是值都是0；缺点：必须根据xAxis的data生成一组为空的数据，且tooltip不能加trigger: 'axis',这个条件，不然会展示合计：0
            }
        ]
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