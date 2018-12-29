import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsUserComponent } from './tweets-user.component';

describe('TweetsUserComponent', () => {
  let component: TweetsUserComponent;
  let fixture: ComponentFixture<TweetsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
