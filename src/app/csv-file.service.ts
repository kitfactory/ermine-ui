import { Injectable } from '@angular/core';
import { resolveForwardRef } from '@angular/compiler/src/util';

import * as parse from "csv-parse";
import * as fs from "fs";


@Injectable({
  providedIn: 'root'
})

export class RocCurveData {
  constructor() {}
}

export class ConfusionMatrixData {
  constructor(){}
}

export class PredictionData {
  constructor(){}
}

export class CsvFileService {

  constructor() {}

  static async loadRocCurveCsv(path:string): Promise<RocCurveData>{
    return new Promise(function(resolve){

      data:[] = [];

      const stream:fs.ReadStream = fs.createReadStream(path);
      const parser:parse.Parser = parse({});
      
  

      resolve(new RocCurveData());
    });
  }

  static async loadConfusionMatrixCsv(path:string): Promise<ConfusionMatrixData>{
    return new Promise(function(resolve){
      resolve(new RocCurveData());
    });
  }

  static async loadEvaluationCsv(path:string):Promise<PredictionData>{
    return new Promise(function(resolve){
      resolve(new PredictionData());
    });
  }
}
