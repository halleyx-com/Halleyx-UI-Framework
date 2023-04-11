<template>
  <div id="window">
    <div id="slide-container">
      <div class="slides" v-for="img in this.images" :key="img">
        <img class="slide" :src="img" />
      </div>
      <a id="previous" class="arrow">&#10094;</a>
      <a id="next" class="arrow">&#10095;</a>
      <div id="text-bar">
        <p id="place"></p>
      </div>
    </div>
    <div id="dotsContainer"></div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array
    },
    description: {
      type: Array
    }
  },
  mounted () {
    let index = 0
    // var locations = [
    //   "Amsterdam, The Netherlands",
    //   "Sydney, Australia",
    //   "San Francisco, California",
    // ];
    const locations = this.description
    const slides = document.getElementsByClassName('slides')
    const nextArrow = document.getElementById('next')

    const previousArrow = document.getElementById('previous')

    const place = document.getElementById('place')

    const dotsContainer = document.getElementById('dotsContainer')

    const dotArray = document.getElementsByClassName('dots')

    createDots()
    showSlides(index)

    function createDots () {
      for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span')
        dot.className = 'dots'
        dotsContainer.appendChild(dot)
      }
    }

    function showSlides (x) {
      if (x > slides.length - 1) {
        index = 0
      }
      if (x < 0) {
        index = slides.length - 1
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
        dotArray[i].className = 'dots'
      }

      slides[index].style.display = 'block'
      dotArray[index].className += ' activeDot'
      place.innerHTML = locations[index]
    }

    nextArrow.onclick = function () {
      index += 1
      showSlides(index)
    }

    previousArrow.onclick = function () {
      index -= 1
      showSlides(index)
    }

    dotArray[0].onclick = showSlides(1)
  }
}
</script>

<style scoped>
/* Font for text */
body {
  font-family: "Helvetic Neue", Sans-serif;
}

/* Width of carousel */
#window,
#slide-container {
  width: 400px;
}

/* Height of carousel */
#slide-container {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 100%;
  min-height: 200px;
}

.slides {
  display: block;
}

/* Style of arrows */
.arrow {
  color: white;
  font-size: 26px;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  padding: 16px;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s ease;
}

.arrow:hover {
  cursor: pointer;
  background-color: var(--transparent-grey);
}

#next {
  left: 100%;
  transform: translate(-100%, -50%);
  border-radius: 4px 0px 0px 4px;
}

#previous {
  border-radius: 0px 4px 4px 0px;
}

#text-bar {
  background-color: var(--transparent-grey);
  width: 100%;
  height: 36px;
  position: absolute;
  top: 100%;
  transform: translate(0%, -100%);
  text-align: center;
  height: 36px;
  line-height: 36px;
}

#place {
  padding: 0px;
  margin: 0px;
  color: white;
  position: relative;
  display: inline-block;
}

#dotsContainer {
  width: 100%;
  height: 20px;
  text-align: center;
}

.dots {
  width: 8px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 100%;
  display: inline-block;
  margin: 8px 2px;
}

.dots:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
}

.activeDot {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
