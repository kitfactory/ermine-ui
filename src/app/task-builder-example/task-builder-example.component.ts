import { Component, OnInit, Inject } from '@angular/core';

import * as Plotly from "plotly.js";

import * as parse from "csv-parse";
import * as fs from "fs";

import {CsvFileService, RocCurveData,ConfusionMatrixData} from '../csv-file.service'

@Component({
  selector: 'app-task-builder-example',
  templateUrl: './task-builder-example.component.html',
  styleUrls: ['./task-builder-example.component.scss']
})


export class TaskBuilderExampleComponent implements OnInit {

  foo: string;
  csvService: CsvFileService;

  constructor(csvService:CsvFileService) { 
    this.foo = "Hello"
    this.csvService = csvService;
  }

  async ngOnInit() {

    console.log("read csv file");

    let p: string = "/Users/naruhide/Documents/workspace/binary_roc.csv";
    let data:RocCurveData = await this.csvService.loadRocCurveCsv(p);


    var trace1:Partial<Plotly.Data> = {
      x: data.tpr,
      y: data.fpr,
      name: "sample1",
      type: 'scatter'
    };

    let xaxis:Partial<Plotly.LayoutAxis> ={
      title: 'True Positive Rate',
      fixedrange: false
    }
    let yaxis:Partial<Plotly.LayoutAxis>={
      title: 'False Positive Rate',
      fixedrange: false
    }

    let layout:Partial<Plotly.Layout> = {
      title: {
        text:'Roc Curve',
        font: {
          size: 24
        },
        xref: 'paper',
        x: 0.05,
      },
      xaxis: xaxis,
      yaxis: yaxis
    };

    var trace: Partial<Plotly.Data>[] = [trace1];
    Plotly.newPlot('plot', trace, layout);  

    let conf_data:ConfusionMatrixData = new ConfusionMatrixData(2,[[10,0],[1,10]]);

    let conf_trace:Partial<Plotly.PlotData>={
      x: ['Class0','Class1'],
      y: ['Class0','Class1'],
      z: [[10,0],[0,10]],
      name: "Conf1",
      type: 'heatmap'
    };

    let conf_xaxis:Partial<Plotly.LayoutAxis> ={
      title: 'Predicted Value',
      fixedrange: true
    }
    let conf_yaxis:Partial<Plotly.LayoutAxis>={
      title: 'Real Value',
      fixedrange: true
    }

    let conf_layout:Partial<Plotly.Layout> = {
      title: {
        text:'Confusion Matrix',
        font: {
          size: 24
        },
      },
      xaxis: conf_xaxis,
      yaxis: conf_yaxis
    };


    Plotly.newPlot('confusion',[conf_trace],conf_layout);
  }

}
