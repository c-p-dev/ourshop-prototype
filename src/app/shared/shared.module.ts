import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from './materialize/materialize.module';
import { HeaderModule } from './header/header.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    MaterializeModule
  ]
})
export class SharedModule { }
