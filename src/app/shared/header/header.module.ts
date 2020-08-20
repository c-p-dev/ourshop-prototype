import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderStripComponent } from './header-strip/header-strip.component';
import { MaterializeModule } from '../materialize/materialize.module';
import { CategoryListComponent } from './category-list/category-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderStripComponent,
    CategoryListComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterializeModule
  ]
})
export class HeaderModule { }
