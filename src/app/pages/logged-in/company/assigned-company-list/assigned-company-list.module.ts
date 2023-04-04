import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignedCompanyListRoutingModule } from './assigned-company-list-routing.module';

import { AssignedCompanyListPage } from './assigned-company-list.page';
import {LoadingModalModule} from 'src/app/components/loading-modal/loading-modal.module';
import {NoItemsModule} from 'src/app/components/no-items/no-items.module';
import {CompanyModule} from 'src/app/components/company/company.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AssignedCompanyListRoutingModule,
        LoadingModalModule,
        NoItemsModule,
        CompanyModule
    ],
  declarations: [AssignedCompanyListPage]
})
export class AssignedCompanyListModule {}
