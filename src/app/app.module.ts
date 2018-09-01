import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { AuthModule } from './features/auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './core/fake-backend-interceptor.service';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
