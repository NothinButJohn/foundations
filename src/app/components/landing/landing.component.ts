import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],

})
export class LandingComponent implements OnInit {
  darkTheme = false;
  constructor(private dialog: MatDialog) { }
  stars = new Array(20);
  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(SignInComponent)
  }

}

@Component({
  selector: 'signin-dialog',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }
}
