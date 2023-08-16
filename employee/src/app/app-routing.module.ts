import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpListComponent } from "./emp-list/emp-list.component";
import { FilterDeptComponent } from './filter-dept/filter-dept.component';
import { SortAttComponent } from './sort-att/sort-att.component';

const routes: Routes = [
  {path: '', redirectTo:'emp', pathMatch:'full'},
  {path:'emp' , component: EmpListComponent},
  {path:'filter' , component: FilterDeptComponent},
  {path:'sort' , component: SortAttComponent},
  // {path:'dashboard' , component: DashboardComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
