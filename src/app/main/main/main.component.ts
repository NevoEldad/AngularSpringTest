import { Component, OnInit } from '@angular/core';
import { Furniture } from '../../../models/furniture';
import { FurnitureService } from '../../services/furniture.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public furniture: Furniture;

  constructor(private furnitureService: FurnitureService) {
    this.furniture = new Furniture(null, null, null, null);
  }

  ngOnInit() {
  }

  public createFurniture() {

    this.furnitureService.createFurniture(this.furniture).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
