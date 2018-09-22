import { Component, OnInit } from '@angular/core';
import { HttpService } from "../service/service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:any;
  constructor(private ser:HttpService) { }

  ngOnInit() {
     this.ser.getUserAllData().subscribe(d=> {
      this.userList =  d;
  });;
  }
}
