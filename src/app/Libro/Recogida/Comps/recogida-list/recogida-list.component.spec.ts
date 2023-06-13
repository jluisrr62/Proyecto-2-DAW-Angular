import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecogidaListComponent } from './recogida-list.component';

describe('RecogidaListComponent', () => {
  let component: RecogidaListComponent;
  let fixture: ComponentFixture<RecogidaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecogidaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecogidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
