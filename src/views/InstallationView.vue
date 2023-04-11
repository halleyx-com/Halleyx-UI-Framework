<template>
  <h1 class="component-heading">Installation</h1>
  <h2 class="component-side-heading">Version</h2>
  <a
    class="version-container"
    :href="'https://www.npmjs.com/package/halley-kit'"
    target="_blank"
  >
    <div>
      <span class="packager">
        <p>npm</p>
      </span>
      <span class="verison">
      <!-- {{this.version()}} -->
        <p>{{this.vers}}</p>
      </span>
    </div>
  </a>
  <h2 class="component-side-heading">Using Package Manager</h2>
  <section class="package-detail-container">
    <p class="component-description">
      We recommend using the package manager (NPM) to install
      <strong>halleyx-ui-framework</strong>, so that you can utilize the bundlers.
    </p>
    <div class="language">
      <pre>
      <code>
      <span class="comment">
      <!-- # Choose a package manager you like. -->
      </span>
      <span class="comment">
      # NPM
      </span>
      <span>
        <span class="action">
        $ npm install
        </span>
             halleyx-ui-framework
      </span>

      </code>
    </pre>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'quick-start-view',
  data () {
    return {
      editor_theme: 'light',
      vers: '',
      installation_source: `
    #NPM
    $ npm i halleyx-ui
    `
    }
  },
  async mounted () {
    const ver = await axios.get('https://registry.npmjs.org/halley-kit/latest')
    this.vers = ver.data.version
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common/var.scss";

.version-container {
  cursor: pointer;
  color: white;
  text-decoration: none;
  div{
    display: inline-flex;
  }
  p {
  display: inline;
    margin: 0;
    font-size: 0.8em;
    padding: 3px 8px;
  }
  .packager {
    border-radius: 3px 0 0 3px;
    background: #0b273d;    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .verison {
    border-radius: 0 3px 3px 0;
    background: $primary-color-dark;
    display: flex;
    align-items: center;
    justify-content: center;
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
        color: #6a6969;
      }
      & .action {
        font-size: 0.8rem;
        color: #396da1;
        display: inline-block;
      }
    }
  }
}
</style>
