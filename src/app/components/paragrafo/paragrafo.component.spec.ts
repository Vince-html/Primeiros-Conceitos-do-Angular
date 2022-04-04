import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagrafoComponent } from './paragrafo.component';

describe('ParagrafoComponent', () => {
  let component: ParagrafoComponent;
  let fixture: ComponentFixture<ParagrafoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagrafoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagrafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
