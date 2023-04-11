<template>
  <Teleport to="body" class="alert-not">
    <section class="hlx-alert-wrapper">
      <div
        id="alert"
        class="hlx alert"
        ref="hlx-alert"
        v-if="computedAlert == true"
        :class="
          this.type ? 'alert-' + this.type.toLowerCase() : 'alert-success'
        "
      >
        <span class="icon">
          <i :class="icon"></i>
        </span>
        <div class="text">
          <!-- <p class="alert-header">{{ this.typeData }}</p> -->
          <p class="alert-description">{{ this.message }}</p>
        </div>
        <button class="close" aria-label="close">
          <i class="icon-times-filled" @click="closeAlert"></i>
        </button>
      </div>
    </section>
  </Teleport>
</template>

<script>
export default {
  name: "hlx-alert-notification",
  // props: ["type", "message", "showAlert","autoClose",'delay'],
  props: {
    type: {
      type: String,
      default: () => "default",
    },
    message: {
      type: String,
      default: () => "Hi",
    },
    showAlert: {
      type: Boolean,
      default: () => false,
    },
    autoClose: {
      type: Boolean,
      default: () => true,
    },
    delay: {
      type: Number,
      default(d) {
        return d > 3000 ? d : 3000;
      },
      validator(v) {
        return v > 3000 ? v : 3000;
      },
    },
  },
  watch: {
    type: {
      handler(type) {
        if (this.showAlert) {
          this.alertStatus = true;
        }
        if (type) {
          this.typeData =
            this.type.charAt(0).toUpperCase() +
            this.type.toLowerCase().slice(1);
        }
        if (this.autoClose) {
          setTimeout(() => {
            // this.alertStatus = false;
            if (this.$refs["hlx-alert"]) {
              this.$refs["hlx-alert"].classList.add("close");
            }
            // this.$refs['hlx-alert'].remove()
          }, this.delay);
        }
      },
      immediate: true,
    },
    showAlert: {
      handler(alert) {
        if (alert) {
          this.alertStatus = alert;
          if (this.autoClose) {
            setTimeout(() => {
              // this.alertStatus = false;
              if (this.$refs["hlx-alert"]) {
                this.$refs["hlx-alert"].classList.add("close");
              }
              // this.$refs['hlx-alert'].remove()
            }, this.delay);
          }
        }
      },
      immediate: true,
    },
  },
  data() {
    return {
      alertStatus: false,
      typeData: "",
    };
  },
  methods: {
    closeAlert($event) {
      let alert = $event.target.parentElement.parentElement;
      if (alert) {
        alert.classList.add("close");
        // alert.remove()
      }
    },
  },
  computed: {
    computedAlert() {
      return this.alertStatus;
    },
    icon() {
      if (this.type) {
        switch (this.type.toLowerCase()) {
          case "danger":
            return "icon-exclamation-circle-regular";
          case "warning":
            return "icon-exclamation-circle-regular";
          case "primary":
            return "icon-info-circle-regular";
          default:
            return "icon-check-circle-regular";
        }
      }
      return "tick-bg";
    },
  },
};
</script>

<!-- <style scoped lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 25px;
}

.alert {
  position: fixed;
  z-index: 9999;
  top: 10%;
  right: 5%;
  box-shadow: 0 0 4px #ddd, 0 2px 10px #ddd, 0 2px 20px #ddd;
  border-radius: 9px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  width: 327px;
  background: white;
  margin-bottom: 15px;
  animation: runProgress 0.5s ease-in-out;
  &::before {
    content: "";
    height: 61px;
    position: absolute;
    /* width: 10px; */
    left: 8px;
    border: solid;
    border-radius: 5px;
  }
}
@keyframes runProgress {
  0% {
    opacity: 0;
    transform: translateX(80px);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.alert.close {
  transform: translateY(40px);
  background: #fff;
  opacity: 0;
}

.alert > .icon {
  border-radius: 50%;
  text-align: center;
}

.alert > .icon {
  line-height: 40px;
}

.alert > .text {
  width: 100%;
  padding: 0 15px;
}

.alert > .text strong {
  color: #333;
}
.alert > .text p {
  color: #666;
  margin: 5px 0;
  font-size: 14px;
}

.alert > .close {
  border: none;
  background: transparent;
  font-size: 16px;
  color: #777;
  outline: none;
  cursor: pointer;
  transition: 0.3 ease-in-out;
}

/* success alert start */
.alert-success {
  &::before {
    border-color: #00a865;
  }
}
.alert-success > .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: #00a865;
}
/* success alert end */

/* warning alert start */
.alert-warning {
  //border-left: 5px solid #f0a930;
  &::before {
    border-color: #f0a930;
  }
}
.alert-warning > .icon {
  color: #f0a930;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
}
/* warning alert end */

/* danger alert start */
.alert-danger {
  // border-left: 5px solid #ff5151;
  &::before {
    border-color: #ff5151;
  }
}
.alert-danger > .icon {
  color: #ff5151;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
}
/* danger alert end */

/* primary alert start */
.alert-primary {
  &::before {
    border-color: #0379c1;
  }
}
.alert-primary > .icon {
  color: #0379c1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
}

/* primary alert end */
</style> -->
