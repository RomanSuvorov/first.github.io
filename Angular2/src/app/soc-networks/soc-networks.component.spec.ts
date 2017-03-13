import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocNetworksComponent } from './soc-networks.component';

describe('SocNetworksComponent', () => {
  let component: SocNetworksComponent;
  let fixture: ComponentFixture<SocNetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocNetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
