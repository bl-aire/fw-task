import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FlutterwaveModule } from 'flutterwave-angular-v3';
import { NgxSpinnerModule } from "ngx-spinner";
import { DataService } from './components/_shared/data.service';
import { routes } from './app-routing.module'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    PostDetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FlutterwaveModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
    //ModuleMapLoaderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {

  constructor(){}
}
