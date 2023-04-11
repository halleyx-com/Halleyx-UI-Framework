<template>
  <h1 class="component-heading">
    Theming
    <img
      src="https://img.icons8.com/cotton/512/paint-palette.png"
      alt="Paint palette"
    />
  </h1>
  <section class="package-detail-container">
    <p class="component-description">
      Utilize the command line to install the plugin.
    </p>
    <div class="language">
      <pre>
      <code>
      <span class="comment">
      <!-- # Choose a package manager you like. -->
      </span>
      <span class="comment">
      # vue cli
      </span>
      <span>
        <span class="action">
        $ vue add 
        </span>
             vue-cli-plugin-halleyx-ui
      </span>
      
      </code>
    </pre>
    </div>
    <p class="component-description">
      During plug-in installation, the question "Do you wish to import sample
      component?" will display. If you select yes, "App.vue" file that includes
      an example of the button component within it will replace the old one.
    </p>
    <div class="directory-box">
      <ul class="directory-list">
        <li class="folder">
          src
          <ul>
            <li class="folder">
              components
              <ul></ul>
            </li>
            <li class="folder">
              plugins
              <ul></ul>
            </li>
            <li class="folder">
              Views
              <ul></ul>
            </li>
            <li class="file-js">main.js</li>
            <li class="file-scss">hlx-variables.scss</li>
          </ul>
        </li>
      </ul>
    </div>
    <p class="component-description">
      The "hlx-variable.scss" file, which is created in the "src" folder after
      pulgins installation, contains all the color variables we used to style
      the Element.
    </p>
  </section>
</template>

<script>
import CodeEditor from "simple-code-editor";

export default {
  name: "quick-start-view",
  components: { CodeEditor },
  data() {
    return {
      editor_theme: "light",
      installation_source: `
    #NPM
    $ npm i halleyx-ui
    `,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/common/var.scss";

.version-container {
  cursor: pointer;
  color: white;
  text-decoration: none;
  p {
    display: inline;
    margin: 0;
    font-size: 0.8em;
    padding: 2px;
  }
  .packager {
    border-radius: 3px 0 0 3px;
    background: #0b273d;
  }
  .verison {
    border-radius: 0 3px 3px 0;
    background: $primary-color-dark;
  }
}
.language {
  margin: 1rem 0;
  border-radius: 6px;
  position: relative;
  margin: 1rem -1.5rem;
  background-color: #f5f7fa;
  overflow-x: auto;
  direction: ltr;
  text-align: left;
  white-space: pre;
  font-size: 1rem;
  word-spacing: normal;
  word-break: normal;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  & > pre {
    position: relative;
    z-index: 1;
    margin: 0;
    padding: 0.25rem 20px;
    background: transparent;
    overflow-x: auto;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 4;
    hyphens: none;
    & > code {
      padding: 0;
      line-height: 2.5;
      font-size: 12px;
      color: #303133;
      text-align: left;
      white-space: normal;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      tab-size: 4;
      hyphens: none;
      span {
        display: block;
        font-size: 0.8rem;
      }
      & .comment {
        font-size: 0.8rem;
        color: #848486;
      }
      & .action {
        font-size: 0.8rem;
        color: #6196cc;
        display: inline-block;
      }
    }
  }
}
.directory-box {
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  margin: 30px 5%;
  padding: 5%;

  @media (min-width: 544px) {
    .directory-box {
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
  .directory-list li.file-js:before {
    margin-right: 10px;
    content: "";
    height: 20px;
    vertical-align: middle;
    width: 20px;
    background-repeat: no-repeat;
    display: inline-block;
    /* file icon by default */
    background-image: url("https://img.icons8.com/external-those-icons-flat-those-icons/512/external-JavaScript-programming-and-development-those-icons-flat-those-icons.png");
    background-position: center 2px;
    background-size: 60% auto;
  }
  .directory-list li.file-scss:before {
    margin-right: 10px;
    content: "";
    height: 20px;
    vertical-align: middle;
    width: 20px;
    background-repeat: no-repeat;
    display: inline-block;
    /* file icon by default */
    background-image: url("https://img.icons8.com/color/512/sass.png");
    background-position: center 2px;
    background-size: 60% auto;
  }

  .directory-list li.folder:before {
    /* folder icon if folder class is specified\
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path fill='lightblue' d='M96.429,37.5v39.286c0,3.423-1.228,6.361-3.684,8.817c-2.455,2.455-5.395,3.683-8.816,3.683H16.071 c-3.423,0-6.362-1.228-8.817-3.683c-2.456-2.456-3.683-5.395-3.683-8.817V23.214c0-3.422,1.228-6.362,3.683-8.817 c2.455-2.456,5.394-3.683,8.817-3.683h17.857c3.422,0,6.362,1.228,8.817,3.683c2.455,2.455,3.683,5.395,3.683,8.817V25h37.5 c3.422,0,6.361,1.228,8.816,3.683C95.201,31.138,96.429,34.078,96.429,37.5z' /></svg>");
   */
    background-image: url("https://img.icons8.com/color/512/folder-invoices.png");
    background-position: center top;
    background-size: 75% auto;
  }
}
</style>
