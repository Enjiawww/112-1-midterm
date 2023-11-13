let myGraph3 = document.getElementById('myGraph3');

let race1  ={};
race1.type ="pie";
race1.title = "民國96年"
race1.labels = [];
race1.values = [];
race1.domain = {
    row:0,
    column:0
};
race1.hole =0.5;

for(let x=0; x<evaluation_ratio_96.length; x++){
    race1.labels[x] = evaluation_ratio_96[x]['name'];
    race1.values[x] = evaluation_ratio_96[x]['count'];
}

let race2  ={};
race2.type ="pie";
race2.title = "民國101年"
race2.labels = [];
race2.values = [];
race2.domain = {
    row:0,
    column:1
};
race2.hole =0.5;

for(let x=0; x<evaluation_ratio_101.length; x++){
    race2.labels[x] = evaluation_ratio_101[x]['name'];
    race2.values[x] = evaluation_ratio_101[x]['count'];
}

let race3  ={};
race3.type ="pie";
race3.title = "民國106年"
race3.labels = [];
race3.values = [];
race3.domain = {
    row:1,
    column:0
};
race3.hole =0.5;

for(let x=0; x<evaluation_ratio_106.length; x++){
    race3.labels[x] = evaluation_ratio_106[x]['name'];
    race3.values[x] = evaluation_ratio_106[x]['count'];
}

let race4  ={};
race4.type ="pie";
race4.title = "民國111年"
race4.labels = [];
race4.values = [];
race4.domain = {
    row:1,
    column:1
};
race4.hole =0.5;

for(let x=0; x<evaluation_ratio_111.length; x++){
    race4.labels[x] = evaluation_ratio_111[x]['name'];
    race4.values[x] = evaluation_ratio_111[x]['count'];
}


let data3 = [];
data3.push(race1);
data3.push(race2);
data3.push(race3);
data3.push(race4);

let layout3 = {
    margin:{
        t:50,
        l:0,
    },
    grid:{
        rows:2,
        columns:2,
    },
    title:'桃園市人口比率圓餅圖(按性別與三階段年齡別分)'

};
Plotly.newPlot(myGraph3, data3, layout3);