import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { NavigationService } from '../navigation.service';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
 
  constructor(public navigationService: NavigationService) {
    this.user = {
      name: '',
      email: '',
      memberSince: '',
      pwd: '',
      cpwd:'',
    };
  }
 
  ngOnInit(): void {
    this.user = JSON.parse(this.navigationService.getUser());
  }
}