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
import { FormsModule } from '@angular/forms';
import { TopDealsByCategoryComponent } from './components/top-deals-by-category/top-deals-by-category.component';
import { TopDealsHeaderComponent } from './components/top-deals-header/top-deals-header.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopDealsComponent,
    MedicineComponent,
    TopDealsByCategoryComponent,
    TopDealsHeaderComponent,
    MedicineComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
})
export class AppModule {}
