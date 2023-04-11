<template>
  <!--------------------------------------------------- Mixed input ------------------------------------------------------>
  <div class="input-container" v-if="this.type == 'mixed'">
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      :class="{ small: this.small, disabled: this.disabled }"
      v-if="this.label_animation == true"
    >
      <input
        :disabled="this.disabled"
        :name="this.name"
        type="text"
        :id="'input' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        v-model="value"
        @focus="focusInput"
        @blur="blurInput"
        @mouseenter="hoverInput"
        @mouseleave="unHoverInput"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <label
        :id="'label' + this.unique"
        :style="{ background: this.custom_background }"
        @mouseenter="hoverInput"
        :for="'input' + this.unique"
        >{{ this.label_value }}</label
      >
      <i
        v-if="showClear"
        class="icon-times-circle-regular"
        style="
          position: relative;
          top: 10px;
          right: 10px;
          color: #d8d8d8;
          cursor: pointer;
        "
        @click="this.value = ''"
        :id="this.icon"
      >
      </i>
      <span
        class="input-icon"
        v-if="
          this.iconposition == 'left' || this.iconposition == 'right'
            ? true
            : false
        "
        ><i :class="'icon-' + this.icon"></i
      ></span>
      <span
        style="
          width: max-content;
          font-size: 15px;
          color: #6b7280;
          background: #f9fafb;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          display: flex;
          padding: 8px;
          border-left: 1px solid #d8d8d8;
        "
        v-if="this.suffix"
      >
        <main>
          <slot name="suffix"></slot></main
      ></span>
    </div>
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      :class="{ small: this.small, disabled: this.disabled }"
      v-if="this.label_animation == false"
    >
      <span
        style="
          width: max-content;
          font-size: 15px;
          color: #6b7280;
          background: #f9fafb;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          display: flex;
          padding: 8px;
          border-right: 1px solid #d8d8d8;
        "
        v-if="this.prefix"
      >
        <main>
          <slot name="prefix"></slot></main
      ></span>
      <input
        :disabled="this.disabled"
        :name="this.name"
        type="text"
        :placeholder="this.label_value"
        :id="'input' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        v-model="value"
        @focus="focusInput"
        @blur="blurInput"
        @mouseenter="hoverInput"
        @mouseleave="unHoverInput"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <i
        v-if="showClear"
        class="icon-times-circle-regular"
        style="
          position: relative;
          top: 10px;
          right: 10px;
          color: #d6d8d3;
          cursor: pointer;
        "
        @click="this.value = ''"
        :id="this.icon"
      >
      </i>
      <span
        class="input-icon"
        v-if="
          this.iconposition == 'left' || this.iconposition == 'right'
            ? true
            : false
        "
        ><i :class="'icon-' + this.icon"></i
      ></span>
      <span
        style="
          width: max-content;
          font-size: 15px;
          color: #6b7280;
          background: #f9fafb;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          display: flex;
          padding: 8px;
          border-left: 1px solid #d8d8d8;
        "
        v-if="this.suffix"
      >
        <main>
          <slot name="suffix"></slot></main
      ></span>
    </div>
    <span
      class="error-message"
      :style="
        this.display_error === true
          ? 'display: block'
          : 'display:none; height:0px'
      "
      >{{ this.input_error_message }}</span
    >
  </div>
  <!--------------------------------------------------- Regular input ------------------------------------------------------>
  <div class="input-container" v-if="this.type == 'text'">
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      :class="{ small: this.small, disabled: this.disabled }"
      v-if="this.label_animation == true"
    >
      <input
        :disabled="this.disabled"
        :name="this.name"
        type="text"
        :id="'input' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        v-model="value"
        @focus="focusInput"
        @blur="blurInput"
        @mouseenter="hoverInput"
        @mouseleave="unHoverInput"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <label
        :id="'label' + this.unique"
        :style="{ background: this.custom_background }"
        @mouseenter="hoverInput"
        :for="'input' + this.unique"
        >{{ this.label_value }}</label
      >
      <i
        v-if="showClear"
        class="icon-times-circle-regular"
        style="
          position: relative;
          top: 10px;
          right: 10px;
          color: #d8d8d8;
          cursor: pointer;
        "
        @click="this.value = ''"
        :id="this.icon"
      >
      </i>
      <span
        class="input-icon"
        v-if="
          this.iconposition == 'left' || this.iconposition == 'right'
            ? true
            : false
        "
        ><i :class="'icon-' + this.icon"></i
      ></span>
    </div>
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      :class="{ small: this.small, disabled: this.disabled }"
      v-if="this.label_animation == false"
    >
      <input
        :disabled="this.disabled"
        :name="this.name"
        type="text"
        :placeholder="this.label_value"
        :id="'input' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        v-model="value"
        @focus="focusInput"
        @blur="blurInput"
        @mouseenter="hoverInput"
        @mouseleave="unHoverInput"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <i
        v-if="showClear"
        class="icon-times-circle-regular"
        style="
          position: relative;
          top: 10px;
          right: 10px;
          color: #d6d8d3;
          cursor: pointer;
        "
        @click="this.value = ''"
        :id="this.icon"
      >
      </i>
      <span
        class="input-icon"
        v-if="
          this.iconposition == 'left' || this.iconposition == 'right'
            ? true
            : false
        "
        ><i :class="'icon-' + this.icon"></i
      ></span>
    </div>
    <span
      class="error-message"
      :style="
        this.display_error === true
          ? 'display: block'
          : 'display:none; height:0px'
      "
      >{{ this.input_error_message }}</span
    >
  </div>
  <!--------------------------------------------------- text area input ------------------------------------------------------>
  <div class="input-container" v-if="this.type == 'textarea'">
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      v-if="this.label_animation == true"
      :class="{ small: this.small, disabled: this.disabled }"
      :style="this.disabled === true ? 'cursor:not-allowed' : 'cursor:pointer'"
    >
      <textarea
        :name="this.name"
        :id="'input' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        v-model="value"
        @focus="focusInput"
        @blur="blurInput"
        @mouseenter="hoverInput"
        @mouseleave="unHoverInput"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
        :disabled="this.disabled"
      />
      <label
        :id="'label' + this.unique"
        :style="{ background: this.custom_background }"
        @mouseenter="hoverInput"
        :for="'input' + this.unique"
        >{{ this.label_value }}</label
      >
      <!-- <span
        class="input-icon"
        v-if="
          this.iconposition == 'left' || this.iconposition == 'right'
            ? true
            : false
        "
        ><i :class="'icon-' + this.icon"></i
      ></span> -->
    </div>
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      v-if="this.label_animation == false"
      :class="{ small: this.small, disabled: this.disabled }"
      :style="this.disabled === true ? 'cursor:not-allowed' : 'cursor:pointer'"
    >
      <textarea
        :name="this.name"
        :placeholder="this.label_value"
        :id="'input' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        v-model="value"
        :disabled="this.disabled"
        @focus="focusInput"
        @blur="blurInput"
        @mouseenter="hoverInput"
        @mouseleave="unHoverInput"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <!-- <span
        class="input-icon"
        v-if="
          this.iconposition == 'left' || this.iconposition == 'right'
            ? true
            : false
        "
        ><i :class="'icon-' + this.icon"></i
      ></span> -->
    </div>
    <span
      class="error-message"
      :style="
        this.display_error === true
          ? 'display: block'
          : 'display:none; height:0px'
      "
      >{{ this.input_error_message }}</span
    >
  </div>
  <!----------------------------------------------------------- Email input ------------------------------------------------>
  <div class="input-container" v-if="this.type == 'email'">
    <div
      v-if="this.label_animation === true"
      class="input-field"
      :id="'input-field' + this.unique"
      :class="{ small: this.small, disabled: this.disabled }"
      @mouseenter="hoverEmail"
      @mouseleave="unHoverEmail"
    >
      <input
        :name="this.name"
        type="text"
        :id="'inputemail' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        :disabled="this.disabled"
        v-model="value"
        @blur="blurEmail"
        @focus="focusEmail"
        v-on:keyup.enter="validateEmail"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <label
        v-if="this.label_animation == true"
        :id="'labelemail' + this.unique"
        :style="{ background: this.custom_background }"
        :for="'inputemail' + this.unique"
        >{{ this.label_value }}</label
      >
      <i
        v-if="showClear"
        class="icon-times-circle-regular"
        style="
          position: relative;
          top: 10px;
          right: 10px;
          color: #d6d8d3;
          cursor: pointer;
        "
        @click="this.value = ''"
        :id="this.icon"
      >
      </i>
    </div>
    <div
      v-if="this.label_animation === false"
      class="input-field"
      :id="'input-field' + this.unique"
      :class="{ small: this.small, disabled: this.disabled }"
      @mouseenter="hoverEmail"
      @mouseleave="unHoverEmail"
    >
      <input
        :name="this.name"
        type="text"
        :id="'inputemail' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        :placeholder="this.label_value"
        required
        :disabled="this.disabled"
        v-model="value"
        @blur="blurEmail"
        @focus="focusEmail"
        v-on:keyup.enter="validateEmail"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <label
        v-if="this.label_animation == true"
        :id="'labelemail' + this.unique"
        :style="{ background: this.custom_background }"
        :for="'inputemail' + this.unique"
        >{{ this.label_value }}</label
      >
      <i
        v-if="showClear"
        class="icon-times-circle-regular"
        style="
          position: relative;
          top: 10px;
          right: 10px;
          color: #d6d8d3;
          cursor: pointer;
        "
        @click="this.value = ''"
        :id="this.icon"
      >
      </i>
    </div>
    <span
      class="error-message"
      :style="
        this.display_error === true
          ? 'display: block'
          : 'display:none; height:0px'
      "
      >{{ this.input_error_message }}</span
    >
  </div>
  <!--------------------------------------------------------- Password input ----------------------------------------------->
  <div
    class="input-container"
    v-if="this.type == 'password'"
    style="align-items: flex-start"
  >
    <div
      class="password-condition-dialog"
      v-if="this.show_password_condition == true"
      id="pp"
    >
      <div class="password-conditon-dialog-title">Password must contain</div>
      <div class="condition-box length">
        <span class="conditions">A minimum of 8 characters long</span>
        <div class="icon-area">
          <i id="length-icon" class="icon-times-circle-regular"></i>
        </div>
      </div>
      <div class="condition-box lowercase">
        <span class="conditions">A minimum of 1 lower case letter [a-z]</span>
        <div class="icon-area">
          <i id="lowercase-icon" class="icon-times-circle-regular"></i>
        </div>
      </div>
      <div class="condition-box uppercase">
        <span class="conditions">A minimum of 1 upper case letter [A-Z]</span>
        <div class="icon-area">
          <i id="uppercase-icon" class="icon-times-circle-regular"></i>
        </div>
      </div>
      <div class="condition-box number">
        <span class="conditions">A minimum of 1 numeric character [0-9]</span>
        <div class="icon-area">
          <i id="number-icon" class="icon-times-circle-regular"></i>
        </div>
      </div>
      <div class="condition-box special">
        <span class="conditions">A minimum of 1 special character [:~!]</span>
        <div class="icon-area">
          <i id="special-icon" class="icon-times-circle-regular"></i>
        </div>
      </div>
    </div>
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      :class="{ small: this.small, disabled: this.disabled }"
    >
      <input
        :name="this.name"
        type="password"
        :id="'inputpassword' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        v-model="value"
        @focus="focusPassword"
        @blur="blurPassword"
        @keyup="validatePassword"
        @mouseenter="hoverPassword"
        @mouseleave="unHoverPassword"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <label
        v-if="this.label_animation == true"
        :id="'labelpassword' + this.unique"
        :style="{ background: this.custom_background }"
        @mouseenter="hoverPassword"
        :for="'inputpassword' + this.unique"
        >{{ this.label_value }}</label
      >
      <span class="input-icon" @click="togglePassword" style="cursor: pointer"
        ><i
          class="icon-eye-slash-regular"
          id="password-toggle-icon"
          style="color: #a6a6a6"
        ></i
      ></span>
    </div>
    <span
      class="error-message"
      :style="
        this.display_error === true
          ? 'display: block'
          : 'display:none; height:0px'
      "
      >{{ this.input_error_message }}</span
    >
    <!----------------------------------------------------- Password conditions dialog --------------------------------------->
  </div>
  <div class="input-container" v-if="this.type == 'confirmpassword'">
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      :class="{ small: this.small, disabled: this.disabled }"
    >
      <input
        :name="this.name"
        type="password"
        :id="'inputpassword' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        v-model="value"
        @focus="focusPassword"
        @blur="blurPassword"
        @mouseenter="hoverPassword"
        @mouseleave="unHoverPassword"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <label
        v-if="this.label_animation == true"
        :id="'labelpassword' + this.unique"
        :style="{ background: this.custom_background }"
        @mouseenter="hoverPassword"
        :for="'inputpassword' + this.unique"
        >{{ this.label_value }}</label
      >
      <!-- <span class="input-icon" @click="togglePassword" style="cursor: pointer"
        ><i class="icon-eye-slash-regular" id="password-toggle-icon"></i
      ></span> -->
    </div>
    <!----------------------------------------------------- Password conditions dialog --------------------------------------->
    <span
      class="error-message"
      :style="
        this.display_error === true
          ? 'display: block'
          : 'display:none; height:0px'
      "
      >{{ this.input_error_message }}</span
    >
  </div>
  <!--------------------------------------------------------- Phone number input ----------------------------------------------->
  <div class="input-container" v-if="this.type == 'phonenumber'">
    <div class="phone-number" v-if="this.label_animation == true">
      <span
        style="
          border-radius: 5px;
          height: 40px;
          display: flex;
          align-items: center;
          margin-right: 16px;
          width: 10vw;
        "
      >
        <!-- <input
          :name="this.name"
          v-model="country_code"
          type="text"
          style="width: 40px; border: none; padding-left: 10px"
          placeholder="+91"
          @input="validatePhoneNumber"
        /> -->
        <hlxselect
          :options="this.country_codes"
          :placeholder_value="'Country'"
          :labelanimation="true"
          :icon="true"
          @customChange="countryCodeRecieved"
        ></hlxselect>
      </span>
      <div
        class="input-field"
        :id="'input-field' + this.unique"
        :class="{ small: this.small, disabled: this.disabled }"
      >
        <span
          v-if="this.country_code !== ''"
          style="
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            color: rgb(107, 114, 128);
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            font-size: 15px;
          "
        >
          {{ this.country_code }}
        </span>
        <input
          :name="this.name"
          type="text"
          :id="'inputnumber' + this.unique"
          :style="{ background: this.custom_background }"
          :class="'phn' + this.unique"
          autocomplete="off"
          required
          v-model="value"
          @focus="focusNumber"
          @blur="blurNumber"
          @mouseenter="hoverNumber"
          @mouseleave="unHoverNumber"
          @input="validatePhoneNumber"
        />
        <label
          :id="'label' + this.unique"
          :style="{ background: this.custom_background }"
          @mouseenter="hoverInput"
          :for="'input' + this.unique"
          >{{ this.label_value }}</label
        >
        <span
          class="input-icon"
          v-if="
            this.iconposition == 'left' || this.iconposition == 'right'
              ? true
              : false
          "
          ><i :class="'icon-' + this.icon"></i
        ></span>
      </div>
    </div>
    <div class="phone-number" v-if="this.label_animation == false">
      <span
        style="
          border-radius: 5px;
          height: 40px;
          display: flex;
          align-items: center;
          margin-right: 16px;
          width: 10vw;
        "
      >
        <hlxselect
          :options="this.country_codes"
          :placeholder_value="'Country'"
          :labelanimation="false"
          :icon="true"
          @customChange="countryCodeRecieved"
        ></hlxselect>
      </span>
      <div
        class="input-field"
        :id="'input-field' + this.unique"
        :class="{ small: this.small, disabled: this.disabled }"
      >
        <span
          v-if="this.country_code !== ''"
          style="
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            color: rgb(107, 114, 128);
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            font-size: 15px;
          "
        >
          {{ this.country_code }}
        </span>
        <input
          :name="this.name"
          type="number"
          :id="'inputnumber' + this.unique"
          :style="{ background: this.custom_background }"
          :class="'phn' + this.unique"
          autocomplete="off"
          required
          v-model="value"
          :placeholder="this.label_value"
          @focus="focusNumber"
          @blur="blurNumber"
          @mouseenter="hoverNumber"
          @mouseleave="unHoverNumber"
          @input="validatePhoneNumber"
        />
        <!-- <label
        :id="'label' + this.unique"
        :style="{ background: this.custom_background }"
        @mouseenter="hoverInput"
        :for="'input' + this.unique"
        >{{ this.label_value }}</label
      > -->
        <span
          class="input-icon"
          v-if="
            this.iconposition == 'left' || this.iconposition == 'right'
              ? true
              : false
          "
          ><i :class="'icon-' + this.icon"></i
        ></span>
      </div>
    </div>
    <span
      class="error-message phone-number-validation"
      :style="
        this.display_error === true
          ? 'display: block'
          : 'display:none; height:0px'
      "
      style="height: 20px"
      >{{ this.input_error_message }}</span
    >
  </div>
  <!--------------------------------------------------------- Number input ----------------------------------------------->
  <div class="input-container" v-if="this.type == 'number'">
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      v-if="this.label_animation == true"
      :class="{ small: this.small, disabled: this.disabled }"
    >
      <input
        :name="this.name"
        type="number"
        :id="'inputnumber' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        :min="this.min_limit"
        :max="this.max_limit"
        v-model="value"
        :disabled="this.disabled"
        @focus="focusNumber"
        @blur="blurNumber"
        @mouseenter="hoverNumber"
        @mouseleave="unHoverNumber"
        @keyup="validateNumber"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <label
        :id="'label' + this.unique"
        :style="{ background: this.custom_background }"
        @mouseenter="hoverInput"
        :for="'input' + this.unique"
        >{{ this.label_value }}</label
      >
      <span
        class="input-icon"
        v-if="
          this.iconposition == 'left' || this.iconposition == 'right'
            ? true
            : false
        "
        ><i :class="'icon-' + this.icon"></i
      ></span>
    </div>
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      v-if="this.label_animation == false"
      :class="{ small: this.small, disabled: this.disabled }"
    >
      <input
        :name="this.name"
        type="number"
        :id="'inputnumber' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        :min="this.min_limit"
        :max="this.max_limit"
        v-model="value"
        :disabled="this.disabled"
        @focus="focusNumber"
        @blur="blurNumber"
        @mouseenter="hoverNumber"
        @mouseleave="unHoverNumber"
        @keyup="validateNumber"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <span
        class="input-icon"
        v-if="
          this.iconposition == 'left' || this.iconposition == 'right'
            ? true
            : false
        "
        ><i :class="'icon-' + this.icon"></i
      ></span>
    </div>
    <span
      class="error-message number-validation"
      :style="
        this.display_error === true
          ? 'display: block'
          : 'display:none; height:0px'
      "
      style="color: #d8d6d3; height: 20px"
      ><span class="min" v-if="this.min_length !== undefined">{{
        this.minimum
      }}</span
      ><span class="max" v-if="this.max_length !== undefined">{{
        this.maximum
      }}</span></span
    >
  </div>
  <!--------------------------------------------------------- Date input ----------------------------------------------->
  <div class="input-container" v-if="this.type == 'date'">
    <Calendar
      v-if="this.show_calendar"
      @selectedDate="receivedDate"
      :disable_weekend="this.disable_weekend"
      v-click-away="openCalendar"
      :event="this.calendar_pos"
      :pre_value="this.value"
      :start_year="this.start_year"
      :end_year="this.end_year"
      :holiday_list="this.holiday_list"
    />
    <div
      class="input-field"
      :id="'input-field' + this.unique"
      @click="openCalendar"
      :style="this.disabled === true ? 'cursor:not-allowed' : 'cursor:pointer'"
      :class="{ small: this.small, disabled: this.disabled }"
    >
      <input
        :name="this.name"
        type="text"
        disabled
        :id="'inputdate' + this.unique"
        :style="{ background: this.custom_background }"
        autocomplete="off"
        required
        v-model="value"
        placeholder="dd-mm-yyyy"
        @focus="focusDate"
        @blur="blurDate"
        @mouseenter="hoverDate"
        @mouseleave="unHoverDate"
        @input="atInput"
        @keyup.enter="this.atEnter($event, this.value)"
      />
      <span
        class="input-icon"
        v-if="
          this.iconposition == 'left' || this.iconposition == 'right'
            ? true
            : false
        "
        ><i :class="'icon-' + this.icon"></i
      ></span>
    </div>
  </div>
  <!-- <div class="input-container" v-if="this.type == 'datetime-local'">
    <div
      class="input-field"
      :id="'input-field' + this.unique"
    >
      <input
        type="datetime-local"
        :id="'inputdate' + this.unique"
        autocomplete="off"
        required
        v-model="value"
        @focus="focusDate"
        @blur="blurDate"
        @mouseenter="hoverDate"
        @mouseleave="unHoverDate"
      />
      <label
        :id="'label' + this.unique"
        :style="{ background: this.custom_background }"
        @mouseenter="hoverInput"
        :for="'input' + this.unique"
        >{{ this.label_value }}</label
      >
      <span
        class="input-icon"
        v-if="
          this.iconposition == 'left' || this.iconposition == 'right'
            ? true
            : false
        "
        ><i :class="'icon-' + this.icon"></i
      ></span>
    </div>
  </div> -->

  <!--------------------------------------------------------- checkbox ----------------------------------------------->
  <div v-if="this.type == 'checkbox'" class="whole-checkbox">
    <label
      v-if="this.showSelectAll == true"
      class="check-container"
      @mouseover="hoverSelectAll"
      @mouseleave="unHoverSelectAll"
      >{{ "Select all" }}
      <i
        class="icon-minus-regular partially-checked"
        v-if="partiallySelected == true"
      ></i>
      <input
        style="margin-right: 15px"
        type="checkbox"
        class="selcet"
        :class="'select-all' + this.unique"
        :checked="false"
        @click="selectAll"
      />
      <span
        class="checkmark"
        :id="'select-all-checkmark' + this.unique"
        @mouseover="hoverSelectAll"
        @mouseleave="unHoverSelectAll"
      ></span>
    </label>
    <div
      v-for="element in this.options"
      class="checkbox-container"
      :key="element.id"
    >
      <label class="check-container"
        >{{ element.name }}
        <input
          type="checkbox"
          :checked="element.checked"
          :disabled="element.disabled"
          class="check-correct"
          :class="'check-drag' + this.unique"
          :id="'check-drag' + this.unique"
          @click="checkItem(element, $event)"
        />
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
  <!--------------------------------------------------------- Radio ----------------------------------------------->
  <div
    v-if="this.type == 'radio-buttons'"
    :style="
      this.position === 'horizontal'
        ? 'display: flex; flex-direction: row'
        : 'display: flex; flex-direction: column'
    "
  >
    <div v-for="element in this.options" :key="element.id">
      <label
        class="radio-container"
        :id="'radio' + element.id + this.unique"
        :style="this.position === 'horizontal' ? 'margin-right: 20px;' : ''"
        >{{ element.name }}
        <input
          type="radio"
          :name="'radio' + this.unique"
          :for="'radio' + element.id + this.unique"
          :id="element.id + this.unique"
          :checked="element.checked"
          @click="checkRadio(element)"
        />
        <span class="radio-checkmark"></span>
      </label>
    </div>
  </div>
  <!--------------------------------------------------------- Switch ----------------------------------------------->
  <div v-if="this.type == 'switch'" style="margin: 0 10px 0 15px">
    <label :class="'switch' + this.unique">
      <input type="checkbox" :checked="this.checked" @click="checkSwitch" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
import Calendar from './CalendarComponent.vue'
import hlxselect from '../components/SelectComponent.vue'
import { directive } from 'vue3-click-away'

export default {
  name: 'hlx-input',
  components: {
    Calendar,
    hlxselect
  },
  directives: {
    ClickAway: directive
  },
  emits: ['atEnter', 'atInput', 'selected', 'update:value'],
  props: {
    // intelliOptions: {
    //   type: Array
    // },
    custom_background: {
      type: String,
      default: '#ffffff'
    },
    label_animation: {
      type: Boolean,
      default: false
    },
    label_value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    iconposition: {
      type: String
    },
    min_limit: {
      type: Number
    },
    max_limit: {
      type: Number
    },
    password_condition: {
      type: Boolean,
      default: true
    },
    name: {
      type: String
    },
    min_length: {
      type: Number
    },
    max_length: {
      type: Number
    },
    pre_val: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    display_error: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array
    },
    checked: {
      type: Boolean,
      default: false
    },
    showSelectAll: {
      type: Boolean,
      default: false
    },
    start_year: {
      type: Number,
      default: 1950
    },
    end_year: {
      type: Number,
      default: 2050
    },
    disable_weekend: {
      type: Boolean,
      default: false
    },
    holiday_list: {
      type: Array
    },
    position: {
      type: String,
      default: 'vertical'
    },
    country_codes: {
      type: Array,
      default: () => [
        {
          id: 1,
          flag: 'in',
          name: 'India',
          code: '+91',
          checked: false
        },
        {
          id: 2,
          flag: 'ca',
          name: 'Canada',
          code: '+1',
          checked: false
        },
        {
          id: 3,
          flag: 'us',
          name: 'USA',
          code: '+1',
          checked: false
        },
        {
          id: 4,
          flag: 'cn',
          name: 'China',
          code: '+86',
          checked: false
        },
        {
          id: 5,
          flag: 'jp',
          name: 'Japan',
          code: '+81',
          checked: false
        },
        {
          id: 6,
          flag: 'kr',
          name: 'South Korea',
          code: '+82',
          checked: false
        },
        {
          id: 7,
          flag: 'br',
          name: 'Brazil',
          code: '+55',
          checked: false
        },
        {
          id: 8,
          flag: 'mx',
          name: 'Mexico',
          code: '+52',
          checked: false
        },
        {
          id: 9,
          flag: 'ru',
          name: 'Russia',
          code: '+7',
          checked: false
        },
        {
          id: 10,
          flag: 'au',
          name: 'Australia',
          code: '+61',
          checked: false
        },
        {
          id: 11,
          flag: 'gb',
          name: 'United Kingdom',
          code: '+44',
          checked: false
        },
        {
          id: 12,
          flag: 'fr',
          name: 'France',
          code: '+33',
          checked: false
        },
        {
          id: 13,
          flag: 'de',
          name: 'Germany',
          code: '+49',
          checked: false
        }

      ]
    },
    prefix: {
      type: Boolean,
      default: false
    },
    suffix: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      calendar_pos: {},
      value: '',
      input_error_message: '',
      show_password_condition: false,
      minimum: '',
      maximum: '',
      unique: Math.floor(Math.random() * 1000 + 1),
      show_calendar: false,
      country_code: '',
      root_style: {},
      country_code_data: [
        {
          id: 1,
          flag: 'in',
          name: 'India',
          code: '+91',
          checked: false
        },
        {
          id: 2,
          flag: 'ca',
          name: 'Canada',
          code: '+1',
          checked: false
        },
        {
          id: 3,
          flag: 'us',
          name: 'USA',
          code: '+1',
          checked: false
        }
      ],
      select_all: false,
      all_checked: true,
      partially_checked: false,
      atleastOne: false,
      typing: false,
      // intelliData: [],
      small: true
    }
  },
  mounted () {
    const r = document.querySelector(':root')
    const rs = getComputedStyle(r)
    this.root_style = rs
    if (this.iconposition === 'left' && this.icon !== undefined) {
      if (document.getElementById(this.icon)) {
        document.getElementById(this.icon).style.display = 'none'
      }
      document.querySelector('#input-field' + this.unique).style.flexDirection =
        'row-reverse'
      document.querySelector('#label' + this.unique).style.left = '38px'
      document.querySelector('#input' + this.unique).style.padding =
        '0 15px 0 0'
    }
    if (this.iconposition === 'right' && this.icon !== undefined) {
      if (document.getElementById(this.icon)) {
        document.getElementById(this.icon).style.display = 'none'
      }
      if (this.type === 'text') {
        document.querySelector('#input' + this.unique).style.padding =
          '0 0 0 15px'
      }
      // if (this.type === 'date') {
      //   document.querySelector('#inputdate' + this.unique).style.padding =
      //     '0 0 0 15px'
    }
    if (this.type === 'checkbox') {
      this.all_checked = true
      this.options.forEach((ele) => {
        if (ele.checked === false) {
          this.all_checked = false
        }
        if (ele.checked === true) {
          this.atleastOne = true
        }
      })
      if (this.all_checked === true) {
        if (this.showSelectAll === true) {
          document.querySelector('.select-all' + this.unique).checked = true
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('select-all-theme')
        }
      }
      if (this.atleastOne === true && this.all_checked === false) {
        this.partially_checked = true
      } else {
        this.partially_checked = false
      }
      if (this.partially_checked === true) {
        if (this.showSelectAll === true) {
          // document.getElementById(
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('select-all-theme')
          //   'select-all-checkmark' + this.unique
          // ).style.background = '#54bd95'
          // document.getElementById(
          //   'select-all-checkmark' + this.unique
          // ).style.border = '1px solid #54bd95'
        }
      }
    }
  },
  watch: {
    country_codes: {
      handler (val) {
        return val.sort((a, b) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        })
      },
      immediate: true,
      deep: true
    },
    pre_val: {
      handler (val) {
        if (val !== undefined) {
          if (typeof val === 'object') {
            this.value = String(val.name)
          } else {
            this.value = String(val)
          }
        }
      },
      deep: true,
      immediate: true
    },
    options: {
      handler (val) {
        // console.log(this.options);
        const r = document.querySelector(':root')
        const rs = getComputedStyle(r)
        if (this.type === 'checkbox') {
          document.querySelector('.select-all' + this.unique).checked = false
          // console.log(val,'rainbow');
          val.forEach((ele) => {
            if (ele.checked === false) {
              this.all_checked = false
            }
            if (ele.checked === true) {
              this.atleastOne = true
            }
          })
          if (this.all_checked === true) {
            if (this.showSelectAll === true) {
              document.querySelector(
                '.select-all' + this.unique
              ).checked = true
            }
          }
          if (this.atleastOne === true && this.all_checked === false) {
            this.partially_checked = true
          } else {
            this.partially_checked = false
          }
          if (this.partially_checked === true) {
            if (this.showSelectAll === true) {
              document.getElementById(
                'select-all-checkmark' + this.unique
              ).style.background = '#54bd95'
              document.getElementById(
                'select-all-checkmark' + this.unique
              ).style.border = '1px solid #54bd95'
            }
          }
        }
      }
    }
  },
  computed: {
    showClear () {
      // console.log(this.clearable, this.value, this.icon)
      if (
        this.clearable === true &&
        this.value !== '' &&
        this.icon === undefined
      ) {
        return true
      } else {
        return false
      }
    },
    partiallySelected () {
      return this.partially_checked
    }
  },
  methods: {
    // intelliSense () {
    //   // console.log('inside intellisense', val.data, this.value)
    //   const valu = this.value
    //   if (this.value.length > 0) {
    //     this.typing = true
    //   } else {
    //     this.typing = false
    //   }
    //   this.intelliData = this.intelliOptions.filter(function (op) {
    //     return op.toLowerCase().includes(valu.toLowerCase())
    //   })
    //   // console.log(this.value, this.intelliOptions, this.intelliData)
    // },
    // intelliOptionChosen (val) {
    //   this.value = val
    //   this.typing = false
    // },
    atEnter (event, value) {
      const obj = {}
      obj.event = event
      obj.value = value
      this.$emit('atEnter', obj)
    },
    hoverSelectAll () {
      document
        .getElementById('select-all-checkmark' + this.unique)
        .classList.add('select-all-theme-hover')
    },
    unHoverSelectAll () {
      if (this.select_all === false && this.partially_checked === false) {
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.remove('select-all-theme-hover')
      }
    },
    selectAll ($event) {
      const r = document.querySelector(':root')
      const rs = getComputedStyle(r)
      this.select_all = $event.target.checked
      if (this.select_all === true) {
        this.partially_checked = false
        document
          .querySelectorAll('[id^=check-drag' + this.unique + ']')
          .forEach((ele) => {
            if (ele.disabled === false) {
              ele.checked = true
            }
          })
        this.options.forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = true
          }
        })
        const r = document.querySelector(':root')
        const rs = getComputedStyle(r)
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.remove('select-all-grey')
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.add('select-all-theme')
      } else {
        this.partially_checked = false
        document
          .querySelectorAll('[id^=check-drag' + this.unique + ']')
          .forEach((ele) => {
            if (ele.disabled === false) {
              ele.checked = false
            }
            if (ele.checked === true) {
              document
                .getElementById('select-all-checkmark' + this.unique)
                .classList.add('select-all-theme')
              this.partially_checked = true
            }
          })
        this.options.forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = false
          }
        })
        // console.log(this.partially_checked)
        if (this.partially_checked === false) {
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('select-all-grey')
        } else if (this.partially_checked === true) {
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('select-all-theme')
        }
      }
      this.$emit('update:value', this.options)
    },
    checkItem (val, $event) {
      const r = document.querySelector(':root')
      const rs = getComputedStyle(r)
      this.atleastOne = false
      this.all_checked = true
      val.checked = $event.target.checked
      if ($event.target.checked === false) {
        if (this.showSelectAll === true) {
          document.querySelector('.select-all' + this.unique).checked = false
        }
      }
      // if (this.all_checked === true) {
      //   document.querySelector('.select-all').checked = true
      // }
      this.$emit('update:value', this.options)
      this.options.forEach((ele) => {
        if (ele.checked === false) {
          this.all_checked = false
        }
        if (ele.checked === true) {
          this.atleastOne = true
        }
      })
      if (this.showSelectAll === true) {
        if (this.all_checked === true) {
          // console.log('all checked')
          document.querySelector('.select-all' + this.unique).checked = true
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.remove('select-all-grey')
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('select-all-theme')
        } else if (
          document.getElementById('select-all-checkmark' + this.unique)
        ) {
          this.partially_checked = false
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.remove('select-all-theme')
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('select-all-grey')
        }
        if (this.atleastOne === true && this.all_checked === false) {
          this.partially_checked = true
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.remove('select-all-grey')
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('select-all-theme')
        } else if (this.all_checked === true) {
          this.partially_checked = false
        }
      }
    },
    checkRadio (val) {
      this.options.forEach((ele) => {
        ele.checked = false
        if (ele === val) {
          ele.checked = true
        }
      })
      this.$emit('update:value', this.options)
      // console.log(val.name);
      this.$emit('selected', val.name)
    },
    checkSwitch ($event) {
      this.$emit('update:value', $event.target.checked)
    },
    atInput () {
      if (this.max_length >= 0) {
        if (this.value.length > this.max_length) {
          this.input_error_message =
            'Maximum character limit is ' + this.max_length
        } else {
          this.input_error_message = ''
        }
      }
      if (this.min_length >= 0) {
        if (this.value.length < this.min_length) {
          this.input_error_message =
            'Minimum character limit is ' + this.min_length
        } else {
          this.input_error_message = ''
        }
      }
      this.$emit('update:value', this.value)
      this.$emit('atInput', this.value)
    },
    countryCodeRecieved (val) {
      this.value = ''
      val.forEach((e) => {
        if (e.checked === true) {
          this.country_code = e.code
        }
      })
      this.validatePhoneNumber()
      document.querySelector('.phn' + this.unique).focus()
    },
    validatePhoneNumber () {
      // console.log(this.country_code, this.value, 'ooooooooooooooo')
      // if (this.value.charAt(0) !== '+') {
      //   this.value = Number(this.country_code) + this.value
      // }
      const pattern = /^\d+\.?\d*$/
      const isString = pattern.test(this.value.charAt(this.value.length - 1))
      if (isString === false) {
        this.value = this.value.slice(0, -1)
      }
      if (this.value !== '') {
        if (this.country_code !== '') {
          if (this.country_code === '+91') {
            // this.value = this.country_code + this.value.toString()
            if (
              /\+?\d[\d -]{8,12}\d/.test(this.value) &&
              this.value.toString().length <= 14
            ) {
              // console.log(this.value.toString().length, 'true')
              this.input_error_message = ''
            } else if (this.value.toString().length > 14) {
              this.input_error_message = 'Enter a valid phone number'
            }
          } else if (this.country_code === '+1') {
            if (
              /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/.test(
                this.value
              ) &&
              this.value.toString().length <= 13
            ) {
              // console.log(this.value.toString().length, 'true')
              this.input_error_message = ''
            } else if (this.value.toString().length > 13) {
              this.input_error_message = 'Enter a valid phone number'
            }
          } else if (this.country_code === '+1') {
            if (
              /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/.test(
                this.value
              ) &&
              this.value.toString().length <= 13
            ) {
              // console.log(this.value.toString().length, 'true')
              this.input_error_message = ''
            } else if (this.value.toString().length > 13) {
              this.input_error_message = 'Enter a valid phone number'
            }
          } else {
            this.input_error_message = 'Enter a valid country code'
          }
        } else {
          this.input_error_message = 'Enter a valid country code'
        }
      } else {
        this.input_error_message = ''
      }
      if (this.value.charAt(0) !== '+') {
        // this.value = this.country_code + this.value
      }
      this.$emit('update:value', {
        countryCode: this.country_code,
        value: this.value
      })
    },
    receivedDate (val) {
      this.value = val
      this.show_calendar = false
      this.blurDate()
    },
    openCalendar ($event) {
      this.calendar_pos = $event
      this.show_calendar = !this.show_calendar
      if (this.show_calendar === true) {
        this.focusDate()
      } else {
        this.blurDate()
      }
    },
    // Following functions are for validating input functionalities
    hoverInput () {
      const r = document.querySelector(':root')
      const rs = getComputedStyle(r)
      const elem = document.querySelector('#input' + this.unique)
      if (elem !== document.activeElement) {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + rs.getPropertyValue('--theme')
      }
    },
    unHoverInput () {
      const r = document.querySelector(':root')
      const rs = getComputedStyle(r)
      const elem = document.querySelector('#input' + this.unique)
      if (elem !== document.activeElement) {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + rs.getPropertyValue('--border')
      }
    },
    focusInput () {
      const r = document.querySelector(':root')
      const rs = getComputedStyle(r)
      document.querySelector('#input-field' + this.unique).style.border =
        '1px solid ' + rs.getPropertyValue('--theme')
      if (this.iconposition === 'left' && this.icon !== undefined) {
        document.querySelector('#label' + this.unique).style.left = '5px'
      }
    },
    blurInput () {
      const r = document.querySelector(':root')
      const rs = getComputedStyle(r)
      document.querySelector('#input-field' + this.unique).style.border =
        '1px solid ' + rs.getPropertyValue('--border')
      if (this.iconposition === 'left' && this.icon !== undefined) {
        document.querySelector('#label' + this.unique).style.left = '38px'
      }
    },
    // Following functions are for validating email functionalities
    blurEmail () {
      if (this.value === '') {
        document.getElementById('input-field' + this.unique).style.border =
          '1px solid ' + '#d8d8d8'
        document.getElementById('labelemail' + this.unique).style.color =
          '#A6A6A6'
      } else {
        this.validateEmail()
      }
      if (this.input_error_message === '') {
        document.getElementById('input-field' + this.unique).style.border =
          '1px solid ' + '#d8d8d8'
        document.getElementById('labelemail' + this.unique).style.color =
          '#A6A6A6'
      } else {
        document.getElementById('input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--error')
        document.getElementById('labelemail' + this.unique).style.color =
          this.root_style.getPropertyValue('--error')
      }
    },
    focusEmail () {
      if (this.input_error_message === '') {
        document.getElementById('input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--theme')
        document.getElementById('labelemail' + this.unique).style.color =
          this.root_style.getPropertyValue('--theme')
      } else {
        document.getElementById('input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--error')
        document.getElementById('labelemail' + this.unique).style.color =
          this.root_style.getPropertyValue('--error')
      }
    },
    hoverEmail () {
      const elem = document.querySelector('#inputemail' + this.unique)
      if (elem !== document.activeElement) {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--theme')
      }
      if (this.input_error_message !== '') {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--error')
      }
    },
    unHoverEmail () {
      const elem = document.querySelector('#inputemail' + this.unique)
      if (elem !== document.activeElement) {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--border')
      }
      if (this.input_error_message !== '') {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--error')
      }
    },
    validateEmail () {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
        this.input_error_message = ''
        document.getElementById('input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--theme')
        document.getElementById('labelemail' + this.unique).style.color =
          this.root_style.getPropertyValue('--theme')
      } else {
        this.input_error_message = 'Please enter a valid email'
        document.getElementById('input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--error')
        document.getElementById('labelemail' + this.unique).style.color =
          this.root_style.getPropertyValue('--error')
      }
    },
    // Following functions are for validating password functionalities
    focusPassword () {
      if (this.password_condition === true) {
        this.show_password_condition = true
      }
      document.getElementById('input-field' + this.unique).style.border =
        '1px solid ' + this.root_style.getPropertyValue('--theme')
      // const width = document.querySelector('.input-container').offsetWidth
      // console.log(width + 'px')
      // console.log('hello', document.getElementById('pp').getC)
      // document.getElementById('pp').style.width = '400px !important'
    },
    blurPassword () {
      this.show_password_condition = false
      document.getElementById('input-field' + this.unique).style.border =
        '1px solid ' + this.root_style.getPropertyValue('--border')
    },
    hoverPassword () {
      const elem = document.querySelector('#inputpassword' + this.unique)
      if (elem !== document.activeElement) {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--theme')
      }
    },
    unHoverPassword () {
      const elem = document.querySelector('#inputpassword' + this.unique)
      if (elem !== document.activeElement) {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--border')
      }
    },
    conditionTrue (val) {
      document.querySelector('.' + val).style.color = '#02b55c'
      document
        .querySelector('#' + val + '-icon')
        .classList.remove('icon-times-circle-regular')
      document.querySelector('#' + val + '-icon').classList.add('icon-check-circle-filled')
    },
    conditionFalse (val) {
      document.querySelector('.' + val).style.color = '#565553'
      document
        .querySelector('#' + val + '-icon')
        .classList.remove('icon-check-circle-filled')
      document
        .querySelector('#' + val + '-icon')
        .classList.add('icon-times-circle-regular')
    },
    validatePassword () {
      // console.log('password validation')
      if (/^(?=.*[a-z]).+$/.test(this.value)) {
        this.conditionTrue('lowercase')
      } else {
        this.conditionFalse('lowercase')
      }
      if (/^(?=.*[A-Z]).+$/.test(this.value)) {
        this.conditionTrue('uppercase')
      } else {
        this.conditionFalse('uppercase')
      }
      if (/^(?=.*[_\W]).+$/.test(this.value)) {
        this.conditionTrue('special')
      } else {
        this.conditionFalse('special')
      }
      if (/^(?=.*[0-9]).+$/.test(this.value)) {
        this.conditionTrue('number')
      } else {
        this.conditionFalse('number')
      }
      if (String(this.value).length >= 8) {
        this.conditionTrue('length')
      } else {
        this.conditionFalse('length')
      }
    },
    togglePassword () {
      const icon = document.querySelector('#password-toggle-icon').classList[0]
      if (icon === 'icon-eye-slash-regular') {
        document.querySelector('#password-toggle-icon').classList.remove(icon)
        document
          .querySelector('#password-toggle-icon')
          .classList.add('icon-eye-regular')
      } else {
        document.querySelector('#password-toggle-icon').classList.remove(icon)
        document
          .querySelector('#password-toggle-icon')
          .classList.add('icon-eye-slash-regular')
      }
      const ele = document.querySelector('#inputpassword' + this.unique)
      if (ele.type === 'password') {
        ele.type = 'text'
      } else {
        ele.type = 'password'
      }
    },
    // Following functions are for validating Number input functionalities
    focusNumber () {
      document.querySelector('#input-field' + this.unique).style.border =
        '1px solid ' + this.root_style.getPropertyValue('--theme')
      this.minimum = 'Minimum value: ' + this.min_limit + ' , '
      this.maximum = 'Minimum value: ' + this.max_limit
    },
    blurNumber () {
      document.querySelector('#input-field' + this.unique).style.border =
        '1px solid ' + this.root_style.getPropertyValue('--border')
      this.minimum = ''
      this.maximum = ''
    },
    hoverNumber () {
      const elem = document.querySelector('#inputnumber' + this.unique)
      if (elem !== document.activeElement) {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--theme')
      }
    },
    unHoverNumber () {
      const elem = document.querySelector('#inputnumber' + this.unique)
      if (elem !== document.activeElement) {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--border')
      }
    },
    // Following functions are for validating Date input functionalities
    focusDate () {
      document.querySelector('#input-field' + this.unique).style.border =
        '1px solid ' + this.root_style.getPropertyValue('--theme')
    },
    blurDate () {
      this.show_calendar = false
      document.querySelector('#input-field' + this.unique).style.border =
        '1px solid ' + this.root_style.getPropertyValue('--border')
    },
    hoverDate () {
      const elem = document.querySelector('#inputdate' + this.unique)
      if (elem !== document.activeElement) {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--theme')
      }
    },
    unHoverDate () {
      const elem = document.querySelector('#inputdate' + this.unique)
      if (elem !== document.activeElement) {
        document.querySelector('#input-field' + this.unique).style.border =
          '1px solid ' + this.root_style.getPropertyValue('--border')
      }
    },
    validateNumber () {
      if (this.min_limit && this.max_limit !== undefined) {
        if (this.value > this.max_limit) {
          document.querySelector('.max').style.color = '#ff5050'
        } else {
          document.querySelector('.max').style.color = '#02b55c'
        }
        if (this.value < this.min_limit) {
          document.querySelector('.min').style.color = '#ff5050'
        } else {
          document.querySelector('.min').style.color = '#02b55c'
        }
        if (this.value === '') {
          document.querySelector('.max').style.color = '#02b55c'
          document.querySelector('.min').style.color = '#02b55c'
        }
      }
    }
  }
}
</script>

<!-- @import "../assets/styles/variables"; -->
<style lang="scss">
:root {
  --theme: var(--hlx-color-primary);
  --border: var(--hlx-border-color);
  --error: var(--hlx-color-error);
  --success: var(--hlx-color-success);
  --darkGrey: var(--hlx-border-color-dark);
}
</style>
