import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

@NgModule({
  declarations: [SidenavbarComponent, FooternavbarComponent, TopnavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [SidenavbarComponent, FooternavbarComponent, TopnavbarComponent]
})
export class LayoutModule { }
