import { Component, OnInit } from '@angular/core';
import User from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Client';

  constructor(private accountService: AccountService) 
  {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if(!userString) return; //if the userString is empty it returns false and the return keyword is stopping the function
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }

}
