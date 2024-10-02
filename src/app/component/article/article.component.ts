import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RouterLink,
} from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input() article!: Article;

  @Output() dataLikeArticle: EventEmitter <string> = new EventEmitter<string>();

  triggerOutput(){
    this.dataLikeArticle.emit("L'article " + this.article.title + " vient d'être liké")
  }
}
