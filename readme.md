![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Treekomponents

Collection of standalone Web Components that support a mixed syntax of Markdown, TeX and web elements. Engines used are [Showdown](http://showdownjs.com/) and [KaTeX](https://katex.org/). Web components are built with [StencilJS](https://stenciljs.com/).

Global component : [Document printer](#document-printer)

Interactive components :

- [Annotation](#annotation)
- [Hide-show](#hide-show)

Display components :

- [Content box](#content-box)

Media components :

- [Single image](#single-image)

Embed components :

- [Youtube video](#youtube-video)

## Installation

### With npm

`npm install treekomponents --save`

### With a script tag

Place this script tag

```html
<script src="https://unpkg.com/treekomponents@latest/dist/mycomponent.js"></script>
```

in the head of your `index.html`.

## Import Katex styles

You need then to import KaTeX math font styles in your `index.html` to have a TeX-like display of maths formulas.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.10.0/dist/katex.min.css"
  integrity="sha384-9eLZqc9ds8eNjO3TmqPeYcDj8n+Qfa4nuSiGYa6DjLNcv9BtN69ZIulL9+8CqC9Y"
  crossorigin="anonymous"
/>
```

# Components

<a name="document-printer"></a>

### Global printer : `trko-doc-printer`

```html
<trko-doc-printer mdHtmlContent="<your input text>"></trko-doc-printer>
```

##### Rendered

```html
<section class="trko-doc-section">...doc serialized</section>
```

---

<a name="youtube-video"></a>

### Youtube video : `trko-youtube-video`

Youtube `iframe` is lazy-loaded.

```html
<trko-youtube-video
  video-id="<video ID>"
  description="<description>"
></trko-youtube-video>
```

##### Parameters :

- `video-id` : ID of the youtube video to display.
- `description` : description of the video, to be displayed in the figcaption.

##### Rendered :

```html
<figure>
<iframe src="https://youtube..../id=<video-id>">
<figcaption>...description</figcaption>
</figure>
```

---

<a name="hide-show"></a>

### Hide-show : `trko-hide-show`

```html
<trko-hide-show heading="<heading>" hidden="True/False">
  <!-- any md/katex/HTML -->
</trko-hide-show>
```

##### Parameters :

- `heading` : title of the block, that is displayed when the block is hidden.
- _inner (slot)_ : content inside the block, displayed when open.
- `hidden` : the initial state of the block, hidden or displayed at first.

##### Rendered :

```html
<div class="trko-hide-show-container">
  <div class="trko-hide-show-head">
    <h5>...title</h5>
    <button>{open ? 'Masquer' : 'Afficher'}</button>
  </div>
  <div class="closed/opened trko-hidden-section">...content rendered</div>
</div>
```

---

<a name="content-box"></a>

### Content-box : `trko-box`

```html
<trko-box class="<your classes>" heading="<your title>"></trko-box>
```

##### Parameters

- `class` : additionnal classes you may want to add to this particular block.
- `heading` : title of the box.

##### Rendered

```html
<div
  class="trko-box-container <your classes>"
  id="bx-<your heading in kebabCase>"
>
  <h5>...title</h5>
  <div class="trko-box-content"><!-- your inner rendered --></div>
</div>
```

---

<a name="single-image"></a>

### Single image : `trko-image`

```html
<trko-image
  url="https://..."
  title="<titre>"
  description="<description>"
></trko-image>
```

##### Parameters

- `url` : url of the image to display.
- `title` : title of the image, for accessibility.
- `description` : description of the image, will be rendered in the figcaption tag.

##### Rendered

```html
<figure>
  <img src="<url param>" alt="<description>" title="<title>" />
  <figcaption>...title</figcaption>
</figure>
```

---

<a name="annotation"></a>

### Annotation : `trko-annotation`

```html
<trko-annotation annotated="<annotated text>">
  <!-- md/katex/html content in the annotation -->
</trko-annotation>
```

##### Parameters :

- `annotated` : the text that you want to put annotation on.
- _annotation (in slot)_ : the md-katex-html raw of what the annotation modal should display.

##### Events :

- `annotationClick` : triggered when the annotation is clicked. Emits an event like :

```js
{
    annotated: '<text annotated>',
    annotation: '<text to display in the annotation modal>'
}
```

##### Rendered :

```html
<span class="annotated-text">...annotated text serialized</span>
```
