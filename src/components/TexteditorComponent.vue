<template>
  <div class="container1222">
      <div class="options">
        <!-- Text Format -->
       <div class="specify">
        <button id="bold" class="option-button format activetexteditor" >
          <p class="bold-icon" @click="change($event);add($event)">B</p>
        </button>
        <button id="italic" class="option-button format activetexteditor" >
          <p class="italic-icon" @click="change($event);add($event)">I</p>
        </button>
        <button id="underline" class="option-button format activetexteditor" >
          <p class="underline-icon" @click="change($event);add($event)">U</p>
        </button>
        <button id="strikethrough" class="option-button format activetexteditor">
          <p class="strikethrough-icon" @click="change($event);add($event)">S</p>
        </button>
        </div>
        <div class="specify1">
        <button id="superscript" class="option-button script activetexteditor" >
          <p class="superscript-icon" @click="change($event);add($event)">X<sup>2</sup></p>
        </button>
        <button id="subscript" class="option-button script activetexteditor" >
          <p class="subscript-icon" @click="change($event);add($event)">X<sub>2</sub></p>
        </button>
        </div>
        <!-- List -->
        <div class="specify2">
        <button id="insertOrderedList" class="option-button activetexteditor" @click="change($event);add($event)">
          <i class="icon-list-filled"></i>
        </button>
        <button id="insertUnorderedList" class="option-button activetexteditor" @click="change($event);add($event)">
          <i class="icon-list-regular"></i>
        </button>
        </div>

        <!-- Undo/Redo -->
        <div class="specify3">
        <button id="undo" class="option-button activetexteditor" @click="change">
          <i class="icon-arrow-back-regular"></i>
        </button>
        <button id="redo" class="option-button activetexteditor" @click="change">
          <i class="icon-arrow-forward-regular"></i>
        </button>
        </div>
        <!-- Link -->
        <div class="specify4">
        <button id="createLink" class="adv-option-button link link1" @click="createlink">
          <i class="icon-link-alt-regular"></i>
        </button>
        <!-- <button id="unlink" class="option-button" @click="Removelink">
          <i class="icon-link-alt-regular strike"></i>
        </button> -->
        </div>
        <!-- Alignment -->
        <div class="specify5">
        <button id="justifyLeft" class="option-button align activetexteditor">
          <i class="icon-menu-left-alt-regular" @click="change($event);add($event)"></i>
        </button>
        <button id="justifyCenter" class="option-button align activetexteditor">
          <i class="icon-menu-regular" @click="change($event);add($event)"></i>
        </button>
        <button id="justifyRight" class="option-button align activetexteditor">
          <i class="icon-menu-right-alt-regular" @click="change($event);add($event)"></i>
        </button>
        <button id="justifyFull" class="option-button align activetexteditor">
          <i class="icon-menu-regular" @click="change($event);add($event)"></i>
        </button>
        <!-- <button id="indent" class="option-button spacing activetexteditor">
          <i class="icon-right-indent" @click="change($event);add($event)"></i>
        </button>
        <button id="outdent" class="option-button spacing activetexteditor">
          <i class="icon-left-indent" @click="change($event);add($event)"></i>
        </button> -->
        </div>
        <!-- Headings -->
        <!-- <select id="formatBlock" class="adv-option-button">
          <option value="H1">H1</option>
          <option value="H2">H2</option>
          <option value="H3">H3</option>
          <option value="H4">H4</option>
          <option value="H5">H5</option>
          <option value="H6">H6</option>
        </select> -->

        <!-- Font -->
        <!-- <hlxselect class="dropdownclass" id="fontName"  :dropdown_data="this.fontList" @customChange="changeFontName"></hlxselect> -->
        <div class="specify8">
        <hlxselect :options="this.fo"  :labelanimation="false" :texteditor="true"  @customChange="selectValue"></hlxselect>
        <!-- <select id="fontName" class="adv-option-button"></select>
        <select id="fontSize" class="adv-option-button"></select> -->
        </div>
        <div class="specify9">
        <hlxselect :options="this.fosize"  :labelanimation="false" :texteditor="true"  @customChange="selectValue1"></hlxselect>
        </div>
        <!-- Color -->
        <div class="specify7">
        <div class="input-wrapper">
         <colorpalette @customChange="colorValue"></colorpalette>
        </div>
        <div class="input-wrapper">
          <colorpalette :highlightcolor="true" @customChange="highlightValue"></colorpalette>
        </div>
        </div>

      </div>
      <div id="text-input" contenteditable="true" @keyup="check"></div>
    </div>
      <hlx-modal
        :texteditor="this.modal_active"
        @close="this.modal_active = false"
        :height="'216px'"
        :width="'400px'"
        :modal="true"
      >
        <template v-slot:header>
          <div class="texteditor-head-title">Link</div>
        </template>
        <template v-slot:content>
          <div class="modal-content">
           <button class="url-link"><input type="text" v-model="this.url" class="link-input"></button>
          </div>
        </template>
        <template v-slot:footer>
          <button @click="Link" class="link-save-button">save</button>
        </template>
      </hlx-modal>
    <!-- <button @click="ok">abc</button> -->

</template>

<script>

import colorpalette from '../components/ColorpaletteComponent.vue'
import hlxselect from '../components/SelectComponent.vue'
import hlxModal from "../components/ModalwindowComponent.vue";
import hlxButton from "../components/ButtonComponent.vue";
export default({
  name:"hlx-text-editor",
    components:{

        colorpalette,
        hlxselect,
        hlxModal,
        hlxButton,
    } ,
   data(){
        return{
          url:'',
          colorvalue:'',
          highlightvalue:'',
            optionsButtons:document.querySelectorAll(".option-button"),
            advancedOptionButton :document.querySelectorAll(".adv-option-button"),
            fontName :document.getElementById("fontName"),
            fontSizeRef :document.getElementById("fontSize"),
            writingArea :document.getElementById("text-input"),
            linkButton :document.getElementById("createLink"),
            alignButtons :document.querySelectorAll(".align"),
            spacingButtons :document.querySelectorAll(".spacing"),
            formatButtons :document.querySelectorAll(".format"),
            scriptButtons :document.querySelectorAll(".script"),
            fontnamevalue:'',
            previd:'',
            count:0,
            fontvalue:[],
            fo:[
              {name:'Times New Roman',checked:false,value:'Times New Roman'},
              {name:'Arial',checked:true,value:'Arial'},
              {name:'Cursive',checked:false,value:'Cursive'},
              {name:'OpenSans',checked:false,value:'OpenSans'},
              {name:'QuickSand',checked:false,value:'QuickSand'},
              {name:'Pacifico',checked:false,value:'Pacifico'},
              {name:'OstrichSans',checked:false,value:'OstrichSans'},
              {name:'JosefinSans',checked:false,value:'JosefinSans'},
            ],
            fosize:[
              {name:'1',checked:false , value:'1'},
              {name:'2',checked:false , value:'2'},
              {name:'3',checked:true, value:'3'},
              {name:'4',checked:false , value:'4'},
              {name:'5',checked:false , value:'5'},
              {name:'6',checked:false , value:'6'},
              {name:'7',checked:false , value:'7'},
              {name:'8',checked:false , value:'8'},
              {name:'9',checked:false , value:'9'},
              {name:'10',checked:false , value:'10'},
            ],
            fontList: [
              "Times New Roman",
  "Arial",
  "Cursive",
  "OpenSans",
  "QuickSand",
  "Pacifico",
  "OstrichSans",
  "JosefinSans"

],
modal_active:false

        }
    },
      props: {
    setFont: {
      type: Array,
      default:[]
    },
      },
      emits:['currentChange','customValue'],
     async mounted(){
this.advancedOptionButton.forEach((button) => {
    button.addEventListener("change", () => {
        
        this.modifyText(button.id, false, button.value);
  })

}),

    await this.initializer()
    if(document.getSelection())
    {

      document.addEventListener('selectionchange', (e) => {
      //  console.log(e,document.getSelection().focusNode.parentElement.tagName );
     if(document.getSelection().focusNode.parentElement.tagName === 'B')
     {
       document.querySelector('#bold').classList.add('texteditoractive')
     }
     if(document.getSelection().focusNode.parentElement.tagName === 'I')
     {
       document.querySelector('#italic').classList.add('texteditoractive')
     }
     if(document.getSelection().focusNode.parentElement.tagName === 'U')
     {
       document.querySelector('#underline').classList.add('texteditoractive')
     }
     if(document.getSelection().focusNode.parentElement.tagName === 'STRIKE')
     {
       document.querySelector('#strikethrough').classList.add('texteditoractive')
     }
     if(document.getSelection().focusNode.parentElement.tagName === 'A')
     {
       document.querySelector('#createLink').classList.add('texteditoractive32')
     }
     if(document.getSelection().focusNode.parentElement.tagName === 'DIV')
     {
       document.querySelector('#createLink').classList.remove('texteditoractive32')
     }
   });
    }
    // console.log(this.setFont,this.fo);
    //      if(this.setFont.length === 0){
    //          this.fontvalue =computefont
    //          console.log(this.fontvalue);
    //      }
       if(this.setFont.length !== 0)
       {
          this.fontvalue = this.setFont
       }
       else{
        this.fontvalue = this.fo
       }
    },
    watch:{
      fontvalue: {
        handler (val) {
          
        }
      },
      // immediate:true,
      // deep:true
    },
    computed:{
       computefont ()
       {
        return this.fo
       }
    },
    methods:{
      selectValue(val)
      {
        // console.log('ol');
        var a =''
        val.forEach((e)=>{
          if(e.checked === true)
          {
             a = e.name
          }
        })
          // console.log(a,'pop');
          // fontName
          document.execCommand('fontName',false,a)
      },
      selectValue1(val)
      {
        
            var a =''
        val.forEach((e)=>{
          if(e.checked === true)
          {
             a = e.name
          }
        })
        // fontSize
        document.execCommand('fontSize',false,a)
      },
      check()
      {
        var d =document.getElementById('text-input').innerHTML
        this.$emit('currentChange', d)
         var a = document.getElementById('text-input').innerHTML.toString()
         var b = a.slice((a.length-4),(a.length))
         var c = a.slice((a.length-8),(a.length-4))
        //  if(a[a.length])
        //  console.log(a[a.length-1],a.length,b,c);
         if(b === '</b>')
         {
                if(c === '</i>')
                {
                    document.querySelector('#italic').classList.add('texteditoractive')
                    document.querySelector('#bold').classList.add('texteditoractive')
                }
                  else if(c === '</u>')
                {
                    document.querySelector('#underline').classList.add('texteditoractive')
                    document.querySelector('#bold').classList.add('texteditoractive')
                }
                else if(c === 'ike>')
                {
                    document.querySelector('#strikethrough').classList.add('texteditoractive')
                    document.querySelector('#bold').classList.add('texteditoractive')
                }
                else {
                      document.querySelector('#bold').classList.add('texteditoractive')
                }
         }
         else if(b === '</i>')
         {
            //  document.querySelector('#italic').classList.add('texteditoractive')
              if(c === '</b>')
                {
                    document.querySelector('#bold').classList.add('texteditoractive')
                    document.querySelector('#italic').classList.add('texteditoractive')
                }
                  else if(c === '</u>')
                {
                    document.querySelector('#underline').classList.add('texteditoractive')
                    document.querySelector('#italic').classList.add('texteditoractive')
                }
                else if(c === 'ike>')
                {
                    document.querySelector('#strikethrough').classList.add('texteditoractive')
                    document.querySelector('#italic').classList.add('texteditoractive')
                }
                else {
                      document.querySelector('#italic').classList.add('texteditoractive')
                }
         }
          else if(b === '</u>')
         {
            //  document.querySelector('#underline').classList.add('texteditoractive')
                if(c === '</b>')
                {
                    document.querySelector('#bold').classList.add('texteditoractive')
                    document.querySelector('#underline').classList.add('texteditoractive')
                }
                  else if(c === '</i>')
                {
                    document.querySelector('#italic').classList.add('texteditoractive')
                    document.querySelector('#underline').classList.add('texteditoractive')
                }
                else if(c === 'ike>')
                {
                    document.querySelector('#strikethrough').classList.add('texteditoractive')
                    document.querySelector('#underline').classList.add('texteditoractive')
                }
                else {
                      document.querySelector('#underline').classList.add('texteditoractive')
                }
         }
         else if(b === 'ike>')
         {
            //  document.querySelector('#strikethrough').classList.add('texteditoractive')
             if(c === '</b>')
                {
                    document.querySelector('#bold').classList.add('texteditoractive')
                    document.querySelector('#strikethrough').classList.add('texteditoractive')
                }
                  else if(c === '</i>')
                {
                    document.querySelector('#italic').classList.add('texteditoractive')
                    document.querySelector('#strikethrough').classList.add('texteditoractive')
                }
                else if(c === '/u>')
                {
                    document.querySelector('#underline').classList.add('texteditoractive')
                    document.querySelector('#strikethrough').classList.add('texteditoractive')
                }
                else {
                      document.querySelector('#strikethrough').classList.add('texteditoractive')
                }
         }
         else{
              document.querySelector('#bold').classList.remove('texteditoractive')
              document.querySelector('#italic').classList.remove('texteditoractive')
              document.querySelector('#underline').classList.remove('texteditoractive')
               document.querySelector('#strikethrough').classList.remove('texteditoractive')
         }
      },
      ok()
      {
        var a = document.getElementById('text-input').innerHTML
        this.$emit('customValue',a)
        // console.log(document.getElementById('text-input').innerHTML,'jf');
      },
      add(event)
      {
        console.log(event.target.parentElement.className);
        // if(event.target.parentElement.className)
         if(event.target.parentElement.className === 'option-button format activetexteditor')
         {
          event.target.parentElement.classList.add('texteditoractive')
         }
         else if(event.target.parentElement.className === 'option-button format activetexteditor texteditoractive')
         {
          event.target.parentElement.classList.remove('texteditoractive')
         }
         else if(event.target.className === 'superscript-icon' || event.target.className === 'subscript-icon')
         {
          document.querySelectorAll('.script').forEach((e)=>{
              if(e.className    !== 'option-button script activetexteditor')
              {
                e.classList.remove('texteditoractive')
              }
          })
             event.target.parentElement.classList.add('texteditoractive')
         }
         else if(event.target.className === 'superscript-icon' || event.target.className === 'subscript-icon')
         {
          document.querySelectorAll('.script').forEach((e)=>{
              if(e.className    !== 'option-button script activetexteditor')
              {
                e.classList.remove('texteditoractive')
              }
          })
             event.target.parentElement.classList.add('texteditoractive')
         }
          else if(event.target.className === 'icon-menu-left-alt-regular' || event.target.className === 'icon-menu-regular' || event.target.className === 'icon-menu-right-alt-regular' || event.target.className === 'icon-menu-regular')
         {
          // console.log('o');
          document.querySelectorAll('.align').forEach((e)=>{
              if(e.className    !== 'option-button align activetexteditor')
              {
                e.classList.remove('texteditoractive')
              }
          })
             event.target.parentElement.classList.add('texteditoractive')
         }
         else if(event.target.className === 'icon-right-indent' || event.target.className === 'icon-left-indent')
         {
          document.querySelectorAll('.spacing').forEach((e)=>{
              if(e.className    !== 'option-button spacing activetexteditor')
              {
                e.classList.remove('texteditoractive')
              }
          })
             event.target.parentElement.classList.add('texteditoractive')
         }
      },
      dmd()
      {
        // console.log('ff');
          document.execCommand('styleWithCSS',false,"true")
          document.execCommand("foreColor",false,'rgb(255, 182, 0)')
      },
      highlightValue(value)
      {
          this.highlightvalue = value
          document.execCommand("backColor",false,this.highlightvalue)
      },
      colorValue(value)
      {
        // console.log(value,'palettevalue');
          this.colorvalue = value
          // console.log(this.colorvalue,'abm');
          // document.execCommand("styleWithCSS",false,value)
          document.execCommand("foreColor",false,this.colorvalue)
          // this.setcolor(this.colorvalue)
      },
   
change(event){
    if(event.target.className === 'option-button format activetexteditor')
    {
      // console.log('aa');
        this.modifyText(event.target.id, false, null);
        // event.target.classList.add('texteditoractive')
    }
    else if(event.target.className === 'bold-icon')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        // event.target.parentElement.classList.add('texteditoractive')
    }
    else if(event.target.className === 'italic-icon')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        // event.target.parentElement.classList.add('texteditoractive')
    }
    else if(event.target.className === 'underline-icon')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        // event.target.parentElement.classList.add('texteditoractive')
    }
    else if(event.target.className === 'superscript-icon')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        // event.target.parentElement.classList.add('texteditoractive')
    }
    else if(event.target.className === 'icon-subjscript')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        // event.target.parentElement.classList.add('texteditoractive')
    }
    else if(event.target.className === 'icon-arrow-back-regular')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        // event.target.parentElement.classList.add('texteditoractive')
    }
    else if(event.target.className === 'icon-arrow-forward-regular')
    
    {
        this.modifyText(event.target.parentElement.id, false, null);
        // event.target.parentElement.classList.add('texteditoractive')
    }
    else if(event.target.className === 'icon-menu-regular')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
    else if(event.target.className === 'icon-menu-left-alt-regular')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
     else if(event.target.className === 'icon-menu-right-alt-regular')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
      else if(event.target.className === 'icon-menu-regular')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
      else if(event.target.className === 'icon-right-indent')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
       else if(event.target.className === 'icon-left-indent')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
       else if(event.target.className === 'option-button spacing activetexteditor')
    {
        this.modifyText(event.target.id, false, null);
        event.target.classList.add('texteditoractive')
       
    }
        else if(event.target.className === 'option-button align activetexteditor')
    {
        this.modifyText(event.target.id, false, null);
        event.target.classList.add('texteditoractive')
    }
        else if(event.target.className === 'option-button script activetexteditor')
    {
        this.modifyText(event.target.id, false, null);
        // event.target.classList.add('texteditoractive')
    }
        else if(event.target.className === 'strikethrough-icon')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
        else if(event.target.className === 'superscript-icon')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
        else if(event.target.className === 'subscript-icon')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
         else if(event.target.className === 'icon-list-regular')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
           else if(event.target.className === 'icon-list-filled')
    {
        this.modifyText(event.target.parentElement.id, false, null);
        event.target.parentElement.classList.add('texteditoractive')
    }
 
},



createlink(event)
{
  if(document.getSelection().focusNode.parentElement.tagName != 'A')
     {
       this.modal_active = true
     }
     else{
      this.Removelink()
     }
  // console.log(event.target.className,document.getElementById("createLink").id,'abc');
  // if(event.target.className === 'icon-link-alt-regular' || event.target.className === 'adv-option-button link')
  // {
  //       let userLink = prompt("Enter a URL");
  //       this.linkButton = document.getElementById("createLink").id
  // //if link has http then pass directly else add https
  // if (/http/i.test(userLink)) {
  //   this.modifyText(this.linkButton, false, userLink);
  // } else {
  //   userLink = "http://" + userLink;
  //   this.modifyText(this.linkButton, false, userLink);
  // }
  // }

},

Link()
{
  // if(this.count === 0)
  // {
    
  //   this.createlink()
  //   var a = this.url
  //   console.log(a);
  //   document.execCommand('createLink',false,a)
  // }
  // if(document.getSelection().focusNode.parentElement.tagName === 'A')
  //    {
  //      document.execCommand('unlink', false, null)
  //      document.querySelector('#createLink').classList.remove('texteditoractive32')
  //    }
  //    else{

       var a = this.url
         // console.log(a);
         document.execCommand('createLink',false,a)
         this.modal_active = false
    //  }
},

Removelink()
{
  // console.log(event.target.id);
   this.modifyText('unlink', false, null);
    document.querySelector('#createLink').classList.remove('texteditoractive32')

},


changeFontName(val){
  // console.log('jkjjj');
   let a = val
  //  console.log(a,'dei');
  //  console.log(this,'abc');
   this.modifyText('styleWithCSS', false,a)
},

setcolor(val)
{
   let a = val
  //  console.log(a,'nsdn');
    document.querySelector('.color-palette-container').addEventListener('click',()=>{
      // console.log('aa');
      document.execCommand("foreColor",true,a)
      // document.execCommand('styleWithCSS',false,"true")
    })
  //  this.modifyText('styleWithCSS',false,"true")
},


highlighter(className, needsRemoval){
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;

        //If currently clicked button is already active
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

        //Remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          //highlight clicked button
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
},

highlighterRemover(className){
  className.forEach((button) => {
    button.classList.remove("active");
  });
},
//List of fontlist

//Initial Settings
 initializer () {
  //function calls for highlighting buttons
  //No highlights for link, unlink,lists, undo,redo since they are one time operations
  this.highlighter(this.alignButtons, true);
  this.highlighter(this.spacingButtons, true);
  this.highlighter(this.formatButtons, false);
  this.highlighter(this.scriptButtons, true);

  //create options for font names
  // this.fontList.map((value)=> {
  //   // console.log(value,'aaa',this);
  //       let option = document.createElement("option");
  //       option.value = value;
  //       option.innerHTML = value;
  //      this.fontName= document.getElementById("fontName")
  //       // console.log(option,'bbb',this.fontName); 
  //       this.fontName.appendChild(option);
  // });

  //fontSize allows only till 7
  // for (let i = 1; i <= 7; i++) {
  //   let option = document.createElement("option");
  //   option.value = i;
  //   option.innerHTML = i;
  //   this.fontSizeRef=document.getElementById("fontSize"),
  //   this.fontSizeRef.appendChild(option);
  // }

  // default size
  // this.fontSizeRef.value = 3;

// this.advancedOptionButton =document.querySelectorAll(".adv-option-button")
//             this.fontName=document.getElementById("fontName")

  this.advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    // console.log('aaa');
    this.modifyText(button.id, false, button.value)
    // console.log(this.modifyText('styleWithCSS', false, button.value),'abc')
  });
});

},

    modifyText(command, defaultUi, value) {
      // console.log(value,"val");
      document.execCommand(command, defaultUi, value)
      // document.execCommand('styleWithCSS',false,true)
},


    }
})
</script>
<style scoped>
</style>