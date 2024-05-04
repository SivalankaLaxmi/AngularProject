import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  name: string = "";
  constructor() { }

  setname(name: string) {
    this.name = name;
    console.log("name: ",name);
  }
  getname() {
    return this.name;
  }
}
