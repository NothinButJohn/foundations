import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersHomeComponent } from './members-home.component';

describe('MembersHomeComponent', () => {
  let component: MembersHomeComponent;
  let fixture: ComponentFixture<MembersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
