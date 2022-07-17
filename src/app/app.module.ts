import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FlutterwaveModule } from 'flutterwave-angular-v3';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    PostDetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FlutterwaveModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
