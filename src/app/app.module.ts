import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FakeBackendInterceptor } from './core/fake-backend-interceptor.service';
import { TokenInterceptor } from './core/http-token-interceptor.service';
import { AuthModule } from './features/auth/auth.module';
import { HotelModule } from './features/hotel/hotel.module';
import { MuseumModule } from './features/museum/museum.module';

const appRoutes: Routes = [
  // { path: "",  redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HotelModule,
    MuseumModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
