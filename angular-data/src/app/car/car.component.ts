import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: string;
  parts: string[];
  part: string;
  constructor() {
    this.car = ""
    this.parts = [' viti', ' bulloni', ' ferro']
    this.part = ""
   }

  ngOnInit(): void {
  }

}
