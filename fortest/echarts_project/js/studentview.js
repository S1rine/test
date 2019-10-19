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
var databyunit = [{
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
var databymajor = [{
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

function viewbyboth(myChart){
    
}
var majorLength = 0;
for (var i = 0; i < majors.length; i++) {
    majorLength += majors[i].length;
}
var data1 = new Array(majorLength);
for (var i = 0; i < majorLength; i++) {
    data1[i] = new Array(majors.length);
    var major_len = majors[0].length;
    if (i < major_len) {
        data1[i][0] = 0;
    } else if (i < (major_len += majors[1].length)) {
        data1[i][1] = 0;
    } else if (i < (major_len += majors[2].length)) {
        data1[i][2] = 0;
    } else if (i < (major_len += majors[3].length)) {
        data1[i][3] = 0;
    } else {
        data1[i][4] = 0;
    }
    // for(var j = 0; j < 5;j++){
    //     data1[i][j]=0;
    // }
}
var data2 = new Array(5);
for (var i = 0; i < 5; i++) {
    data2[i] = 0;
}

function changeData1(value1, value2) {
    data1[value2 - 1][value1 - 1]++;
}

function addStudent() {
    var myChart1 = echarts.init(document.getElementById("main_1"));
    var myChart2 = echarts.init(document.getElementById("main_2"));

    var datas = document.getElementById("form-area");
    var dataA = datas.getElementsByClassName("form-item");
    var item1 = dataA[0].getElementsByTagName("input")[0].value;
    var item2 = dataA[1].getElementsByTagName("select")[0].value;
    var item3 = dataA[2].getElementsByTagName("select")[0].value;
    data2[item2 - 1]++;
    changeData1(item2, item3);
    // console.log(data1);
    var option1 = {
        title: {
            text: '学院专业统计',
            left: 'center',
            top: -15,
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
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize: 20 //更改坐标轴文字大小
                }
            }
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
                data: data1[0] //[100, , , , ]
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
                data: data1[1]
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
                data: data1[2]
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
                data: data1[3]
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
                data: data1[4]
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
                data: data1[5]
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
                data: data1[6]
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
                data: data1[7]
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
                data: data1[8]
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
                data: data1[9]
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
                data: data1[10]
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
                data: data1[11]
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
                data: data1[12]
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
                data: data1[13]
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
                data: data1[14]
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
                data: data1[15]
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
                data: data1[16]
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
                data: data1[17]
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

    var option2 = {
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
            data: [{
                    value: data2[0],
                    name: '学院1'
                },
                {
                    value: data2[1],
                    name: '学院2'
                },
                {
                    value: data2[2],
                    name: '学院3'
                },
                {
                    value: data2[3],
                    name: '学院4'
                },
                {
                    value: data2[4],
                    name: '学院5'
                },
            ],
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

    var series = option1["series"];
    // console.log(series[0].data);
    var fun = function (params) {
        var data = 0;
        // console.log(series[0].data[params.dataIndex]);
        // console.log(params);
        for (var i = 0; i < series.length; i++) {
            var x = series[i].data[params.dataIndex];
            // console.log(series[i].data[params.dataIndex]);
            if (typeof (x) != 'number')
                continue;
            // console.log(typeof (x));
            data += series[i].data[params.dataIndex];
        }
        // console.log(data);
        return '合计: ' + data;

    }
    //加载页面时候替换最后一个series的formatter
    series[series.length - 1]["label"]["normal"]["formatter"] = fun;

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    // myChart2.setOption(option2);
}