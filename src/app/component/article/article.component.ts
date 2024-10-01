import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route, Router, RouterLink } from '@angular/router';
import { Article, getArticleById } from '../../models/article.model';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  article!: Article;
  router: Router = inject(Router);

  ngOnInit(): void {
  
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      try{
        this.article = getArticleById(this.articleId);
      }catch(error){
        this.router.navigate(['/**']);
      }
    });

  }

  
}
