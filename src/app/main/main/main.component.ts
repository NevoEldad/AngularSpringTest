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
  public summary: number;

  constructor(private furnitureService: FurnitureService) {
    this.furniture = new Furniture(null, null, null, null);
    this.summary = null;
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

  public getIncomeSummary() {
    this.furnitureService.getFurniture().subscribe(
      res => {
        this.summary = 0;
        
        res.forEach(furniture => {
          this.summary += furniture.price; 
        });
        
       /*
        for(let furniture of res) {
          this.summary += furniture.price;
        }
        */
       /*
        for( let i = 0, length = res.length; i < length; i ++){
          this.summary += res[i].price;
        }
        */ 
      }
    );
  }

}
