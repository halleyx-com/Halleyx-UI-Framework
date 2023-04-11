<template>
 
     <div class="main-content-body" v-if="this.type=='regular'">
      <div class="main-content-body-upload" >
        <div
          class="upload-panel"
          v-cloak
          @drop.prevent="addFile"
          @dragover.prevent
        >
          <div class="panel-items" v-if="this.buploadfile == true">
            <i class="icon-cloud-upload-regular"></i>
            <span class="drag-text">Drag and drop your files</span>
            <span class="or-text">or</span>
            <hlx-button class="secondary sm"
              style="display: block"
             onclick="document.getElementById('fileUpload').click()"
            >
              Choose file
            </hlx-button>
            <form enctype="multipart/form-data" @submit="saveDocuments">
              <input
                autocomplete="off"
                type="file"
                ref="file"
                :accept="this.file_type"
                id="fileUpload"
                name="fileUpload"
                style="display: none"
                @change="chooseFiles"
                multiple
              />
            </form>
          </div>
          <div class="upload-file" v-if="this.auploadfile == true">
          <div class="upload-file-container">
        
          <div class="filename-container">
            <i class="icon-file-check-regular"></i>
          <div class="cont"><span >{{this.file_name}}</span><i class="icon-trash-regular" @click="deleteFilename" v-if="this.custom_icon==undefined"></i></div>
          
         </div>
  
        </div>
        <div class="icons" v-if="this.custom_icon!=undefined">
          
          <i :class="this.custom_icon" @click="this.previewFile()"></i>
          <i class="icon-trash-regular" @click="this.deleteFilename()"></i>
         </div>
     </div>
       </div>
             <!-- <span class="upload-footer">Maximum file size is {{this.file_size_limit.toUpperCase()}}</span>  -->
             <span class="upload-footer">{{ this.err_msg }}</span> 
      </div>
    </div>

    <div class="button-type-upload" v-if="this.type=='button'">
      <hlx-button class="secondary sm"
              style="display: block"
             onclick="document.getElementById('fileUpload').click()"
             v-if="this.file_name == ''"
            >
              Choose file
            </hlx-button>
            <form enctype="multipart/form-data" @submit="saveDocuments">
              <input
                autocomplete="off"
                type="file"
                ref="file"
                :accept="this.file_type"
                id="fileUpload"
                name="fileUpload"
                style="display: none"
                @change="chooseFiles"
                multiple
              />
            </form>
            <div class="filename-container"  v-if="this.file_name!=''">
          <div class="cont"><span >{{ this.file_name }}</span> <i :class="this.custom_icon" @click="previewFile" v-if="this.custom_icon!=undefined"></i><i class="icon-trash-regular" @click="deleteFilename"></i></div>
          <!-- <div class="icons" v-if="this.custom_icon!=undefined">
          
          <i :class="this.custom_icon" @click="previewFile"></i>
          <i class="icon-trash-regular" @click="deleteFilename"></i>
         </div> -->
         </div>
    </div>
    

</template>

<script>
import hlxButton from './ButtonComponent.vue'
import hlxAlertNotification from "../components/AlertComponent.vue";
export default {
  name:'hlx-file-upload',
  components:{hlxAlertNotification, hlxButton},
data(){
    return{
      err_msg: '',
      buploadfile:false,
      auploadfile:false,
      file_data: {},
      files: [],
      file_name:'',
      uploaddata:false,
      disablebutton:true,
      ftype:true,
      fsize:'',
      fsizee:true,
      fact:'',
      preview_data:'',
    }
},
// props:['file_type','file_size_limit','custom_icon', 'type'],
props:{
file_type:{
  type: String
},
file_size_limit:{
  type: String
},
custom_icon:{
  type: String
},
type:{
  type: String
}

},
emits:['file_data', 'preview_file', 'delete_file'],
    mounted(){
    
      // this.$emit('file_data',"ll")
      this.uploadfile = true
      this.disablebutton = true
      this.buploadfile =true
      this.fsize = parseInt(this.file_size_limit.replace('mb',''))*1000000
  },
methods:{
       chooseFiles() {
        this.ftype = true
        this.fsizee = true
      var doc = document.getElementById("fileUpload").files[0];

      this.file_data = doc
      this.file_name = this.file_data.name

      let obj = {}
      // if (doc) {
    var reader = new FileReader();
    reader.readAsText(doc, "UTF-8");
    reader.onload = function (evt) {
        this.fact = evt.target.result
        obj["properties"] = doc
        obj["data"] = this.fact
        // this.file_data = this.fact
        // console.log(obj,"ooo");   
         }
    // }
    setTimeout(()=>{

      // console.log(obj,"ppppp");
      this.$emit('file_data',obj)
      this.preview_data = obj
    },1000)
    var regex = /\./gi, result, indices = [];
while ( (result = regex.exec(this.file_data.name)) ) {
    indices.push(result.index);
}
      if (this.files.length < 1) {

         if (doc.size < this.fsize) {

            if (this.file_type.includes(this.file_data.name.slice(indices[indices.length-1],this.file_data.name.length))) {
              if(this.type == 'regular'){

                let a = document.querySelector('.upload-panel')
                a.classList.remove('err')
              }
              this.err_msg = ''
               this.files.push(this.file_data);

               this.file_name = this.file_data.name
              

               this.buploadfile = false

               this.auploadfile = true

               this.disablebutton = false

            }

            else{

                this.fileType(this.file_data.name)

            }

         }

         else{

           this.fileSize(doc.size)

         }

      }

      else{

          // this.filesLimit()

      }
    },
          addFile(e) {
            console.log("drag");
                    this.ftype = true
        this.fsizee = true
            this.files = []
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      [...droppedFiles].forEach((f) => {
        
        this.file_data = f
        let obj = {}
      // if (doc) {
    var reader = new FileReader();
    reader.readAsText(f, "UTF-8");
    reader.onload = function (evt) {
        this.fact = evt.target.result
        obj["properties"] = f
        obj["data"] = this.fact
        // this.file_data = this.fact
        // console.log(obj,"ooo");   
         }
    // }
    setTimeout(()=>{

      // console.log(obj,"ppppp");
      this.$emit('file_data',obj)
      this.preview_data = obj
    },1000)
              // this.$emit('file_data',this.file_data)

        this.file_name = this.file_data.name
        var regex = /\./gi, result, indices = [];
while ( (result = regex.exec(this.file_name)) ) {
    indices.push(result.index);
}
        if (this.files.length < 1) {
          if (f.size < this.fsize) {
            if (this.file_type.includes(this.file_name.slice(indices[indices.length-1],this.file_name.length))) {
              console.log("jeje");
              let a = document.querySelector('.upload-panel')
              a.classList.remove('err')
              this.err_msg = ''
              
                this.buploadfile = false
               this.auploadfile = true
            }
            else{
              this.fileType(this.file_data.name)
            }
          }
          else{
            this.fileSize(this.file_data.size)
          }
        } else if (this.files.length >= 1) {
          // this.filesLimit();
        }
      });
      // if(this.files.length!=0){
        this.files.push(this.file_data);
        // this.disablebutton = false
        this.files.push(this.file_data);
      // }
        // console.log("files",this.files);
    },


    fileType(name) {
      let a = document.querySelector('.upload-panel')
      var regex = /\./gi, result, indices = [];
while ( (result = regex.exec(name)) ) {
    indices.push(result.index);
}
      if(this.file_type.toLowerCase().includes(name.slice(indices[indices.length-1],name.length))){
        this.ftype = true
      a.classList.remove('err')
      this.err_msg = ''
     }else{
      this.ftype = false      
      a.classList.add('err')
      this.err_msg = `Supported file types are ${this.file_type}`
      // console.log(a,"err");
     }
    },

    fileSize(size) {
      let a = document.querySelector('.upload-panel')
      if(size<=this.fsize){
        this.fsizee = true
        a.classList.remove('err')
        this.err_msg = ''
      }else{
        // console.log("false");
        this.fsizee = false
        a.classList.add('err')
        this.err_msg = `Maximum file size is ${this.file_size_limit.toUpperCase()}`
      }
      // ElNotification({
      //   title: "Maximum file size exceeded",
      //   message: `File size should be less than ${this.file_size_limit}`,
      //   type: "warning",
      // });
    },
        deleteContainer(event){
         event.target.parentElement.parentElement.remove()
    },
    previewFile(){
      this.$emit("preview_file", this.preview_data)
    },
        deleteFilename(){
                  this.ftype = true
        this.fsizee = true
       this.files = []
       this.file_data = {}
       this.file_name=''
       this.auploadfile = false
       this.buploadfile = true
       this.disablebutton = true
       this.$emit("delete_file", this.file_data)
    },
}
}
</script>
