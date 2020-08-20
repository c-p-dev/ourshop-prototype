import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  exports: [
    MatGridListModule,
    MatBadgeModule,
    MatSidenavModule
  ]
})
export class MaterializeModule { }
