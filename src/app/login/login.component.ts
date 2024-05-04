import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private dataservice: DataServiceService){}
  userdata:any = [];
  displayToggle = true;
  getdata(data : NgForm) {
    this.userdata = data;
    console.log(this.userdata);
    this.router.navigate(['about']);
    this.dataservice.setname(this.userdata.name);
    console.log(this.dataservice.getname())
  }
  togle(data: any) {
    this.displayToggle = !this.displayToggle;
  }
}
