let myGraph = document.getElementById('myGraph');

let trace1 ={};
trace1.type ="bar";
trace1.name = "七月";
trace1.x = [];
trace1.y = [];

trace1.x[0]= "A2三重站"
trace1.y[0]= A2[0]['count'];
trace1.x[1]= "A3新北產業園區站"
trace1.y[1]= A3[0]['count'];
trace1.x[2]= "A8長庚醫院站"
trace1.y[2]= A8[0]['count'];
trace1.x[3]= "A9林口站"
trace1.y[3]= A9[0]['count'];
trace1.x[4]= "A12機場第一航廈站"
trace1.y[4]= A12[0]['count'];
trace1.x[5]= "A13機場第二航廈站"
trace1.y[5]= A13[0]['count'];
trace1.x[6]= "A18高鐵桃園站"
trace1.y[6]= A18[0]['count'];

trace1.text = trace1.y;
trace1.textfont = {
    color:'white',
    size: 20
};

//for(let i=0;i<animals_Taipei_Zoo.length;i++){
//    trace1.x[i] = animals_Taipei_Zoo[i]['name'];
//    trace1.y[i] = animals_Taipei_Zoo[i]['count'];
//}

let trace2 ={};
trace2.type ="bar";
trace2.name = "八月";
trace2.x = [];
trace2.y = [];

trace1.x[0]= "A2三重站"
trace1.y[0]= A2[1]['count'];
trace1.x[1]= "A3新北產業園區站"
trace1.y[1]= A3[1]['count'];
trace1.x[2]= "A8長庚醫院站"
trace1.y[2]= A8[1]['count'];
trace1.x[3]= "A9林口站"
trace1.y[3]= A9[1]['count'];
trace1.x[4]= "A12機場第一航廈站"
trace1.y[4]= A12[1]['count'];
trace1.x[5]= "A13機場第二航廈站"
trace1.y[5]= A13[1]['count'];
trace1.x[6]= "A18高鐵桃園站"
trace1.y[6]= A18[1]['count'];

trace2.text = trace2.y;
trace2.textfont = {
    color:'white',
    size: 20
};
//for(let i=0;i<animals_Taoyuan_Zoo.length;i++){
//    trace2.x[i] = animals_Taoyuan_Zoo[i]['name'];
//    trace2.y[i] = animals_Taoyuan_Zoo[i]['count'];
//}

let trace3 ={};
trace3.type ="bar";
trace3.name = "九月";
trace3.x = [];
trace3.y = [];

trace1.x[0]= "A2三重站"
trace1.y[0]= A2[2]['count'];
trace1.x[1]= "A3新北產業園區站"
trace1.y[1]= A3[2]['count'];
trace1.x[2]= "A8長庚醫院站"
trace1.y[2]= A8[2]['count'];
trace1.x[3]= "A9林口站"
trace1.y[3]= A9[2]['count'];
trace1.x[4]= "A12機場第一航廈站"
trace1.y[4]= A12[2]['count'];
trace1.x[5]= "A13機場第二航廈站"
trace1.y[5]= A13[2]['count'];
trace1.x[6]= "A18高鐵桃園站"
trace1.y[6]= A18[2]['count'];

trace3.text = trace3.y;
trace3.textfont = {
    color:'white',
    size: 20
};
//for(let i=0;i<animals_Taoyuan_Zoo.length;i++){
//    trace3.x[i] = animals_Taoyuan_Zoo[i]['name'];
//    trace3.y[i] = animals_Taoyuan_Zoo[i]['count'];
//}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {
    margin:{
        t:50
    },
    barmode: 'stack',
    title:'112年7-9月桃園機場捷運重點站流量統計累積長條圖'
};
Plotly.newPlot(myGraph, data, layout);