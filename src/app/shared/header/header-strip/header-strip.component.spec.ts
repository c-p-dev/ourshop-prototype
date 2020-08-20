import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStripComponent } from './header-strip.component';

describe('HeaderStripComponent', () => {
  let component: HeaderStripComponent;
  let fixture: ComponentFixture<HeaderStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
