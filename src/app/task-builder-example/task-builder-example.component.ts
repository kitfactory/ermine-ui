import { Component, OnInit } from '@angular/core';

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
  }

}
