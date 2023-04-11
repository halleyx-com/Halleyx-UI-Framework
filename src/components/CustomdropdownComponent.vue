<template>
<div class="flow-diagram-container">
   <div class="flow-diagram-container-left">
      <div id="circle" class="drag-drop" @dragstart="startDrag"></div>
      <div id="double-circle" class="drag-drop" @dragstart="startDrag">
      <div id="normal-circle"></div>
      </div>
      <div id="dark-circle" class="drag-drop" @dragstart="startDrag"></div>
      <div id="rectangle" class="drag-drop" @dragstart="startDrag"></div>
   </div>
   <div class="flow-diagram-container-right">
      <div class="dropzone" @drop="dropEvent" @dragover="dragOver">

      </div>
   </div>
</div>
<!-- <div class="flow-diagram-container">
<div id="circle" class="drag-drop"> #no-drop </div>
<div id="dark-circle" class="drag-drop"> #yes-drop </div>

<div id="outer-dropzone" class="dropzone">
  #outer-dropzone
  <div id="inner-dropzone" class="dropzone">#inner-dropzone</div>
 </div>

</div> -->
</template>

<script>
import interact from 'interactjs'
export default {
name:"hlx-custom-dropdown",
props:{
   options:{
    type:Array,
   },
   placeholder_value:{
       type:String,
       default:'Select'
   },
   labelanimation:{
        type:Boolean,
        default:false
   }
},
data()
{
    return{
       dragstart:'',
       count:0  ,
       reusecontainerid:'',
       xposition:0,
       yposition:0
    }
},
mounted()
{
interact('.addrect')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  })

  function dragMoveListener (event) {
    if(event.target.style.border !== 'none')
    {
        var target = event.target
        // console.log(target,'lol',event.dx,event.dy);
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
      
        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
      
        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)

    }
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener
interact('.addrect')
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move (event) {
         if(event.target.style.border !== 'none')
    {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)
    //     // update the element's style
        // target.style.width = event.rect.width + 'px'
        // target.style.height = event.rect.width + 'px'
        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        // target.children[0].style.width = event.rect.width+'px'
        //  target.children[0].style.height = event.rect.width+'px'
         if(target.children[0].id === 'circle')
         {
                    target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.width + 'px'
            target.children[0].style.borderRadius = event.rect.width+'px'
            target.children[0].style.width = event.rect.width+'px'
            target.children[0].style.height = event.rect.width+'px'
         }
         else if(target.children[0].id === 'dark-circle')
         {
                    target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.width + 'px'
            target.children[0].style.width = event.rect.width+'px'
            target.children[0].style.height = event.rect.width+'px'
            target.children[0].style.borderRadius = event.rect.width+'px'
         }
        else if(target.children[0].id === 'rectangle')
         {
                    target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'
            target.children[0].style.width = event.rect.width-8+'px'
            target.children[0].style.height = event.rect.height-8+'px'
            target.children[0].style.borderRadius = '6px'
         }
      }
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 50 }
      })
    ],

    inertia: true
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ]
  })

  document.addEventListener('click',(event)=>{
    console.log(event.target);
      document.querySelectorAll('.addrect').forEach((e)=>{
          if(e.style.border != 'none')
          {
              e.style.border = 'none'
          }
      })
    if(event.target.className === 'addrect')
    {
        // // console.log('hello');
        // this.x = event.target.offsetX
        // this.y = event.target.offsetY
        event.target.style.border = '2px solid #00ADB5'
        // let transformValue = event.target.style.transform
        // let transformValuelength = transformValue.length
        // let firstchar = 0
        // let secondchar = 0
        // let count = 0
        // for(var i=0; i<transformValuelength;i++)
        // {
        //     if(transformValue[i] === 'p')
        //     {
        //         if(count == 0)
        //         {
        //             firstchar = i
        //            count++
        //         }
        //         else{
        //             secondchar = i
        //         }
        //     }
        // }
        // let xvalue = transformValue.slice(10,firstchar)
        // let yvalue = transformValue.slice(firstchar+4,secondchar)
        // this.xposition = parseInt(xvalue)
        //  this.yposition = parseInt(yvalue)
    }
    else if(event.target.id === 'circle')
    {
        // console.log('hi');
        // console.log(event.target.parentElement.style.transform);
        // let transformValue = event.target.parentElement.style.transform
        // let transformValuelength = transformValue.length
        // let firstchar = 0
        // let secondchar = 0
        // let count = 0
        // for(var i=0; i<transformValuelength;i++)
        // {
        //     if(transformValue[i] === 'p')
        //     {
        //         if(count == 0)
        //         {
        //             firstchar = i
        //            count++
        //         }
        //         else{
        //             secondchar = i
        //         }
        //     }
        // }
        // let xvalue = transformValue.slice(10,firstchar)
        // let yvalue = transformValue.slice(firstchar+4,secondchar)
        // this.xposition = parseInt(xvalue)
        //  this.yposition = parseInt(yvalue)
        // console.log(xvalue,yvalue,'op',this.xposition,this.yposition);
        // this.x = event.target.parentElement.offsetX
        // this.y = event.target.parentElement.offsetY
        event.target.parentElement.style.border = '2px solid #00ADB5'
    }
    else if(event.target.id === 'dark-circle')
    {
        event.target.parentElement.style.border = '2px solid #00ADB5'

    }
    else if(event.target.id === 'rectangle')
    {
        event.target.parentElement.style.border = '2px solid #00ADB5'

    }
  })

},
methods:{
  startDrag(ev)
  {
        console.log('dragging',ev.target.id);
        ev.dataTransfer.clearData();
        ev.dataTransfer.setData("text/plain", ev.target.id);
    //   console.log(data1,'set',ev.target.id);
  },
  dragOver(event)
  {
    //  console.log('dragover',event.dataTransfer.getData("text/plain"));
     event.preventDefault();
  },
  dropEvent(event)
  {
    event.preventDefault();
    console.log('drop');
    const data = event.dataTransfer.getData("text/plain");
    console.log(data,event);
    if(data === 'circle')
    {
         const create = document.createElement('div')
         create.setAttribute('id',data)
          create.classList.add('drag-drop1')
        //   let width = document.querySelector('#circle').style.offsetWidth+4
        //   let height = document.querySelector('#circle').style.offsetHeight+4
          let transform = 'translate(' +event.offsetX + 'px,' +event.offsetY + 'px)'
          const rectborder = document.createElement('div')
          rectborder.classList.add('addrect')
          rectborder.style.width = '68px'
          rectborder.style.height = '68px'
          rectborder.style.transform = transform
          rectborder.appendChild(create)
    //    create.style.transform = 'translate(' +event.offsetX + 'px,' +event.offsetY + 'px)'
       document.querySelector('.dropzone').appendChild(rectborder)
    }
    else if(data === 'double-circle')
    {
        
         const create = document.createElement('div')
         const childcreate = document.createElement('div')
         create.setAttribute('id',data)
         create.classList.add('drag-drop1')
         childcreate.setAttribute('id','normal-circle')
          let transform = 'translate(' +event.offsetX + 'px,' +event.offsetY + 'px)'
          const rectborder = document.createElement('div')
          rectborder.classList.add('addrect')
          rectborder.style.width = '68px'
          rectborder.style.height = '68px'
          rectborder.style.transform = transform
         create.appendChild(childcreate)
          rectborder.appendChild(create)
    //    create.style.transform = 'translate(' +event.offsetX + 'px,' +event.offsetY + 'px)'
              document.querySelector('.dropzone').appendChild(rectborder)
    }
    else if(data === 'dark-circle')
    {
           const create = document.createElement('div')
            create.setAttribute('id',data)
            create.classList.add('drag-drop1')
        //   let width = document.querySelector('#dark-circle').style.offsetWidth+4
        //   let height = document.querySelector('#dark-circle').style.offsetHeight+4
          let transform = 'translate(' +event.offsetX + 'px,' +event.offsetY + 'px)'
          const rectborder = document.createElement('div')
          rectborder.classList.add('addrect')
          rectborder.style.width = '68px'
          rectborder.style.height = '68px'
          rectborder.style.transform = transform
          rectborder.appendChild(create)
          document.querySelector('.dropzone').appendChild(rectborder)
    }
    else if(data === 'rectangle')
    {
            const create = document.createElement('div')
            create.setAttribute('id',data)
            create.classList.add('drag-drop1')
        //   let width = document.querySelector('#dark-circle').style.offsetWidth+4
        //   let height = document.querySelector('#dark-circle').style.offsetHeight+4
          let transform = 'translate(' +event.offsetX + 'px,' +event.offsetY + 'px)'
          const rectborder = document.createElement('div')
          rectborder.classList.add('addrect')
          rectborder.style.width = '148px'
          rectborder.style.height = '88px'
          rectborder.style.transform = transform
          rectborder.appendChild(create)
          document.querySelector('.dropzone').appendChild(rectborder)
    }
  }
}
}
</script>

<style>

</style>