import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { UppercaseDirective } from './uppercase.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HighlightDirective,UppercaseDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day01';

  items =["apple","banana","orange","grapes","mango"];
}
