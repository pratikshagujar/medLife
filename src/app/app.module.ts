import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Route } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { TopDealsHeaderComponent } from './components/top-deals-header/top-deals-header.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopDealsComponent,
    MedicineComponent,
    TopDealsByCategoryComponent,
    TopDealsHeaderComponent,
    MedicineComponent,
    ViewProductDetailsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
  CoreModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
