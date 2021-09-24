import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FilterPipe } from '../filter.pipe';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { TableComponent } from './table.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [TableComponent, FilterPipe, UserComponent],
  exports: [TableComponent],
  imports: [
    FormsModule,
    InfiniteScrollModule,
    TranslateModule,
    RouterModule,
    CommonModule,
  ],
})
export class TablesModule {}
