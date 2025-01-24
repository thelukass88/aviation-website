import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  imports: [CommonModule],
})
export class NewsComponent {
  newsList = [
    {
      image: '/assets/news-1.jpg',
      title: 'Breaking News 1',
      description: 'Description of the first news item.',
    },
    {
      image: '/assets/news-2.jpg',
      title: 'Breaking News 2',
      description: 'Description of the second news item.',
    },
    {
      image: '/assets/news-3.jpg',
      title: 'Breaking News 3',
      description: 'Description of the third news item.',
    },
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.newsList.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.newsList.length) % this.newsList.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}


