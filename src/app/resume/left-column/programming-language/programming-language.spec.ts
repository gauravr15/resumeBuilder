import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLanguage } from './programming-language';

describe('ProgrammingLanguage', () => {
  let component: ProgrammingLanguage;
  let fixture: ComponentFixture<ProgrammingLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
