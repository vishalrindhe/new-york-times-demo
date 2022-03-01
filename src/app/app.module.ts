import { CarouselComponent } from './pages/carousel/carousel.component';
// import { NavbarModule } from './pages/navbar/navbar.module';
// import { DashboardModule } from './pages/dashboard/dashboard.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './pages/navbar/navbar.component';

// font awesome
// import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { LiveComponent } from './pages/live/live.component';
import { SlicePipe } from './pipes/slice.pipe';
import { SideBarToCarouselComponent } from './pages/side-bar-to-carousel/side-bar-to-carousel.component';
import { BelowCarouselComponent } from './pages/below-carousel/below-carousel.component';
import { MenuBarComponent } from './pages/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CarouselComponent,
    LiveComponent,
    SlicePipe,
    SideBarToCarouselComponent,
    BelowCarouselComponent,
    MenuBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DashboardModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    // NavbarModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
