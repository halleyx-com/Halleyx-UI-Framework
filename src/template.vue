<template>
  <h1 class="component-heading"><!-- Component title --></h1>
  <p class="component-description">
    <!-- Write your component description here -->
  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading"><!-- Sub-heading area --></h2>
  <p class="component-description"><!-- Write your description here --></p>
  <div class="notes">
    <p class="note-title" >Note:</p><p class="note-body"><!-- Add notes here with <i></i> tags to highlight words in italic   --></p>
  </div>
  <div class="component-example">
    <div class="example-body">
      <!-- Place your component here -->
    </div>
    <div class="example-footer">
        <!-- Replace your id wherever required -->
      <span class="icon" id="<your unique id here>-icon" @click="showCode('<your unique id here>')"><i class="icon-code-regular"></i></span>
    </div>
  </div>
  <div class="source-code" id="<your unique id here>" style="display: none">
    <section class="example-source-wrapper">
        <div class="source">
          <CodeEditor
             :id="'editor'"  :display_language="false"
            :value="example_code"
            :read_only="true"
            :theme="editor_theme"
            :languages="[
              ['Javascript', 'Vue'],
              ['javascript', 'JS'],
              ['python', 'Python'],
            ]"
          />
        </div>
      </section>
  </div>
  <divider :position="'horizontal'" :space="'20px'" />
</template>

<script>
import CodeEditor from 'simple-code-editor'

export default {
  components: {
    CodeEditor
  },
  data () {
    return {
      editor_theme: 'light',
      example_code: '`your code goes here`'
    }
  },
  methods: {
    showCode (val) {
      document.getElementById(val + '-icon').classList.toggle('active-icon')
      if (document.getElementById(val).style.display === 'none') {
        document.getElementById(val).style.display = 'block'
      } else if (document.getElementById(val).style.display === 'block') {
        document.getElementById(val).style.display = 'none'
      }
    }
  }
}
</script>

<style></style>
