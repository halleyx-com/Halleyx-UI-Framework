<template>
  <div class="parent">
    <div class="left-child">
      <nav>
        <ul>
          <li @click="showLoginLayout()"><a>Login</a></li>
          <li @click="showLayout1Layout()"><a>Layout 1</a></li>
          <li @click="showLayout2Layout()"><a>Layout 2</a></li>
          <li @click="showLayout3Layout()"><a>Layout 3</a></li>
          <li @click="showLayout4Layout()"><a>Layout 4</a></li>
        </ul>
      </nav>
    </div>
    <div class="right-child">
      <!---------------------- Login Layout ----------------------->
      <div class="login-main-container" v-if="this.login_layout == true">
        <div class="login-left-container">
          <header class="login-logo">Logo</header>
        </div>
        <div class="login-right-container">
          <div class="login-form">
            <div class="login-title">Form title</div>
            <div class="login-form-fields"></div>
          </div>
        </div>
      </div>

      <!---------------------- Layout 1 ----------------------->
      <div class="layout1-main-container" v-if="this.layout1_layout == true">
        <div class="layout1-left-container">
          <aside class="layout1-aside">
            <div class="layout1-aside-content">
              <div>Aside</div>
            </div>
          </aside>
        </div>
        <div class="layout1-right-container">
          <div class="layout1-right-container-main">
            <div>Main</div>
          </div>
        </div>
      </div>

      <!---------------------- Layout 2 ----------------------->
      <div class="layout2-main-container" v-if="this.layout2_layout == true">
        <div class="layout2-right-container">
          <header class="layout2-right-container-header">Header</header>
          <div class="layout2-right-container-main">
            <div>Main</div>
          </div>
          <footer class="layout2-right-container-footer">Footer</footer>
        </div>
      </div>

      <!---------------------- Layout 3 ----------------------->
      <div class="layout3-main-container" v-if="this.layout3_layout == true">
        <header class="layout3-main-container-header">Header</header>
        <div class="layout3-main-container-body">
          <div class="layout3-left-container">
            <aside class="layout3-left-nav">
              <div class="layout3-left-nav-content">
                <div>Aside</div>
              </div>
            </aside>
          </div>
          <div class="layout3-right-container">
            <div class="layout3-right-container-main">
              <div>Main</div>
            </div>
          </div>
        </div>
      </div>

      <!---------------------- Layout 4 ----------------------->
      <div class="layout4-main-container" v-if="this.layout4_layout == true">
        <div class="layout4-left-container">
          <aside class="layout4-left-nav">
            <div class="layout4-left-nav-content">
              <div>Aside</div>
            </div>
          </aside>
        </div>
        <div class="layout4-right-container">
          <header class="layout4-right-container-header">Header</header>
          <div class="layout4-right-container-main">
            <div>Main</div>
          </div>
          <footer class="layout4-right-container-footer">Footer</footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login_layout: false,
      layout1_layout: false,
      layout2_layout: false,
      layout3_layout: false,
      layout4_layout: false,
    };
  },
  mounted() {
    this.login_layout = true;
  },
  methods: {
    showLoginLayout() {
      this.login_layout = true;
      this.layout1_layout = false;
      this.layout2_layout = false;
      this.layout3_layout = false;
      this.layout4_layout = false;
    },
    showLayout1Layout() {
      this.login_layout = false;
      this.layout1_layout = true;
      this.layout2_layout = false;
      this.layout3_layout = false;
      this.layout4_layout = false;
    },
    showLayout2Layout() {
      this.login_layout = false;
      this.layout1_layout = false;
      this.layout2_layout = true;
      this.layout3_layout = false;
      this.layout4_layout = false;
    },
    showLayout3Layout() {
      this.login_layout = false;
      this.layout1_layout = false;
      this.layout2_layout = false;
      this.layout3_layout = true;
      this.layout4_layout = false;
    },
    showLayout4Layout() {
      this.login_layout = false;
      this.layout1_layout = false;
      this.layout2_layout = false;
      this.layout3_layout = false;
      this.layout4_layout = true;
    },
  },
};
</script>

<style scoped lang="scss">
// * {
//   // font-family: Arial;
// }
.login-main-container {
  border: 4px solid #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  .login-left-container {
    width: 55%;
    border: 5px solid lightblue;
    padding: 30px;
    .login-logo {
      font-size: 40px;
      color: lightblue;
    }
  }
  .login-right-container {
    width: 45%;
    border: 5px solid lightcoral;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-form {
      display: flex;
      flex-direction: column;
      height: 50%;
      width: 70%;
      .login-title {
        color: lightcoral;
        font-size: 20px;
        display: flex;
        width: 100%;
        height: 15%;
      }
      .login-form-fields {
        display: flex;
        height: 85%;
        width: 100%;
        background: rgb(255, 241, 241);
      }
    }
  }
}
@media only screen and (max-width: 350px) {
  .login-main-container {
    display: flex;
    flex-direction: column;
    .login-left-container {
      border: 5px solid lightblue;
      width: 100%;
      height: 15%;
      padding: 20px;
    }
    .login-right-container {
      width: 100%;
      height: 85%;
    }
  }
}

.layout1-main-container {
  border: 4px solid #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  .layout1-left-container {
    width: fit-content;
    border: 5px solid lightblue;
    .layout1-aside {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 80px;
      padding: 5px;
      &-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: lightblue;
        height: 100%;
        div {
          font-size: 20px;
        }
      }
    }
  }
  .layout1-right-container {
    border: 5px solid lightcoral;
    display: flex;
    flex-direction: column;
    width: 100%;
    &-main {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: lightcoral;
      background: rgb(255, 241, 241);
      height: 100%;
      padding: 10px;
      div {
        font-size: 20px;
      }
    }
  }
}
.layout2-main-container {
  border: 4px solid #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  .layout2-left-container {
    width: auto;
    border: 5px solid lightblue;
    .layout2-left-nav {
      width: 160px;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 5px;
      &-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: lightblue;
        height: 100%;
        div {
          font-size: 20px;
        }
      }
    }
  }
  .layout2-right-container {
    border: 5px solid lightcoral;
    display: flex;
    flex-direction: column;
    width: 100%;
    &-header {
      border: 5px solid rgb(153, 245, 176);
      color: rgb(153, 245, 176);
      font-size: 20px;
      display: flex;
      width: 100%;
      height: 15%;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
    &-main {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: lightcoral;
      background: rgb(255, 241, 241);
      height: 100%;
      padding: 10px;
      div {
        font-size: 20px;
      }
    }
    &-footer {
      justify-content: center;
      border: 5px solid rgb(153, 245, 176);
      color: rgb(153, 245, 176);
      font-size: 20px;
      display: flex;
      width: 100%;
      height: 15%;
      align-items: center;
      padding: 10px;
    }
  }
}

.layout3-main-container {
  border: 4px solid #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  &-header {
    border: 5px solid rgb(153, 245, 176);
    color: rgb(153, 245, 176);
    font-size: 20px;
    display: flex;
    width: 100%;
    height: 15%;
    align-items: center;
    padding: 10px;
  }
  &-body {
    display: flex;
    flex-direction: row;
    height: 100%;
    .layout3-left-container {
      width: auto;
      border: 5px solid lightblue;
      .layout3-left-nav {
        width: 160px;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 5px;
        &-content {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: lightblue;
          height: 100%;
          div {
            font-size: 20px;
          }
        }
      }
    }
    .layout3-right-container {
      border: 5px solid lightcoral;
      display: flex;
      flex-direction: column;
      width: 100%;

      &-main {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: lightcoral;
        background: rgb(255, 241, 241);
        height: 100%;
        padding: 10px;
        div {
          font-size: 20px;
        }
      }
      &-footer {
        color: lightcoral;
        font-size: 20px;
        display: flex;
        width: 100%;
        height: 15%;
        align-items: center;
        padding: 10px;
      }
    }
  }
}
.layout4-main-container {
  border: 4px solid #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  .layout4-left-container {
    width: auto;
    border: 5px solid lightblue;
    .layout4-left-nav {
      width: 160px;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 5px;
      &-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: lightblue;
        height: 100%;
        div {
          font-size: 20px;
        }
      }
    }
  }
  .layout4-right-container {
    border: 5px solid lightcoral;
    display: flex;
    flex-direction: column;
    width: 100%;
    &-header {
      border: 5px solid rgb(153, 245, 176);
      color: rgb(153, 245, 176);
      font-size: 20px;
      display: flex;
      width: 100%;
      height: 15%;
      align-items: center;
      padding: 10px;
    }
    &-main {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: lightcoral;
      background: rgb(255, 241, 241);
      height: 100%;
      padding: 10px;
      div {
        font-size: 20px;
      }
    }
    &-footer {
      border: 5px solid rgb(153, 245, 176);
      color: rgb(153, 245, 176);
      font-size: 20px;
      display: flex;
      width: 100%;
      height: 15%;
      align-items: center;
      padding: 10px;
    }
  }
}

nav {
  width: 100%;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #2c3e50;
  }

  li {
    float: left;
    cursor: pointer;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #19242e;
  }
}

.parent {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .right-child {
    width: 100%;
    height: 100%;
  }
}
</style>
