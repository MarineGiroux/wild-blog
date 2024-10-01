import { Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ArticleComponent } from './component/article/article.component';
import { SignupFormComponent } from './component/signup-form/signup-form.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'article/:id', component: ArticleComponent},
    {path:'inscriptionTemplate', component: ContactFormComponent},
    {path:'inscriptionReactive', component: SignupFormComponent},
    {path: '**', component: NotFoundComponent},
];
