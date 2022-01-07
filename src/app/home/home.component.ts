import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userListData: any;
  firstName: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeList()
  }

  getEmployeeList(){
    this.userService.all().subscribe(res => {
      this.userListData = res;
    }
    )
  }
  search() {
    console.log()
    if (this.firstName == "") {
      this.getEmployeeList();
    } else {
      this.userService.filterCreate(this.firstName)
        .subscribe
        (
          data => {
            this.userListData = data;
          }
        )
    }
  }

  sort(){
    this.userService.sort()
        .subscribe
        (
          data => {
            this.userListData = data;
          }
        )
  }

}
