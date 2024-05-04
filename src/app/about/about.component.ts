import { Component } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name: string = "";
url: any;

  constructor(private dataservice: DataServiceService){

  }

  ngOnInit(): void {
    this.name = this.dataservice.getname();
    console.log(this.name);
  }

  loadFile(event: any) {
    console.log(event)
 
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result;
      }
      console.log("url ",this.url)
    }
  }
  
}
