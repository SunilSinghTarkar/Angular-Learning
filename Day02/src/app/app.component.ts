import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleHighlightDirectiveDirective } from './directives/toggle-highlight-directive.directive';
import { ConditionalDisplayDirectiveDirective } from './directives/conditional-display-directive.directive';
import { ProductsComponent } from './components/products/products.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ToggleHighlightDirectiveDirective,ConditionalDisplayDirectiveDirective,ProductsComponent,ProductComponentComponent, ToDoComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  isParagraphVisible: boolean = true

  onVisibilityChange(isVisible: boolean) {
    this.isParagraphVisible = isVisible;
  }
  
}
