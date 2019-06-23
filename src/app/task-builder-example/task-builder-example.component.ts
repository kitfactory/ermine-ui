import { Component, OnInit } from '@angular/core';

import * as Plotly from "plotly.js";

import * as parse from "csv-parse";
import * as fs from "fs";

@Component({
  selector: 'app-task-builder-example',
  templateUrl: './task-builder-example.component.html',
  styleUrls: ['./task-builder-example.component.scss']
})


export class TaskBuilderExampleComponent implements OnInit {

  foo: string

  constructor() { 
    this.foo = "Hello"
  }

  ngOnInit() {

    console.log("read csv file");
    data:[] = [];

    const stream:fs.ReadStream = fs.createReadStream("/Users/naruhide/Documents/workspace/binary_roc.csv");
    const parser:parse.Parser = parse({});
    

    let fpr = [];
    let tpr = [];
    
    parser.on('readable', function(){
      let record;
      while (record = parser.read()) {
        console.log(record);
        fpr.push(record[1]);
        tpr.push(record[2]);
        // data.push(record);
      }
    })
    // Catch any error
    parser.on('error', function(err){
      console.error(err.message)
    })
    // When we are done, test that the parsed output matched what expected
    parser.on('end', function(){
      console.log("parse csv");
      stream.close();
      var trace1:Partial<Plotly.Data> = {
        x: fpr,
        y: tpr,
        name: "sample1",
        type: 'scatter'
      };
  
      var data: Partial<Plotly.Data>[] = [trace1];
      Plotly.newPlot('plot', data);  
    })

    stream.pipe(parser)

  }

}
