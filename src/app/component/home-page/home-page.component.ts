import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { articles } from '../../models/article.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  title = 'Marine';
  

  get publishedArticles() {
    return articles.filter(article => article.isPublished);
  }

  router: Router = inject(Router);
  goToArticle(articleId: number) {
    this.router.navigate(['/article', articleId]);
  }
  
}
