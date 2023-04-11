<template>
  <h1 class="component-heading">Drag and hold</h1>
  <p class="component-description">
Drag and drop is a device gesture in which the user selects a virtual object by grabbing it and dragging it to a different location or onto another virtual object.  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <div class="component-example">
    <div class="example-body">
              <div class="drag-container">

        <dragdrop/>
              </div>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-drag-icon" @click="showCode('basic-drag')"><i class="icon-code-regular"></i></span>
    </div>
  </div>
  <div class="source-code" id="basic-drag" style="display: none">
    <section class="example-source-wrapper">
        <div class="source">
          <CodeEditor
             :id="'editor'"  :display_language="false"
            :value="basic_drag"
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
import divider from '../components/DividerComponent.vue'


export default {
    name:"DragdropView",
    components:{
      CodeEditor,
      divider

    },
    data(){
        return{
            editor_theme: 'light',
            basic_drag:`
    <dragdrop/>
`
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