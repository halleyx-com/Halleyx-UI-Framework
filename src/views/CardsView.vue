<template>
  <h1 class="component-heading">Cards</h1>
  <p class="component-description">
Cards are containers that display content such as text, images, buttons, and lists. A card can be a single component, but is often made up of a header, subtitle, and content.
  </p>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <span class="component-description"
    >Card is made up of header, body and footer. header and footer is optional,
    and its content distribution depends on a named slots as below:
    <li>#card_title: displays title for card</li>
    <li>#card_body: displays body content for card</li>
    <li>#card_footer: displays footer for card</li>
    Set <b>:hover</b> attribute to true to add hover effect to the cards. Set
    <b>:active</b> attribute to true to highlight the border of the card. Set
    <b>:padding</b> attribute to add default padding to the card.
  </span>
  <div class="component-example">
    <div class="example-body3">
      <div class="cards-container">
        <hlx-card
          :hover="true"
          :seperator="false"
          :card_title="true"
          :card_footer="true"
          v-for="(card, index) in this.card_data"
          :key="index"
          :padding="true"
          :active="index === 0 ? true : false"
        >
          <template #card-title>
            {{ card.card_title }}
          </template>
          <template #card-body>
            <div>
              {{ card.card_body }}
            </div>
          </template>
          <template #card-footer>
            {{ card.card_footer }}
          </template>
        </hlx-card>
      </div>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-cards-icon" @click="showCode('basic-cards')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-cards" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="cards_source_1"
          :read_only="true"
          :theme="editor_theme"
          :languages="[
            ['Javascript', 'Vue'],
            ['javascript', 'JS'],
            ['python', 'Python'],
          ]"
        />
      </div>
    </section>
  </div>
  <h2 class="component-side-heading">Cards with shadow</h2>
  <p class="component-description">
    Set <b>:shadow="true"</b> to display shadow behind the cards
  </p>
  <div class="component-example">
    <div class="example-body3">
      <div class="cards-container">
        <hlx-card
          :shadow="true"
          :seperator="true"
          :card_title="true"
          :card_footer="true"
          :padding="true"
          v-for="(card, index) in this.card_data"
          :key="index"
        >
          <template #card-title>
            {{ card.card_title }}
          </template>
          <template #card-body>
            <div>
              {{ card.card_body }}
            </div>
          </template>
          <template #card-footer>
            {{ card.card_footer }}
          </template>
        </hlx-card>
      </div>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="seperator-cards-icon"
        @click="showCode('seperator-cards')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="seperator-cards" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="cards_source_2"
          :read_only="true"
          :theme="editor_theme"
          :languages="[
            ['Javascript', 'Vue'],
            ['javascript', 'JS'],
            ['python', 'Python'],
          ]"
        />
      </div>
    </section>
  </div>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Cards without header and footer</h2>
  <p class="component-description">
    You can also display or hide the headers and footers by setting
    <b>:card_title</b> and <b>:card_footer</b> attribute to true or false
  </p>
  <div class="component-example">
    <div class="example-body3">
      <div class="cards-container">
        <hlx-card
          :seperator="false"
          :padding="true"
          v-for="(card, index) in this.card_data"
          :key="index"
        >
          <template #card-body>
            <div>
              {{ card.card_body }}
            </div>
          </template>
        </hlx-card>
      </div>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="no-title-cards-icon"
        @click="showCode('no-title-cards')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="no-title-cards" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="cards_source_3"
          :read_only="true"
          :theme="editor_theme"
          :languages="[
            ['Javascript', 'Vue'],
            ['javascript', 'JS'],
            ['python', 'Python'],
          ]"
        />
      </div>
    </section>
  </div>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Cards with custom elements</h2>
  <p class="component-description">
    You can write any html content inside the corresponding slots like buttons,
    icons, images, etc.,
  </p>
  <div class="component-example">
    <div class="example-body3">
      <div class="cards-container">
        <hlx-card
          :seperator="false"
          :card_title="true"
          :card_footer="true"
          :padding="true"
          v-for="(card, index) in this.card_data"
          :key="index"
        >
          <template #card-title>
            <div style="display: flex; justify-content: space-between">
              <span>{{ card.card_title }}</span
              ><i class="icon-link" style="font-size: 1.5rem"></i>
            </div>
          </template>
          <template #card-body>
            <div>
              {{ card.card_body }}
            </div>
          </template>
          <template #card-footer>
            <div style="display: flex; justify-content: flex-end">
              <hlx-button class="link" style="height: 0px">Button</hlx-button>
            </div>
          </template>
        </hlx-card>
      </div>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="custom-cards-icon"
        @click="showCode('custom-cards')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="custom-cards" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="cards_source_4"
          :read_only="true"
          :theme="editor_theme"
          :languages="[
            ['Javascript', 'Vue'],
            ['javascript', 'JS'],
            ['python', 'Python'],
          ]"
        />
      </div>
    </section>
  </div>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Examples with fully customised cards</h2>
  <!-- <p class="component-description">You can write any html content inside the corresponding slots like buttons, icons, images, etc.,</p> -->
  <div class="component-example">
    <div class="example-body3">
      <div class="cards-container" style="grid-template-columns: auto auto">
        <hlx-card
          :seperator="false"
          :card_title="true"
          :card_footer="true"
          :width="400"
        >
          <template #card-title>
            <div
              class="custom-header"
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.5rem;
              "
            >
              <div class="custom-main" style="display: flex">
                <span
                  style="
                    width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #ff3400;
                    color: white;
                    margin-right: 10px;
                  "
                  >R</span
                >
                <span style="display: flex; flex-direction: column">
                  <span>Shrimp and Chorizo Paella</span>
                  <span style="font-weight: 100; color: grey"
                    >September 14, 2016</span
                  ></span
                >
              </div>
              <i
                class="icon-vertical-dots"
                style="font-size: 2rem; cursor: pointer"
              ></i>
            </div>
          </template>
          <template #card-body>
            <img
              src="https://mui.com/static/images/cards/paella.jpg"
              alt="image"
              style="width: 400px"
            />
            <div style="padding: 0.5rem">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </div>
          </template>
          <template #card-footer>
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 1.5rem;
                padding: 0.5rem;
                height: 60px;
              "
            >
              <div style="display: flex; align-items: center">
                <i
                  class="icon-heart-regular"
                  style="cursor: pointer; margin-right: 10px"
                ></i>
                <i class="icon-share-regular" style="cursor: pointer"></i>
              </div>
              <i
                class="icon-angle-down-regular"
                style="font-size: 1.5rem; cursor: pointer"
              ></i>
            </div>
          </template>
        </hlx-card>
        <hlx-card
          :seperator="false"
          :card_title="false"
          :card_footer="false"
          :width="500"
        >
          <template #card-body>
            <div style="display: flex; justify-content: space-between">
              <div
                class="custom-main"
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  padding: 15px;
                  width: 100%;
                "
              >
                <div>
                  <div class="name" style="font-size: 2rem">
                    Live From Space
                  </div>
                  <div class="author" style="font-size: 1rem; color: grey">
                    Mac Miller
                  </div>
                </div>
                <div
                  class="controls"
                  style="
                    display: flex;
                    font-size: 3rem;
                    margin-bottom: 10px;
                    color: grey;
                  "
                >
                  <i
                    class="icon-angle-left-small-regular"
                    style="margin-right: 10px; cursor: pointer"
                  ></i>
                  <i
                    class="icon-caret-right-filled"
                    style="margin-right: 10px; cursor: pointer"
                  ></i>
                  <i
                    class="icon-angle-right-small-regular"
                    style="cursor: pointer"
                  ></i>
                </div>
              </div>
              <img
                src="https://images.hungama.com/c/1/b3f/724/50325900/50325900_300x300.jpg"
                alt="image"
                style="height: 200px; border-radius: 0 5px 5px 0"
              />
            </div>
          </template>
        </hlx-card>
      </div>
    </div>
  </div>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Cards attributes</h2>
  <hlx-table
    :columnCount="6"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head
        v-for="(i, index) in this.cardsAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.cardsAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Cards slots</h2>
  <hlx-table
    :columnCount="3"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head
        v-for="(i, index) in this.cardsSlots"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data_slots" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.cardsSlots"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
</template>

<script>
import HlxCard from '../components/CardsComponent.vue'
import HlxDivider from '../components/DividerComponent.vue'
import CodeEditor from 'simple-code-editor'
import hlxTable from '../components/table/HlxTable.vue'
import hlxTableHead from '../components/table/HlxTableHead.vue'
import hlxTableCell from '../components/table/HlxTableCell.vue'
import HlxButton from '../components/ButtonComponent.vue'

export default {
  name: 'App',
  components: {
    HlxCard,
    HlxDivider,
    CodeEditor,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    HlxButton
  },
  data () {
    return {
      editor_theme: 'light',
      cardsAttributes: [
        {
          prop: 'name',
          label: 'Attributes',
          width: 100,
          type: 'string',
          format: ''
        },
        {
          prop: 'description',
          label: 'Description',
          width: null,
          type: 'string',
          format: ''
        },
        {
          prop: 'type',
          label: 'Type',
          width: null,
          type: 'string',
          format: ''
        },
        {
          prop: 'accepted_values',
          label: 'Accepted values',
          width: null,
          type: 'string',
          format: ''
        },
        {
          prop: 'default',
          label: 'Default',
          width: null,
          type: 'string',
          format: ''
        },
        {
          prop: 'mandatory',
          label: 'Mandatory',
          width: null,
          type: 'string',
          format: ''
        }
      ],
      cardsSlots: [
        {
          prop: 'name',
          label: 'Attributes',
          width: 150,
          type: 'string',
          format: ''
        },
        {
          prop: 'description',
          label: 'Description',
          width: null,
          type: 'string',
          format: ''
        },
        {
          prop: 'fallback',
          label: 'Fallback',
          width: 200,
          type: 'string',
          format: ''
        }
      ],
      table_data: [
        {
          name: 'card_title',
          description: 'To display the header for the card',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        },
        {
          name: 'card_footer',
          description: 'To display the footer for the card',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        },
        {
          name: 'active',
          description:
            'Sets active style for the card',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        },
        {
          name: 'width',
          description: 'Set custom width for the card',
          type: 'Number',
          accepted_values: '> 0',
          default: '-',
          mandatory: false
        },
        {
          name: 'hover',
          description: 'Adds hover effect for the entrire card',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        },
        {
          name: 'shadow',
          description: 'Adds shadow effect for the entrire card',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        },
        {
          name: 'padding',
          description: 'Adds padding: 20px to the header, body and footer',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        }
      ],
      table_data_slots: [
        {
          name: '#card-title',
          description: 'Displays the content for header area',
          fallback: 'Card title'
        },
        {
          name: '#card-body',
          description: 'Displays the content for body area',
          fallback: 'Card body'
        },
        {
          name: '#card-footer',
          description: 'Displays the content for footer area',
          fallback: 'Card footer'
        }
      ],
      cardAttributes: {
        columns: [
          {
            name: 'attribute',
            label: 'Attributes',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'description',
            label: 'Description',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'type',
            label: 'Type',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'accepted_values',
            label: 'Accepted values',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'default',
            label: 'Default',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'mandatory',
            label: 'Mandatory',
            width: '50',
            type: 'string',
            format: ''
          }
        ],
        table_data: [
          {
            attribute: 'seperator',
            description:
              'Specify whether the card needs horizontal ruler between header, body and footer',
            type: 'Boolean',
            accepted_values: 'true / false',
            default: 'false',
            mandatory: false
          },
          {
            attribute: 'card_title',
            description: 'To display the header for the card',
            type: 'Boolean',
            accepted_values: 'true / false',
            default: 'false',
            mandatory: false
          },
          {
            attribute: 'card_footer',
            description: 'To display the footer for the card',
            type: 'Boolean',
            accepted_values: 'true / false',
            default: 'false',
            mandatory: false
          },
          {
            attribute: 'width',
            description: 'Set custom width for the card',
            type: 'Number',
            accepted_values: '> 0',
            default: '-',
            mandatory: false
          },
          {
            attribute: 'hover',
            description: 'Adds hover effect for the entrire card',
            type: 'Boolean',
            accepted_values: 'true / false',
            default: 'false',
            mandatory: false
          },
          {
            attribute: 'background',
            description: 'Adds background color for the header and footer',
            type: 'Boolean',
            accepted_values: 'true / false',
            default: 'false',
            mandatory: false
          }
        ]
      },
      cardSlots: {
        columns: [
          {
            name: 'name',
            label: 'Name',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'description',
            label: 'Description',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'fallback',
            label: 'Fallback',
            width: '50',
            type: 'string',
            format: ''
          }
        ],
        table_data: [
          {
            name: '#card-title',
            description: 'Displays the content for header area',
            fallback: 'Card title'
          },
          {
            name: '#card-body',
            description: 'Displays the content for body area',
            fallback: 'Card body'
          },
          {
            name: '#card-footer',
            description: 'Displays the content for footer area',
            fallback: 'Card footer'
          }
        ]
      },
      card_data: [
        {
          card_title: 'Card title 1',
          card_body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 2',
          card_body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 3',
          card_body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 4',
          card_body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 5',
          card_body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        }
      ],
      cards_source_1: `
<template>
  <div class="cards-container">
    <hlx-card
      :hover="true"
      :seperator="false"
      :card_title="true"
      :card_footer="true"
      v-for="(card, index) in this.card_data"
      :key="index"
      :padding="true"
      :active="index === 0 ? true : false"
    >
      <template #card-title>
        {{ card.card_title }}
      </template>
      <template #card-body>
        <div >
          {{ card.card_body }}
        </div>
      </template>
      <template #card-footer>
        {{ card.card_footer }}
      </template>
    </hlx-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      card_data: [
        {
          card_title: 'Card title 1',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 2',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 3',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 4',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 5',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        }
      ]
    }
  }
}
</\script>

<style lang="scss">
.cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
}

@media (max-width:1100px) {
  .cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
  }
}
@media (max-width:750px) {
  .cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
  }
}
</style> `,
      cards_source_2: `
<template>
  <div class="cards-container">
    <hlx-card
      :shadow="true"
      :seperator="true"
      :card_title="true"
      :card_footer="true"
      :padding="true"
      v-for="(card, index) in this.card_data"
      :key="index"
    >
      <template #card-title>
        {{ card.card_title }}
      </template>
      <template #card-body>
        <div >
          {{ card.card_body }}
        </div>
      </template>
      <template #card-footer>
        {{ card.card_footer }}
      </template>
    </hlx-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      card_data: [
        {
          card_title: 'Card title 1',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 2',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 3',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 4',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 5',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        }
      ]
    }
  }
}
</\script>

<style lang="scss">
.cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
}

@media (max-width:1100px) {
  .cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
  }
}
@media (max-width:750px) {
  .cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
  }
}
</style> `,
      cards_source_3: `
<template>
  <div class="cards-container">
    <hlx-card
      :seperator="false"
      :padding="true"
      v-for="(card, index) in this.card_data"
      :key="index"
    >
      <template #card-body>
        <div >
          {{ card.card_body }}
        </div>
      </template>
    </hlx-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      card_data: [
        {
          card_title: 'Card title 1',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 2',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 3',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 4',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 5',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        }
      ]
    }
  }
}
</\script>

<style lang="scss">
.cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
}

@media (max-width:1100px) {
  .cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
  }
}
@media (max-width:750px) {
  .cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
  }
}
</style> `,
      cards_source_4: `
<template>
  <div class="cards-container">
    <hlx-card
      :seperator="false"
      :card_title="true"
      :card_footer="true"
      :padding="true"
      v-for="(card, index) in this.card_data"
      :key="index"
    >
      <template #card-title>
        <div style="display: flex; justify-content: space-between">
          <span>{{ card.card_title }}</span
          ><i class="icon-link" style="font-size: 1.5rem"></i>
        </div>
      </template>
      <template #card-body>
        <div >
          {{ card.card_body }}
        </div>
      </template>
      <template #card-footer>
        <div style="display: flex; justify-content: flex-end">
          <hlx-button class="link" style="height:0px">Button</hlx-button>
        </div>
      </template>
    </hlx-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      card_data: [
        {
          card_title: 'Card title 1',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 2',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 3',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 4',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        },
        {
          card_title: 'Card title 5',
          card_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            utaliquip ex ea commodo consequat',
          card_footer: 'Footer of the card'
        }
      ]
    }
  }
}
</\script>

<style lang="scss">
.cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
}

@media (max-width:1100px) {
  .cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
  }
}
@media (max-width:750px) {
  .cards-container{
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
  }
}
</style> `
    }
  },
  methods: {
    showCode (val) {
      document.getElementById(val + '-icon').classList.toggle('active-icon')
      if (document.getElementById(val).style.display === 'none') {
        document.getElementById(val).style.display = 'block'
      } else if (document.getElementById(val).style.display === 'block') {
        document.getElementById(val).style.display = 'none'
      }
    }
  }
}
</script>

<style lang="scss">
// #app{
//     display: flex;
//     width:100%;
//     height: 100vh;
// }
/*  Cards must be placed in the below structure to be fully responsive
    cards-container
        |_ card-holder
            |_card
*/

.cards-container {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 3vw;
  justify-items: center;
  align-items: center;
}

@media (max-width: 1100px) {
  .cards-container {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
  }
}
@media (max-width: 750px) {
  .cards-container {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    gap: 3vw;
    justify-items: center;
    align-items: center;
  }
}
.el-table .cell {
  word-wrap: break-word !important;
  word-break: break-word !important;
}
</style>
