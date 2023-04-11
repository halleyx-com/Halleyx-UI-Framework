<template>
  <h1 class="component-heading">Sign up</h1>
  <p class="component-description">
   Sign up screen is the first screen a user will experience, and this first impression will affect how users' perceive the aesthetics, usability, and credibility of an app.
   It is an action to register yourself for a new account. Web portals use “sign up” for the process of first time registration.
  </p>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <div class="component-example">
    <div class="example-body">

<hlx-signup/>
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
  <hlx-divider :position="'horizontal'" :space="'20px'" />
</template>

<script>
import CodeEditor from 'simple-code-editor'
    import hlxSignup from "../components/SignupComponent.vue";
    import hlxDivider from "../components/DividerComponent.vue";

export default {
  components: {
    CodeEditor,
    hlxSignup,
    hlxDivider
  },
  data () {
    return {
      editor_theme: 'light',
      example_code: `<template>
      <hlx-signup/>
</template>`
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

  
