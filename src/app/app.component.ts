import { Component, HostListener, ɵɵsyntheticHostListener } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, RouterModule, AboutComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aviation-angular-project';
  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}


