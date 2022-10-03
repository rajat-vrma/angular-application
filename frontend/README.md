<div  align="center">
<a  href="https://innostax.com/">  <img  src="https://i2.wp.com/innostax.com/wp-content/uploads/2021/06/Innostax_-logo_edited.png?resize=400%2C82&ssl=1"  alt="Logo"  width="100%">
</a>
</div>

<br>
<br>

<div align="center">

![Tavajs License]([https://img.shields.io/npm/l/dev-tava](https://img.shields.io/npm/l/dev-tava))
![Tavajs Version]([https://img.shields.io/npm/v/dev-tava](https://img.shields.io/npm/v/dev-tava))
![Tavajs Release]([https://img.shields.io/badge/release-2022-orange](https://img.shields.io/badge/release-2021-orange))
![Tavajs Downloads]([https://img.shields.io/npm/dw/dev-tava](https://img.shields.io/npm/dw/dev-tava))
![Tavajs Stars]([https://img.shields.io/badge/stars-4.5k-blue](https://img.shields.io/badge/stars-4.5k-blue))
![Tavajs Language]([https://img.shields.io/badge/javascript-70%25-green](https://img.shields.io/badge/javascript-70%25-green))
![Tavajs CI]([https://img.shields.io/badge/CI-passing-green](https://img.shields.io/badge/CI-passing-green))

</div>
<div id="top"></div>

<h1 align="center">angular</h1>

## About The Project
  
[Angular][Angular-url] is a JavaScript framework that is ideal for creating impressive apps.
It builds on top of standard HTML, CSS & JavaScript, and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.

## Code scaffolding

  
Run `ng generate component component-name` to generate a new component. 
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

**Example**: for module generation: `ng generate module module-name --flat --module=app`
`--flat`: Create the new files at the top level of the current project.
`--module`: The declaring NgModule. `Aliases:  -m`

> [Angular.io/cli/generate][Angular-generate]

<div id="features"></div>

## FEATURES:
<ul>
	
	
	<li><a href="#ngrx"> Ngrx Service</a></li>
	<li><a href="#theme"> Theme Service</a></li>
	
	
	
	
	<li><a href="#mongoose">MONGOOSE db service</a></li>
	
</ul>  

### Built with:

<a  href="https://nodejs.org"  target="_blank">  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"  alt="nodejs"  width="100"  height="100"/>  </a> <a  href=[Angular-url] target="_blank">  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" width="100" alt="Angularjs" />
 </a> <a  href="https://getbootstrap.com"  target="_blank">  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"  alt="bootstrap"  width="100"  height="100"/>  </a></p>
### Services:

<p  align="left">

<a  href="https://www.mongodb.com/"  target="_blank">  <img  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"  alt="mongodb"  width="100"  height="100"/>  </a>  

 

<a  href="https://karma-runner.github.io/latest/index.html"  target="_blank">  <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/karma/karma-original.svg"  alt="Karma"  width="100"  height="100"/>  </a>






<p align="left">
<a href="[Docker-link]([Docker-link])" target="_blank"><img src="[Docker-icon]([Docker-link])" alt="docker" width="100" height="100"/></a>
<a href="[Mongodb-link]([Mongodb-link])" target="_blank"><img src="[Mongodb-icon]([Mongodb-icon])" alt="mongodb" width="100" height="100"/></a>
<a href="[Sql-link]([Sql-link])" target="_blank"><img src="[Sql-icon]([Sql-icon])" alt="mysql" width="100" height="100"/></a>
<a href="[Postgres-link]([Postgres-link])" target="_blank"><img src="[Postgres-icon]([Postgres-icon])" alt="postgresql" width="100" height="100"/><a>
<a href="[Azure-link]([Azure-link])" target="_blank"><img src="[Azure-icon]([Azure-icon])" alt="azure" width="100" height="100"/></a>
<a href="[Aws-link]([Aws-link])" target="_blank"><img src="[Aws-link]([Aws-link])" alt="aws" width="100" height="100"/></a>
</p>

## How to run created project:


Use `npm start` inside angular directory to execute the template.
The command is defined in `package.json`, an example of which is below.

```
"scripts": {
	"start": "ng serve"
}
```
Use `npm start` inside backend directory to execute the backend.

The command is defined in `package.json`, an example of which is below.

```
"scripts": {
    "start": "npm run start-watch",
}
```








<!--------------------------------- Ngrx ------------------------------------------------>
<div id="ngrx"></div>

## Ngrx

RxJS powered state management for Angular applications, inspired by Redux

### @ngrx/store

@ngrx/store is a controlled state container designed to help write performant, consistent applications on top of Angular. Core tenets:
-   State is a single immutable data structure
-   Actions describe state changes
-   Pure functions called reducers take the previous state and the next action to compute the new state
-   State accessed with the  `Store`, an observable of state and an observer of actions

`Package Used`: `@ngrx/store` `@ngrx/store-devtools`

Important Links: [Docs][Ngrx-docs], [Store][Ngrx-store], [Effect][Ngrx-effect]
<p align="right">(<a href="#features">back to features</a>)</p>



<!-------------------------- Theme Provider -------------------------------------------->
<div id="theme"></div>

## Light and dark mode

A VueJs-based switch to change style of page from Light to Dark or vice versa.

### How to add changes in light and dark mode
```
:root {
	// Light mode variable
	--background-color: #fff;
	--text-color: #121416d8;
	--link-color: #543FD7;
	// Dark mode variables
	--dark-background-color: #212A2E;
	--dark-text-color: #F7F8F8;
	--dark-link-color: #828FFF;
}
```
 Use the `style.css` file to implement changes related to the light mode or you can just update the hex code in style.css & same for dark mode as well if need to update the color code just updates the variables labeled as `--dark..., if need to add new styling use selector `[data-theme='dark']` followed up with the class name.

**Example :**

|Light Theme                    				|Dark Theme                         				|
|-----------------------------------------------|---------------------------------------------------|
|[data-theme='light'] {							|[data-theme='dark'] {								|
|	background-color: var(--background-color);	|	background-color: var(--dark-background-color); |
|	color: var(--text-color);					|	color: var(--dark-text-color);					|
|}      										|}            										|
<p align="right">(<a href="#features">back to features</a>)</p>




<div id='postgres'></div>
<!-------------------------------- Postgres ------------------------------------------->


<div id='mongoose'></div>
<!--------------------------------- MongoDB -------------------------------------------->


## Mongoose Database Service

MongoDB is one of the most widely used No-SQL databases in the developer world today.

### Configure environment variables for Mongoose

Before running the app, you must update environment variable for mongoose in `.env` file.
Inside `.env` file update your `DATABASE_URL` environment variable:
```
DATABASE_URL=mongodb://localhost:27017/admin
```
<p align="right">(<a href="#features">back to features</a>)</p>


<div id='mysql'></div>
<!------------------------------------- My Sql  ----------------------------------------->


## Running unit tests

Run `ng test` to execute the unit tests via [Karma][Karma-test].

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help  

To get more help on the Angular CLI use `ng help` or go check out the 
[Angular CLI Overview and Command Reference][Angular-cli] page.

## Some Important Links

Official Documentation: [Angular.io][Angular-url]
Developer guide: [Angular.io/guide/developer-guide][Angular-dev-guide]
Built-In directives: [Angular.io/guide/built-in-directives][Angular-directive]
Template overview: [Angular.io/guide/template-overview][Angular-template]

## License

Copyright (C)2021 Innostax
Licensed under the MIT License.

## Contact

<a href="[Innostax]([Innostax])"> Innostax Software Labs</p>
<p align="right">(<a href="#top">back to top</a>)</p>

<!---------------------------------------------------------- Global Variable's ---------------------------------------------------------->
[Innostax]: https://innostax.com/
[Innostax-logo]: https://i2.wp.com/innostax.com/wp-content/uploads/2021/06/Innostax_-logo_edited.png?resize=400%2C82&ssl=1
<!-- Frontend, Angular -->
[Angular-icon]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Angular-cli]: https://angular.io/cli
[Angular-dev-guide]: https://angular.io/guide/developer-guide-overview
[Angular-directive]: https://angular.io/guide/built-in-directives
[Angular-template]: https://angular.io/guide/template-overview
[Angular-generate]: https://angular.io/cli/generate

<!-- Ngrx -->
[Ngrx-docs]: https://ngrx.io/docs/
[Ngrx-store]: https://ngrx.io/guide/store/
[Ngrx-effect]: https://ngrx.io/guide/effects/

<!-- Auth Services: Auth 0 -->
[Auth0]: https://auth0.com/

<!-- Auth Services: Okta -->
[Okta]: https://www.okta.com/
[Okta-signup]: https://login.okta.com/signin/register/?SAMLRequest=fc%2B7CsJAEAXQXvAflu1NNJUMeZBGELTx1a%2FrYILJTtyZGD%2FfSBRiYzlw77lMnD3rSj3Qc0ku0YtgrhU6S5fSXRN9PKxmS52l00nMpq6iBvJWCrfDe4ss6vStRe9aDzmGIZfo1jsgwyWDMzUyiIV9vt1AH4XGk5ClSvewUgMNa%2BYW%2FVj5jxhm9NLP67QQaSAMu64L6CYmsFSHlnzT4ZlLwTgcL6Sf8%2FeX9AU%3D

<!-- Backend  -->
<!-- Node -->
[Nodejs-icon]: https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg

<!-- Test -->
[Karma-test]: https://karma-runner.github.io

<!-- CSS Libs -->
[Bootstrap-icon]: https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg

<!-- Dev Icons & link -->
[Docker-link]: https://www.docker.com/
[Docker-icon]: https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg
[Mongodb-link]: https://www.mongodb.com/
[Mongodb-icon]: https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg
[Sql-link]: https://www.mysql.com/
[Sql-icon]: https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg
[Postgres-link]: https://www.postgresql.org/
[Postgres-icon]: https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg
[Azure-link]: https://azure.microsoft.com/en-in/
[Azure-icon]: https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg
[Aws-link]: https://aws.amazon.com/
[Aws-icon]: https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg
