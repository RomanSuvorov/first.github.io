import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePictureComponent } from './choose-picture.component';

describe('ChoosePictureComponent', () => {
  let component: ChoosePictureComponent;
  let fixture: ComponentFixture<ChoosePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
