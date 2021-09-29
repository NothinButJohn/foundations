import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersStudioComponent } from './founders-studio.component';

describe('FoundersStudioComponent', () => {
  let component: FoundersStudioComponent;
  let fixture: ComponentFixture<FoundersStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundersStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundersStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
