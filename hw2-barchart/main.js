let myGraph2 = document.getElementById('myGraph2');

let ace1 ={};
ace1.type ="bar";
ace1.name = "七月";
ace1.x = [];
ace1.y = [];

ace1.x[0]= "A2三重站"
ace1.y[0]= A2[0]['count'];
ace1.x[1]= "A3新北產業園區站"
ace1.y[1]= A3[0]['count'];
ace1.x[2]= "A8長庚醫院站"
ace1.y[2]= A8[0]['count'];
ace1.x[3]= "A9林口站"
ace1.y[3]= A9[0]['count'];
ace1.x[4]= "A12機場第一航廈站"
ace1.y[4]= A12[0]['count'];
ace1.x[5]= "A13機場第二航廈站"
ace1.y[5]= A13[0]['count'];
ace1.x[6]= "A18高鐵桃園站"
ace1.y[6]= A18[0]['count'];

ace1.text = ace1.y;
ace1.textfont = {
    color:'white',
    size: 15
};

//for(let i=0;i<animals_Taipei_Zoo.length;i++){
//    trace1.x[i] = animals_Taipei_Zoo[i]['name'];
//    trace1.y[i] = animals_Taipei_Zoo[i]['count'];
//}

let ace2 ={};
ace2.type ="bar";
ace2.name = "八月";
ace2.x = [];
ace2.y = [];

ace2.x[0]= "A2三重站"
ace2.y[0]= A2[1]['count'];
ace2.x[1]= "A3新北產業園區站"
ace2.y[1]= A3[1]['count'];
ace2.x[2]= "A8長庚醫院站"
ace2.y[2]= A8[1]['count'];
ace2.x[3]= "A9林口站"
ace2.y[3]= A9[1]['count'];
ace2.x[4]= "A12機場第一航廈站"
ace2.y[4]= A12[1]['count'];
ace2.x[5]= "A13機場第二航廈站"
ace2.y[5]= A13[1]['count'];
ace2.x[6]= "A18高鐵桃園站"
ace2.y[6]= A18[1]['count'];

ace2.text = ace2.y;
ace2.textfont = {
    color:'white',
    size: 15
};
//for(let i=0;i<animals_Taoyuan_Zoo.length;i++){
//    trace2.x[i] = animals_Taoyuan_Zoo[i]['name'];
//    trace2.y[i] = animals_Taoyuan_Zoo[i]['count'];
//}

let ace3 ={};
ace3.type ="bar";
ace3.name = "九月";
ace3.x = [];
ace3.y = [];

ace3.x[0]= "A2三重站"
ace3.y[0]= A2[2]['count'];
ace3.x[1]= "A3新北產業園區站"
ace3.y[1]= A3[2]['count'];
ace3.x[2]= "A8長庚醫院站"
ace3.y[2]= A8[2]['count'];
ace3.x[3]= "A9林口站"
ace3.y[3]= A9[2]['count'];
ace3.x[4]= "A12機場第一航廈站"
ace3.y[4]= A12[2]['count'];
ace3.x[5]= "A13機場第二航廈站"
ace3.y[5]= A13[2]['count'];
ace3.x[6]= "A18高鐵桃園站"
ace3.y[6]= A18[2]['count'];

ace3.text = ace3.y;
ace3.textfont = {
    color:'white',
    size: 15
};
//for(let i=0;i<animals_Taoyuan_Zoo.length;i++){
//    trace3.x[i] = animals_Taoyuan_Zoo[i]['name'];
//    trace3.y[i] = animals_Taoyuan_Zoo[i]['count'];
//}

let data2 = [];
data2.push(ace1);
data2.push(ace2);
data2.push(ace3);

let layout2 = {
    margin:{
        t:50
    },
    barmode: 'stack',
    title:'112年7-9月桃園機場捷運重點站平均日運量累積長條圖'
};
Plotly.newPlot(myGraph2, data2, layout2);