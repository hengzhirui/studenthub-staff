import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyRequestFormPageRoutingModule } from './company-request-form-routing.module';

import { CompanyRequestFormPage } from './company-request-form.page';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SelectSearchModule } from 'src/app/components/select-search/select-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CKEditorModule,
    SelectSearchModule,
    ReactiveFormsModule,
    CompanyRequestFormPageRoutingModule
  ],
  declarations: [CompanyRequestFormPage]
})
export class CompanyRequestFormPageModule {}
