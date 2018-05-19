import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Furniture } from '../../models/furniture';

@Injectable()
export class FurnitureService {

  private _URL: string = "http://localhost:8080/shop/";

  constructor(private http: HttpClient) { }


  public createFurniture(furniture: Furniture): Observable<any> {
    return this.http.post(this._URL + "createFurniture", furniture, 
    { headers: { "ContentType": "application/json" }, 
    withCredentials: true });
  }
}
