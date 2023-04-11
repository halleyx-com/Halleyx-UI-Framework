<template>
  <div class="super-parent" style="position: relative">
    <div
      ref="caretDiv"
      class="caret-div"
      v-bind:style="{
        top: this.caretDivTop + 35 + 'px',
        left: this.caretDivLeft + 5 + 'px',
      }"
      v-if="
        this.schemaOptions.length !== 0 ||
        this.keywordOptions.length !== 0 ||
        this.functionOptions.length !== 0
      "
    >
      <ul style="list-style-type: none">
        <li
          v-for="schema in this.schemaOptions"
          :key="schema"
          @click="this.appendOption(schema.label)"
        >
          <div class="list-item">
            <i class="icon-settings-regular list-item-icon"></i>
            <span>{{ schema.label }}</span>
          </div>
        </li>
        <li
          v-for="keyword in this.keywordOptions"
          :key="keyword"
          @click="this.appendOption(keyword.label)"
        >
          <div class="list-item">
            <i class="icon-note-text-regular list-item-icon"></i>
            <span>{{ keyword.label }}</span>
          </div>
        </li>
        <li
          v-for="func in this.functionOptions"
          :key="func"
          @click="this.appendFunction(func.syntax)"
        >
          <div class="list-item">
            <i class="icon-tool-regular list-item-icon"></i>
            <span>{{ func.label }}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="code-editor-parent">
      <i
        class="icon-edit-regular prettify-pen"
        @click="formatBeut"
        v-if="this.beautify === true"
      >
        <span style="font-size: 14px; font-family: OpenSans">Beautify</span>
      </i>
      <prism-editor
        ref="myEditor"
        class="my-editor"
        :class="'my-editor' + this.unique"
        v-model="code"
        :highlight="highlighter"
        @keypress="enterKey"
        @input.stop="(event) => {this.getCurrentWord(event), this.$emit('codeChanges', this.code)}"
        @click.stop="getCurrentWord"
        :line-numbers="this.lineNumber"
      ></prism-editor>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import getCaretCoordinates from 'textarea-caret'
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere
import beautify from 'js-beautify'

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles
export default {
  name: 'hlx-code-editor',
  emits: ['codeChanges', 'update:value'],
  components: {
    PrismEditor
  },
  props: {
    lineNumber: {
      type: Boolean,
      default: false
    },
    intellisenseData: {
      type: Object
    },
    height: {
      type: Number,
      default: 200
    },
    primaryColor: {
      type: String,
      default: '#905'
    },
    secondaryColor: {
      type: String,
      default: '#690'
    },
    beautify: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 10
    },
    pre_value: {
      type: [String, Number, Array]
    }
  },
  data () {
    return {
      code: '',
      colorNumber: 0,
      schemaOptions: [],
      keywordOptions: [],
      functionOptions: [],
      currentWord: '',
      currentWordPosition: null,
      unique: Math.floor(Math.random() * 1000 + 1),
      caretDivTop: 0,
      caretDivLeft: 0
    }
  },
  mounted () {
    this.generateColorClasses(1000)
    this.bracketColor()
    if (this.lineNumber === true) {
      const textarea = document.querySelector(`.my-editor${this.unique}`)
      textarea.children[1].children[0].rows = this.rows
      document.querySelector(`.my-editor${this.unique}`).style.height =
        this.rows * 33 + 'px'
    } else {
      const textarea = document.querySelector(`.my-editor${this.unique}`)
      textarea.children[0].children[0].rows = this.rows
      document.querySelector(`.my-editor${this.unique}`).style.height =
        this.rows * 33 + 'px'
    }
  },
  watch: {
    code: {
      handler (val) {
        // this.$emit("codeChanges", val);
        // this.$emit("update:value", val);
      },
      immediate: true
    },
    pre_value: {
      handler (val) {
        if (val !== undefined && val !== null && val !== '') {
          if (typeof val === 'string') {
            this.code = val
          } else {
            this.code = JSON.stringify(val)
          }
          // console.log(val,"from code");
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    findClosestSpan (event, top, left) {
      const existingBraces = document.querySelectorAll('.highlight-brace')
      if (existingBraces) {
        for (let i = 0; i < existingBraces.length; i++) {
          existingBraces[i].classList.remove('highlight-brace')
        }
      }
      const superParent = document.querySelector(`.my-editor${this.unique}`) // your parent div element
      const parent = superParent.children[1]
      const textArea = parent.children[0]
      const preTag = parent.children[1]
      textArea.style.visibility = 'hidden'
      const spans = parent.getElementsByTagName('SPAN')
      let closestSpans = []
      let closestSpans2 = []
      let minDiff = Number.MAX_SAFE_INTEGER
      let minDiffX = Number.MAX_SAFE_INTEGER

      for (let i = 0; i < spans.length; i++) {
        const span = spans[i]
        if (span.parentNode.tagName === 'PRE') {
          const rects = span.getBoundingClientRect()
          const spanY = rects.y
          const caretY = left

          if (spanY < caretY) {
            const diff = caretY - spanY
            if (diff < minDiff) {
              closestSpans = [span]
              minDiff = diff
            } else if (diff === minDiff) {
              closestSpans.push(span)
            }
          }
        }
      }
      // console.log('Closest Span elements: ', closestSpans)
      for (let i = 0; i < closestSpans.length; i++) {
        const span = closestSpans[i]
        if (span.parentNode.tagName === 'PRE') {
          const rects = span.getBoundingClientRect()
          const spanX = rects.x
          const caretX = top

          if (spanX < caretX) {
            const diff = caretX - spanX
            if (diff < minDiffX) {
              closestSpans2 = [span]
              minDiffX = diff
            } else if (diff === minDiffX) {
              closestSpans2.push(span)
            }
          }
        }
      }
      // console.log(closestSpans2, 'tadaaa')
      if (closestSpans2[0]) {
        const classList = closestSpans2[0].classList
        for (let i = 0; i < classList.length; i++) {
          if (classList[i].startsWith('newColor')) {
            const braces = preTag.querySelectorAll('.' + classList[2])
            for (let i = 0; i < braces.length; i++) {
              braces[i].classList.add('highlight-brace')
            }
          }
        }
      }
      textArea.style.visibility = 'visible'
    },
    enterKey ($event) {
      if (this.rows === 1) {
        if ($event.keyCode === 13) {
          $event.preventDefault()
        }
      }
      this.$emit('update:value', this.code)
      // this.$emit('codeChanges', this.code)
    },
    updateCaretCoordinates (event) {
      const textarea = event.target
      // console.log(textarea, textarea.selectionEnd)
      if (textarea && textarea.selectionEnd !== undefined) {
        const caret = getCaretCoordinates(textarea, textarea.selectionEnd)
        if (this.lineNumber === true) {
          this.caretDivLeft = caret.left + 33
          this.caretDivTop = caret.top
        }
        if (this.beautify === true) {
          this.caretDivLeft = caret.left
          this.caretDivTop = caret.top + 30
        }
        if (this.beautify === true && this.lineNumber === true) {
          this.caretDivLeft = caret.left + 33
          this.caretDivTop = caret.top + 30
        }
        if (this.beautify === false && this.lineNumber === false) {
          this.caretDivLeft = caret.left
          this.caretDivTop = caret.top
        }
      }
    },
    generateColorClasses (num) {
      for (let i = 1; i <= num; i++) {
        const className = '.newColor' + i
        const randomColor = this.getRandomColor()
        const css = className + ' { color: ' + randomColor + ' !important; }'
        this.addCSS(css)
      }
      const token1 = '.my-editor' + this.unique + ' .token.property'
      const token2 = '.my-editor' + this.unique + ' .token.tag'
      const token3 = '.my-editor' + this.unique + ' .token.boolean'
      const token4 = '.my-editor' + this.unique + ' .token.property'
      const token5 = '.my-editor' + this.unique + ' .token.number'
      const token6 = '.my-editor' + this.unique + ' .token.constant'
      const token7 = '.my-editor' + this.unique + ' .token.symbol'
      const token8 = '.my-editor' + this.unique + ' .token.deleted'
      // const classes = '.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted'
      const cssClasses1 =
        token1 + ' { color: ' + this.primaryColor + ' !important; }'
      const cssClasses2 =
        token2 + ' { color: ' + this.primaryColor + ' !important; }'
      const cssClasses3 =
        token3 + ' { color: ' + this.primaryColor + ' !important; }'
      const cssClasses4 =
        token4 + ' { color: ' + this.primaryColor + ' !important; }'
      const cssClasses5 =
        token5 + ' { color: ' + this.primaryColor + ' !important; }'
      const cssClasses6 =
        token6 + ' { color: ' + this.primaryColor + ' !important; }'
      const cssClasses7 =
        token7 + ' { color: ' + this.primaryColor + ' !important; }'
      const cssClasses8 =
        token8 + ' { color: ' + this.primaryColor + ' !important; }'
      this.addCSS(cssClasses1)
      this.addCSS(cssClasses2)
      this.addCSS(cssClasses3)
      this.addCSS(cssClasses4)
      this.addCSS(cssClasses5)
      this.addCSS(cssClasses6)
      this.addCSS(cssClasses7)
      this.addCSS(cssClasses8)
      const token9 = '.my-editor' + this.unique + ' .token.selector'
      const token10 = '.my-editor' + this.unique + ' .token.attr-name'
      const token11 = '.my-editor' + this.unique + ' .token.string'
      const token12 = '.my-editor' + this.unique + ' .token.char'
      const token13 = '.my-editor' + this.unique + ' .token.builtin'
      const token14 = '.my-editor' + this.unique + ' .token.inserted'
      // const classes2 = '.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted'
      const cssClasses9 =
        token9 + ' { color: ' + this.secondaryColor + ' !important; }'
      const cssClasses10 =
        token10 + ' { color: ' + this.secondaryColor + ' !important; }'
      const cssClasses11 =
        token11 + ' { color: ' + this.secondaryColor + ' !important; }'
      const cssClasses12 =
        token12 + ' { color: ' + this.secondaryColor + ' !important; }'
      const cssClasses13 =
        token13 + ' { color: ' + this.secondaryColor + ' !important; }'
      const cssClasses14 =
        token14 + ' { color: ' + this.secondaryColor + ' !important; }'
      this.addCSS(cssClasses9)
      this.addCSS(cssClasses10)
      this.addCSS(cssClasses11)
      this.addCSS(cssClasses12)
      this.addCSS(cssClasses13)
      this.addCSS(cssClasses14)
    },
    addCSS (css) {
      const head = document.head
      const style = document.createElement('style')
      style.type = 'text/css'
      style.appendChild(document.createTextNode(css))
      head.appendChild(style)
    },
    getCurrentWord (event) {
      this.updateCaretCoordinates(event)
      const value = event.target.value
      const cursorPosition = event.target.selectionStart
      if (value && cursorPosition !== undefined) {
        let currentWord = ''
        let wordStart = 0

        for (let i = cursorPosition; i >= 0; i--) {
          if (value[i] === ' ' || value[i] === '\n') {
            wordStart = i + 1
            break
          }
        }
        for (let i = wordStart; i < value.length; i++) {
          if (value[i] === ' ' || value[i] === '\n') {
            break
          }
          currentWord += value[i]
        }
        // console.log(currentWord, this.currentWordPosition, currentWord.slice(-1))
        this.currentWord = currentWord
        this.currentWordPosition = wordStart
        this.showintellisense(currentWord)
        // console.log(
        //   this.caretDivTop,
        //   this.caretDivLeft,
        //   this.findClosestSpan(event, event.clientX, event.clientY),
        //   'event for x, y'
        // )
      }
      this.$emit('update:value', this.code)
      // this.$emit('codeChanges', this.code)
    },
    getRandomColor () {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    bracketColor () {
      // Get the editor element from the DOM
      const editor = document.querySelector('.my-editor' + this.unique)

      // Get all the .punctuation elements from the editor
      if (editor !== null && editor !== undefined) {
        const punctuationElements = editor.querySelectorAll('.punctuation')

        // Create an array to store the matching bracket pairs
        const bracketPairs = []

        // Iterate over the punctuation elements
        for (let i = 0; i < punctuationElements.length; i++) {
          // Get the current punctuation element
          const element = punctuationElements[i]

          // Get the text content of the element
          const bracket = element.textContent

          // Check if the bracket is an opening or closing bracket
          if (bracket === '{' || bracket === '[' || bracket === '(') {
            // If it's an opening bracket, add it to the bracketPairs array
            bracketPairs.push({
              opening: element,
              closing: null
            })
          } else if (bracket === '}' || bracket === ']' || bracket === ')') {
            // If it's a closing bracket, find the last opening bracket in the bracketPairs array and set its closing property
            for (let j = bracketPairs.length - 1; j >= 0; j--) {
              if (!bracketPairs[j].closing) {
                bracketPairs[j].closing = element
                break
              }
            }
          }
        }

        // Iterate over the bracketPairs array
        for (let i = 0; i < bracketPairs.length; i++) {
          // Get the current bracket pair
          const pair = bracketPairs[i]

          // Get a random color for the bracket pair
          // const color = this.getRandomColor()

          // Set the color as background color for both opening and closing brackets
          if (pair.closing !== null && pair.opening !== null) {
            pair.opening.classList.add('newColor' + i)
            pair.closing.classList.add('newColor' + i)
            // console.log(pair.closing.classList)
          }
          // pair.opening.style.color = color
          // pair.closing.style.color = color
        }
      }
    },
    highlighter (code) {
      return highlight(code, languages.js) // languages.<insert language> to return html with markup
    },
    formatBeut () {
      if (this.rows === 1) {
        this.code = beautify(this.code, {
          indent_size: 4,
          space_in_paren: true,
          space_after_anon_function: true,
          brace_style: ['collapse', 'preserve-inline']
        })
        if (this.lineNumber === true) {
          const textarea = document.querySelector(`.my-editor${this.unique}`)
          textarea.children[1].children[0].focus()
        } else {
          const textarea = document.querySelector(`.my-editor${this.unique}`)
          textarea.children[0].children[0].focus()
        }
        this.code += ' '
      } else {
        this.code = beautify(this.code, {
          indent_size: 4,
          space_in_paren: true,
          space_after_anon_function: true,
          brace_style: ['expand']
        })
        if (this.lineNumber === true) {
          const textarea = document.querySelector(`.my-editor${this.unique}`)
          textarea.children[1].children[0].focus()
        } else {
          const textarea = document.querySelector(`.my-editor${this.unique}`)
          textarea.children[0].children[0].focus()
        }
        this.code += ' '
      }
    },
    showintellisense (val) {
      //   console.log(val)
      const valu = this.code

      const o = valu.split('\n')
      const line = o[o.length - 1]

      const n = line.split(' ')
      const word = n[n.length - 1]

      if (
        this.code !== '' &&
        val !== ' ' &&
        val !== '' &&
        val.slice(-1) !== '.'
      ) {
        // console.log('else if kulla');
        this.schemaOptions = this.intellisenseData.schema.filter(function (op) {
          return op.label.toLowerCase().includes(val.toLowerCase())
        })
        this.keywordOptions = this.intellisenseData.keywords.filter(function (
          k
        ) {
          return k.label.toLowerCase().includes(val.toLowerCase())
        })
      } else if (val.slice(-1) === '.') {
        // console.log('else if kulla');
        const match = this.intellisenseData.schema.filter(function (s) {
          return s.label
            .toLowerCase()
            .includes(val.substring(0, val.length - 1).toLowerCase())
        })
        // console.log(match, 'match')
        if (match.length !== 0) {
          const type = match[0].type
          const methods = ref(this.intellisenseData.methods)
          this.functionOptions = methods.value[type]
        }
      } else {
        this.schemaOptions = []
        this.keywordOptions = []
        this.functionOptions = []
      }
      this.bracketColor()
    },
    appendOption (text) {
      let end = this.code.indexOf(' ', this.currentWordPosition)
      if (end === -1) {
        end = this.code.indexOf('\n', this.currentWordPosition)
      }
      if (end === -1) {
        end = this.code.length
      }
      const targetWord = this.code.substring(this.currentWordPosition, end)
      if (targetWord === this.currentWord) {
        this.code =
          this.code.substring(0, this.currentWordPosition) +
          text +
          this.code.substring(end)
      }
      this.schemaOptions = []
      this.keywordOptions = []
      this.functionOptions = []
      const textarea = document.querySelector(`.my-editor${this.unique}`)
      if (this.lineNumber === true) {
        textarea.children[1].children[0].focus()
      } else {
        textarea.children[0].children[0].focus()
      }

      this.bracketColor()
      this.$emit('update:value', this.code)
      this.$emit('codeChanges', this.code)
    },
    appendFunction (text) {
      let end = this.code.indexOf(' ', this.currentWordPosition)
      if (end === -1) {
        end = this.code.indexOf('\n', this.currentWordPosition)
      }
      if (end === -1) {
        end = this.code.length
      }
      const targetWord = this.code.substring(this.currentWordPosition, end)
      if (targetWord === this.currentWord) {
        this.code =
          this.code.substring(
            0,
            this.currentWordPosition + this.currentWord.length
          ) +
          text +
          this.code.substring(end)
      }
      this.schemaOptions = []
      this.keywordOptions = []
      this.functionOptions = []
      document.querySelector('.prism-editor__textarea').focus()
      if (this.lineNumber === true) {
        const textarea = document.querySelector(`.my-editor${this.unique}`)
        textarea.children[1].children[0].focus()
      } else {
        const textarea = document.querySelector(`.my-editor${this.unique}`)
        textarea.children[0].children[0].focus()
      }

      this.bracketColor()
      this.$emit('update:value', this.code)
      this.$emit('codeChanges', this.code)
    }
  }
}
</script>

<style>
.code-editor-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}
.prettify-pen {
  border: 1px solid #d8d8d8;
  background: white;
  z-index: 100;
  border-radius: 5px;
  padding: 4px;
  cursor: pointer;
  height: 30px;
  display: flex;
  font-size: 20px;
  align-items: center;
}
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #ffffff;
  color: rgb(0, 0, 0);
  position: relative;
  /* you must provide font-family font-size line-height. Example: */
  font-family: "OpenSans";
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #d8d8d8;
  padding: 5px;
  border-radius: 5px;
  margin-top: 10px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}

/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+json+json5+jsonp */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: "OpenSans";
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.token.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  /* This background color was intended by the author of this theme. */
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}
.newColor1 {
  color: black !important;
}
.newColor2 {
  color: red !important;
}
.newColor0 {
  color: green !important;
}
.highlight-brace {
  background: #b3d4fc !important;
}
</style>
