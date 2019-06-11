import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.scss']
})

export class ReactiveFormTestComponent implements OnInit {

  imgPath: string;

  constructor() {
    this.imgPath = "";
  }

  ngOnInit() {
  }

  fileChangeEvent(fileInput: any) {
    console.log(fileInput.target.files[0].path);
    this.imgPath = fileInput.target.files[0].path;
  }
}
