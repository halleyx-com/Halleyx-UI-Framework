<template>
  <div
    id="hlx-full-star hlx-star-group"
    class="full-star"
    ref="hlx-star-group"
    :read="readOnly"
  >
    <div
      class="rating-group"
      :style="{ 'pointer-events': readOnly ? 'none' : 'auto' }"
    >
      <span class="rate-star-wrapper">
        <!-- :class="{rated:ratingPoint>0.5&&ratingPoint>=1,'half-rated':ratingPoint>0&&ratingPoint>=1}" -->
        <label aria-label="1 star" class="rating__label rated"
          ><i
            class="rating__icon rating__icon--star"
            :class="
              ratingPoint > 0 && ratingPoint >= 0.5
                ? ratingPoint >= 1
                  ? 'icon-star-filled'
                  : 'icon-star-half-filled'
                : 'icon-star-regular'
            "
          ></i
        ></label>
        <!-- <label
        for="hlx-star-1-ip"
          aria-label="1 star"
          class="rating__label un-rated"
          v-else-if="ratingPoint <= 0 ? true : false"
          ><i class="rating__icon rating__icon--star icon-star"></i
        ></label>
        <label
        for="hlx-star-1-ip" aria-label="1 star" class="rating__label half-rated" v-else
          ><i class="rating__icon rating__icon--star icon-star-half-filled"></i
        ></label> -->
        <input
          class="rating__input"
          name="rating"
          :value="1"
          @change="showRate"
          type="radio"
        />
      </span>
      <span class="rate-star-wrapper">
        <label aria-label="2 star" class="rating__label rated"
          ><i
            class="rating__icon rating__icon--star"
            :class="
              ratingPoint > 1 && ratingPoint >= 1.5
                ? ratingPoint >= 2
                  ? 'icon-star-filled'
                  : 'icon-star-half-filled'
                : 'icon-star-regular'
            "
          ></i
        ></label>

        <input
          class="rating__input"
          name="rating"
          :value="2"
          @change="showRate"
          type="radio"
        />
        <!-- <span class="rate-star-wrapper"> -->
      </span>
      <span class="rate-star-wrapper">
        <label
          aria-label="3 star"
          class="rating__label rated"
          :class="
            ratingPoint > 0 && ratingPoint >= 2
              ? 'rated'
              : ratingPoint > 0 && ratingPoint <= 1
              ? 'half-rated'
              : ''
          "
          ><i
            class="rating__icon rating__icon--star"
            :class="
              ratingPoint > 2 && ratingPoint >= 2.5
                ? ratingPoint >= 3
                  ? 'icon-star-filled'
                  : 'icon-star-half-filled'
                : 'icon-star-regular'
            "
          ></i
        ></label>

        <input
          class="rating__input"
          name="rating"
          :value="3"
          @change="showRate"
          type="radio"
          checked
        />
      </span>
      <span class="rate-star-wrapper">
        <label
          aria-label="4 star"
          class="rating__label rated"
          :class="
            ratingPoint > 0 && ratingPoint >= 2
              ? 'rated'
              : ratingPoint > 0 && ratingPoint <= 1
              ? 'half-rated'
              : ''
          "
          ><i
            class="rating__icon rating__icon--star"
            :class="
              ratingPoint > 3 && ratingPoint >= 3.5
                ? ratingPoint >= 4
                  ? 'icon-star-filled'
                  : 'icon-star-half-filled'
                : 'icon-star-regular'
            "
          ></i
        ></label>
        <input
          class="rating__input"
          name="rating"
          :value="4"
          @change="showRate"
          type="radio"
        />
      </span>
      <span class="rate-star-wrapper">
        <label
          aria-label="5 star"
          class="rating__label"
          :class="
            ratingPoint > 0 && ratingPoint >= 2
              ? 'rated'
              : ratingPoint > 0 && ratingPoint <= 1
              ? 'half-rated'
              : ''
          "
          ><i
            class="rating__icon rating__icon--star"
            :class="
              ratingPoint > 4 && ratingPoint >= 4.5
                ? ratingPoint >= 5
                  ? 'icon-star-filled'
                  : 'icon-star-half-filled'
                : 'icon-star-regular'
            "
          ></i
        ></label>
        <input
          class="rating__input"
          name="rating"
          :value="5"
          @change="showRate"
          type="radio"
        />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "hlx-rating",
  data() {
    return {
      ratingPoint: 0,
    };
  },
  props: {
    rating: {
      type: Number,
      default: () => 0,
    },
    readOnly: {
      type: Boolean,
      default: true,
    },
    currentRating: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    let all_wrappers = [
      ...this.$refs["hlx-star-group"].querySelectorAll(
        ".rating-group>span.rate-star-wrapper"
      ),
    ];
    all_wrappers.filter((ele) => {
      let label = ele.querySelector("label.rating__label");
      let input = ele.querySelector("input[type=radio]");
      let random_num = Math.floor(Math.random() * 100000);
      let unique_name = "hlx-rating-ele-" + random_num;
      input.setAttribute("id", unique_name);
      label.setAttribute("for", unique_name);
    });
  },
  watch: {
    rating: {
      handler(data) {
        if (data) {
          this.ratingPoint = data;
        }
      },
      immediate: true,
    },
  },
  methods: {
    showRate($event) {
      this.ratingPoint = $event.target.value;
      this.$emit("updatedRating", this.ratingPoint);
    },
  },
};
</script>
