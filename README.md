<h1 align="center"
 style="display:flex:align-item:center;">
 <a style="text-decoration: none;cursor:pointer;color:black;" 
 href="https://components.halleyx.com" 
 > 
 <img src="https://halleyx.com/img/logo28x25.png" style="object-fit:fit;width:4%;"> 
 Halleyx UI Framework
 </a>

</h1>

<h4 align="center">

[![NPM][npm-badge]][npm-url]
[![HalleyxUI][ci-badge]][ci-url]
[![Development Status][alpha-badge]][npm-url]
[![License][license-badge]][license-url]

[_Introduction_](#introduction) &mdash;
[_Components_](#components) &mdash;
[_Getting Started_](#quick-start) &mdash;
[_License_](#license)

</h4>

## Introduction
Hey there! We are excited to introduce our latest adventure - Halleyx UI Framework. 

Halleyx is a UI component framework completely designed by and for developers using Vuejs.  We made this framework from scratch, so it's suitable for all types of developers - whether you're a frontend lover or a backend developer. 

We believe that a programmer can save some time if they find a library that works as desired and does not have to change its structure in accordance with the project. 

Our main goal is to make programming less tedious by providing fully-built and customizable components that are simple to integrate. Big things comes in small packages. We have created 100+ flexible, modular components that accelerate development time and simplify the process of  creating visually stunning projects, without compromising the developer's independence and personalization

So start designing with ease!

### Components
The following components are currently available for use
- [Introduction](https://components.halleyx.com/)
- [Accessibility](https://components.halleyx.com/accessibility)
- [Installation](https://components.halleyx.com/installation)
- [Quickstart](https://components.halleyx.com/quickstart)
- [Custom theming](https://components.halleyx.com/custom_theming)
- [Colors](https://components.halleyx.com/colors)
- [Typography](https://components.halleyx.com/typography)
- [Icons](https://components.halleyx.com/icons)
- [Accordion](https://components.halleyx.com/accordion)
- [Alert](https://components.halleyx.com/alert)
- [Badge](https://components.halleyx.com/badge)
- [Breadcrumb](https://components.halleyx.com/breadcrumb)
- [Button](https://components.halleyx.com/buttons)
- [Card](https://components.halleyx.com/cards)
- [Color palette](https://components.halleyx.com/colorpalette)
- [Code editor](https://components.halleyx.com/code-editor)
- [Context menu](https://components.halleyx.com/context_menu)
- [Dashboard](https://components.halleyx.com/dashboard)
- [Dataview](https://components.halleyx.com/dataview)
- [Dotted pagination](https://components.halleyx.com/dotted_pagination)
- [Draggable](https://components.halleyx.com/draggables)
- [Drawer](https://components.halleyx.com/drawer)
- [Error page](https://components.halleyx.com/errorpage)
- [File uploader](https://components.halleyx.com/upload)
- [Image gallery](https://components.halleyx.com/imagegallery)
- [Import progress bar](https://components.halleyx.com/progress_bar)
- [Input](https://components.halleyx.com/input_fields)
- [Label](https://components.halleyx.com/label)
- [Loader](https://components.halleyx.com/loaders)
- [Modal](https://components.halleyx.com/modal)
- [Pagination](https://components.halleyx.com/pagination)
- [Rating](https://components.halleyx.com/rating)
- [Search](https://components.halleyx.com/search)
- [Select](https://components.halleyx.com/select)
- [Sidebar](https://components.halleyx.com/sidebar)
- [Slider](https://components.halleyx.com/slider)
- [Speed dial](https://components.halleyx.com/speeddial)
- [Stepper](https://components.halleyx.com/stepper)
- [Tab](https://components.halleyx.com/tabs)
- [Table](https://components.halleyx.com/table)
- [Tag](https://components.halleyx.com/tag)
- [Text editor](https://components.halleyx.com/texteditor)
- [Time line](https://components.halleyx.com/timeline)
- [Tree](https://components.halleyx.com/tree)
- [Tree select](https://components.halleyx.com/tree_select)
- [Tooltip](https://components.halleyx.com/tooltip)
- [Switch](https://components.halleyx.com/switch)

## Installation
<p style="display:flex;align-item:center;">
<b>NPM</b> <img src="https://badge.fury.io/js/halleyx-ui-framework.svg" style="margin-left:10px;">
</p>

```
npm install halleyx-ui-framework
```
## Quick start
This section describes how to use <strong>Halleyx UI framework</strong> in your project.

 **Global import**

Config module with project globally
```
//main.js
import { createApp } from "vue";
import App from "./App.vue";
import halleyxComponents from "halleyx-ui-framework";
//load the styles
import 'halleyx-ui-framework/dist/cs/index.css';
createApp(App).use(halleyxComponents).mount("#app");
```
**Local import**

Config module with project locally

  ```
//main.js
import { createApp } from "vue";
import App from "./App.vue";
import halleyxComponents from "halleyx-ui-framework";
//load the styles
import 'halleyx-ui-framework/dist/cs/index.css';
createApp(App).use(halleyxComponents).mount("#app");
```
```
<!-- Any vue component-->
<template>
  <hlx-button class="primary">Button</hlx-button>
</template>

<script>
import {HlxButton} from 'halleyx-ui-framework';
export default {
  name: 'App',
  components: {
    HlxButton,
  },
}
</script>
```



## License
Halleyx UI Framework Library comes with a [3-clause BSD license][license-url].

<!-- Github -->
[ci-url]: https://github.com/halleyx-com/Halleyx-UI-Framework
[ci-badge]: https://badgen.net/badge/icon/Halleyx-UI-Framework?icon=github&label
<!-- NPM -->
[npm-badge]: https://badgen.net/badge/icon/halleyx-ui-framework?icon=npm&label
[npm-url]: https://www.npmjs.com/package/halleyx-ui-framework
<!-- License -->
[license-badge]: https://img.shields.io/badge/license-BSD-blue.svg
[license-url]: https://github.com/halleyx-com/Halleyx-UI-Framework/blob/main/LICENSE
[alpha-badge]: https://img.shields.io/badge/stage-alpha-blueviolet
<!-- Future -->
[contributing-url]: 
[latest-release-badge]: 
<!-- [latest-release-url]:  -->
