import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';
const routes: Routes = [
  {
    component:AddUserComponentComponent,
    path:'add-user-component'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
