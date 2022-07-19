import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { PostDetailsComponent } from "./components/post-details/post-details.component";

export const routes: Routes = [
    { path: 'home', component: BlogListComponent },
    { path: 'post/:id', component: PostDetailsComponent },
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: BlogListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})

export class AppRoutingModule {}