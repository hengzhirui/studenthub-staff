import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncompleteCandidateListPageRoutingModule } from './incomplete-candidate-list-routing.module';

import { IncompleteCandidateListPage } from './incomplete-candidate-list.page';
import {LoadingModalModule} from 'src/app/components/loading-modal/loading-modal.module';
import {NoItemsModule} from 'src/app/components/no-items/no-items.module';
import { CandidateModule } from 'src/app/components/candidate/candidate.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CandidateModule,
        IncompleteCandidateListPageRoutingModule,
        LoadingModalModule,
        NoItemsModule
    ],
  declarations: [IncompleteCandidateListPage]
})
export class IncompleteCandidateListPageModule {}
