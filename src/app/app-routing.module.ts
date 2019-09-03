import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListingComponent } from './pages/post-listing/post-listing.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';


const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: PostListingComponent },
  { path: 'articles/:id', component: SinglePostComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
