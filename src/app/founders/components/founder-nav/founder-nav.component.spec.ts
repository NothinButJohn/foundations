import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderNavComponent } from './founder-nav.component';

describe('FounderNavComponent', () => {
  let component: FounderNavComponent;
  let fixture: ComponentFixture<FounderNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FounderNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FounderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
