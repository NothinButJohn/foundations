import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersNavigationComponent } from './members-navigation.component';

describe('MembersNavigationComponent', () => {
  let component: MembersNavigationComponent;
  let fixture: ComponentFixture<MembersNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
