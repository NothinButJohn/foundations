import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersMessengerComponent } from './members-messenger.component';

describe('MembersMessengerComponent', () => {
  let component: MembersMessengerComponent;
  let fixture: ComponentFixture<MembersMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersMessengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
