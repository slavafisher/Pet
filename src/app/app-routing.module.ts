import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './table/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },

  {
    path: 'table',
    component: TableComponent,
    // children: [
    //   { path: ':id', component: UserComponent },
    //   { path: ':id/:name', component: UserComponent },
    //   { path: ':id/:name/:username', component: UserComponent },
    //   { path: ':id/:name/:username/:adress', component: UserComponent },
    //   { path: ':id/:name/:username/:adress/:email', component: UserComponent },
    // ],
  },
  { path: 'table/:id/:username', component: UserComponent },

  {
    path: 'works',
    component: MyWorksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
