import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  cars: string[];
  constructor() {
    this.cars = ['Ruspa', 'Muletto', 'Escavatore', 'Gru', 'Autocarro', 'Dump', 'Bulldozer', 'Rullo', 'Frese', 'Finitrici']
   }

  ngOnInit(): void {
  }

}
