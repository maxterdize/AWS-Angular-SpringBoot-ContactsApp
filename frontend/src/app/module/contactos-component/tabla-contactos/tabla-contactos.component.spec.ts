import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaContactosComponent } from './tabla-contactos.component';

describe('TablaContactosComponent', () => {
  let component: TablaContactosComponent;
  let fixture: ComponentFixture<TablaContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
