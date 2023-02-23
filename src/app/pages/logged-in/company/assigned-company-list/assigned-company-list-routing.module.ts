import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignedCompanyListPage } from './assigned-company-list.page';

const routes: Routes = [
  {
    path: '',
    component: AssignedCompanyListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignedCompanyListRoutingModule {}
