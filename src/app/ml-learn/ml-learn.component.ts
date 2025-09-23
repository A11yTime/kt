import { Component, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ml-learn',
  imports: [RouterModule],
  templateUrl: './ml-learn.component.html',
  styleUrl: './ml-learn.component.css'
})
export class MlLearnComponent implements AfterViewInit {
    constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Use setTimeout to wait for the view to fully render
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    });
  }

}
