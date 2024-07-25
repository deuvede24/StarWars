# StarWarsProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

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

## To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Star Wars Fleet Project - Level 1

## Description

This project is a web application based on Angular that allows users to register, log in, and explore a list of starships from the Star Wars universe. The application includes an authentication and authorization system using JSON Server and JSON Server Auth to manage users. Only registered and logged-in users can access the list of starships and the details of each one.

## Project Features

- **User Registration**: Users can register with a unique email. The system validates that no users have the same email.
- **User Login**: Users can log in with their registered credentials.
- **Route Protection**: Only logged-in users can access the starships list and the details of each starship.
- **Redirection**: If an unauthenticated user tries to access a protected route, they will be redirected to the login page.

This project provides a solid foundation for a Star Wars starship management application, ensuring that only authenticated users can access the critical functionalities of the application.

### Exercises (1-7):

1. **Project Structure**:

   - Initial setup of the Angular project.
   - Creation of basic components for the application.

2. **Routing**:

   - Configuration of main routes (Home, Login, Register, Starships).

3. **User Interface**:

   - Design of the user interface with CSS and Bootstrap.
   - Implementation of a responsive design.

4. **Registration Form**:

   - Creation of the registration form.
   - Frontend data validation.

5. **Login Form**:

   - Creation of the login form.
   - Frontend data validation.

6. **Integration with JSON Server**:

   - Configuration of JSON Server to simulate a REST API.
   - Creation of the `db.json` file to store users.

7. **Authentication and Authorization**:
   - Implementation of JSON Server Auth for authentication with JWT.
   - Route protection so that only logged-in users can access certain pages(Starships & Starships Details).
   - Redirection to login if an unauthenticated user tries to access protected content.

## Technologies Used

- **Angular**: Main framework for the development of the application.
- **Bootstrap**: CSS framework for responsive design.
- **JSON Server**: Simulates a REST API to manage data.
- **JSON Server Auth**: Extension to manage authentication and authorization with JSON Web Tokens (JWT).

## Installation and Configuration

### Prerequisites

- Node.js and npm installed on your machine.

### Installation Steps

1. Clone the project repository:

   ```bash
   git clone https://github.com/your_username/your_repository.git
   cd your_repository

   ```

2. Install project dependencies:

   ```bash
   npm install

   ```

3. Install JSON Server and JSON Server Auth:

   ```bash
   npm install -D json-server@0.17.4 json-server-auth
   ```

4. Create the db.json file in the root of the project with the following content::

   ```bash

   {
    "users": []
   }
   ```

5. Start the backend with JSON Server Auth:

   ```bash
   npx json-server-auth db.json
   ```

6. Start the Angular application:

   ```bash
   ng serve
   ```
