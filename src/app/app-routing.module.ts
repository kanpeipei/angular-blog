import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { WriteComponent } from './components/write/write.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  {path: '', component: ListComponent, data: {animation: 'ListPage'}},
  {path: 'write', component: WriteComponent},
  {path: 'detail/:id', component: DetailComponent, data: {animation: 'DetailPage'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
