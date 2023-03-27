import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosadmComponent } from './serviciosadm.component';

describe('ServiciosadmComponent', () => {
  let component: ServiciosadmComponent;
  let fixture: ComponentFixture<ServiciosadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
