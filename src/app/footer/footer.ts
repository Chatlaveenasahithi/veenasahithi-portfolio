import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',   // <-- fix this file name
  styleUrls: ['./footer.scss']    // make sure this exists
})
export class Footer {}
