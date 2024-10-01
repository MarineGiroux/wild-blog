import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleComponent } from './article/article.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'article/:id', component: ArticleComponent},
    {path:'inscription', component: ContactFormComponent},
    {path: '**', component: NotFoundComponent},
];
