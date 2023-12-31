let myGraph = document.getElementById('myGraph');

let trace1 ={};
trace1.mode ="lines+markers+text";
trace1.type ="scatter";
trace1.name ="民國109年";
trace1.visible = true;
trace1.marker ={
    size:10
}
trace1.x =[];
trace1.y =[];
trace1.text =[];
trace1.textposition ="bottom center";
trace1.textfont = {
    family:"Raleway, sans-serif",
    size:10
};

for(let i=0;i<set1.length;i++){
    trace1.x[i] =set1[i][0];
    trace1.y[i] =set1[i][1];
    trace1.text[i] = set1[i][1];
}

let trace2 ={};
trace2.mode ="lines+markers+text";
trace2.type ="scatter";
trace2.name ="民國110年";
trace2.visible = false;
trace2.marker ={
    size:10
}
trace2.x =[];
trace2.y =[];
trace2.text =[];
trace2.textposition ="bottom center";
trace2.textfont = {
    family:"Raleway, sans-serif",
    size:10
};

for(let i=0;i<set2.length;i++){
    trace2.x[i] =set2[i][0];
    trace2.y[i] =set2[i][1];
    trace2.text[i] = set2[i][1];
}

let trace3 ={};
trace3.mode ="lines+markers+text";
trace3.type ="scatter";
trace3.name ="民國111年";
trace3.visible = false;
trace3.marker ={
    size:10
}
trace3.x =[];
trace3.y =[];
trace3.text =[];
trace3.textposition ="bottom center";
trace3.textfont = {
    family:"Raleway, sans-serif",
    size:10
};


for(let i=0;i<set3.length;i++){
    trace3.x[i] =set3[i][0];
    trace3.y[i] =set3[i][1];
    trace3.text[i] = set3[i][1];
}

let data =[];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout ={
    margin:{
        t:50
    },
    xaxis:{
        range:[0,13]
    },
    yaxis:{
        range:[0,65000]
    },
    title:'新竹市109-111年各月份一般旅館客房住用數折線圖',
    updatemenus:[
        {
            y:1.3,
            x:0.12,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false, false]],
                    label:'民國109年'
                },
                {
                    method:'restyle',
                    args:['visible',[false, true, false]],
                    label:'民國110年'
                },
                {
                    method:'restyle',
                    args:['visible',[false, false, true]],
                    label:'民國111年'
                },
                {
                    method:'restyle',
                    args:['visible',[true, true, true]],
                    label:'所有年份'
                }
                
            ]
        }
    ]

};

Plotly.newPlot(myGraph, data, layout);
