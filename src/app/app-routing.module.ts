import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { PostDetailsComponent } from "./post-details/post-details.component";

const routes: Routes = [
    { path: 'home', component: BlogListComponent },
    { path: 'post-details', component: PostDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: BlogListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}