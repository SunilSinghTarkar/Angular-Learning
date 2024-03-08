import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day01';
  pageTitle="Angular Data Binding Practice";

  a:number=4;
  b:number=5;

  imageUrl="https://m.media-amazon.com/images/I/91PxplEkncL._SY466_.jpg";

  disable=false;

  toggleChange(){
   this.disable=!this.disable;
  }

  handleButtonClick(){
    console.log("Hello from handleButtonClick");
  }

  username:string='';

  isError:boolean=true;
}
