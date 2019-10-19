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
    value: 88
}];

function companyview() {
    // var data = [70, 54, 32, 79, 88];
    //  var datas = document.getElementById("form-area");
    //  var dataA = datas.getElementsByClassName("form-item");
    //  var item1 = dataA[0].getElementsByTagName("input")[0].value;
    //  var item2 = dataA[1].getElementsByTagName("select")[0].value;
    //  data[item2 - 1]++;
    // var data = [];
    // var dataitem = {
    //     value: "",
    //     name: ""
    // };
    // for (var i = 0; i < DATA.length; i++) {

    // }
    console.log(document.getElementById("view-main"));
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
            //[
            //     {
            //         value: data[0],
            //         name: '类别1'
            //     },
            //     {
            //         value: data[1],
            //         name: '类别2'
            //     },
            //     {
            //         value: data[2],
            //         name: '类别3'
            //     },
            //     {
            //         value: data[3],
            //         name: '类别4'
            //     },
            //     {
            //         value: data[4],
            //         name: '类别5'
            //     },
            // ],
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