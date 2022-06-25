import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTepalolUploaderComponent } from './ngx-tepalol-uploader.component';

describe('NgxTepalolUploaderComponent', () => {
  let component: NgxTepalolUploaderComponent;
  let fixture: ComponentFixture<NgxTepalolUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTepalolUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTepalolUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
