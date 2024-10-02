import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  title = 'Marine';

  articles: Article[] = [
    {
      id: 1,
      title: 'Les Cappadoces',
      author: 'Topper Harley',
      content: 'Je veux mon chateau à Burj al Babas !',
      image: '/img/turquie.jpg',
      isPublished: true,
      comment: '',
      likes: 200,
    },
    {
      id: 2,
      title: 'Islande',
      author: 'Fernand Naudin',
      content: "i don't speak icelandic !",
      image: '/img/islande.jpg',
      isPublished: true,
      comment: '',
      likes: 75,
    },
    {
      id: 3,
      title: 'Java',
      author: 'Arthur Pendragon',
      content: 'Ou se trouve la chicken church ??!',
      image: '/img/java.jpg',
      isPublished: true,
      comment: '',
      likes: 100,
    },
    {
      id: 4,
      title: 'Singapour',
      author: "Bob L'Eponge",
      content: 'Pandora O_o',
      image: '/img/singapour.jpg',
      isPublished: true,
      comment: '',
      likes: 75,
    },
    {
      id: 5,
      title: 'Canaries',
      author: 'Andrew Steyn',
      content: "L'ascension du Teide sans avoir mal aux pieds !",
      image: '/img/canaries.jpg',
      isPublished: true,
      comment: '',
      likes: 100,
    },
  ];

  get publishedArticles() {
    return this.articles.filter((article) => article.isPublished);
  }

  router: Router = inject(Router);
  goToArticle(articleId: number) {
    this.router.navigate(['/article', articleId]);
  }
}
