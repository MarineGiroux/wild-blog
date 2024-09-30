export class Article{
    id: number;
    title: string;
    author: string; 
    content: string; 
    image: string;
    isPublished: boolean; 
    comment: string; 
    likes: number; 


    constructor(id: number,title:string, author: string, content: string, image: string, isPublished: boolean, comment:string,likes:number  ){
        this.id = id;
        this.title = title;
        this.author = author;
        this.content = content;
        this.image = image;
        this.isPublished = isPublished;
        this.comment = comment;
        this.likes = likes;
    }

}

export const articles: Article[] = [
    { 
      id:1,
      title: 'Les Cappadoces', 
      author: 'Topper Harley', 
      content: 'Les plus beaux paysages de Turquie', 
      image: '/img/turquie.jpg',
      isPublished: true, 
      comment: '', 
      likes: 200 
    },
    { 
      id:2,
      title: 'Islande', 
      author: 'Fernand Naudin', 
      content: 'Quand voir des aurores boréales', 
      image: '/img/islande.jpg',
      isPublished: true, 
      comment: '', 
      likes: 75 
    },
    { 
      id:3,
      title: 'Java', 
      author: 'Arthur Pendragon', 
      content: 'Ou se trouve la chicken church ??!', 
      image: '/img/java.jpg',
      isPublished: true, 
      comment: '', 
      likes: 100 
    },
    { 
      id:4,
      title: 'Singapour', 
      author: 'Bob L\'Eponge', 
      content: 'un petit air de Pandora ?', 
      image: '/img/singapour.jpg',
      isPublished: true, 
      comment: '', 
      likes: 75 
    },
    { 
      id:5,
      title: 'Canaries', 
      author: 'Andrew Steyn', 
      content: 'monter le Teide sans avoir mal aux pieds !', 
      image: '/img/canaries.jpg',
      isPublished: true, 
      comment: '', 
      likes: 100 
    }
  ];

  export function getArticleById(id:number):Article | undefined{

    return articles.find((article) => article.id === id);

  }