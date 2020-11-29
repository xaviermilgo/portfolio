import xavier from "./assets/media/xavier.jpg";
import databases from "./assets/media/databases.png";
import mongodb from "./assets/media/mongodb.png";
import postgresql from "./assets/media/postgresql-logo.png";
import php_PNG18 from "./assets/media/php_PNG18.png";
import laravel_icon512 from "./assets/media/laravel_icon512.png";
import symfony_logo from "./assets/media/symfony_logo.png";
import python from "./assets/media/python.png";
import flask1 from "./assets/media/flask1.png";
import django from "./assets/media/django.png";
import javascript from "./assets/media/Javascript-Square.png";
import angular_1 from "./assets/media/angular_1.png";
import ReactLogo from "./assets/media/React.js_logo-512_DnMBlQK.png";
import React512 from "./assets/media/React.js_logo-512.png";
import html from "./assets/media/html.png";
import sqikaSmall from "./assets/media/phoneprojects/sqika.com__1_1.png"
import sqikaLarge from "./assets/media/projects/sqika.com__2.png"
import chimayLarge from "./assets/media/projects/chimaylarge.png";
import chimaySmall from "./assets/media/phoneprojects/chimaysmall.png";


const api = {
  "basicInfo": {
    "name": "Xavier Kibet",
    "title": "Software Developer",
    "secondaryTitle": "Ethical Hacker",
    "backgroundImage": xavier,
    "aboutMeHead": "I am an enthusiastic computer programmer and ethical hacker.",
    "aboutMeBody": "I love spending most of my time advancing my skills in programming by solving challenges and developing software. I started off by learning python online on sololearn then, after high school, I went to Moringa school where I spent 1200 hours over 6 months learning full-stack web development with python professionally. In my free time, I love completing challenges on codewars.com I currently have over 3500 honor on codewars.",
    "extraMd": "<img style=\"max-width: 80vw;\" src=\"https://www.codewars.com/users/reivhax/badges/large\">"
  },
  "skills": [
    {
      "name": "Databases",
      "type": "Databases",
      "img": databases,
      "children_type": "DB",
      "children": [
        {
          "name": "Mongo Db",
          "type": "db",
          "img": mongodb,
          "children_type": "DB",
          "children": []
        },
        {
          "name": "Postgres",
          "type": "database",
          "img": postgresql,
          "children_type": "skills",
          "children": []
        }
      ]
    },
    {
      "name": "PHP",
      "type": "Frameworks",
      "img": php_PNG18,
      "children_type": "Frameworks",
      "children": [
        {
          "name": "Laravel",
          "type": "Framework",
          "img": laravel_icon512,
          "children_type": "skills",
          "children": []
        },
        {
          "name": "Symfony",
          "type": "Framework",
          "img": symfony_logo,
          "children_type": "skills",
          "children": []
        }
      ]
    },
    {
      "name": "Python",
      "type": "Backend",
      "img": python,
      "children_type": "Frameworks",
      "children": [
        {
          "name": "Flask",
          "type": "backend",
          "img": flask1,
          "children_type": "skills",
          "children": []
        },
        {
          "name": "Django",
          "type": "Backend",
          "img": django,
          "children_type": "skills",
          "children": []
        }
      ]
    },
    {
      "name": "Javascript",
      "type": "Frontend",
      "img": javascript,
      "children_type": "Frameworks",
      "children": [
        {
          "name": "Angular Js",
          "type": "Frontend",
          "img": angular_1,
          "children_type": "skills",
          "children": []
        },
        {
          "name": "React Native",
          "type": "frontend",
          "img": React512,
          "children_type": "skills",
          "children": []
        },
        {
          "name": "React Js",
          "type": "Frontend",
          "img": ReactLogo,
          "children_type": "None",
          "children": []
        }
      ]
    },
    {
      "name": "Html & Css",
      "type": "Frontend",
      "img": html,
      "children_type": "Frameworks",
      "children": []
    }
  ],
  "projects": [
    {
      "title": "Sqika",
      "description": "Make personalized video requests to stars in Kenya",
      "link": "https://sqika.com/?utm_source=reivhax.me&utm_medium=portfolio",
      "repo_link": "#",
      "image": sqikaLarge,
      "image_phone": sqikaSmall,
      "live": true,
      "skills": [
        {
          "name": "Html & Css",
          "img": html
        },
        {
          "name": "React Js",
          "img": React512
        },
        {
          "name": "Django",
          "img": django
        },
        {
          "name": "Postgres",
          "img": postgresql
        }
      ]
    },
    {
      "title": "Chimay Red Tiny",
      "description": "A minified exploit for mikrotik routers.",
      "link": "",
      "repo_link": "https://github.com/reivhax/Chimay-Red-Tiny",
      "image": chimayLarge,
      "image_phone": chimaySmall,
      "live": false,
      "skills": [
        {
          "name": "Python",
          "img": python
        }
      ]
    }
  ],
  "contacts": [
    {
      "type": "Email",
      "text": "xavierkibet@gmail.com",
      "url": "mailto:xavierkibet@gmail.com",
      "icon": [
        "fas",
        "envelope"
      ]
    },
    {
      "type": "Phone",
      "text": "+254757724928",
      "url": "tel:+254757724928",
      "icon": [
        "fas",
        "phone"
      ]
    },
    {
      "type": "Linked In",
      "text": "Xavier Kibet",
      "url": "https://www.linkedin.com/in/xavier-kibet-34733916a",
      "icon": [
        "fab",
        "linkedin"
      ]
    }
  ]
}

export default api;
