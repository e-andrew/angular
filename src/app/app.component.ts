import { Component } from '@angular/core';

export interface Card{
  title: string;
  description: string;
  infoURL: string;
  imgURI: string;
  alt: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-app';
  cardIndex: number = 0;

  setCardIndex(index: number):void {
    this.cardIndex = index;
  }

  getCard():Card {
    return this.cards[this.cardIndex];
  }

  isNotAll():boolean {
    return this.cardIndex != 11;
  }

  cards: Card[] = [
    {
      title: "HyperText Markup Language",
      description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
      infoURL: "https://en.wikipedia.org/wiki/HTML",
      imgURI: "assets/img/html_icon.png",
      alt: "html_icon"
    },
    {
      title: "Cascading Style Sheets",
      description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
      infoURL: "https://en.wikipedia.org/wiki/CSS",
      imgURI: "assets/img/css_icon.png",
      alt: "css_icon"
    },
    {
      title: "LESS",
      description: "Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets (CSS) and run on the client side or server side. Designed by Alexis Sellier.",
      infoURL: "https://en.wikipedia.org/wiki/Less_(stylesheet_language)",
      imgURI: "assets/img/less_icon.png",
      alt: "less_icon"
    },
    {
      title: "Syntactically Awesome Stylesheets",
      description: "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.",
      infoURL: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)",
      imgURI: "assets/img/sass_icon.png",
      alt: "sass_icon"
    },
    {
      title: "Bootstrap",
      description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
      infoURL: "https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)",
      imgURI: "assets/img/bootstrap_icon.png",
      alt: "bootstrap_icon"
    },
    {
      title: "JavaScript",
      description: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      infoURL: "https://en.wikipedia.org/wiki/JavaScript",
      imgURI: "assets/img/js_icon.jpg",
      alt: "js_icon"
    },
    {
      title: "TypeScript",
      description: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",
      infoURL: "https://en.wikipedia.org/wiki/TypeScript",
      imgURI: "assets/img/ts_icon.png",
      alt: "ts_icon"
    },
    {
      title: "jQuery",
      description: "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax. It is free, open-source software using the permissive MIT License.",
      infoURL: "https://en.wikipedia.org/wiki/JQuery",
      imgURI: "assets/img/jquery_icon.png",
      alt: "jquery_icon"
    },
    {
      title: "React",
      description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
      infoURL: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      imgURI: "assets/img/react_icon.png",
      alt: "react_icon"
    },
    {
      title: "Angular",
      description: "Angular (commonly referred to as \"Angular 2+\" or \"Angular CLI\") is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
      infoURL: "https://en.wikipedia.org/wiki/Angular_(web_framework)",
      imgURI: "assets/img/angular_icon.png",
      alt: "angular_icon"
    },
    {
      title: "VueJS",
      description: "Vue.js (commonly referred to as Vue; pronounced \"view\") is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.",
      infoURL: "https://en.wikipedia.org/wiki/Vue.js",
      imgURI: "assets/img/vue_js_icon.png",
      alt: "vue_js_icon"
    }]
}
