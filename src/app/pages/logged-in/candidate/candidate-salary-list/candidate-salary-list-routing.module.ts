import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateSalaryListPage } from './candidate-salary-list.page';

const routes: Routes = [
  {
    path: ':candidate_id',
    component: CandidateSalaryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateSalaryListPageRoutingModule {}
