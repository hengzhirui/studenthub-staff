import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyWorkPageRoutingModule } from './my-work-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MyWorkPage } from './my-work.page';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    IonicModule,
    MyWorkPageRoutingModule
  ],
  declarations: [MyWorkPage]
})
export class MyWorkPageModule {}
