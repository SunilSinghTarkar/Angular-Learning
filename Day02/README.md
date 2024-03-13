# Day02

Q1: Toggle Background Color Directive: Create an Angular directive named ToggleHighlightDirective. Implement a toggle functionality where clicking on an element alternates its background color between two predefined colors red and green. Use this directive in your main application component.

Q2: Conditional Display Directive: Develop an Angular directive called ConditionalDisplayDirective. This directive should conditionally display or hide an element based on a boolean input value. Apply this directive to a button that, when clicked, toggles the visibility of a paragraph.

Q3: Use the *ngIf directive to conditionally display a message indicating whether a product is available or not. If a product is available, show a green "Available" message; otherwise, display a red "Not Available" message.


Q4: You are tasked with enhancing the product listing page in an Angular application by adding a search functionality. The goal is to allow users to search for products by their name.

Q5: Create a product component (ProductComponent) that receives a list of products as an input. Each product in the list should have properties like name, price, and availability. Implement dynamic styling for products based on the following criteria: Apply a different background color to products based on their availability. Use green for available products and red for unavailable products. Increase the font size of the product name for products with a price greater than a specified threshold. Display the list of products using the ngFor directive. Use either ngStyle or ngClass directive to apply the dynamic styles. Provide an input field for users to enter the price threshold for font size adjustment.

Q6: You are building a to-do list component having todo items as array of object. Each todo item has a title, a description, and a status (completed or not). Your task is to implement an Angular component to display the list of todo items. Utilize the *ngFor directive to loop through the todo items and display their details. Additionally, use the *ngIf directive to conditionally style the completed and incomplete todo items.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
