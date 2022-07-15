import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { PostDetailsComponent } from "./post-details/post-details.component";

const routes: Routes = [
    { path: 'blog-list', component: BlogListComponent },
    { path: 'post-details', component: PostDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}