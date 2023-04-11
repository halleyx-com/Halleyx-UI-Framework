<template>
<div class="hlx-select-container" @click="OptionContainer" v-if="this.single_select === true && this.clearable === true" @mouseover="clearIcon" @mouseout="arrowIcon" >
  <p class="title-name" :id="'title'+this.unique" v-show="this.dropdownname === true" :style="{background:this.label_background_color,color:this.label_font_color}">{{this.title}}</p>
  <div class="hlx-select-input-placeholder" v-if="this.placeholder === true" :style="{background:this.background_color,color:this.placeholder_color}">{{this.placeholder_value}}</div>
  <div class="hlx-select-input"  v-show="this.dropdownvalue === true" :style="{background:this.background_color,color:this.font_color}"><i :class="this.icon_value"></i>{{this.option_value}}</div>
  <div class="hlx-select-icon"  v-if="this.clearable === true" :style="{background:this.background_color,color:this.font_color}">
  <i class="icon-angle-down-regular" :id="'arrowid'+this.unique"></i>
  <i class="icon-times-circle-regular" :id="'crossid'+this.unique" @click.stop="removevalue"></i>
  </div>
  <div class="hlx-select-icon" v-if="this.clearable === false" :style="{background:this.background_color,color:this.font_color}">
  <i class="icon-angle-down-regular" :id="'arrowid'+this.unique"></i>
  <!-- <i class="icon-times-circle-regular" :id="'crossid'+this.unique" @click="removevalue"></i> -->
  </div>

      <div class="hlx-select-option-container" v-show="this.selectoptioncontainer === true" :style="{top:this.top+'px',right:this.right+'px'}">
        <div class="hlx-select-option-value-container" :class="this.optionsD[index].checked === true ? 'select-value' : '' " :id="this.optionsD[index].id" v-for="(i,index) in this.optionsD" :key="index" @click="SelectOption(this.optionsD[index].id)">
          <i :class="this.optionsD[index].icon" id="icon-value"></i>
          <p class="hlx-select-option-value">{{this.optionsD[index].name}}</p>
        </div>
      </div>

</div>
<div class="hlx-select-container" @click="OptionContainer" v-if="this.single_select == true && this.clearable === false">
  <p class="title-name" :id="'title'+this.unique" v-show="this.dropdownname === true" :style="{background:this.label_background_color,color:this.label_font_color}">{{this.title}}</p>
  <div class="hlx-select-input-placeholder" v-if="this.placeholder === true" :style="{background:this.background_color,color:this.placeholder_color}">{{this.placeholder_value}}</div>
  <div class="hlx-select-input"  v-show="this.dropdownvalue === true" :style="{background:this.background_color,color:this.font_color}"><i :class="this.icon_value"></i>{{this.option_value}}</div>
  <div class="hlx-select-icon"  v-if="this.clearable === true">
  <i class="icon-angle-down-regular" :id="'arrowid'+this.unique"></i>
  <i class="icon-times-circle-regular" :id="'crossid'+this.unique" @click="removevalue"></i>
  </div>
  <div class="hlx-select-icon" v-if="this.clearable === false" :style="{background:this.background_color,color:this.font_color}">
  <i class="icon-angle-down-regular" :id="'arrowid'+this.unique"></i>
  </div>

      <div class="hlx-select-option-container" v-show="this.selectoptioncontainer === true" :style="{top:this.top+'px',right:this.right+'px'}">
        <div class="hlx-select-option-value-container" :class="this.optionsD[index].checked === true ? 'select-value' : '' " :id="this.optionsD[index].id" v-for="(i,index) in this.optionsD" :key="index" @click="SelectOption(this.optionsD[index].id)">
          <i :class="this.optionsD[index].icon" id="icon-value"></i>
          <p class="hlx-select-option-value">{{this.optionsD[index].name}}</p>
        </div>
      </div>

</div>


<!----------------------------------------------- Icon container --------------------------------------------------------------->
<div class="hlx-select-container" @click="OptionContainer" v-if="this.icon === true">
  <p class="title-name" :id="'title1'+this.unique" v-show="this.dropdownname === true" :style="{background:this.label_background_color,color:this.label_font_color}">{{this.title}}</p>
  <div class="hlx-select-input-placeholder" v-if="this.placeholder === true" :style="{background:this.background_color,color:this.placeholder_color}">{{this.placeholder_value}}</div>
  <div class="hlx-select-input" v-if="this.dropdownvalue === true" :style="{background:this.background_color,color:this.font_color}"><CountryFlag :iso="this.icon_country_flag" /></div>
  <div class="hlx-select-icon" :style="{background:this.background_color,color:this.font_color}">
  <i class="icon-angle-down-regular"></i>
  </div>

      <div class="hlx-select-option-container" v-show="this.selectoptioncontainer === true" :style="{top:this.top+'px',right:this.right+'px'}">
        <div class="hlx-select-option-value-container" :class="this.optionsD[index].checked === true ? 'select-value' : '' " :id="this.options[index].id" v-for="(i,index) in this.optionsD" :key="index" @click="SelectOption(this.optionsD[index].id)">
          <CountryFlag :iso="i.flag" />
          <p class="hlx-select-option-value">{{i.name}}</p>
        </div>
      </div>

</div>

<!-----------------------------------------------------------------Multiple select--------------------------------------------------------------------->
<div class="hlx-multi-select-container" @click="MultiselectOptioncontainer" v-if="this.multi_select === true" :id="'multiselect'+this.unique" :style="{background:this.background_color,color:this.font_color}">
  <p class="title-name" v-if="this.multiselecttitle == true" :style="{background:this.label_background_color,color:this.label_font_color}">{{this.title}}</p>
  <div class="hlx-multi-select-input-placeholder" @click="color" v-if="this.multiselectplaceholder == true" :style="{background:this.background_color,color:this.placeholder_color}">{{this.placeholder_value}}</div>
  <div class="hlx-multi-select-input" :id="'select'+this.unique" @click="color" v-show="this.multiselectdropdownvalue == true" :style="{background:this.background_color,color:this.font_color}">
     <span class="hlx-multi-select-flag-container" v-if="this.all === true">{{'All'}}</span>
      <span v-else class="hlx-multi-select-flag-container" v-for="(j,index) in computeMultiSelect" :key="j">
     <div class="hlx-multi-select-border" v-if="index<this.tagvalue">
      <div class="hlx-multi-select-value">{{j}}</div>
      <i class="icon-times-regular" @click.stop="removemultiselectvalue(j)"></i>
    </div>
      </span>
  </div>
   <div class="hlx-multi-select-count"  @click="color" v-if="this.all !== true" :style="{background:this.background_color,color:this.font_color}">
    <div class="hlx-multi-select-count-check" v-show="this.count_select_value>0">{{'+'+this.count_select_value}}</div>
    </div>
  <div class="hlx-multi-select-icon" @click="color" :style="{background:this.background_color,color:this.font_color}">
  <i class="icon-angle-down-regular" v-if="isMultiSelect != true"></i>
   <i class="icon-angle-down-regular add" v-else></i>
  </div>
  <div class="hlx-multi-select-option-container"  v-show="this.isMultiSelect == true" :style="{top:this.top+'px',right:this.right+'px'}">
    <Search class="sea" @searchkey="search" :search_style="'style1'" v-show="this.searchable === true"></Search>
    <div class="multi-check">
    <inputItems class="check" :options="computeDropdownData" :showSelectAll="this.selectall" :type="'checkbox'" v-model:value="this.checkedData"></inputItems>
    </div>
    <div class="applyfilterselect" v-if="this.filter_select === true" >
      <button class="clear-button" @click="emitclearvalue">clear</button>
      <button class="disablebutton" disabled v-if="this.disablebutton === true" >Apply</button>
      <button v-else @click="emitfiltervalue">Apply</button>
    </div>
  </div>
</div>



<!---------------------------------------------------------------------Texteditor-------------------------------------------------->
<button class="hlx-select-container" @click="OptionContainer" v-if="this.texteditor === true">
  <p class="title-name" :id="'title'+this.unique" v-show="this.dropdownname === true">{{this.title}}</p>
  <button class="hlx-select-input-placeholder" v-if="this.placeholder === true">{{this.placeholder_value}}</button>
  <button class="hlx-select-input"  v-show="this.dropdownvalue === true"><i :class="this.icon_value"></i>{{this.option_value}}</button>
  <button class="hlx-select-icon"  v-if="this.clearable === true">
  <i class="icon-angle-down-regular" :id="'arrowid'+this.unique"></i>
  <i class="icon-times-circle-regular" :id="'crossid'+this.unique" @click="removevalue"></i>
  </button>
  <button class="hlx-select-icon" v-if="this.clearable === false">
  <i class="icon-angle-down-regular" :id="'arrowid'+this.unique"></i>
  <!-- <i class="icon-times-circle-regular" :id="'crossid'+this.unique" @click="removevalue"></i> -->
  </button>

      <button class="hlx-select-option-container" v-show="this.selectoptioncontainer === true" :style="{top:this.top+'px',right:this.right+'px'}">
        <button class="hlx-select-option-value-container" :class="this.optionsD[index].checked === true ? 'select-value' : '' " :id="this.optionsD[index].id" v-for="(i,index) in this.optionsD" :key="index" @click="SelectOption(this.optionsD[index].id)">
          <i :class="this.optionsD[index].icon" id="icon-value"></i>
          <p class="hlx-select-option-value">{{this.optionsD[index].name}}</p>
        </button>
      </button>

</button>


<div class="custom-dropdown" @click="Customoptioncontainer" v-if="this.inline_search === true" :id="'custom-dropdown'+this.unique">
<input type="text" class="custom-dropdown-input" :id="'custom-input'+this.unique"  :value="this.selectvalue" @input="check"  :placeholder="this.placeholdervalue" @keypress="senddata" :style="{background:this.background_color,color:this.font_color}">
<i class="icon-angle-down-regular" :style="{background:this.background_color,color:this.font_color}"></i>
<div class="custom-label" v-show="this.animation === true" :style="{background:this.label_background_color,color:this.label_font_color}">{{this.placeholder_value}}</div>
<div class="customdropdown-option-container" v-show="this.customdropdowncontainer === true" :style="{top:this.top+'px',right:this.right+'px'}">
<div v-if="dropdowndata.length === 0 " class="no-data-option">
<p>No data</p>
</div>
<div v-for="(i,index) in dropdowndata" class="option" :class="i.checked === true ? 'select-value' : '' "  :key="index" @click="Customselectoptionvalue(i.value,i.name)" v-else>
<p class="option-value">{{i.name}}</p>
<i :class="i.icon" style="margin-right:10px;font-size:18px"></i>
</div>
</div>
</div>

<!-- {{dropdowndata}} -->
</template>

<script>
import inputItems from './InputElementsComponent.vue'
import Search from './SearchComponent.vue'
import CountryFlag from 'vue3-country-flag-icon'
// import Hlxbutton from './ButtonComponent.vue'
import 'vue3-country-flag-icon/dist/CountryFlag.css'
// import HlxInput from './InputComponent.vue'


export default {
  name:"hlx-select",
  components: {
    inputItems,
    Search,
    CountryFlag,
    // HlxInput
    // Hlxbutton
  },
  // props: ['options', 'multi_select', 'title', 'multiselect_options', 'search', 'placeholder_value', 'icon','prevalue'],
  props: {
    options: {
      type: Array,
      default:[]
    },
    modelValue:{
      type:String,
      default:""
    },
    background_color:{
       type:String,
       default:'#ffffff'
    },
    placeholder_color:{
       type:String,
       default:'#a6a6a6'
    },
    label_font_color:{
       type:String,
       default:'#a6a6a6'
    },
    font_color:{
       type:String,
       default:'#565553'
    },
    label_background_color:{
       type:String,
       default:'#ffffff'
    },
    customselect:{
      type:Boolean,
      default:false
    },
    clearable:{
       type: Boolean,
       default: false 
    },
    multiselect_options: {
      type: Array
    },
    prevalue: {
      type: String,
      default:''
    },
    multiselect_prevalue: {
       type:Array,
       default:[]
    },
    placeholder_value: {
      type: String,
      default: 'Select'
    },
    multi_select: {
      type: Boolean
    },
    filter_select: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean
    },
    labelanimation: {
      type: Boolean,
      default: false
    },
    texteditor: {
      type: Boolean,
      default: false
    },
    inline_search:{
      type: Boolean,
      default: false
    },
    top:{
      type: Number,
      default: 45
    },
    right:{
      type: Number,
      default:1
    },
    searchable:{
      type:Boolean,
      default:false
    }
  },
  inheritAttrs:false,
  emits:['customChange','update:value','selectedvalue','update:name','searchvalue','clearablevalue','update:modelValue','inlinevalue','inlinereferencevalue'],
  data () {
    return {
        //     dropdown_data1: [
        // { name: "Php", checked: false, disabled: false, value: "Php",icon:'icon-database-regular',id:1},
        // { name: "VueJs", checked: false, disabled: false, value: "VueJs" ,icon:'icon-database-regular' ,id:2},
        // { name: "ReactJs", checked: false, disabled: false, value: "ReactJs" ,icon:'icon-database-regular' ,id:3},
        // { name: "Html", checked: false, disabled: false, value: "Html" ,icon:'icon-database-regular' ,id:4},
        // { name: "Css", checked: false, disabled: false, value: "Css" ,icon:'icon-database-regular' ,id:5},
        // { name: "Scss", checked: false, disabled: false, value: "Scss" ,icon:'icon-database-regular' ,id:6},
        // { name: "Sass", checked: false, disabled: false, value: "Sass" ,icon:'icon-database-regular' ,id:7},
        // { name: "Sql", checked: false, disabled: false, value: "Sql" ,icon:'icon-database-regular' ,id:8},
        // { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" ,icon:'icon-database-regular',id:9},
        // { name: "Javascript", checked: false, disabled: false, value: "Javascriptq" ,icon:'icon-database-regular',id:10 },
      // ],
      multiselectarray:[],
      multiselectplaceholder: false,
      multiselectdropdownvalue: false,
      single_select: false,
      count: false,
      isMultiSelect: false,
      search_by: '',
      multi_select_value: [],
      count_select_value: [],
      multi_select_count_value: [],
      listValue: [],
      checkedData: [],
      value: '',
      selectall: true,
      dropdownname: false,
      placeholder: true,
      dropdownvalue: false,
      selected_icon: '',
      selectoptioncontainer: false,
      iconselect: false,
      icon_value: '',
      icon_country_flag: 'undefined',
      obj: {},
      selectedvalue: [],
      title: '',
      tagvalue: 11,
      multiselecttitle: false,
      valueid: '',
      all:false,
      unique: Math.floor(Math.random() * 1000 + 1),
      disablebutton:false,
      option_value: '',
      optionsD:[],
      custom_select:false,
      custom_dropdown_option:false,
       customoption:[],
       customdropdowncontainer:false,
       selectvalue:'',
       placeholdervalue:'',
       selectcount:0,
      //  label:false,
      //  input:true,
      //  labelinput:false,
       animation:false,
       count22:0,
    }
  },
  watch: {
    multiselect_prevalue:{
       handler(val)
       {
          if(val != [])
        {
           val.forEach((e)=>{
             this.multiselectarray.forEach((ele)=>{
              // console.log(ele.value,e);
               if(ele.value === e)
               {
                  ele.checked = true
               }
             })
           })
           let multiselectpre_valuecount = 0
           this.multiselectarray.forEach((e)=>{
              if(e.checked === true)
              {
                multiselectpre_valuecount++ 
              }
           })
           if(multiselectpre_valuecount === this.multiselectarray.length)
           {
              this.all = true
           }
           else{
            this.all = false
           }
        }
        // let count = 0
        // console.log(count);
        // count++
              // document.getElementById('multiselect'+ this.unique).click()
              // document.querySelector('.whole-checkbox').children[0].children[0].nextElementSibling.classList.remove('select-all-theme')
       },
       immediate:true,
        deep:true
    },
    modelValue:{
      handler(val){
          this.selectvalue  = val
      },
      immediate: true,
    },
    customoption:{
      handler(val)
      {
       if(val)
       {
         if(this.selectvalue!= '')
          {
            val.forEach((e)=>{
              if(e.value === this.selectvalue)
              {
                // console.log(val,'vale');
                e.checked = true
                this.selectvalue = e.name
                this.placeholdervalue = this.placeholdervalue
                this.selectcount = 1
                if(this.labelanimation === true)
                {
                  this.animation = true
                }
                else{
                  this.animation = false
                }
              }
              else{
                e.checked = false
              }
            })
                // console.log(val,'check');
          }
       }
      },
       immediate: true,
      deep: true,
    },
    options:{
        handler(val)
        {
           if(val)
           {
            if(this.inline_search === true)
            {
              this.customoption = JSON.parse(JSON.stringify([...val]))
            }
            else if(this.single_select == true)
            {
              this.optionsD = JSON.parse(JSON.stringify([...val]))
            if(this.prevalue != '')
              {
                this.optionsD.forEach((e)=>{
                  if(e.value === this.prevalue)
                  {
                    e.checked = true
                  }
                  else{
                    e.checked = false
                  }
                })
              }
              // if()
            }
           }
        },
      immediate: true,
      deep: true,
    },
    optionsD: {
      handler (val) {
          // console.log(val, 'waaa')
          if (val) {
            if(this.single_select === true)
            {
              val.forEach((e,index)=>{
                if(e.id === undefined)
                {
                  e.id = 'singleselect' + this.unique + index
                }
                if(e.checked === true)
                {
                  this.placeholder = false
                  this.dropdownvalue = true
                  this.option_value = e.name
                }
              })
           }
            if(this.texteditor === true)
            {
              if(val != undefined)
              {   
                val.forEach((e,index)=>{
                  if(e.id === undefined)
                  {
                    e.id = 'texteditor' + this.unique + index
                  }
                  if(e.checked === true)
                  {
                    this.placeholder = false
                    this.dropdownvalue = true
                    this.option_value = e.name
                  }
                })
              }
            }
            else if(this.icon === true)
            {
              // console.log(val,'op');
              val.forEach((e) => {
                if (e.checked === true) {
                  this.placeholder = false
                  this.dropdownvalue = true
                  this.option_value = e.name
                  // this.icon_country_flag = e.icon
                  // console.log(this.icon_country_flag,'new');
                }
              })
            }
        } 
      // console.log(e,'in watch');
      },
      immediate: true,
      deep: true,
      flush: 'post'
    },
    icon_value:{
      handler(val)
      {
        // console.log(val);
      },
    },
    checkedData:{
       handler (val)
       { 

        if(this.filter_select === true)
        {
          // console.log('hi',val);
         if(val != [])
         {
           // console.log(val,'op');
          //  let count= 0
           let count1 = 0
           val.forEach((e)=>{
             if(e.checked === true)
             {
              //  count++
             }
             if(e.checked === false)
             {
               count1++
             }
           })
          //  if(val.length === count)
          //  {
          //   //  this.multiselectdropdownvalue = false
          //     this.all = true
          //  }
          //  else{
          //    this.all = false
          //    // console.log(document.querySelector('.hlx-multi-select-input'),'lol');
          //  }
           if(val.length === count1)
           {
            //  this.multiselectdropdownvalue = false
              this.disablebutton = true
           }
           else{
             this.disablebutton = false
             // console.log(document.querySelector('.hlx-multi-select-input'),'lol');
           }
         }
        }
        else{
          // console.log('hello');
          if(val != [])
         {
           // console.log(val,'op');
           let count= 0
           val.forEach((e)=>{
             if(e.checked === true)
             {
               count++
             }
           })
           if(val.length === count)
           {
            //  this.multiselectdropdownvalue = false
              this.all = true
           }
           else{
             this.all = false
             // console.log(document.querySelector('.hlx-multi-select-input'),'lol');
           }
           this.$emit('customChange', val)
         }

        }
        this.$emit('update:value', this.checkedData)
       },
       deep:true,
       flush:'post'
    },
    multiselectarray:{
      handler(val)
      {
        if(this.filter_select === true)
        {
          // console.log('hi');
            if(val !== undefined)
             {
              // val.forEach((e,index)=>{
              //    e.id = 'multiselect' + this.unique + index
              // })
              //  console.log(val,'loljhnddhnddjkdkjsdskjd');/
               if(val != [])
               {
                //  let count = 0 
                 let count1 = 0
                 val.forEach((e)=>{
                  // if(e.checked === true)
                  // {
                  //   count++
                  // }
                  if(e.checked === false)
                  {
                    count1++
                  }
                 })  
                //  if(val.length === count)
                //  {
                //     //  this.multiselectdropdownvalue = false
                //       this.all = true
                //  } 
                //  else{
                //    this.all = false
                //  } 
                 if(val.length === count1)
                 {
                    //  this.multiselectdropdownvalue = false
                      this.disablebutton = true
                 } 
                 else{
                   this.disablebutton = false
                 }        
                 }
             }
        }
        else{
          // console.log('hello');
          if(val !== undefined)
             {
              //  console.log(val,'loljhnddhnddjkdkjsdskjd');/
               if(val != [])
               {
                 let count = 0 
                 val.forEach((e)=>{
                  if(e.checked === true)
                  {
                    count++
                  }
                 })  
                 if(val.length === count)
                 {
                    //  this.multiselectdropdownvalue = false
                      this.all = true
                 } 
                 else{
                   this.all = false
                 }         
                 }
             }
        }
      
      this.$emit('update:value', this.checkedData)
      },
      immediate:true,
      deep:true,
      flush: 'post'
    },
    tagvalue:{
      handler(val)
      {
        // console.log(val,'tagvalue');
      },
      immediate:true
    },
    multiselect_options:{
      handler(val)
      {
        if(val)
        {
        if(val&& val.length>0){
        this.multiselectarray = JSON.parse(JSON.stringify([...val]))
                if(this.multiselect_prevalue != [])
        {
           this.multiselect_prevalue.forEach((e)=>{
             this.multiselectarray.forEach((ele)=>{
               if(ele.value === e)
               {
                  ele.checked = true
               }
             })
           })
           let multiselectpre_valuecount = 0
           this.multiselectarray.forEach((e)=>{
              if(e.checked === true)
              {
                multiselectpre_valuecount++ 
              }
           })
           if(multiselectpre_valuecount === this.multiselectarray.length)
           {
              this.all = true
           }
           else{
            this.all = false
           }
        }
          if(document.getElementById('multiselect'+ this.unique) != null)
          {
            document.getElementById('multiselect'+ this.unique).click()
            document.querySelector('.whole-checkbox').children[0].children[0].nextElementSibling.classList.remove('select-all-theme')
          }
        }
        }
      },
      immediate:true,
      deep:true,
      flush:'post'
    },
    selectvalue:{
      handler(val)
      {
        //  console.log(val);
      },
      immediate:true
    }
  },
  mounted () {
    document.addEventListener('click',(e) =>{
      if(this.multi_select === true )
      {
        if(this.isMultiSelect == true)
        {
          let elem = document.getElementById('multiselect'+this.unique).contains(e.target)
          if(elem === false)
          {
              this.isMultiSelect = false
              document.getElementById('multiselect'+this.unique).classList.remove('add-style')
              // console.log(elem);
          }
        }
      }
    })
      // console.log(this.texteditor,'lol');

      document.addEventListener('click',(e) =>{
        if(this.inline_search === true)
        {
             if(this.customdropdowncontainer === true)
             {
               let ele = document.getElementById('custom-dropdown'+this.unique).contains(e.target)
               if(ele === false)
               {
                this.customdropdowncontainer = false
                // console.log(document.getElementById('custom-dropdown'+this.unique).children[1]);
                document.getElementById('custom-dropdown'+this.unique).children[1].classList.add('icon-angle-down-regular')
                document.getElementById('custom-dropdown'+this.unique).children[1].classList.remove('icon-angle-up-regular')
                document.getElementById('custom-dropdown'+this.unique).classList.remove('selecteddropdown')
                  if(this.selectcount>0)
                  {
                      this.selectvalue = this.placeholdervalue
                      this.placeholdervalue = ''
                      this.animation = true
                  }
               }
             }
        }
      })
    document.addEventListener('click', (e) => {
      if (e.target.className != 'hlx-select-container change-color' && e.target.className != 'title-name' && e.target.className != 'hlx-select-input' && e.target.className != 'hlx-select-icon' && e.target.className != 'icon-angle-down-regular' && e.target.className != 'hlx-select-option-container' && e.target.className != 'hlx-select-option-value-container' && e.target.className != 'hlx-select-option-value' && e.target.className != 'icon-container' && e.target.tagName != 'I' && e.target.className != 'hlx-select-input-placeholder') {
        if (this.selectoptioncontainer === true) {
          this.selectoptioncontainer = false

          document.querySelectorAll('.hlx-select-container').forEach((eve) => {
            eve.classList.remove('change-color')
          })
             
             document.querySelectorAll('.title-name').forEach((e)=>{
               e.classList.remove('dropdownname-color');  
             })

          document.querySelectorAll('.icon-angle-down-regular').forEach((ev) => {
            ev.classList.remove('add')
          })
        }
      }
    })
    if (this.labelanimation === false) {
      this.title = ''
    } else {
      this.title = this.placeholder_value
    }
    if (this.multi_select === true) {
      // console.log(this.single_select,this.clearable);
      this.single_select = false
            // console.log(this.single_select,this.clearable,'after');
      this.multiselectplaceholder = true
      this.$emit('update:value', this.multiselectarray)
      const value = this.multiselectarray
        .filter(data => {
          if (data.checked == true) {
            return true
          }
        })
      // console.log(value.length, 'kkk')
      document.querySelectorAll('.hlx-multi-select-container').forEach((e) => {
        if (value.length > 0) {
          this.multiselecttitle = true
          this.multiselectplaceholder = false
          this.multiselectdropdownvalue = true
          e.click()
        }
      })

      const box = document.querySelector('#select'+this.unique)
      const observer = new ResizeObserver(e => {
        if (e[0].contentRect.width > 882 && e[0].contentRect.width < 920) {
          this.tagvalue = 11
        } else if (e[0].contentRect.width > 806 && e[0].contentRect.width < 881) {
          this.tagvalue = 10
        } else if (e[0].contentRect.width > 731 && e[0].contentRect.width < 805) {
          this.tagvalue = 9
        } else if (e[0].contentRect.width > 658 && e[0].contentRect.width < 730) {
          this.tagvalue = 8
        } else if (e[0].contentRect.width > 584 && e[0].contentRect.width < 657) {
          this.tagvalue = 7
        } else if (e[0].contentRect.width > 507 && e[0].contentRect.width < 583) {
          this.tagvalue = 6
        } else if (e[0].contentRect.width > 434 && e[0].contentRect.width < 506) {
          this.tagvalue = 5
        } else if (e[0].contentRect.width > 358 && e[0].contentRect.width < 433) {
          this.tagvalue = 4
        } else if (e[0].contentRect.width > 283 && e[0].contentRect.width < 357) {
          this.tagvalue = 3
        } else if (e[0].contentRect.width > 213 && e[0].contentRect.width < 282) {
          this.tagvalue = 2
        } else if (e[0].contentRect.width > 0 && e[0].contentRect.width < 212) {
          this.tagvalue = 1
        }
      })
      observer.observe(box)
      // this.all = true
       if(this.multiselect_options&& this.multiselect_options.length>0){
        this.multiselectarray = JSON.parse(JSON.stringify([...this.multiselect_options]))
        }
        if(this.multiselect_prevalue != [])
        {
           this.multiselect_prevalue.forEach((e)=>{
             this.multiselectarray.forEach((ele)=>{
              // console.log(ele.value,e);
               if(ele.value === e)
               {
                  ele.checked = true
               }
              //  else{
              //     ele.checked = false
              //  }
             })
           })
           let multiselectpre_valuecount = 0
           this.multiselectarray.forEach((e)=>{
              if(e.checked === true)
              {
                multiselectpre_valuecount++ 
              }
           })
           if(multiselectpre_valuecount === this.multiselectarray.length)
           {
              this.all = true
           }
           else{
            this.all = false
           }
          //  if(this.multiselectpre_valuecount > 0)
          //  {
          //   // console.log('jij');
          // this.multiselecttitle = true
          // this.multiselectplaceholder = false
          // this.multiselectdropdownvalue = true
          //  }
          //  console.log(this.multiselectarray,'olkjh',this.multiselect_prevalue);
        }
              document.getElementById('multiselect'+ this.unique).click()
              document.querySelector('.whole-checkbox').children[0].children[0].nextElementSibling.classList.remove('select-all-theme')

    } else if (this.icon == true) {
      // this.icon_country_flag = 'undefined'
      this.single_select = false
                  // console.log(this.single_select,this.clearable,'after');

      this.options.forEach((e,index)=>{
        if(e.id === undefined)
        {
          e.id = 'singleselect' + this.unique + index
        }
              })
    }
    else if(this.texteditor === true)
    {
      this.single_select = false
                  // console.log(this.single_select,this.clearable,'after');

      // console.log(this.options);
      // this.single_select = false
      // this.icon = false
      // this.multi_select = false
            if(this.options&& this.options.length>0){
            
            this.optionsD = JSON.parse(JSON.stringify([...this.options]))
          }
        this.optionsD.forEach((e,index)=>{
        if(e.id === undefined)
        {
          e.id = 'texteditor' + this.unique + index
        }
        if(e.checked === true)
        {
          this.option_value = e.name
        }
        // console.log('op');
        })
    }
    else if(this.customselect === true)
    {
        this.custom_select = true
    }
    else if(this.inline_search === true)
      {
      this.single_select = false
      if(this.selectvalue === '')
        {
           this.placeholdervalue = this.placeholder_value
        }
       }
    else{
      // console.log('ini');
                  // console.log(this.single_select,this.clearable,'bbefore');

      this.single_select = true  
                  // console.log(this.single_select,this.clearable,'after');

      let count = this.options.length
      let logic = ''
      this.options.forEach((e,index)=>{
        if(e.id === undefined)
        {
          e.id = 'singleselect' + this.unique + index
        }
        if(e.checked === true)
        {
          this.$emit('update:value',e.value)
          this.$emit('selectedvalue', e)
          count--
        }
                     })
                    //  console.log(count,this.options.length);
          if(count === this.options.length)
          {
            // console.log('kkklvjuk');
            this.$emit('update:value',logic)
          }
    }
    this.selectall = true

    if(this.options&& this.options.length>0){
      if(this.inline_search !== true)
      {
        this.optionsD = JSON.parse(JSON.stringify([...this.options]))
      }
    }

    if(this.prevalue !== '')
{
   this.pre_value = this.prevalue
   this.optionsD.forEach((e)=>{
    if(e.checked === undefined)
    {
        if(this.pre_value === e.value)
        {
           e.checked = true
        }
        else{
          e.checked = false
        }
    }
    else{
        if(this.pre_value === e.value)
        {
           e.checked = true
          this.placeholder = false
          this.dropdownname = true
          this.dropdownvalue = true
        }
        else{
          e.checked = false
        }
    }
 })
}

  },
  computed: {
    computeMultiSelect () {
      this.computeDropdownData
      this.count_select_value = this.multi_select_value.length - this.tagvalue
      return this.multi_select_value
    },
    computeDropdownData () {
      const data = [...this.multiselectarray]
      if (this.search_by && this.search_by != '') {
        return data.filter(item => item.name.toLowerCase().toString().includes(this.search_by.toLowerCase()))
      } else {
        return this.multiselectarray
      }
    },
    dropdowndata()
   {
      const data = [...this.customoption]
        // console.log(this.selectvalue);
      if(this.selectvalue !='' && this.selectvalue)
      {
        return data.filter((item) => item.name.toString().toLowerCase().includes(this.selectvalue.toLowerCase()))
      }
      else{
        return this.customoption
      }
   }
  },
  methods: {
    check(event)
    {
        console.log(event.target.value);
          this.$emit('update:modelValue', event.target.value)
    },
        Customoptioncontainer(event)
    {
        if(this.customdropdowncontainer === false)
        {
            if(event.target.className === 'icon-angle-down-regular')
            {
                this.customdropdowncontainer =true
                event.target.classList.add('icon-angle-up-regular')
                event.target.classList.remove('icon-angle-down-regular')
                event.target.parentElement.classList.add('selecteddropdown')
                if(this.selectcount>0)
                {
                    this.placeholdervalue = this.selectvalue
                    this.selectvalue = ''
                }
            }
            else if(event.target.className === 'custom-dropdown')
            {
                this.customdropdowncontainer =true
                document.querySelector('#custom-input'+this.unique).focus()
                event.target.children[1].classList.add('icon-angle-up-regular')
                event.target.children[1].classList.remove('icon-angle-down-regular')
                event.target.classList.add('selecteddropdown')
                if(this.selectcount>0)
                {
                    this.placeholdervalue = this.selectvalue
                    this.selectvalue = ''
                }
            }
            else if(event.target.className === 'custom-dropdown-input'){
                this.customdropdowncontainer =true
                document.querySelector('#custom-input'+this.unique).focus()
                event.target.nextElementSibling.classList.add('icon-angle-up-regular')
                event.target.nextElementSibling.classList.remove('icon-angle-down-regular')
                event.target.parentElement.classList.add('selecteddropdown')
                if(this.selectcount>0)
                {
                    this.placeholdervalue = this.selectvalue
                    this.selectvalue = ''
                }
            }
        }
        else{
                document.querySelector('#custom-input'+this.unique).blur()
            if(event.target.className === 'icon-angle-up-regular')
            {
                this.customdropdowncontainer =false
                event.target.classList.add('icon-angle-down-regular')
                event.target.classList.remove('icon-angle-up-regular')
                event.target.parentElement.classList.remove('selecteddropdown')
                if(this.selectcount>0)
                {
                    this.selectvalue = this.placeholdervalue
                    this.placeholdervalue = ''
                }
            }
            else if(event.target.className === 'custom-dropdown')
            {
                this.customdropdowncontainer =false
                // this.input = false
                // this.labelinput = true                
                event.target.children[1].classList.add('icon-angle-down-regular')
                event.target.children[1].classList.remove('icon-angle-up-regular')
                event.target.classList.remove('selecteddropdown')
                if(this.selectcount>0)
                {
                    this.selectvalue = this.placeholdervalue
                    this.placeholdervalue = ''
                }
            }
            else if(event.target.className === 'custom-dropdown-input'){
                // console.log('aa',event.target);
                this.customdropdowncontainer =false
                event.target.nextElementSibling.classList.add('icon-angle-down-regular')
                event.target.nextElementSibling.classList.remove('icon-angle-up-regular')
                event.target.parentElement.classList.remove('selecteddropdown')
                if(this.selectcount>0)
                {
                    this.selectvalue = this.placeholdervalue
                    this.placeholdervalue = ''
                }
            }
                    // console.log(document.querySelector('.customdropdown-option-container').getBoundingClientRect());

        }
    },
        Customselectoptionvalue(data,data1)
    {
      // this.selectvalue = data1
      // console.log(this.selectvalue,data1);
          this.customoption.forEach((e)=>{
            if(data === e.value)
            {
              // console.log(data,e.value);
                e.checked = true
                this.selectvalue = e.name
                this.$emit('update:modelValue', this.selectvalue)
                this.$emit('selectedvalue',e)
                // console.log(this.selectvalue,"asdasdasd")
            }
            else{
                e.checked = false
            }
          })
        this.selectcount++
        this.placeholdervalue = ''
        this.customdropdowncontainer = false
        if(this.labelanimation === true)
        {
            this.animation = true
        }
          this.$emit('customChange',this.customoption)
          // console.log(data1,data,'okok');
          this.$emit('inlinereferencevalue', data1)
          this.$emit('inlinevalue',data)
          // console.log(event.target,event.target.parentElement.parentElement.parentElement.children[1]);
          if(event.target.className === 'option-value')
          {
            event.target.parentElement.parentElement.parentElement.children[1].classList.add('icon-angle-down-regular')
            event.target.parentElement.parentElement.parentElement.children[1].classList.remove('icon-angle-up-regular')
            event.target.parentElement.parentElement.parentElement.classList.remove('selecteddropdown')
          }
          else if(event.target.tagName === 'I')
          {
            event.target.parentElement.parentElement.parentElement.children[1].classList.add('icon-angle-down-regular')
            event.target.parentElement.parentElement.parentElement.children[1].classList.remove('icon-angle-up-regular')
            event.target.parentElement.parentElement.parentElement.classList.remove('selecteddropdown')
          }
          else if(event.target.className === 'option')
          {
              event.target.parentElement.parentElement.children[1].classList.add('icon-angle-down-regular')
              event.target.parentElement.parentElement.children[1].classList.remove('icon-angle-up-regular')
              event.target.parentElement.parentElement.classList.remove('selecteddropdown')
          }
    },
    senddata(event)
    {
        if(event.key === 'Enter')
        {
            // console.log('aa',this.selectvalue,event.target);
            this.customdropdowncontainer = false
            event.target.nextElementSibling.classList.add('icon-angle-down-regular')
            event.target.nextElementSibling.classList.remove('icon-angle-up-regular')
            this.customoption.forEach((e)=>{
              e.checked = false
            })
            let obj ={}
            obj.name = this.selectvalue
            obj.value = this.selectvalue
            obj.checked = true
            obj.icon = 'icon-database-regular'
            this.customoption.push(obj)
            document.querySelector('#custom-input'+this.unique).blur()
            this.$emit('searchvalue',this.customoption)
        }
    },
    removevalue () {
      // console.log(this.selectoptioncontainer,'pos');
      // this.selectoptioncontainer
      this.dropdownvalue = false
      this.placeholder = true
      this.option_value = ''
      this.dropdownname = false
      this.optionsD.forEach((e) => {
        if (e.checked == true) {
          e.checked = false
        }
      })
      this.$emit('customChange', this.optionsD)
      this.$emit('clearablevalue',this.optionsD)
      // console.log(this.options,'poj');
    },
    SelectOption (value) {
      this.selectedvalue = []
      this.pre_value = ''
      this.placeholder = false
      this.dropdownvalue = true
      this.dropdownname = true
      this.selectoptioncontainer = false
      if(document.getElementById('title'+this.unique) )
        document.getElementById('title'+this.unique).classList.remove('dropdownname-color');  
        if(document.getElementById('title1'+this.unique))
         document.getElementById('title1'+this.unique).classList.remove('dropdownname-color');  
      if (event.target.parentElement.parentElement.parentElement.className === 'hlx-select-container change-color') {
        event.target.parentElement.parentElement.parentElement.classList.remove('change-color')
        event.target.parentElement.parentElement.previousElementSibling.children[0].classList.remove('add')
      }
      if (this.single_select == true || this.texteditor == true) {
        this.optionsD.map((e) => {
          if (e.id === value) {
            e.checked = true
            this.option_value = e.name
            this.icon_value = e.icon
            // console.log(this.option_value,'check');
            // this.valueid = e.id.toString()
          } else {
            e.checked = false
          }
        })
            // console.log('pop',this.optionsD,value);
      }
      if (this.icon === true) {
        // console.log(value,'po');
        this.optionsD.map((e) => {
          if (e.id === value) {
            e.checked = true
            // console.log(event.target,'dei');
            this.option_value = e.name
            this.icon_country_flag = e.flag
            // console.log(this.option_value,this.icon_country_flag);
          }
          else{
            e.checked = false
          }
        })
      }
      // this.optionsD = JSON.parse(JSON.stringify([...this.optionsD]))
      let b = ''
      let c = ''
      this.optionsD.forEach((e)=>{
        if(e.checked === true)
        {
          b = e.value
          c = e.name
          this.$emit('selectedvalue', e)
          // console.log(b);
        }
      })
      // console.log(b,'op',this.optionsD);
      this.$emit('update:value', b)
      this.$emit('update:name',c)
      this.$emit('customChange', this.optionsD)
    },
    closeselect () {
      document.querySelector('.hlx-select-option-container').style.display = ''
    },
    OptionContainer (event) {
      // this.$emit('dropdownstatus','open')
      if (this.selectoptioncontainer === false) {
        if (event.target.className === 'hlx-select-container') {
          // console.log(this.optionsD,'hello');
          this.selectoptioncontainer = true
          if(this.selectoptioncontainer == true && this.option_value != '')
          {
            if(document.getElementById('title1'+this.unique))
            document.getElementById('title1'+this.unique).classList.add('dropdownname-color')
            if(document.getElementById('title'+this.unique))
            document.getElementById('title'+this.unique).classList.add('dropdownname-color')
          }
          event.target.classList.add('change-color')
          event.target.lastElementChild.previousElementSibling.children[0].classList.add('add')
          // console.log('aaa')
        } else if (event.target.parentElement.className === 'hlx-select-container') {
          this.selectoptioncontainer = true
          if(this.selectoptioncontainer == true && this.option_value != '')
          {
            if(document.getElementById('title1'+this.unique))
            document.getElementById('title1'+this.unique).classList.add('dropdownname-color')
            if(document.getElementById('title'+this.unique))
            document.getElementById('title'+this.unique).classList.add('dropdownname-color')
          }
          event.target.parentElement.classList.add('change-color')
          event.target.parentElement.lastElementChild.previousElementSibling.children[0].classList.add('add')
          // console.log('bbb');
        }
        else if(event.target.parentElement.parentElement.className === 'hlx-select-container')
        {
          // console.log(event.target.parentElement.parentElement.className);
          this.selectoptioncontainer = true
          event.target.parentElement.parentElement.classList.add('change-color')
          event.target.classList.add('add')
          if(this.selectoptioncontainer == true && this.option_value != '')
          {
            if(document.getElementById('title1'+this.unique))
            document.getElementById('title1'+this.unique).classList.add('dropdownname-color')
            if(document.getElementById('title'+this.unique))
            document.getElementById('title'+this.unique).classList.add('dropdownname-color')
          }
        }
      } else if (this.selectoptioncontainer === true) {
        // console.log('op');
        // this.$emit('dropdownstatus','close')
        if (this.option_value === '') {
          // this.dropdownname = true
          this.placeholder = true
        }
        // else{
        //   document.getElementById('title'+this.unique).classList.add('color-change')

        // }
        this.selectoptioncontainer = false
        if(document.getElementById('title1'+this.unique))
        document.getElementById('title1'+this.unique).classList.remove('dropdownname-color')
        if(document.getElementById('title'+this.unique))
        document.getElementById('title'+this.unique).classList.remove('dropdownname-color')
        if (event.target.className === 'hlx-select-container change-color') {
          event.target.classList.remove('change-color')
          // console.log(event.target, 'lol')
          event.target.lastElementChild.previousElementSibling.children[0].classList.remove('add')
        } else if (event.target.parentElement.className === 'hlx-select-container change-color') {
          event.target.parentElement.classList.remove('change-color')
          event.target.parentElement.lastElementChild.previousElementSibling.children[0].classList.remove('add')
        } else if (event.target.parentElement.parentElement.className === 'hlx-select-container change-color') {
          event.target.parentElement.parentElement.classList.remove('change-color')
          event.target.classList.remove('add')
        }
      }
    },
    OptionContainer1 (event) {
      if (this.iconselect === false) {
        if (event.target.className === 'hlx-select-container') {
          this.nplace = true
          this.place = false
          this.noplace = true
          this.iconselect = true
          event.target.classList.add('change-color')
          event.target.nextElementSibling.nextElementSibling.children[0].classList.add('add')
        } else if (event.target.className === 'hlx-select-input-placeholder') {
          this.nplace = true
          this.place = false
          this.noplace = true
          this.iconselect = true
          event.target.parentElement.classList.add('change-color')
          event.target.nextElementSibling.children[0].classList.add('add')
        } else if (event.target.className === 'icon-angle-down-regular') {
          this.nplace = true
          this.place = false
          this.noplace = true
          this.iconselect = true
          event.target.parentElement.parentElement.classList.add('change-color')
          event.target.classList.add('add')
        } else if (event.target.className === 'hlx-select-icon') {
          this.nplace = true
          this.place = false
          this.noplace = true
          this.iconselect = true
          event.target.parentElement.classList.add('change-color')
          event.target.children[0].classList.add('add')
        }
      } else if (this.iconselect === true) {
        if (event.target.className === 'hlx-select-container change-color') {
          this.nplace = false
          this.place = true
          this.noplace = false
          this.iconselect = false
          event.target.classList.remove('change-color')
          event.target.children[2].children[0].classList.remove('add')
        } else if (event.target.className === 'hlx-select-input') {
          this.nplace = false
          this.place = true
          this.noplace = false
          this.iconselect = false
          event.target.parentElement.classList.remove('change-color')
          // console.log(event.target)
          event.target.nextElementSibling.children[0].classList.remove('add')
        } else if (event.target.className === 'icon-angle-down-regular add') {
          this.nplace = false
          this.place = true
          this.noplace = false
          this.iconselect = false
          event.target.parentElement.parentElement.classList.remove('change-color')
          event.target.classList.remove('add')
        } else if (event.target.className === 'hlx-select-icon') {
          this.nplace = false
          this.place = true
          this.noplace = false
          this.iconselect = false
          event.target.parentElement.classList.remove('change-color')
          event.target.children[0].classList.remove('add')
        }
      }
    },
    color () {
      if (this.isMultiSelect === true) {
        this.isMultiSelect = false
        document.getElementById('multiselect'+this.unique).classList.remove('add-style')
      } else if (this.isMultiSelect === false) {
        this.isMultiSelect = true
        document.getElementById('multiselect'+this.unique).classList.add('add-style')
      }
    },
    MultiselectOptioncontainer (event) {
      this.multi_select_value = this.multiselectarray
        .filter(data => {
          if (data.checked == true) {
            this.multiselecttitle = true
            this.multiselectplaceholder = false
            this.multiselectdropdownvalue = true
            return true
          }
        })
        .map(data => {
          return data.name
        })
      if (this.multi_select_value.length != 0) {
        for (const i in this.multi_select_value) {
          if (this.multi_select_value.length > 3) {
            this.count = true
            this.count_select_value = this.multi_select_value.length - 3
          } else {
            this.count = false
          }
        }
      } else {
        this.multiselectplaceholder = true
        this.multiselectdropdownvalue = false
        this.multiselecttitle = false
      }
      
      // console.log(this.multiselect_options,'vfjdx');
    },
    removemultiselectvalue (removedItem) {
      this.multi_select_value = this.multi_select_value.filter(data => data != removedItem)
      this.multiselectarray.filter(value => {
        if (value.name == removedItem) {
          return value.checked = false
        }
      })
      this.count_select_value = this.multi_select_value.length - 3
      // console.log(this.multi_select_value,'loloool');
      if (this.multi_select_value.length == 0) {
        this.multiselectplaceholder = true
        this.multiselectdropdownvalue = false
        this.multiselecttitle = false
      }
      document.querySelectorAll('.check-container').forEach((e) => {
        if (removedItem === e.innerText) {
          e.click()
        }
      })
    },
    MultiSelectOption (event) {
      if (event.target.parentElement.className === 'hlx-multi-select-option-value-container select-value') {
        event.target.parentElement.classList.remove('select-value')
      } else if (event.target.className === 'hlx-multi-select-option-value-container select-value') {
        event.target.classList.remove('select-value')
      }
      if (event.target.className === 'hlx-multi-select-option-value') {
        if (this.multi_select_value.length < '2') {
          this.option_value = event.target.innerText
          this.multi_select_value.push(this.option_value)
          this.multi_select_count_value.push(this.option_value)
        } else if (this.multi_select_value.length >= '2') {
          this.option_value = event.target.innerText
          this.count_select_value.push(this.option_value)
          this.multi_select_count_value.push(this.option_value)
        }
        event.target.parentElement.classList.add('select-value')
      } else if (event.target.className === 'hlx-multi-select-option-value-container') {
        if (this.multi_select_value.length < '2') {
          this.option_value = event.target.innerText
          this.multi_select_value.push(this.option_value)
          this.multi_select_count_value.push(this.option_value)
        } else if (this.multi_select_value.length >= '2') {
          this.option_value = event.target.innerText
          this.count_select_value.push(this.option_value)
          this.multi_select_count_value.push(this.option_value)
        }
        event.target.classList.add('select-value')
      }
    },
    search (by) {
      this.search_by = by == '' ? null : by
    },
    emitfiltervalue()
    {
      this.isMultiSelect = false
      this.all = false
      
      this.$emit('customChange', this.checkedData)
    },
    emitclearvalue()
    {
        this.checkedData.forEach((e)=>{
          e.checked = false
        })
    this.$emit('customChange', this.checkedData)

    },
    clearIcon()
    {
      if(this.option_value != '')
      {
        document.getElementById('arrowid'+this.unique).style.display = 'none'
        document.getElementById('crossid'+this.unique).style.display = 'block'
      }
    },
    arrowIcon()
    {
      // console.log(event);
      if (document.getElementById('crossid'+this.unique).style.display == 'block') {
        document.getElementById('arrowid'+this.unique).style.display = 'block'
        document.getElementById('crossid'+this.unique).style.display = 'none'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
i{
    font-size: 12px;
}
</style>
