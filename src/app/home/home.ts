import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // import this

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],   // add here to use routerLink in template
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  // your code here
}
