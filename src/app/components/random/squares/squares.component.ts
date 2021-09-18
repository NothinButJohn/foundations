import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss']
})
export class SquaresComponent implements OnInit {
  picturesOfSquare$: Observable<any>;
  square$: Observable<any> = new Observable<any>();
  constructor() {
    this.picturesOfSquare$ = of(['../../assets/img.png','../../assets/img_1.png','../../assets/img_2.png'])
    this.square$ = this.picturesOfSquare$.pipe(
      map(squaresArray => {
        return {pictureSource: squaresArray[0], index: 0};
      })
    )
  }

  ngOnInit(): void {
  }
  nextSquare(index: number){
    this.picturesOfSquare$.pipe(
      map(squaresArray => {
        let nextIndex = index+1;
        if(nextIndex == squaresArray.length){
          nextIndex = 0;
          return this.square$ = of({pictureSource: squaresArray[nextIndex], index: 0})
        }else{
          return this.square$ = of({pictureSource: squaresArray[nextIndex], index: nextIndex})
        }
      })
    ).subscribe()
  }
  prevSquare(index: number){
    this.picturesOfSquare$.pipe(
      map(squaresArray => {
        if(index == 0){
          let nextIndex = (squaresArray.length-1);
          return this.square$ = of({pictureSource: squaresArray[nextIndex], index: nextIndex})
        }else{
          let nextIndex = index-1;
          return this.square$ = of({pictureSource: squaresArray[nextIndex], index: nextIndex})
        }
      })
    ).subscribe()
  }
}
