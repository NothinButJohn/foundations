import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-founders-studio',
  templateUrl: './founders-studio.component.html',
  styleUrls: ['./founders-studio.component.scss']
})
export class FoundersStudioComponent implements OnInit {
  sidenavClosed: Observable<boolean> = of(true);
  constructor() { }

  ngOnInit(): void {
  }

  sidenavStateChange() {
    this.sidenavClosed = this.sidenavClosed.pipe(
      map((bool) => {
        return !bool;
      })
    )
  }

}
