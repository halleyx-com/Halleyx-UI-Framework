<template>
  <!-- <div class="accordion-container"> -->
    <div
      class="accordion-item"
      :key="this.unique"
      :multiple="this.multiple"
      :id="['item-' + this.unique]"
    >
      <div class="accordion-header" @click="toggleView(this.unique, multiple)" :id="['header-' + this.unique]" style=" height: 40px">
        <header style="height: 40px;position:relative;bottom: 172px">
        <slot name="item-title" ></slot>
      </header>
        <div style="margin-top: 5px; height: 25px">
          <i :id="['arrow-' + this.unique]" class="icon-angle-right-regular" style="position:relative;bottom: 181px"></i>
        </div>
      </div>

      <div class="accordion-content" :id="['content-' + this.unique]">
       <slot name="item-body"></slot>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name:'hlx-accordion',
  props: ["accordion_data", "multiple"],
  data() {
    return {
      unique: Math.floor(Math.random()*1000 + 1)
    };
  },
  methods: {
    toggleView(index, multiple) {
      // console.log("here");
      if (multiple == false) {
        let content = document.querySelector(`#content-${index}`);
        let arrow = document.querySelector(`#arrow-${index}`);
        document.querySelectorAll('.accordion-header').forEach((b)=>{
          b.classList.remove('bg')
        })
        document.querySelector(`#arrow-${index}`).parentElement.parentElement.classList.add('bg')

        if (arrow.classList.contains("icon-angle-right-regular")) {
          
          document
            .querySelectorAll(".icon-angle-down-regular")
            .forEach((arrowdown) => {
              arrowdown.classList.remove("icon-angle-down-regular");
              arrowdown.classList.add("icon-angle-right-regular");
            });
          arrow.classList.remove("icon-angle-right-regular");
          arrow.classList.add("icon-angle-down-regular");
          document.querySelectorAll(".accordion-content").forEach((item) => {
            item.style.display = "none";
          });
          content.style.display = "flex";
        } else if (arrow.classList.contains("icon-angle-down-regular")) {
          // console.log("yyy",arrow);
          document.querySelectorAll('.accordion-header').forEach((b)=>{
          b.classList.remove('bg')
        })
          document.querySelectorAll(".accordion-content").forEach((item) => {
            item.style.display = "none";
          });
          arrow.classList.remove("icon-angle-down-regular");
          arrow.classList.add("icon-angle-right-regular");
          content.style.display = "none";
        }
      } else {
        let content = document.querySelector(`#content-${index}`);
        let arrow = document.querySelector(`#arrow-${index}`);
        
        if (arrow.classList.contains("icon-angle-right-regular")) {
          document.querySelector(`#arrow-${index}`).parentElement.parentElement.classList.add('bg')

          arrow.classList.remove("icon-angle-right-regular");
          arrow.classList.add("icon-angle-down-regular");
          content.style.display = "flex";
        } else if (arrow.classList.contains("icon-angle-down-regular")) {
                    document.querySelector(`#arrow-${index}`).parentElement.parentElement.classList.remove('bg')

          arrow.classList.remove("icon-angle-down-regular");
          arrow.classList.add("icon-angle-right-regular");
          content.style.display = "none";
        }
      }
    },
  },
};
</script>

