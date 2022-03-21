import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandidateSalaryListPage } from './candidate-salary-list.page';

describe('CandidateSalaryListPage', () => {
  let component: CandidateSalaryListPage;
  let fixture: ComponentFixture<CandidateSalaryListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateSalaryListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateSalaryListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
