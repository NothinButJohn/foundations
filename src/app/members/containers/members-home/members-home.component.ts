import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-members-home',
  templateUrl: './members-home.component.html',
  styleUrls: ['./members-home.component.scss']
})
export class MembersHomeComponent implements OnInit {
  valentinoImage$: Observable<any>;
  constructor() {
    this.valentinoImage$ = of([
      '../../assets/valentino/01-valentino_woman-act-fw2122_1080x1350.jpg',
      '../../assets/valentino/02-valentino_woman-act-fw2122_1080x1350.jpg',
      '../../assets/valentino/03-valentino_woman-act-fw2122_1080x1350.jpg',
      '../../assets/valentino/04-valentino_woman-act-fw2122_1080x1350.jpg',
      '../../assets/valentino/fallSkirt.webp',
      '../../assets/valentino/valentinoCoat.webp',
      '../../assets/valentino/valentinoLongCoatIntarsiaCompactDrap.webp',
      '../../assets/valentino/valentinoPoplinEspiritShirt.webp',
      '../../assets/valentino/valentinoRomanPalazzoFall21_1.jpg',
      '../../assets/valentino/valentinoRomanPalazzoFall21_2.jpg',
      '../../assets/valentino/valentinoRomanPalazzoFall21_3.jpg',
      '../../assets/valentino/valentinoRomanPalazzoFall21_4.jpg',
      '../../assets/valentino/valentinoShirtsBlousesFall.webp',
      '../../assets/valentino/valentinoSweater.webp',
      '../../assets/valentino/ValentinoVestInWoolPolyamide.webp',
    ]);
  }

  ngOnInit(): void {
  }

}
