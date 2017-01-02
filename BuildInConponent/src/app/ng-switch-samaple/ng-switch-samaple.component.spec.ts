/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgSwitchSamapleComponent } from './ng-switch-samaple.component';

describe('NgSwitchSamapleComponent', () => {
  let component: NgSwitchSamapleComponent;
  let fixture: ComponentFixture<NgSwitchSamapleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchSamapleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchSamapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
