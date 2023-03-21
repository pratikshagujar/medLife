import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineComponent } from './components/medicine/medicine.component';

import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
 {path:"home",component:HomeComponent},
 {path:"top-deals-by-category",component:TopDealsByCategoryComponent},
 {path:"medicine",component:MedicineComponent},
 {path:"",redirectTo:"/home",pathMatch:"full"},
 {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
