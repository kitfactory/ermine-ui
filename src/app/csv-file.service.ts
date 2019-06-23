import { Injectable } from '@angular/core';
import { resolveForwardRef } from '@angular/compiler/src/util';

import * as parse from "csv-parse";
import * as fs from "fs";
import { Datum } from 'plotly.js';


export class RocCurveData {
  public fpr: number[];
  public tpr: number[];
  public thresolds: number[];
  public auc:number;

  constructor(tpr:number[], fpr: number[], thresolds:number[], auc:number) {
    this.fpr = fpr;
    this.tpr = tpr;
    this.auc = auc;
    this.thresolds = thresolds;
   }

}

export class ConfusionMatrixData {

  public classes:number;
  public data: number[][];

  constructor(classes:number,data:number[][]){
    this.classes = classes;
    this.data = data;
  }
}

export class PredictionData {
  constructor(){}
}


@Injectable({
  providedIn: 'root'
})
export class CsvFileService {

  constructor() {}

  async loadRocCurveCsv(path:string): Promise<RocCurveData>{
    console.log("load csv file " + path);

    return new Promise(function(resolve, reject){

      const stream:fs.ReadStream = fs.createReadStream(path);
      const parser:parse.Parser = parse({});

      let fpr:number[] = [];
      let tpr:number[] = [];
      let thresolds:number[] = [];
      let auc:number = 0;

      parser.on('readable', function(){
        let record;
        while (record = parser.read()) {
          console.log(record);
          fpr.push(record[1]);
          tpr.push(record[2]);
          thresolds.push(record[3]);
          auc = record[4];
        }
      });

      parser.on('error', function(err){
        console.error(err.message)
        reject();
      });

      parser.on('end', function(){
        console.log("parse csv done");
        stream.close();
        resolve(new RocCurveData(fpr,tpr,thresolds,auc));
      });

      stream.pipe(parser);
    });
  }

  async loadConfusionMatrixCsv(path:string): Promise<ConfusionMatrixData>{
    return new Promise(function(resolve){
      console.log("load csv file " + path);
      resolve(new ConfusionMatrixData(1,[[10,10]]));
    });
  }

  async loadEvaluationCsv(path:string):Promise<PredictionData>{
    console.log("load csv file " + path);
    return new Promise(function(resolve){
      resolve(new PredictionData());
    });
  }
}
