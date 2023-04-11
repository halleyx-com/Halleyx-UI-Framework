<template>
    <div>
      <hlx-schema-builder :fields="dataTree" />
    </div>
</template>
  
<script>
import hlxSchemaBuilder from '../components/SchemaBuilderComponent.vue'
  
  export default {
    components: {
        hlxSchemaBuilder
    },
    data () {
      return {
        dataTree:[
        {
            name: "name",
            value: "John Doe",
            childFields: [
            {
                name: "age",
                value: 35
            },
            {
                name: "address",
                value: {
                street: "123 Main St",
                city: "Anytown",
                state: "CA"
                },
                childFields: [
                {
                    name: "zip",
                    value: 12345
                }
                ]
            }
            ]
        },
        {
            name: "name",
            value: "Jane Doe",
            childFields: [
            {
                name: "age",
                value: 28
            },
            {
                name: "address",
                value: {
                street: "456 Oak St",
                city: "Sometown",
                state: "NY"
                },
                childFields: [
                {
                    name: "zip",
                    value: 67890
                }
                ]
            }
            ]
        }
        ]
      }
    }
  }
  </script>
  