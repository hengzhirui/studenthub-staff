import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncompleteCandidateListPage } from './incomplete-candidate-list.page';

const routes: Routes = [
  {
    path: ':segment',
    component: IncompleteCandidateListPage
  },{
    path: '',
    component: IncompleteCandidateListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncompleteCandidateListPageRoutingModule {}
