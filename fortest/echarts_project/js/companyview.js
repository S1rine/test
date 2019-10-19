var DATA = [{
    name: '类别1',
    value: 170
}, {
    name: '类别2',
    value: 54
}, {
    name: '类别3',
    value: 32
}, {
    name: '类别4',
    value: 79
}, {
    name: '类别5',
    value: 80
}];

function companyview() {
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

function timeOfToday() {
    var mydateInput = document.getElementById("time");
    var date = new Date();
    var dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    mydateInput.value = dateString;
}