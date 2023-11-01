let myGraph = document.getElementById('myGraph');

let trace1  ={};
trace1.type ="pie";
trace1.title = "民國96年"
trace1.labels = [];
trace1.values = [];
trace1.domain = {
    row:0,
    column:0
};
trace1.hole =0.5;

for(let x=0; x<evaluation_ratio_96.length; x++){
    trace1.labels[x] = evaluation_ratio_96[x]['name'];
    trace1.values[x] = evaluation_ratio_96[x]['count'];
}

let trace2  ={};
trace2.type ="pie";
trace2.title = "民國101年"
trace2.labels = [];
trace2.values = [];
trace2.domain = {
    row:0,
    column:1
};
trace2.hole =0.5;

for(let x=0; x<evaluation_ratio_101.length; x++){
    trace2.labels[x] = evaluation_ratio_101[x]['name'];
    trace2.values[x] = evaluation_ratio_101[x]['count'];
}

let trace3  ={};
trace3.type ="pie";
trace3.title = "民國106年"
trace3.labels = [];
trace3.values = [];
trace3.domain = {
    row:1,
    column:0
};
trace3.hole =0.5;

for(let x=0; x<evaluation_ratio_106.length; x++){
    trace3.labels[x] = evaluation_ratio_106[x]['name'];
    trace3.values[x] = evaluation_ratio_106[x]['count'];
}

let trace4  ={};
trace4.type ="pie";
trace4.title = "民國111年"
trace4.labels = [];
trace4.values = [];
trace4.domain = {
    row:1,
    column:1
};
trace4.hole =0.5;

for(let x=0; x<evaluation_ratio_111.length; x++){
    trace4.labels[x] = evaluation_ratio_111[x]['name'];
    trace4.values[x] = evaluation_ratio_111[x]['count'];
}


let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);

let layout = {
    margin:{
        t:50,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    }
};
Plotly.newPlot(myGraph, data, layout);