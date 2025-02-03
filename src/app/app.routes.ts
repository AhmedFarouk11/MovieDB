import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LatestTrailerrComponent } from './latest-trailerr/latest-trailerr.component';


export const routes: Routes = [
    {path: '', redirectTo:'Home',pathMatch:'full'},
    {path:'Home',component:HomeComponent},
    {path:'Latest_trailer',component:LatestTrailerrComponent},
    {path: 'Trending', component: GalleryComponent},
    {path: '**', component:NotFoundComponent}
];
