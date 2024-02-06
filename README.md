# Styling DOM elements

The following personal notes are based on the [Udemy course by Maximilian Schwarzmüller](https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/).

At the start, we have a simple html page that includes a header, a section with an unordered list, and an input field.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM Interaction</title>
    <script src="app.js" defer></script>
  </head>
  <body>
    <header><h1 id="main-title">Dive into the DOM! Styling DOM Elements</h1></header>
    <section class="red-bg visible">
      <ul>
        <li class="list-item">Item 1</li>
        <li class="list-item">Item 2</li>
        <li class="list-item">Item 3</li>
      </ul>
    </section>
    <input type="text" value="default text" />
  </body>
</html>
```
`app.js` does very little for now besides a `console.log` statement.

```javascript
const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
```
