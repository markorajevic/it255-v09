import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { PostService } from './services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListingComponent } from './pages/post-listing/post-listing.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListingComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
