### Angular 名前
ng g component似続けてキャメルケース(CamelCase)を入力しても自動的にケバブケース(kebab-case)に変換される。

### Angular サービス

```
ng g service 

```

app.module.tsのproviders登録

component.tsにて
- importに追加
- constructor引数に追加



### Plotly Confusion Matrix

trace1 = {
  x: ['lying', 'sitting', 'standing', 'people', 'backgroun'], 
  y: ['lying', 'sitting', 'standing', 'people', 'backgroun'], 
  z: [[758, 163, 0, 0, 23], [63, 858, 3, 0, 0], [0, 50, 188, 21, 35], [0, 22, 8, 40, 4], [12, 91, 26, 29, 368]], 
  type: 'heatmap'
};
data = [trace1];
layout = {
  annotations: [
    {
      x: 'lying', 
      y: 'lying', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '758', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'sitting', 
      y: 'lying', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '163', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'standing', 
      y: 'lying', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'people', 
      y: 'lying', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'backgroun', 
      y: 'lying', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '23', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'lying', 
      y: 'sitting', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '63', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'sitting', 
      y: 'sitting', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '858', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'standing', 
      y: 'sitting', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '3', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'people', 
      y: 'sitting', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'backgroun', 
      y: 'sitting', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'lying', 
      y: 'standing', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'sitting', 
      y: 'standing', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '50', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'standing', 
      y: 'standing', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '188', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'people', 
      y: 'standing', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '21', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'backgroun', 
      y: 'standing', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '35', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'lying', 
      y: 'people', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '0', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'sitting', 
      y: 'people', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '22', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'standing', 
      y: 'people', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '8', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'people', 
      y: 'people', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '40', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'backgroun', 
      y: 'people', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '4', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'lying', 
      y: 'backgroun', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '12', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'sitting', 
      y: 'backgroun', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '91', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'standing', 
      y: 'backgroun', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '26', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'people', 
      y: 'backgroun', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '29', 
      xref: 'x1', 
      yref: 'y1'
    }, 
    {
      x: 'backgroun', 
      y: 'backgroun', 
      font: {color: 'white'}, 
      showarrow: false, 
      text: '368', 
      xref: 'x1', 
      yref: 'y1'
    }
  ], 
  title: 'Confusion Matrix', 
  xaxis: {title: 'Predicted value'}, 
  yaxis: {title: 'Real value'}
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});