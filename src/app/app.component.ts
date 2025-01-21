import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected this line
})
export class AppComponent {
  title = 'aviation-angular-project';

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Only initialize AOS if in the browser environment
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-out',
        once: true,
      });
    }
  }
}
