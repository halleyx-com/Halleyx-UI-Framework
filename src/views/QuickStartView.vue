<!-- eslint-disable no-useless-escape -->
<template>
  <h1 class="component-heading">Quickstart</h1>
  <p class="component-description">
    This section describes how to use <strong>halleyx-ui-framework</strong> in your
    project.
  </p>
  <h2 class="component-side-heading">Global import</h2>
  <p class="component-description">Config module with project globally</p>
  <CodeEditor
    :id="'editor'"
    :display_language="false"
    :value="quickstart_source"
    :read_only="true"
    :theme="editor_theme"
    :languages="[
      ['Javascript', 'Vue'],
      ['javascript', 'JS'],
      ['python', 'Python'],
    ]"
  />
  <h2 class="component-side-heading">Local import</h2>
  <p class="component-description">Config module with project locally</p>
  <br />
  <hlx-button class="primary">Test button</hlx-button>
  <br />
  <br />
  <CodeEditor
    :id="'editor'"
    :display_language="false"
    :value="quickstart_source_main"
    :read_only="true"
    :theme="editor_theme"
    :languages="[
      ['Javascript', 'Vue'],
      ['javascript', 'JS'],
      ['python', 'Python'],
    ]"
  />
  <CodeEditor
    :id="'editor'"
    :display_language="false"
    :value="quickstart_source_import_local"
    :read_only="true"
    :theme="editor_theme"
    :languages="[
      ['Javascript', 'Vue'],
      ['javascript', 'JS'],
      ['python', 'Python'],
    ]"
  />
</template>

/* eslint-disable no-us/eless-escape */
<script>
import CodeEditor from 'simple-code-editor'
import HlxButton from '@/components/ButtonComponent.vue'
export default {
  name: 'quick-start-view',
  components: { CodeEditor, HlxButton },
  data () {
    return {
      editor_theme: 'light',
      quickstart_source: `
//main.js
import { createApp } from 'vue'
import App from "./App.vue";
import halleyxKit from 'halleyx-ui-framework'
//load the styles
import 'halleyx-ui-framework/dist/es/index.css';
createApp(App).use(halleyxKit).mount("#app");
`,
      quickstart_source_main: `
//main.js
import { createApp } from "vue";
import App from "./App.vue";
//load the styles
import 'halleyx-ui-framework/dist/es/index.css';
createApp(App).mount("#app");
`,
      quickstart_source_import_local: `
<template>
  <hlx-button class="primary">Button</hlx-button>
</template>

<script>
import {HlxButton} from 'halleyx-ui';
export default {
  name: 'App',
  components: {
    HlxButton,
  },
}
<\/script>
`
    }
  }
}
</script>

<style lang="scss" scoped>
.notes {
  margin: 2% 0;
}
.note-body {
  a {
    text-decoration: none;
    color: #2879b7;
    &:hover {
      color: #1c5e91;
      text-decoration: underline;
    }
    &:visited {
      color: #2879b7;
    }
  }
}
.box {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  margin: 30px 5%;
  padding: 5%;

  @media (min-width: 544px) {
    .box {
      margin: 40px auto;
      max-width: 440px;
      padding: 40px;
    }
  }

  /* The list style
-------------------------------------------------------------- */

  .directory-list ul {
    margin-left: 10px;
    padding-left: 20px;
    border-left: 1px dashed #ddd;
  }

  .directory-list li {
    list-style: none;
    color: #888;
    font-size: 17px;
    font-style: italic;
    font-weight: normal;
  }

  .directory-list a {
    border-bottom: 1px solid transparent;
    color: #888;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .directory-list a:hover {
    border-color: #eee;
    color: #000;
  }

  .directory-list .folder,
  .directory-list .folder > a {
    color: #777;
    font-weight: bold;
  }

  /* The icons
-------------------------------------------------------------- */

  .directory-list li:before {
    margin-right: 10px;
    content: "";
    height: 20px;
    vertical-align: middle;
    width: 20px;
    background-repeat: no-repeat;
    display: inline-block;
    /* file icon by default */
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path fill='lightgrey' d='M85.714,42.857V87.5c0,1.487-0.521,2.752-1.562,3.794c-1.042,1.041-2.308,1.562-3.795,1.562H19.643 c-1.488,0-2.753-0.521-3.794-1.562c-1.042-1.042-1.562-2.307-1.562-3.794v-75c0-1.487,0.521-2.752,1.562-3.794 c1.041-1.041,2.306-1.562,3.794-1.562H50V37.5c0,1.488,0.521,2.753,1.562,3.795s2.307,1.562,3.795,1.562H85.714z M85.546,35.714 H57.143V7.311c3.05,0.558,5.505,1.767,7.366,3.627l17.41,17.411C83.78,30.209,84.989,32.665,85.546,35.714z' /></svg>");
    background-position: center 2px;
    background-size: 60% auto;
  }

  .directory-list li.folder:before {
    /* folder icon if folder class is specified */
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path fill='lightblue' d='M96.429,37.5v39.286c0,3.423-1.228,6.361-3.684,8.817c-2.455,2.455-5.395,3.683-8.816,3.683H16.071 c-3.423,0-6.362-1.228-8.817-3.683c-2.456-2.456-3.683-5.395-3.683-8.817V23.214c0-3.422,1.228-6.362,3.683-8.817 c2.455-2.456,5.394-3.683,8.817-3.683h17.857c3.422,0,6.362,1.228,8.817,3.683c2.455,2.455,3.683,5.395,3.683,8.817V25h37.5 c3.422,0,6.361,1.228,8.816,3.683C95.201,31.138,96.429,34.078,96.429,37.5z' /></svg>");
    background-position: center top;
    background-size: 75% auto;
  }
}
</style>
